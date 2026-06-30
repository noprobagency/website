'use client'

import { useMemo, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { type Locale } from '@/lib/i18n'
import { getMigrazioneCopy } from '@/lib/i18n/migrazione'
import { makeMigrazioneSchema, type MigrazioneFormData } from '@/lib/schemas/migrazione'

const PRIVACY_URL = 'https://www.iubenda.com/privacy-policy/22342791'

const inputClass = (hasError: boolean) =>
  `w-full rounded-[12px] border bg-white p-[10px] font-sans text-[14px] font-medium leading-[1.2] tracking-[-0.02em] text-[#181818] placeholder:text-[#999999] focus:outline-none ${
    hasError ? 'border-red-500' : 'border-black'
  }`

const selectClass = (hasError: boolean, hasValue: boolean) =>
  `w-full appearance-none rounded-[12px] border bg-white p-[10px] font-sans text-[14px] font-medium leading-[1.2] tracking-[-0.02em] focus:outline-none ${
    hasError ? 'border-red-500' : 'border-black'
  } ${hasValue ? 'text-[#181818]' : 'text-[#999999]'}`

const labelClass = 'font-sans text-[14px] font-medium leading-[1.5] tracking-[-0.04em] text-black'
const errorClass = 'text-[10px] text-red-500'

export default function MigrazioneForm({ locale = 'it' }: { locale?: Locale }) {
  const d = getMigrazioneCopy(locale).form
  const router = useRouter()
  const [serverError, setServerError] = useState<string | null>(null)

  const schema = useMemo(() => makeMigrazioneSchema(d.errors), [d.errors])

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<MigrazioneFormData>({ resolver: zodResolver(schema) })

  const revenueValue = watch('revenue')
  const timelineValue = watch('timeline')

  const thankYouPath = locale === 'it' ? '/it/grazie' : '/thank-you'

  async function onSubmit(data: MigrazioneFormData) {
    setServerError(null)
    try {
      const res = await fetch('/api/migrazione-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, locale }),
      })
      if (!res.ok) {
        const { error } = (await res.json().catch(() => ({}))) as { error?: string }
        setServerError(error ?? d.errorGeneric)
        return
      }
      router.push(thankYouPath)
    } catch (err) {
      console.error('[migrazione-form] submit error:', err)
      setServerError(d.errorNetwork)
    }
  }

  return (
    <div id="candidatura" className="scroll-mt-32">
      <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)} noValidate>
          <p className="font-sans text-[13px] font-medium leading-[1.5em] tracking-[-0.02em] text-noprob-muted">
            {d.intro}
          </p>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="flex flex-col gap-[2px]">
              <label className={labelClass}>{d.fields.name.label}</label>
              <input
                {...register('name')}
                type="text"
                placeholder={d.fields.name.placeholder}
                className={inputClass(!!errors.name)}
              />
              {errors.name && <span className={errorClass}>{errors.name.message}</span>}
            </div>
            <div className="flex flex-col gap-[2px]">
              <label className={labelClass}>{d.fields.email.label}</label>
              <input
                {...register('email')}
                type="email"
                placeholder={d.fields.email.placeholder}
                className={inputClass(!!errors.email)}
              />
              {errors.email && <span className={errorClass}>{errors.email.message}</span>}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="flex flex-col gap-[2px]">
              <label className={labelClass}>{d.fields.brand.label}</label>
              <input
                {...register('brand')}
                type="text"
                placeholder={d.fields.brand.placeholder}
                className={inputClass(!!errors.brand)}
              />
              {errors.brand && <span className={errorClass}>{errors.brand.message}</span>}
            </div>
            <div className="flex flex-col gap-[2px]">
              <label className={labelClass}>{d.fields.websiteUrl.label}</label>
              <input
                {...register('websiteUrl')}
                type="text"
                placeholder={d.fields.websiteUrl.placeholder}
                className={inputClass(!!errors.websiteUrl)}
              />
              {errors.websiteUrl && <span className={errorClass}>{errors.websiteUrl.message}</span>}
            </div>
          </div>

          <div className="flex flex-col gap-[2px]">
            <label className={labelClass}>{d.fields.platform.label}</label>
            <input
              {...register('platform')}
              type="text"
              placeholder={d.fields.platform.placeholder}
              className={inputClass(!!errors.platform)}
            />
            {errors.platform && <span className={errorClass}>{errors.platform.message}</span>}
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="flex flex-col gap-[2px]">
              <label className={labelClass}>{d.fields.revenue.label}</label>
              <select
                {...register('revenue')}
                defaultValue=""
                className={selectClass(!!errors.revenue, !!revenueValue)}
              >
                <option value="" disabled>
                  {d.fields.revenue.placeholder}
                </option>
                {d.fields.revenue.options.map((opt) => (
                  <option key={opt} value={opt} className="text-[#181818]">
                    {opt}
                  </option>
                ))}
              </select>
              {errors.revenue && <span className={errorClass}>{errors.revenue.message}</span>}
            </div>
            <div className="flex flex-col gap-[2px]">
              <label className={labelClass}>{d.fields.timeline.label}</label>
              <select
                {...register('timeline')}
                defaultValue=""
                className={selectClass(!!errors.timeline, !!timelineValue)}
              >
                <option value="" disabled>
                  {d.fields.timeline.placeholder}
                </option>
                {d.fields.timeline.options.map((opt) => (
                  <option key={opt} value={opt} className="text-[#181818]">
                    {opt}
                  </option>
                ))}
              </select>
              {errors.timeline && <span className={errorClass}>{errors.timeline.message}</span>}
            </div>
          </div>

          <div className="flex flex-col gap-[2px]">
            <label className={labelClass}>{d.fields.reason.label}</label>
            <textarea
              {...register('reason')}
              rows={4}
              placeholder={d.fields.reason.placeholder}
              className={`w-full rounded-[12px] border bg-white p-[10px] font-sans text-[14px] font-medium leading-[1.4] tracking-[-0.02em] text-[#181818] placeholder:text-[#999999] focus:outline-none ${
                errors.reason ? 'border-red-500' : 'border-black'
              }`}
            />
            {errors.reason && <span className={errorClass}>{errors.reason.message}</span>}
          </div>

          <div className="flex flex-col gap-[2px]">
            <label className="flex items-start gap-2">
              <input
                {...register('privacy')}
                type="checkbox"
                className="mt-[3px] h-4 w-4 shrink-0 accent-[#121212]"
              />
              <span className="font-sans text-[12px] font-medium leading-[1.5em] tracking-[-0.02em] text-noprob-text">
                {d.privacyBefore}
                <a
                  href={PRIVACY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline transition-opacity hover:opacity-70"
                >
                  {d.privacyLinkLabel}
                </a>
                .
              </span>
            </label>
            {errors.privacy && <span className={errorClass}>{errors.privacy.message}</span>}
          </div>

          <button
            type="submit"
            data-tracking="migrazione_form_submit"
            disabled={isSubmitting}
            className="button-principal mt-1 !w-full disabled:cursor-not-allowed disabled:opacity-50"
          >
            {isSubmitting ? d.submitting : d.submit}
          </button>
          {serverError && (
            <p className="text-center font-sans text-[10px] font-medium text-red-500">{serverError}</p>
          )}
      </form>
    </div>
  )
}
