'use client'

import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

import Link from 'next/link'

import { type Locale } from '@/lib/i18n'
import { getAiCopy } from '@/lib/i18n/aiAccelerator'
import { makeAiSchema, normalizeItalianVat, isValidInternationalVat } from '@/lib/schemas/aiAccelerator'
import { trackEvent } from '@/lib/analytics/events'

const PRIVACY_URL = 'https://www.iubenda.com/privacy-policy/22342791'

type ChoiceField = 'monthlyRevenue' | 'businessType' | 'role' | 'aiUsage'

type Values = {
  monthlyRevenue: string
  businessType: string
  role: string
  aiUsage: string
  mainPain: string
  name: string
  email: string
  legalName: string
  vatNumber: string
  website: string
}

const EMPTY: Values = {
  monthlyRevenue: '',
  businessType: '',
  role: '',
  aiUsage: '',
  mainPain: '',
  name: '',
  email: '',
  legalName: '',
  vatNumber: '',
  website: '',
}

/** Fire a custom (non-standard) event on Pixel + GA4, if available. */
function trackCustom(name: string) {
  if (typeof window !== 'undefined') {
    if (typeof window.fbq === 'function') window.fbq('trackCustom', name)
    if (typeof window.gtag === 'function') window.gtag('event', name)
  }
}

const trackStep = (step: 1 | 2) => trackCustom(`ai_form_step_${step}`)

function ChoiceCards({
  name,
  label,
  helper,
  options,
  value,
  onChoose,
  error,
}: {
  name: string
  label: string
  helper?: string
  options: string[]
  value: string
  onChoose: (v: string) => void
  error?: string | null
}) {
  return (
    <fieldset className="flex flex-col gap-2">
      <legend id={`ai-q-${name}`} className="mb-2 font-sans text-[15px] font-semibold leading-[1.4em] tracking-[-0.03em] text-black">
        {label}
        <span aria-hidden className="ml-1 text-[color:var(--ai-accent-text)]">*</span>
      </legend>
      {helper && (
        <p className="-mt-1 mb-1 font-sans text-[12px] font-medium leading-[1.5em] tracking-[-0.02em] text-noprob-grey">
          {helper}
        </p>
      )}
      <div role="radiogroup" aria-labelledby={`ai-q-${name}`} className="grid gap-2 min-[520px]:grid-cols-2">
        {options.map((opt) => {
          const selected = value === opt
          return (
            <button
              key={opt}
              type="button"
              role="radio"
              aria-checked={selected}
              data-tracking={`ai_form_${name}`}
              onClick={() => onChoose(opt)}
              className={`rounded-[12px] border px-4 py-3 text-left font-sans text-[14px] font-medium tracking-[-0.02em] transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--ai-accent)] ${
                selected
                  ? 'border-[color:var(--ai-accent)] bg-[rgba(47,107,255,0.08)] text-np-dark shadow-[0_0_10px_var(--ai-accent-glow)]'
                  : 'border-np-border bg-white text-np-dark hover:border-[color:var(--ai-accent)]'
              }`}
            >
              {opt}
            </button>
          )
        })}
      </div>
      {error && (
        <span role="alert" className="text-[11px] font-medium text-red-500">
          {error}
        </span>
      )}
    </fieldset>
  )
}

const inputClass = (hasError: boolean) =>
  `w-full rounded-[12px] border bg-white p-[10px] font-sans text-[14px] font-medium leading-[1.2] tracking-[-0.02em] text-[#181818] placeholder:text-[#999999] focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--ai-accent)] ${
    hasError ? 'border-red-500' : 'border-black'
  }`

const labelClass = 'font-sans text-[14px] font-medium leading-[1.5] tracking-[-0.04em] text-black'
const errorClass = 'text-[10px] text-red-500'

