'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import SectionLabel from '@/components/ui/SectionLabel'
import { trackEvent } from '@/lib/analytics/events'
import { type Locale } from '@/lib/i18n'
import { getMigrazioneCopy } from '@/lib/i18n/migrazione'
import { migrazioneSchema, MigrazioneFormData } from '@/lib/schemas/migrazione'

const inputClass = (hasError: boolean) =>
  `w-full rounded-[12px] border bg-white p-[10px] font-sans text-[14px] font-medium leading-[1.2] tracking-[-0.02em] text-[#181818] placeholder:text-[#999999] focus:outline-none ${
    hasError ? 'border-red-500' : 'border-black'
  }`

export default function MigrazioneForm({ locale = 'it' }: { locale?: Locale }) {
  const d = getMigrazioneCopy(locale).form
  const [serverError, setServerError] = useState<string | null>(null)
  const [submitted, setSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<MigrazioneFormData>({
    resolver: zodResolver(migrazioneSchema),
  })

  const platformValue = watch('platform')
  const revenueValue = watch('revenue')
  const timelineValue = watch('timeline')

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

      // No thank-you redirect on this page: fire the Lead conversion explicitly.
      trackEvent('Lead', { content_category: 'migrazione', content_name: 'migrazione-shopify' })
      reset()
      setSubmitted(true)
    } catch (err) {
      console.error('[migrazione-form] submit error:', err)
      setServerError(d.errorNetwork)
    }
  }

  return (
    <section
      id="candidatura"
      className="bg-noprob-bg mx-auto mt-[20px] mb-[60px] flex w-full max-w-[760px] scroll-mt-32 flex-col items-center gap-[24px] px-[24px] min-[810px]:px-0"
    >
      {/* Header / final CTA */}
      <div className="mx-auto max-w-[640px] text-center">
        <SectionLabel>{d.label}</SectionLabel>
        <h2 className="mt-5 text-np-h2 text-center text-np-dark">{d.heading}</h2>
        <p className="mt-5 font-sans text-body-lg font-medium text-noprob-text">{d.subheading}</p>
      </div>

      <div className="flex w-full flex-col gap-5 rounded-[16px] border-[6px] border-[#f8f8f8] bg-white p-5 min-[810px]:p-[32px]">
        {submitted ? (
          <div className="flex flex-col items-center gap-3 py-10 text-center">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[rgb(206,232,204)]">
              <svg width="24" height="24" viewBox="0 0 32 32" fill="none" aria-hidden>
                <path
                  d="M16 3C13.4288 3 10.9154 3.76244 8.77759 5.1909C6.63975 6.61935 4.97351 8.64968 3.98957 11.0251C3.00563 13.4006 2.74819 16.0144 3.2498 18.5362C3.75141 21.0579 4.98953 23.3743 6.80762 25.1924C8.6257 27.0105 10.9421 28.2486 13.4638 28.7502C15.9856 29.2518 18.5995 28.9944 20.9749 28.0104C23.3503 27.0265 25.3807 25.3603 26.8091 23.2224C28.2376 21.0846 29 18.5712 29 16C28.9964 12.5533 27.6256 9.24882 25.1884 6.81163C22.7512 4.37445 19.4467 3.00364 16 3ZM21.7075 13.7075L14.7075 20.7075C14.6146 20.8005 14.5043 20.8742 14.3829 20.9246C14.2615 20.9749 14.1314 21.0008 14 21.0008C13.8686 21.0008 13.7385 20.9749 13.6171 20.9246C13.4957 20.8742 13.3854 20.8005 13.2925 20.7075L10.2925 17.7075C10.1049 17.5199 9.99945 17.2654 9.99945 17C9.99945 16.7346 10.1049 16.4801 10.2925 16.2925C10.4801 16.1049 10.7346 15.9994 11 15.9994C11.2654 15.9994 11.5199 16.1049 11.7075 16.2925L14 18.5863L20.2925 12.2925C20.3854 12.1996 20.4957 12.1259 20.6171 12.0756C20.7385 12.0253 20.8686 11.9994 21 11.9994C21.1314 11.9994 21.2615 12.0253 21.3829 12.0756C21.5043 12.1259 21.6146 12.1996 21.7075 12.2925C21.8004 12.3854 21.8741 12.4957 21.9244 12.6171C21.9747 12.7385 22.0006 12.8686 22.0006 13C22.0006 13.1314 21.9747 13.2615 21.9244 13.3829C21.8741 13.5043 21.8004 13.6146 21.7075 13.7075Z"
                  fill="#121212"
                />
              </svg>
            </span>
            <h3 className="font-sans text-[22px] font-semibold tracking-[-0.04em] text-noprob-text">
              {d.successTitle}
            </h3>
            <p className="max-w-[420px] font-sans text-body-sm font-medium leading-[1.6em] text-noprob-text">
              {d.successBody}
            </p>
          </div>
        ) : (
          <form className="flex flex-col gap-5" onSubmit={handleSubmit(onSubmit)} noValidate>
            <p className="font-sans text-[13px] font-medium leading-[1.5em] tracking-[-0.02em] text-noprob-muted">
              {d.intro}
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="flex flex-col gap-[2px]">
                <label className="font-sans text-[14px] font-medium leading-[1.5] tracking-[-0.04em] text-black">
                  {d.fields.name.label}
                </label>
                <input
                  {...register('name')}
                  type="text"
                  placeholder={d.fields.name.placeholder}
                  className={inputClass(!!errors.name)}
                />
                {errors.name && <span className="text-[10px] text-red-500">{errors.name.message}</span>}
              </div>
              <div className="flex flex-col gap-[2px]">
                <label className="font-sans text-[14px] font-medium leading-[1.5] tracking-[-0.04em] text-black">
                  {d.fields.email.label}
                </label>
                <input
                  {...register('email')}
                  type="email"
                  placeholder={d.fields.email.placeholder}
                  className={inputClass(!!errors.email)}
                />
                {errors.email && <span className="text-[10px] text-red-500">{errors.email.message}</span>}
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="flex flex-col gap-[2px]">
                <label className="font-sans text-[14px] font-medium leading-[1.5] tracking-[-0.04em] text-black">
                  {d.fields.brand.label}
                </label>
                <input
                  {...register('brand')}
                  type="text"
                  placeholder={d.fields.brand.placeholder}
                  className={inputClass(!!errors.brand)}
                />
                {errors.brand && <span className="text-[10px] text-red-500">{errors.brand.message}</span>}
              </div>
              <div className="flex flex-col gap-[2px]">
                <label className="font-sans text-[14px] font-medium leading-[1.5] tracking-[-0.04em] text-black">
                  {d.fields.websiteUrl.label}
                </label>
                <input
                  {...register('websiteUrl')}
                  type="text"
                  placeholder={d.fields.websiteUrl.placeholder}
                  className={inputClass(!!errors.websiteUrl)}
                />
                {errors.websiteUrl && (
                  <span className="text-[10px] text-red-500">{errors.websiteUrl.message}</span>
                )}
              </div>
            </div>

            <div className="flex flex-col gap-[2px]">
              <label className="font-sans text-[14px] font-medium leading-[1.5] tracking-[-0.04em] text-black">
                {d.fields.platform.label}
              </label>
              <select
                {...register('platform')}
                defaultValue=""
                className={`w-full appearance-none rounded-[12px] border bg-white p-[10px] font-sans text-[14px] font-medium leading-[1.2] tracking-[-0.02em] focus:outline-none ${
                  errors.platform ? 'border-red-500' : 'border-black'
                } ${platformValue ? 'text-[#181818]' : 'text-[#999999]'}`}
              >
                <option value="" disabled>
                  {d.fields.platform.placeholder}
                </option>
                {d.fields.platform.options.map((opt) => (
                  <option key={opt} value={opt} className="text-[#181818]">
                    {opt}
                  </option>
                ))}
              </select>
              {errors.platform && (
                <span className="text-[10px] text-red-500">{errors.platform.message}</span>
              )}
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="flex flex-col gap-[2px]">
                <label className="font-sans text-[14px] font-medium leading-[1.5] tracking-[-0.04em] text-black">
                  {d.fields.revenue.label}
                </label>
                <select
                  {...register('revenue')}
                  defaultValue=""
                  className={`w-full appearance-none rounded-[12px] border bg-white p-[10px] font-sans text-[14px] font-medium leading-[1.2] tracking-[-0.02em] focus:outline-none ${
                    errors.revenue ? 'border-red-500' : 'border-black'
                  } ${revenueValue ? 'text-[#181818]' : 'text-[#999999]'}`}
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
                {errors.revenue && (
                  <span className="text-[10px] text-red-500">{errors.revenue.message}</span>
                )}
              </div>
              <div className="flex flex-col gap-[2px]">
                <label className="font-sans text-[14px] font-medium leading-[1.5] tracking-[-0.04em] text-black">
                  {d.fields.timeline.label}
                </label>
                <select
                  {...register('timeline')}
                  defaultValue=""
                  className={`w-full appearance-none rounded-[12px] border bg-white p-[10px] font-sans text-[14px] font-medium leading-[1.2] tracking-[-0.02em] focus:outline-none ${
                    errors.timeline ? 'border-red-500' : 'border-black'
                  } ${timelineValue ? 'text-[#181818]' : 'text-[#999999]'}`}
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
                {errors.timeline && (
                  <span className="text-[10px] text-red-500">{errors.timeline.message}</span>
                )}
              </div>
            </div>

            <div className="flex flex-col gap-[2px]">
              <label className="font-sans text-[14px] font-medium leading-[1.5] tracking-[-0.04em] text-black">
                {d.fields.reason.label}
              </label>
              <textarea
                {...register('reason')}
                rows={4}
                placeholder={d.fields.reason.placeholder}
                className={`w-full rounded-[12px] border bg-white p-[10px] font-sans text-[14px] font-medium leading-[1.4] tracking-[-0.02em] text-[#181818] placeholder:text-[#999999] focus:outline-none ${
                  errors.reason ? 'border-red-500' : 'border-black'
                }`}
              />
              {errors.reason && <span className="text-[10px] text-red-500">{errors.reason.message}</span>}
            </div>

            <div className="flex flex-col gap-[2px]">
              <label className="flex items-start gap-2">
                <input
                  {...register('privacy')}
                  type="checkbox"
                  className="mt-[3px] h-4 w-4 shrink-0 accent-[#121212]"
                />
                <span className="font-sans text-[12px] font-medium leading-[1.5em] tracking-[-0.02em] text-noprob-text">
                  {d.fields.privacy}
                </span>
              </label>
              {errors.privacy && (
                <span className="text-[10px] text-red-500">{errors.privacy.message}</span>
              )}
            </div>

            <div className="flex flex-col gap-3">
              <button
                type="submit"
                disabled={isSubmitting}
                className="button-principal !w-full disabled:cursor-not-allowed disabled:opacity-50"
              >
                {isSubmitting ? d.submitting : d.submit}
              </button>
              {serverError && (
                <p className="text-center font-sans text-[10px] font-medium text-red-500">
                  {serverError}
                </p>
              )}
            </div>
          </form>
        )}
      </div>
    </section>
  )
}
