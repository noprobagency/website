import Accordion from '@/components/ui/Accordion'
import SectionLabel from '@/components/ui/SectionLabel'

const faqs = [
  {
    question: 'Who do you work with?',
    answer:
      'We work exclusively with established eCommerce brands in Fashion, Supplements, and DTC sectors operating on Shopify or WooCommerce. We select partners carefully to ensure long-term aligned growth.',
  },
  {
    question: 'What does support and maintenance include, and how often do you intervene?',
    answer:
      'Support is 7/7 with response in minutes, not days. We handle everything from bug fixes to performance optimization, proactively managing your eCommerce infrastructure.',
  },
  {
    question: 'How do you approach data and KPI management?',
    answer:
      'We implement professional tracking from day one: GA4, Meta Pixel, server-side Conversions API, and custom dashboards. Every decision is based on real numbers, not assumptions.',
  },
  {
    question: 'What are the contract terms and flexibility options?',
    answer:
      'We offer flexible monthly retainers with fixed, predictable costs. No hidden fees, no surprise invoices. You can scale your team up or down based on your needs.',
  },
  {
    question: 'What’s the difference between Data Driven Team and eComm reBuild?',
    answer:
      'Data-Driven Team is a monthly retainer for brands with an existing eCommerce that want a dedicated team. eCommerce Rebuild is a full rebuild project for brands starting from scratch or needing a complete overhaul.',
  },
  {
    question: 'Who will be my main point of contact, and how is communication handled?',
    answer:
      'Your eCommerce Manager is your single point of contact. They lead your dedicated team and handle all communication, reporting, and strategic decisions.',
  },
  {
    question: 'How does the onboarding process work, and how long does it take?',
    answer:
      'Onboarding takes one to two weeks and includes an initial audit, team setup, tool integration, and a kickoff sprint. You will be fully operational within the first month.',
  },
  {
    question: 'Do you guarantee results or refunds?',
    answer:
      'We offer a 100% Risk-Free guarantee on our eCommerce Rebuild plan. If we do not deliver what we promised, you get a full refund. Our Data-Driven Team plan includes a trial discount for new clients.',
  },
  {
    question: 'Do you also work with new brands that don’t have an eCommerce yet?',
    answer:
      'Yes. Our eCommerce Rebuild plan covers brands starting from zero, from design to launch and beyond. We build your entire eCommerce infrastructure from the ground up.',
  },
  {
    question: 'What’s included (and not included) in your team’s work?',
    answer:
      'Included: development, design, data and analytics, paid advertising management, email marketing, and SEO. Not included: product photography, content creation, or influencer management. We focus on what drives technical and revenue growth.',
  },
]

export default function FAQ() {
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }

  return (
    <section className="px-9 pb-0 pt-[80px]">
      <div className="container-noprob">
        <div className="mx-auto max-w-[760px] text-center">
          <SectionLabel>FAQs</SectionLabel>
          <h2 className="mt-5 font-display text-[2.8rem] font-semibold leading-[1.2em] tracking-[-0.05em] text-noprob-text">
            Everything you <span className="font-serif italic">need</span> to know
          </h2>
          <p className="mt-5 font-sans text-body-lg font-medium text-noprob-text">
            The Agency that turns data and vision into high-performing eCommerce.
          </p>
        </div>

        <div className="border-card-thick shadow-card animate-fade-up mx-auto mt-8 max-w-[800px] rounded-card-lg bg-noprob-card p-12">
          <Accordion items={faqs} />
        </div>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      </div>
    </section>
  )
}
