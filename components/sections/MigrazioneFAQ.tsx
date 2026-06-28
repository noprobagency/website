import Accordion from '@/components/ui/Accordion'
import SectionLabel from '@/components/ui/SectionLabel'
import { type Locale } from '@/lib/i18n'
import { getMigrazioneCopy } from '@/lib/i18n/migrazione'

export default function MigrazioneFAQ({ locale = 'it' }: { locale?: Locale }) {
  const d = getMigrazioneCopy(locale).faq

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: d.items.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1'),
      },
    })),
  }

  return (
    <section className="pb-[80px] pt-[80px]">
      <div className="container-noprob">
        <div className="mx-auto max-w-[760px] text-center">
          <SectionLabel>{d.label}</SectionLabel>
          <h2 className="mt-5 text-np-h2 text-center text-np-dark">
            {d.heading}
            <span className="font-serif italic">{d.headingEm}</span>
          </h2>
          <p className="mt-5 font-sans text-body-lg font-medium text-noprob-text">{d.subheading}</p>
        </div>

        <div className="border-card-thick shadow-card animate-fade-up mx-auto mt-8 max-w-[800px] rounded-card-lg bg-noprob-card px-6 pt-8 pb-6 min-[810px]:p-12">
          <Accordion items={d.items} />
        </div>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      </div>
    </section>
  )
}