export default function AiApplicationForm({ locale = 'it' }: { locale?: Locale }) {
  const d = getAiCopy(locale).form
  const [step, setStep] = useState(0) // 0..2
  const [direction, setDirection] = useState(1)
  const [values, setValues] = useState<Values>(EMPTY)
  const [privacy, setPrivacy] = useState(false)
  const [errors, setErrors] = useState<Partial<Record<keyof Values | 'privacy', string>>>({})
  const [serverError, setServerError] = useState<string | null>(null)
  const [submitting, setSubmitting] = useState(false)
  const [done, setDone] = useState(false)
  const [disqualified, setDisqualified] = useState(false)
  const [hp, setHp] = useState('')
  const mountedAtRef = useRef<number>(Date.now())
  const headingRef = useRef<HTMLParagraphElement>(null)
  const autoAdvanceRef = useRef<number | null>(null)

  const stepCopy = [d.step1.title, d.step2.title, d.step3.title]

  useEffect(() => {
    return () => {
      if (autoAdvanceRef.current !== null) window.clearTimeout(autoAdvanceRef.current)
    }
  }, [])

  function setValue(field: keyof Values, v: string) {
    setValues((prev) => ({ ...prev, [field]: v }))
    setErrors((prev) => ({ ...prev, [field]: undefined }))
  }

  function go(to: number) {
    setDirection(to > step ? 1 : -1)
    setServerError(null)
    setStep(to)
    // Move focus to the step heading for keyboard/screen-reader users.
    window.setTimeout(() => headingRef.current?.focus(), 60)
  }

  // First option of the revenue question = under threshold.
  const underThreshold = d.step1.qRevenue.options[0]

  function choose(field: ChoiceField, v: string) {
    if (autoAdvanceRef.current !== null) window.clearTimeout(autoAdvanceRef.current)
    const nextValues = { ...values, [field]: v }
    setValues(nextValues)
    setErrors((prev) => ({ ...prev, [field]: undefined }))

    // Under-threshold revenue: stop here, no API call, no Lead.
    if (field === 'monthlyRevenue' && v === underThreshold) {
      autoAdvanceRef.current = window.setTimeout(() => {
        trackCustom('ai_form_disqualified')
        setDisqualified(true)
      }, 260)
      return
    }

    // Card click advances as soon as the step is complete.
    if (step === 0 && nextValues.monthlyRevenue && nextValues.monthlyRevenue !== underThreshold && nextValues.businessType && nextValues.role) {
      autoAdvanceRef.current = window.setTimeout(() => {
        trackStep(1)
        go(1)
      }, 260)
    }
  }

  function resetRevenue() {
    setDisqualified(false)
    setValues((prev) => ({ ...prev, monthlyRevenue: '' }))
    setDirection(-1)
    setStep(0)
    window.setTimeout(() => headingRef.current?.focus(), 60)
  }

  function validateStep2(): boolean {
    const errs: typeof errors = {}
    if (!values.aiUsage) errs.aiUsage = d.errors.choice
    if (values.mainPain.trim().length < 20) errs.mainPain = d.errors.pain
    setErrors((prev) => ({ ...prev, ...errs }))
    return Object.keys(errs).length === 0
  }

  function continueStep2() {
    if (!validateStep2()) return
    trackStep(2)
    go(2)
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault()

    // Locale-aware VAT validation: IT normalizes to `IT` + 11 digits,
    // EN accepts free-form international formats (min 5 alphanumerics).
    let vat: string | null = values.vatNumber.trim()
    if (locale === 'it') {
      vat = normalizeItalianVat(vat)
    } else if (!isValidInternationalVat(vat)) {
      vat = null
    }
    if (!vat) {
      setErrors((prev) => ({ ...prev, vatNumber: d.errors.vat }))
      return
    }

    const schema = makeAiSchema(d.errors)
    const payload = {
      ...values,
      vatNumber: vat,
      // Backward compatibility for anything reading `company`.
      company: values.legalName,
      website: values.website || undefined,
      privacy,
      locale,
      formType: 'ai-accelerator' as const,
      hp,
      elapsedMs: Date.now() - mountedAtRef.current,
    }
    const parsed = schema.safeParse(payload)
    if (!parsed.success) {
      const errs: typeof errors = {}
      for (const issue of parsed.error.issues) {
        const key = issue.path[0] as keyof Values | 'privacy'
        if (!errs[key]) errs[key] = issue.message
      }
      setErrors(errs)
      // If a choice from a previous step is somehow missing, send the user back.
      if (errs.monthlyRevenue || errs.businessType || errs.role) go(0)
      else if (errs.aiUsage || errs.mainPain) go(1)
      return
    }

    setSubmitting(true)
    setServerError(null)
    try {
      const res = await fetch('/api/ai-accelerator-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(parsed.data),
      })
      if (!res.ok) {
        const { error } = (await res.json().catch(() => ({}))) as { error?: string }
        setServerError(error ?? d.errorGeneric)
        setSubmitting(false)
        return
      }
      // Lead event: Pixel + GA4 + CAPI with shared event_id for deduplication.
      void trackEvent('Lead', { content_category: 'ai-accelerator', content_name: 'AI Accelerator' })
      setDone(true)
    } catch (err) {
      console.error('[ai-form] submit error:', err)
      setServerError(d.errorNetwork)
      setSubmitting(false)
    }
  }

  if (done) {
    return (
      <div id="candidatura" className="scroll-mt-32">
        <div aria-live="polite" className="flex flex-col items-center gap-4 py-8 text-center">
          <h3 className="font-display text-[26px] font-semibold leading-[1.2em] tracking-[-0.04em] text-black min-[810px]:text-[32px]">
            {d.success.title}
          </h3>
          <p className="max-w-[480px] font-sans text-[15px] font-medium leading-[1.5em] tracking-[-0.02em] text-np-text">
            {d.success.text}
          </p>
        </div>
      </div>
    )
  }

  // Under-threshold block: the form stops here, nothing is sent.
  if (disqualified) {
    return (
      <div id="candidatura" className="scroll-mt-32">
        <div aria-live="polite" className="flex flex-col items-start gap-4 py-4">
          <h3 className="font-display text-[22px] font-semibold leading-[1.25em] tracking-[-0.04em] text-black min-[810px]:text-[26px]">
            {d.dq.title}
          </h3>
          <p className="max-w-[560px] font-sans text-[15px] font-medium leading-[1.5em] tracking-[-0.02em] text-np-text">
            {d.dq.text}
          </p>
          <div className="mt-2 flex flex-wrap items-center gap-4">
            <Link href={d.dq.blogHref} data-tracking="ai_dq_blog" className="button-principal ai-cta">
              {d.dq.blogCta}
            </Link>
            <button
              type="button"
              onClick={resetRevenue}
              className="font-sans text-[14px] font-medium text-np-dark underline transition-opacity hover:opacity-60"
            >
              {d.dq.back}
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div id="candidatura" className="scroll-mt-32">
      <div className="mb-4 text-center">
        <h3 className="font-display text-[24px] font-semibold leading-[1.2em] tracking-[-0.04em] text-black">
          {d.title}
        </h3>
        <p className="mt-1 font-sans text-[13px] font-medium leading-[1.5em] tracking-[-0.02em] text-noprob-muted">
          {d.subtitle}
        </p>
      </div>

      {/* Progress bar (1/3 -> 3/3), charged with the electric accent */}
      <div
        className="ai-progress-track mb-5"
        role="progressbar"
        aria-valuemin={1}
        aria-valuemax={3}
        aria-valuenow={step + 1}
        aria-label={`${d.stepLabel} ${step + 1} / 3`}
      >
        <div className="ai-progress-fill" style={{ width: `${((step + 1) / 3) * 100}%` }} />
      </div>

      <form onSubmit={submit} noValidate>
        {/* Honeypot: hidden from real users, bots fill it and get silently dropped */}
        <input
          type="text"
          name="company_website"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          value={hp}
          onChange={(e) => setHp(e.target.value)}
          className="absolute left-[-9999px] top-[-9999px] h-0 w-0 opacity-0"
        />

        <div className="overflow-hidden">
          <AnimatePresence mode="wait" custom={direction} initial={false}>
            <motion.div
              key={step}
              custom={direction}
              initial={{ opacity: 0, x: direction * 32 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -32 }}
              transition={{ duration: 0.22, ease: 'easeOut' }}
              className="flex flex-col gap-5"
            >
              <p
                ref={headingRef}
                tabIndex={-1}
                aria-live="polite"
                className="font-sans text-[16px] font-semibold tracking-[-0.03em] text-black focus:outline-none"
              >
                <span className="mr-2 text-[12px] font-semibold text-noprob-muted">
                  {d.stepLabel} {step + 1}/3
                </span>
                {stepCopy[step]}
              </p>

              {step === 0 && (
                <>
                  <ChoiceCards
                    name="monthlyRevenue"
                    label={d.step1.qRevenue.label}
                    helper={d.step1.qRevenue.helper}
                    options={d.step1.qRevenue.options}
                    value={values.monthlyRevenue}
                    onChoose={(v) => choose('monthlyRevenue', v)}
                    error={errors.monthlyRevenue}
                  />
                  <ChoiceCards
                    name="businessType"
                    label={d.step1.qBusiness.label}
                    options={d.step1.qBusiness.options}
                    value={values.businessType}
                    onChoose={(v) => choose('businessType', v)}
                    error={errors.businessType}
                  />
                  <ChoiceCards
                    name="role"
                    label={d.step1.qRole.label}
                    options={d.step1.qRole.options}
                    value={values.role}
                    onChoose={(v) => choose('role', v)}
                    error={errors.role}
                  />
                </>
              )}

              {step === 1 && (
                <>
                  <ChoiceCards
                    name="aiUsage"
                    label={d.step2.qUsage.label}
                    options={d.step2.qUsage.options}
                    value={values.aiUsage}
                    onChoose={(v) => choose('aiUsage', v)}
                    error={errors.aiUsage}
                  />
                  <div className="flex flex-col gap-[4px]">
                    <label htmlFor="ai-mainPain" className="font-sans text-[15px] font-semibold leading-[1.4em] tracking-[-0.03em] text-black">
                      {d.step2.qPain.label}
                      <span aria-hidden className="ml-1 text-[color:var(--ai-accent-text)]">*</span>
                    </label>
                    <textarea
                      id="ai-mainPain"
                      rows={4}
                      value={values.mainPain}
                      onChange={(e) => setValue('mainPain', e.target.value)}
                      placeholder={d.step2.qPain.placeholder}
                      className={`w-full rounded-[12px] border bg-white p-[10px] font-sans text-[14px] font-medium leading-[1.4] tracking-[-0.02em] text-[#181818] placeholder:text-[#999999] focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--ai-accent)] ${
                        errors.mainPain ? 'border-red-500' : 'border-black'
                      }`}
                    />
                    {errors.mainPain && (
                      <span role="alert" className={errorClass}>
                        {errors.mainPain}
                      </span>
                    )}
                  </div>
                  <button
                    type="button"
                    onClick={continueStep2}
                    className="button-principal ai-cta self-start"
                  >
                    {d.continue}
                  </button>
                </>
              )}

              {step === 2 && (
                <>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="flex flex-col gap-[2px]">
                      <label htmlFor="ai-name" className={labelClass}>
                        {d.step3.fields.name.label}
                      </label>
                      <input
                        id="ai-name"
                        type="text"
                        autoComplete="name"
                        value={values.name}
                        onChange={(e) => setValue('name', e.target.value)}
                        placeholder={d.step3.fields.name.placeholder}
                        className={inputClass(!!errors.name)}
                      />
                      {errors.name && (
                        <span role="alert" className={errorClass}>
                          {errors.name}
                        </span>
                      )}
                    </div>
                    <div className="flex flex-col gap-[2px]">
                      <label htmlFor="ai-email" className={labelClass}>
                        {d.step3.fields.email.label}
                      </label>
                      <input
                        id="ai-email"
                        type="email"
                        autoComplete="email"
                        value={values.email}
                        onChange={(e) => setValue('email', e.target.value)}
                        placeholder={d.step3.fields.email.placeholder}
                        className={inputClass(!!errors.email)}
                      />
                      {errors.email && (
                        <span role="alert" className={errorClass}>
                          {errors.email}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="flex flex-col gap-[2px]">
                      <label htmlFor="ai-legalName" className={labelClass}>
                        {d.step3.fields.legalName.label}
                      </label>
                      <input
                        id="ai-legalName"
                        type="text"
                        autoComplete="organization"
                        value={values.legalName}
                        onChange={(e) => setValue('legalName', e.target.value)}
                        placeholder={d.step3.fields.legalName.placeholder}
                        className={inputClass(!!errors.legalName)}
                      />
                      {errors.legalName && (
                        <span role="alert" className={errorClass}>
                          {errors.legalName}
                        </span>
                      )}
                    </div>
                    <div className="flex flex-col gap-[2px]">
                      <label htmlFor="ai-vatNumber" className={labelClass}>
                        {d.step3.fields.vatNumber.label}
                      </label>
                      <input
                        id="ai-vatNumber"
                        type="text"
                        inputMode={locale === 'it' ? 'numeric' : 'text'}
                        value={values.vatNumber}
                        onChange={(e) => setValue('vatNumber', e.target.value)}
                        placeholder={d.step3.fields.vatNumber.placeholder}
                        aria-describedby="ai-vat-helper"
                        className={inputClass(!!errors.vatNumber)}
                      />
                      <span
                        id="ai-vat-helper"
                        className="font-sans text-[11px] font-medium leading-[1.4em] tracking-[-0.02em] text-noprob-grey"
                      >
                        {d.step3.fields.vatNumber.helper}
                      </span>
                      {errors.vatNumber && (
                        <span role="alert" className={errorClass}>
                          {errors.vatNumber}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-col gap-[2px]">
                    <label htmlFor="ai-website" className={labelClass}>
                      {d.step3.fields.website.label}
                    </label>
                    <input
                      id="ai-website"
                      type="text"
                      autoComplete="url"
                      value={values.website}
                      onChange={(e) => setValue('website', e.target.value)}
                      placeholder={d.step3.fields.website.placeholder}
                      className={inputClass(false)}
                    />
                  </div>

                  <div className="flex flex-col gap-[2px]">
                    <label className="flex items-start gap-2">
                      <input
                        type="checkbox"
                        checked={privacy}
                        onChange={(e) => {
                          setPrivacy(e.target.checked)
                          setErrors((prev) => ({ ...prev, privacy: undefined }))
                        }}
                        className="mt-[3px] h-4 w-4 shrink-0 accent-[#2f6bff]"
                      />
                      <span className="font-sans text-[12px] font-medium leading-[1.5em] tracking-[-0.02em] text-noprob-text">
                        {d.step3.privacyBefore}
                        <a
                          href={PRIVACY_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline transition-opacity hover:opacity-70"
                        >
                          {d.step3.privacyLinkLabel}
                        </a>
                        .
                      </span>
                    </label>
                    {errors.privacy && (
                      <span role="alert" className={errorClass}>
                        {errors.privacy}
                      </span>
                    )}
                  </div>

                  <button
                    type="submit"
                    data-tracking="ai_form_submit"
                    disabled={submitting}
                    className="button-principal ai-cta mt-1 !w-full disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    {submitting ? d.step3.submitting : d.step3.submit}
                  </button>
                  <p className="text-center font-sans text-[12px] font-medium tracking-[-0.02em] text-noprob-muted">
                    {d.step3.micro}
                  </p>
                </>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        <div aria-live="assertive">
          {serverError && (
            <p className="mt-3 text-center font-sans text-[11px] font-medium text-red-500">{serverError}</p>
          )}
        </div>

        {/* Back / step counter */}
        <div className="mt-5 flex items-center justify-between border-t border-[#ececec] pt-3">
          <button
            type="button"
            onClick={() => go(step - 1)}
            disabled={step === 0 || submitting}
            className="font-sans text-[13px] font-medium text-np-dark transition-opacity hover:opacity-60 disabled:invisible"
          >
            {d.back}
          </button>
          <span className="font-sans text-[12px] font-medium text-np-grey">{step + 1} / 3</span>
        </div>
      </form>
    </div>
  )
}
