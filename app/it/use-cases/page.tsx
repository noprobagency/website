import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { buildMetadata } from '@/lib/site'
import SectionLabel from '@/components/ui/SectionLabel'
import { useCases } from '@/data/use-cases'
import Footer from '@/components/layout/Footer'

export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata({ path: '/it/use-cases', locale: 'it', pageKey: 'useCases' })
}

export default function ItalianUseCasesPage() {
  const locale = 'it'

  return (
    <>
      <section className="w-full bg-[#f0f0f0] pt-[120px] pb-[80px] px-5 min-[810px]:px-9">
        {/* Header */}
        <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-5 text-center">
          <SectionLabel>Use Cases</SectionLabel>
          <h1
            className="font-sans font-semibold text-black tracking-[-0.07em] leading-[110%] text-[40px]"
          >
            Brand reali, crescita reale.{' '}
            <br />
            <em className="font-serif italic tracking-[-0.08em]">Scopri come lavoriamo.</em>
          </h1>
        </div>

        {/* Grid */}
        <div className="mx-auto mt-12 max-w-[1200px]">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {useCases.map((useCase) => (
              <Link
                key={useCase.slug}
                href={`/it/use-cases/${useCase.slug}`}
                className="group flex flex-col overflow-hidden rounded-[24px] bg-white no-underline"
                style={{
                  border: '6px solid #f8f8f8',
                  boxShadow:
                    'rgba(108, 113, 128, 0.08) 0px 2px 4px 0px, rgba(108, 113, 128, 0.07) 0px 7px 7px 0px, rgba(108, 113, 128, 0.04) 0px 17px 10px 0px, rgba(108, 113, 128, 0.01) 0px 29px 12px 0px, rgba(108, 113, 128, 0) 0px 46px 13px 0px',
                }}
              >
                {/* Image with fade mask */}
                <div
                  className="relative w-full overflow-hidden rounded-[16px_16px_0_0]"
                  style={{
                    mask: 'linear-gradient(0deg, rgba(0,0,0,0) 0%, rgb(0,0,0) 35%, rgb(0,0,0) 100%)',
                    WebkitMask: 'linear-gradient(0deg, rgba(0,0,0,0) 0%, rgb(0,0,0) 35%, rgb(0,0,0) 100%)',
                  }}
                >
                  <div className="relative w-full" style={{ aspectRatio: '4/3' }}>
                    <Image
                      src={useCase.image}
                      alt={useCase.title}
                      fill
                      className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                    />
                  </div>
                  {/* Case type pill */}
                  <div
                    className="absolute left-4 top-4 flex items-center rounded-full px-3 py-1"
                    style={{
                      backdropFilter: 'blur(24px)',
                      backgroundColor: '#f0f0f0',
                    }}
                  >
                    <span className="font-sans text-[12px] font-medium tracking-[-0.03em] text-[#181818]">
                      {useCase.caseType === 'Use Case' ? "Caso d'Uso" : useCase.caseType}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col gap-2 p-5">
                  <h2
                    className="font-sans font-semibold leading-[1.3em] tracking-[-0.02em] text-black"
                    style={{
                      fontSize: 'clamp(14.4px, 1.13rem, 18px)',
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                    }}
                  >
                    {useCase.title}
                  </h2>
                  <p
                    className="font-sans text-[14px] font-medium leading-[1.4em] tracking-[-0.02em]"
                    style={{ color: '#7c7c7c' }}
                  >
                    {useCase.excerpt}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <Footer locale={locale} />
    </>
  )
}
