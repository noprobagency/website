'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { siteAssets } from '@/lib/site'
import { contactSchema, ContactFormData } from '@/lib/schemas/contact'

type ContactSectionProps = {
  /** Path to navigate to after a successful submission. Defaults to /thank-you. */
  successRedirect?: string
}

const avatars = [
  '/images/originals/mEIBGBqwotHJ35YaPhM5ljuLc2U.png',
  '/images/originals/2B9gp2gJnBjBX44Yovd3HRxqiXM.png',
  '/images/originals/B9ROL6BhEMArgbWauFiEj7UZZJY.png',
  '/images/originals/lFzmQ3NzC3LG6q2c7lvBf8kw.png',
  '/images/originals/38I07rfLJ4DXJRQZ7YXCanY6ko.png',
]

export default function ContactSection({
  successRedirect = '/thank-you',
}: ContactSectionProps = {}) {
  const router = useRouter()
  const [serverError, setServerError] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  // Watch fields to change color once selected
  const interestValue = watch('interest')
  const revenueValue = watch('revenue')
  const adsSpendValue = watch('adsSpend')

  async function onSubmit(data: ContactFormData) {
    setServerError(null)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (!res.ok) {
        const { error } = (await res.json().catch(() => ({}))) as { error?: string }
        setServerError(error ?? 'Something went wrong. Please try again.')
        return
      }

      reset()
      router.push(successRedirect)
    } catch (err) {
      console.error('[contact-form] submit error:', err)
      setServerError('Network error. Please try again.')
    }
  }

  return (
    <section id="contact-form" className="bg-noprob-bg flex flex-col items-center place-content-center overflow-hidden gap-[20px] max-w-[1200px] mx-auto w-full mt-[20px] mb-[50px] px-[24px] min-[810px]:px-0">
      <div className="flex w-full flex-col items-center place-content-center gap-[30px] overflow-x-clip">
        <div className="flex w-full flex-col-reverse items-start justify-start gap-4 overflow-clip rounded-[16px] border-[6px] border-[#f8f8f8] bg-white p-5 lg:flex-row lg:gap-[50px] lg:p-[50px]">
          {/* Left Column: Info & Trust (Now Second on Mobile) */}
          <div className="flex flex-[1_0_0px] flex-col gap-6 p-0 w-full">
            {/* Consistency Card */}
            <div className="flex flex-col gap-[15px] rounded-[16px] border-[6px] border-[#f8f8f8] bg-white p-[24px]">
              <div className="flex items-center gap-3 lg:gap-6">
                {/* Avatar Stack */}
                <div className="flex -space-x-2 lg:-space-x-3">
                  {avatars.map((src, i) => (
                    <div
                      key={i}
                      className="relative h-8 w-8 overflow-hidden rounded-full border-2 border-white bg-noprob-bg lg:h-11 lg:w-11"
                    >
                      <Image src={src} alt="Founder avatar" fill className="object-cover" />
                    </div>
                  ))}
                </div>
                {/* Stars & Trust */}
                <div className="flex flex-col gap-0.5 lg:gap-1">
                  <div className="flex gap-0.5">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <svg
                        key={s}
                        className="h-3 w-3 lg:h-[18px] lg:w-[18px]"
                        viewBox="0 0 17 17"
                        fill="#F9C24A"
                        aria-hidden
                      >
                        <path d="M 8.561 13.7 L 4.411 16.2 C 4.228 16.317 4.036 16.367 3.836 16.35 C 3.636 16.333 3.461 16.267 3.311 16.15 C 3.161 16.033 3.044 15.888 2.961 15.713 C 2.878 15.538 2.861 15.342 2.911 15.125 L 4.011 10.4 L 0.336 7.225 C 0.169 7.075 0.065 6.904 0.024 6.712 C -0.017 6.52 -0.005 6.333 0.061 6.15 C 0.127 5.967 0.227 5.817 0.361 5.7 C 0.495 5.583 0.678 5.508 0.911 5.475 L 5.761 5.05 L 7.636 0.6 C 7.719 0.4 7.849 0.25 8.024 0.15 C 8.199 0.05 8.378 0 8.561 0 C 8.744 0 8.923 0.05 9.098 0.15 C 9.273 0.25 9.403 0.4 9.486 0.6 L 11.361 5.05 L 16.211 5.475 C 16.444 5.508 16.628 5.583 16.761 5.7 C 16.894 5.817 16.994 5.967 17.061 6.15 C 17.128 6.333 17.14 6.521 17.099 6.713 C 17.058 6.905 16.953 7.076 16.786 7.225 L 13.111 10.4 L 14.211 15.125 C 14.261 15.342 14.244 15.538 14.161 15.713 C 14.078 15.888 13.961 16.034 13.811 16.15 C 13.661 16.266 13.486 16.333 13.286 16.35 C 13.086 16.367 12.894 16.317 12.711 16.2 Z" />
                      </svg>
                    ))}
                  </div>
                  <span className="font-sans text-[11px] font-semibold tracking-[-0.03em] text-noprob-text lg:text-[13px]">
                    Trusted by 23+ founders
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-[15px]">
                <h2 className="text-[34px] font-semibold leading-[1.1] tracking-[-0.07em] text-noprob-text">
                  Consistency. <br />
                  That&apos;s <span className="font-serif italic font-normal">noprob agency</span>
                </h2>
                <p className="font-sans text-[17px] font-medium leading-[1.4em] tracking-[-0.02em] text-noprob-text">
                  NoProb Agency is the technical partner that makes eCommerce simple. A 7/7 team
                  of developers, designers, and strategists combining code, data, and creativity
                  to help Shopify brands scale without stress.
                </p>
              </div>
            </div>

            {/* Testimonial Card */}
            <article className="flex h-auto flex-col items-start justify-between rounded-[16px] border-[6px] border-[#f8f8f8] bg-noprob-card p-[24px] shadow-none overflow-visible gap-[15px]">
              <p className="font-sans text-[1rem] font-normal leading-[1.5em] tracking-[-0.02em] text-noprob-text">
                I am very satisfied with my collaboration with the agency, and especially with Antonio, who <strong className="font-bold">supported me every step</strong> of the way with my website redesign and the promotion of my products via eCommerce.
                <br /><br />
                Whenever I need help, Antonio is always very available, which I really appreciate. <strong className="font-bold">A very positive experience!</strong>
              </p>

              <div className="mt-0 w-full flex flex-col gap-[15px]">
                <div className="h-5 w-auto">
                  <Image
                    src={siteAssets.trustpilotWordmark}
                    alt="Trustpilot rating"
                    width={100}
                    height={20}
                    className="h-full w-auto object-contain object-left"
                  />
                </div>

                <div className="mt-[10px] flex items-center gap-3 text-[#181818]">
                  <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full border border-black/5">
                    <Image
                      src="/images/originals/5ZClDWRqPVst2zJqghXyG33cMY0.png"
                      alt="Antonio Cali"
                      fill
                      sizes="48px"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-col">
                    <p className="font-sans text-[18px] font-medium leading-[1.3em] tracking-[-0.02em] text-[#363636]">
                      Antonio Cali
                    </p>
                    <p className="font-sans text-[12px] font-medium tracking-[-0.04em] text-noprob-muted">
                      Sfogliate&Sfogliatelle - DTC eCommerce Owner
                    </p>
                  </div>
                </div>
              </div>
            </article>
          </div>

          {/* Right Column: Contact Form (Now First on Mobile) */}
          <div className="flex flex-[1_0_0px] flex-col gap-5 rounded-[16px] border-[6px] border-[#f8f8f8] bg-white p-5 w-full">
            <form className="flex flex-col gap-5" onSubmit={handleSubmit(onSubmit)}>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="flex flex-col gap-[2px]">
                  <label className="font-sans text-[14px] font-medium leading-[1.5] tracking-[-0.04em] text-black">
                    Name and Surname
                  </label>
                  <input
                    {...register('name')}
                    type="text"
                    placeholder="Pieter Lev"
                    className={`w-full rounded-[12px] border bg-white p-[10px] font-sans text-[14px] font-medium leading-[1.2] tracking-[-0.02em] text-[#181818] placeholder:text-[#999999] focus:outline-none ${errors.name ? 'border-red-500' : 'border-black'}`}
                  />
                  {errors.name && <span className="text-[10px] text-red-500">{errors.name.message}</span>}
                </div>
                <div className="flex flex-col gap-[2px]">
                  <label className="font-sans text-[14px] font-medium leading-[1.5] tracking-[-0.04em] text-black">
                    Company Name
                  </label>
                  <input
                    {...register('company')}
                    type="text"
                    placeholder="Rossi srl"
                    className={`w-full rounded-[12px] border bg-white p-[10px] font-sans text-[14px] font-medium leading-[1.2] tracking-[-0.02em] text-[#181818] placeholder:text-[#999999] focus:outline-none ${errors.company ? 'border-red-500' : 'border-black'}`}
                  />
                  {errors.company && <span className="text-[10px] text-red-500">{errors.company.message}</span>}
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="flex flex-col gap-[3px]">
                  <label className="font-sans text-[14px] font-medium leading-[1.5] tracking-[-0.04em] text-black">
                    Email send you more info
                  </label>
                  <input
                    {...register('email')}
                    type="email"
                    placeholder="email@company.com"
                    className={`w-full rounded-[12px] border bg-white p-[10px] font-sans text-[14px] font-medium leading-[1.2] tracking-[-0.02em] text-[#181818] placeholder:text-[#999999] focus:outline-none ${errors.email ? 'border-red-500' : 'border-black'}`}
                  />
                  {errors.email && <span className="text-[10px] text-red-500">{errors.email.message}</span>}
                </div>
                <div className="flex flex-col gap-[2px]">
                  <label className="font-sans text-[14px] font-medium leading-[1.5] tracking-[-0.04em] text-black">
                    Phone number
                  </label>
                  <input
                    {...register('phone')}
                    type="tel"
                    placeholder="+39 3204063459"
                    className={`w-full rounded-[12px] border bg-white p-[10px] font-sans text-[14px] font-medium leading-[1.2] tracking-[-0.02em] text-[#181818] placeholder:text-[#999999] focus:outline-none ${errors.phone ? 'border-red-500' : 'border-black'}`}
                  />
                  {errors.phone && <span className="text-[10px] text-red-500">{errors.phone.message}</span>}
                </div>
              </div>

              <div className="flex flex-col gap-[2px]">
                <label className="font-sans text-[14px] font-medium leading-[1.5] tracking-[-0.04em] text-black">
                  eCommerce&apos;s URL
                </label>
                <input
                  {...register('websiteUrl')}
                  type="text"
                  placeholder="company.com"
                  className={`w-full rounded-[12px] border bg-white p-[10px] font-sans text-[14px] font-medium leading-[1.2] tracking-[-0.02em] text-[#181818] placeholder:text-[#999999] focus:outline-none ${errors.websiteUrl ? 'border-red-500' : 'border-black'}`}
                />
                {errors.websiteUrl && <span className="text-[10px] text-red-500">{errors.websiteUrl.message}</span>}
              </div>

              <div className="flex flex-col gap-[2px]">
                <label className="font-sans text-[14px] font-medium leading-[1.5] tracking-[-0.04em] text-black">
                  Are you interested in?
                </label>
                <div className="relative">
                  <select
                    {...register('interest')}
                    defaultValue=""
                    className={`w-full appearance-none rounded-[12px] border bg-white p-[10px] font-sans text-[14px] font-medium leading-[1.2] tracking-[-0.02em] focus:outline-none ${errors.interest ? 'border-red-500' : 'border-black'} ${interestValue ? 'text-[#181818]' : 'text-[#999999]'}`}
                  >
                    <option value="" disabled className="text-[#999999]">
                      Select…
                    </option>
                    <option value="I want to launch my first eCommerce" className="text-[#181818]">I want to launch my first eCommerce</option>
                    <option value="I want to implement an expert eCommerce team inside my company" className="text-[#181818]">I want to implement an expert eCommerce team inside my company</option>
                    <option value="I want to rebuild my eCommerce website" className="text-[#181818]">I want to rebuild my eCommerce website</option>
                    <option value="Other" className="text-[#181818]">Other</option>
                  </select>
                  {errors.interest && <span className="text-[10px] text-red-500">{errors.interest.message}</span>}
                </div>
              </div>

              <div className="flex flex-col gap-[2px]">
                <label className="font-sans text-[14px] font-medium leading-[1.5] tracking-[-0.04em] text-black">
                  How much does your eCommerce generate in annual revenue?
                </label>
                <div className="relative">
                  <select
                    {...register('revenue')}
                    defaultValue=""
                    className={`w-full appearance-none rounded-[12px] border bg-white p-[10px] font-sans text-[14px] font-medium leading-[1.2] tracking-[-0.02em] focus:outline-none ${errors.revenue ? 'border-red-500' : 'border-black'} ${revenueValue ? 'text-[#181818]' : 'text-[#999999]'}`}
                  >
                    <option value="" disabled className="text-[#999999]">
                      Select…
                    </option>
                    <option value="Not generating revenue yet" className="text-[#181818]">Not generating revenue yet</option>
                    <option value="Less than €100,000" className="text-[#181818]">Less than €100,000</option>
                    <option value="Between €100,000 and €500,000" className="text-[#181818]">Between €100,000 and €500,000</option>
                    <option value="More than €500,000" className="text-[#181818]">More than €500,000</option>
                  </select>
                  {errors.revenue && <span className="text-[10px] text-red-500">{errors.revenue.message}</span>}
                </div>
              </div>

              <div className="flex flex-col gap-[2px]">
                <label className="font-sans text-[14px] font-medium leading-[1.5] tracking-[-0.04em] text-black">
                  How much do you currently spend on ads each month?
                </label>
                <div className="relative">
                  <select
                    {...register('adsSpend')}
                    defaultValue=""
                    className={`w-full appearance-none rounded-[12px] border bg-white p-[10px] font-sans text-[14px] font-medium leading-[1.2] tracking-[-0.02em] focus:outline-none ${errors.adsSpend ? 'border-red-500' : 'border-black'} ${adsSpendValue ? 'text-[#181818]' : 'text-[#999999]'}`}
                  >
                    <option value="" disabled className="text-[#999999]">
                      Select…
                    </option>
                    <option value="I’m not spending anything on ads" className="text-[#181818]">I’m not spending anything on ads</option>
                    <option value="Less than €2,500/month" className="text-[#181818]">Less than €2,500/month</option>
                    <option value="Between €2,500 and €5,000/month" className="text-[#181818]">Between €2,500 and €5,000/month</option>
                    <option value="More than €5,000/month" className="text-[#181818]">More than €5,000/month</option>
                  </select>
                  {errors.adsSpend && <span className="text-[10px] text-red-500">{errors.adsSpend.message}</span>}
                </div>
              </div>

              <div className="flex flex-col gap-[2px]">
                <label className="font-sans text-[14px] font-medium leading-[1.5] tracking-[-0.04em] text-black">
                  Add any additional information or data that could be useful for the call
                </label>
                <textarea
                  {...register('additionalInfo')}
                  rows={4}
                  className="w-full rounded-[12px] border border-black bg-white p-[10px] font-sans text-[14px] font-medium leading-[1.2] tracking-[-0.02em] text-[#181818] placeholder:text-[#999999] focus:outline-none"
                />
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap items-center justify-center gap-6 py-2">
                <div className="flex items-center gap-2">
                  <svg width="20" height="20" viewBox="0 0 32 32" fill="none" aria-hidden>
                    <path
                      d="M16 3C13.4288 3 10.9154 3.76244 8.77759 5.1909C6.63975 6.61935 4.97351 8.64968 3.98957 11.0251C3.00563 13.4006 2.74819 16.0144 3.2498 18.5362C3.75141 21.0579 4.98953 23.3743 6.80762 25.1924C8.6257 27.0105 10.9421 28.2486 13.4638 28.7502C15.9856 29.2518 18.5995 28.9944 20.9749 28.0104C23.3503 27.0265 25.3807 25.3603 26.8091 23.2224C28.2376 21.0846 29 18.5712 29 16C28.9964 12.5533 27.6256 9.24882 25.1884 6.81163C22.7512 4.37445 19.4467 3.00364 16 3ZM21.7075 13.7075L14.7075 20.7075C14.6146 20.8005 14.5043 20.8742 14.3829 20.9246C14.2615 20.9749 14.1314 21.0008 14 21.0008C13.8686 21.0008 13.7385 20.9749 13.6171 20.9246C13.4957 20.8742 13.3854 20.8005 13.2925 20.7075L10.2925 17.7075C10.1049 17.5199 9.99945 17.2654 9.99945 17C9.99945 16.7346 10.1049 16.4801 10.2925 16.2925C10.4801 16.1049 10.7346 15.9994 11 15.9994C11.2654 15.9994 11.5199 16.1049 11.7075 16.2925L14 18.5863L20.2925 12.2925C20.3854 12.1996 20.4957 12.1259 20.6171 12.0756C20.7385 12.0253 20.8686 11.9994 21 11.9994C21.1314 11.9994 21.2615 12.0253 21.3829 12.0756C21.5043 12.1259 21.6146 12.1996 21.7075 12.2925C21.8004 12.3854 21.8741 12.4957 21.9244 12.6171C21.9747 12.7385 22.0006 12.8686 22.0006 13C22.0006 13.1314 21.9747 13.2615 21.9244 13.3829C21.8741 13.5043 21.8004 13.6146 21.7075 13.7075Z"
                      fill="#121212"
                    />
                  </svg>
                  <span className="font-sans text-[12px] font-medium text-noprob-text">
                    7/7 support
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <svg width="20" height="20" viewBox="0 0 32 32" fill="none" aria-hidden>
                    <path
                      d="M16 3C13.4288 3 10.9154 3.76244 8.77759 5.1909C6.63975 6.61935 4.97351 8.64968 3.98957 11.0251C3.00563 13.4006 2.74819 16.0144 3.2498 18.5362C3.75141 21.0579 4.98953 23.3743 6.80762 25.1924C8.6257 27.0105 10.9421 28.2486 13.4638 28.7502C15.9856 29.2518 18.5995 28.9944 20.9749 28.0104C23.3503 27.0265 25.3807 25.3603 26.8091 23.2224C28.2376 21.0846 29 18.5712 29 16C28.9964 12.5533 27.6256 9.24882 25.1884 6.81163C22.7512 4.37445 19.4467 3.00364 16 3ZM21.7075 13.7075L14.7075 20.7075C14.6146 20.8005 14.5043 20.8742 14.3829 20.9246C14.2615 20.9749 14.1314 21.0008 14 21.0008C13.8686 21.0008 13.7385 20.9749 13.6171 20.9246C13.4957 20.8742 13.3854 20.8005 13.2925 20.7075L10.2925 17.7075C10.1049 17.5199 9.99945 17.2654 9.99945 17C9.99945 16.7346 10.1049 16.4801 10.2925 16.2925C10.4801 16.1049 10.7346 15.9994 11 15.9994C11.2654 15.9994 11.5199 16.1049 11.7075 16.2925L14 18.5863L20.2925 12.2925C20.3854 12.1996 20.4957 12.1259 20.6171 12.0756C20.7385 12.0253 20.8686 11.9994 21 11.9994C21.1314 11.9994 21.2615 12.0253 21.3829 12.0756C21.5043 12.1259 21.6146 12.1996 21.7075 12.2925C21.8004 12.3854 21.8741 12.4957 21.9244 12.6171C21.9747 12.7385 22.0006 12.8686 22.0006 13C22.0006 13.1314 21.9747 13.2615 21.9244 13.3829C21.8741 13.5043 21.8004 13.6146 21.7075 13.7075Z"
                      fill="#121212"
                    />
                  </svg>
                  <span className="font-sans text-[12px] font-medium text-noprob-text">
                    NDA pre-signed after submission
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <svg width="20" height="20" viewBox="0 0 32 32" fill="none" aria-hidden>
                    <path
                      d="M16 3C13.4288 3 10.9154 3.76244 8.77759 5.1909C6.63975 6.61935 4.97351 8.64968 3.98957 11.0251C3.00563 13.4006 2.74819 16.0144 3.2498 18.5362C3.75141 21.0579 4.98953 23.3743 6.80762 25.1924C8.6257 27.0105 10.9421 28.2486 13.4638 28.7502C15.9856 29.2518 18.5995 28.9944 20.9749 28.0104C23.3503 27.0265 25.3807 25.3603 26.8091 23.2224C28.2376 21.0846 29 18.5712 29 16C28.9964 12.5533 27.6256 9.24882 25.1884 6.81163C22.7512 4.37445 19.4467 3.00364 16 3ZM21.7075 13.7075L14.7075 20.7075C14.6146 20.8005 14.5043 20.8742 14.3829 20.9246C14.2615 20.9749 14.1314 21.0008 14 21.0008C13.8686 21.0008 13.7385 20.9749 13.6171 20.9246C13.4957 20.8742 13.3854 20.8005 13.2925 20.7075L10.2925 17.7075C10.1049 17.5199 9.99945 17.2654 9.99945 17C9.99945 16.7346 10.1049 16.4801 10.2925 16.2925C10.4801 16.1049 10.7346 15.9994 11 15.9994C11.2654 15.9994 11.5199 16.1049 11.7075 16.2925L14 18.5863L20.2925 12.2925C20.3854 12.1996 20.4957 12.1259 20.6171 12.0756C20.7385 12.0253 20.8686 11.9994 21 11.9994C21.1314 11.9994 21.2615 12.0253 21.3829 12.0756C21.5043 12.1259 21.6146 12.1996 21.7075 12.2925C21.8004 12.3854 21.8741 12.4957 21.9244 12.6171C21.9747 12.7385 22.0006 12.8686 22.0006 13C22.0006 13.1314 21.9747 13.2615 21.9244 13.3829C21.8741 13.5043 21.8004 13.6146 21.7075 13.7075Z"
                      fill="#121212"
                    />
                  </svg>
                  <span className="font-sans text-[12px] font-medium text-noprob-text">
                    Trial Discount
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="button-principal !w-full disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {isSubmitting ? 'Sending...' : 'Send Your Request'}
                </button>

                <p className="text-center font-sans text-[12px] font-medium tracking-[-0.04em] text-noprob-text">
                  You’ll get direct access to our eCommerce manager in the next step.
                </p>
                {serverError && (
                  <p className="text-center font-sans text-[10px] font-medium text-red-500">
                    {serverError}
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Reviews Grid under the form block */}
      <div className="mx-auto grid w-full grid-cols-1 gap-4 sm:grid-cols-2">
        {/* Card Cristiana Z. */}
        <article className="flex h-auto flex-col items-start justify-between rounded-[16px] border-[6px] border-[#f8f8f8] bg-white p-[24px] shadow-xl shadow-black/5 overflow-visible gap-[15px]">
          <p className="font-sans text-[1rem] font-normal leading-[1.5em] tracking-[-0.02em] text-noprob-text">
            I am very satisfied with my collaboration with the agency, and especially with Antonio, who <strong className="font-bold">supported me every step</strong> of the way with my website redesign and the promotion of my products via eCommerce.
            <br /><br />
            Whenever I need help, Antonio is always very available, which I really appreciate. <strong className="font-bold">A very positive experience!</strong>
          </p>

          <div className="mt-0 w-full flex flex-col gap-[15px]">
            <div className="h-5 w-auto">
              <Image
                src={siteAssets.trustpilotWordmark}
                alt="Trustpilot rating"
                width={100}
                height={20}
                className="h-full w-auto object-contain object-left"
              />
            </div>

            <div className="mt-0 flex items-center gap-3 text-[#181818]">
              <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full border border-black/5">
                <Image
                  src="/images/originals/no-prob-cristiana-z.webp"
                  alt="Cristiana Z."
                  fill
                  sizes="48px"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col text-[#181818]">
                <p className="font-sans text-[18px] font-medium leading-[1.3em] tracking-[-0.02em] text-[#363636]">
                  Cristiana Z.
                </p>
                <p className="font-sans text-[12px] font-medium tracking-[-0.04em] text-noprob-muted sm:whitespace-nowrap">
                  Terapia Flterapiafloreale.it - Supplement eCommerce
                </p>
              </div>
            </div>
          </div>
        </article>

        {/* Card Camilla Dudine */}
        <article className="flex h-auto flex-col items-start justify-between rounded-[16px] border-[6px] border-[#f8f8f8] bg-white p-[24px] shadow-xl shadow-black/5 overflow-visible gap-[15px]">
          <p className="font-sans text-[1rem] font-normal leading-[1.5em] tracking-[-0.02em] text-noprob-text">
            Collaborating with Antonio on the creation of our <strong className="font-bold">e-commerce website</strong> was an extremely positive experience.
            <br /><br />
            He demonstrated great professionalism, technical competence, and remarkable attention to detail, managing to transform our ideas into a functional, modern, and high-performing <strong className="font-bold">e-commerce website</strong>…
          </p>

          <div className="mt-0 w-full flex flex-col gap-[15px]">
            <div className="h-5 w-auto">
              <Image
                src={siteAssets.trustpilotWordmark}
                alt="Trustpilot rating"
                width={100}
                height={20}
                className="h-full w-auto object-contain object-left"
              />
            </div>

            <div className="mt-0 flex items-center gap-3 text-[#181818]">
              <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full border border-black/5">
                <Image
                  src="/images/originals/btYlkzRXpOBFU8seMDbnX8BY8.jpeg"
                  alt="Camilla Dudine"
                  fill
                  sizes="48px"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col text-[#181818]">
                <p className="font-sans text-[18px] font-medium leading-[1.3em] tracking-[-0.02em] text-[#363636]">
                  Camilla Dudine
                </p>
                <p className="font-sans text-[12px] font-medium tracking-[-0.04em] text-noprob-muted">
                  DDglobal Store - B2B eCommerce Owner
                </p>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}
