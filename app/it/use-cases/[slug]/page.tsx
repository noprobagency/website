import type { Metadata } from 'next'
import Image from 'next/image'
import { notFound } from 'next/navigation'

import { buildMetadata } from '@/lib/site'
import { useCases } from '@/data/use-cases'
import type { ArticleSection } from '@/data/articles'
import CTA from '@/components/sections/CTA'
import Footer from '@/components/layout/Footer'

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return useCases.map((u) => ({ slug: u.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const useCase = useCases.find((u) => u.slug === slug)
  if (!useCase) return {}
  return buildMetadata({
    title: useCase.title,
    description: useCase.excerpt,
    path: `/it/use-cases/${useCase.slug}`,
    locale: 'it',
  })
}

function renderSection(section: ArticleSection, idx: number) {
  switch (section.type) {
    case 'h2':
      return (
        <h2
          key={idx}
          className="mt-12 mb-4 font-sans font-semibold tracking-[-0.05em] leading-[1.15em] text-black"
          style={{ fontSize: 'clamp(28px, 4vw, 40px)' }}
        >
          {section.text}
        </h2>
      )
    case 'h3':
      return (
        <h3
          key={idx}
          className="mt-8 mb-3 font-sans font-semibold tracking-[-0.04em] leading-[1.3em] text-black text-[22px]"
        >
          {section.text}
        </h3>
      )
    case 'paragraph':
      return (
        <p
          key={idx}
          className="mb-5 font-sans text-[18px] font-medium leading-[1.7em] tracking-[-0.02em] text-[#1c1c1c]"
        >
          {section.text}
        </p>
      )
    case 'image':
      return (
        <figure
          key={idx}
          className="my-8 mx-auto overflow-hidden rounded-[16px]"
          style={section.maxWidth ? { maxWidth: section.maxWidth } : undefined}
        >
          <Image
            src={section.src}
            alt={section.alt ?? ''}
            width={section.width ?? 1400}
            height={section.height ?? 900}
            className="h-auto w-full object-contain"
          />
        </figure>
      )
    case 'list':
      return (
        <ul key={idx} className="mb-5 list-disc pl-6 space-y-2">
          {section.items.map((item, i) => (
            <li
              key={i}
              className="font-sans text-[18px] font-medium leading-[1.7em] tracking-[-0.02em] text-[#1c1c1c]"
            >
              {item}
            </li>
          ))}
        </ul>
      )
    default:
      return null
  }
}

export default async function ItalianUseCasePage({ params }: Props) {
  const { slug } = await params
  const useCase = useCases.find((u) => u.slug === slug)
  if (!useCase) notFound()

  const locale = 'it'

  return (
    <>
      {/* Hero */}
      <section className="w-full bg-[#f0f0f0] pt-[120px] pb-0 px-5 min-[810px]:px-9">
        <div className="mx-auto flex max-w-[860px] flex-col items-center gap-5 pb-12 text-center">
          <span className="np-eyebrow">{useCase.caseType === 'Use Case' ? 'Caso d’Uso' : useCase.caseType}</span>
          <h1
            className="font-sans font-semibold text-black tracking-[-0.07em] leading-[110%]"
            style={{ fontSize: 'clamp(32px, 5vw, 56px)' }}
          >
            {useCase.title}
          </h1>
          <p className="max-w-[600px] font-sans text-[18px] font-medium leading-[1.5em] tracking-[-0.03em] text-[#7c7c7c]">
            {useCase.excerpt}
          </p>
        </div>

        {/* Cover image */}
        <div className="mx-auto max-w-[860px] overflow-hidden rounded-[24px]">
          <div className="relative w-full" style={{ aspectRatio: '16/9' }}>
            <Image
              src={useCase.image}
              alt={useCase.imageAlt ?? useCase.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Article body */}
      <section className="w-full flex justify-center bg-[#f0f0f0] py-16 px-5 min-[810px]:px-9">
        <article className="w-full max-w-[700px]">
          {useCase.content?.map((section, idx) => renderSection(section, idx))}
        </article>
      </section>

      <CTA locale={locale} />
      <Footer locale={locale} />
    </>
  )
}
