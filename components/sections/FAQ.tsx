import Accordion from '@/components/ui/Accordion'
import SectionLabel from '@/components/ui/SectionLabel'
import { getDictionary, type Locale } from '@/lib/i18n'

export default function FAQ({ locale = 'en' }: { locale?: Locale }) {
  const t = getDictionary(locale)

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: t.faq.items.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }

  return (
    <section className="py-[80px]">
      <div className="container-noprob">
        <div className="mx-auto max-w-[760px] text-center">
          <SectionLabel>{t.faq.label}</SectionLabel>
          <h2 className="mt-5 text-np-h2 text-center text-np-dark">
            {t.faq.heading}<span className="font-serif italic">{t.faq.headingEm}</span>
          </h2>
          <p className="mt-5 font-sans text-body-lg font-medium text-noprob-text">
            {t.faq.subheading}
          </p>
        </div>

        <div className="border-card-thick shadow-card animate-fade-up mx-auto mt-8 max-w-[800px] rounded-card-lg bg-noprob-card px-6 pt-8 pb-6 min-[810px]:p-12">
          <Accordion items={t.faq.items} />
        </div>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      </div>
    </section>
  )
}
