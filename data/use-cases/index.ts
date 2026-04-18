import type { ArticleSection } from '@/data/articles'

export type UseCase = {
  slug: string
  title: string
  excerpt: string
  image: string
  imageAlt?: string
  caseType: string
  date: string
  content?: ArticleSection[]
}

export const useCases: UseCase[] = [
  {
    slug: 'ecommerce-growth-secrets',
    title: 'Why Consistent eCommerce Growth Beats Chasing Trends: The Unsexy Secret Winning Brands Know',
    excerpt: "I'll explain you why you should stop trend-chasing and just focus on growing.",
    image: '/images/originals/ueqZoCFRDc46Zk64JejcJN460.png',
    imageAlt: 'eCommerce growth consistency',
    caseType: 'Use Case',
    date: '2026-03-22',
    content: [
      {
        type: 'paragraph',
        text: "We always hear about some fashion, retail, or supplement brand blowing up overnight thanks to a growth hack, viral campaign, or some miracle tool. But from what I've seen working with fashion, DTC, beauty, and supplement businesses in Italy and across Europe, the brands that actually grow don't chase every shiny new thing. They create solid processes, keep their teams together, tweak things constantly, and trust data, not hype.",
      },
      {
        type: 'paragraph',
        text: 'This is what we have learned working in the industry for years:',
      },
      {
        type: 'list',
        items: [
          'Why sticking with it matters more than the latest trend',
          'Why small improvements beat trying to get rich quick',
          'How to make reliable money and build a real company',
          'Why constant change can actually hurt you',
          "A practical plan for fashion, retail, and supplement brands that I've tested in the real world",
        ],
      },
      {
        type: 'paragraph',
        text: "By the end, you'll see why you should stop trend-chasing and just focus on growing.",
      },
      {
        type: 'h2',
        text: 'The Boring Way: More Consistency, More Profit',
      },
      {
        type: 'paragraph',
        text: "Think you need to be switching ad managers, copywriters, or platforms every year? Data says no.",
      },
      {
        type: 'list',
        items: [
          'Improving by just 1% each workday adds up to +3700% growth over a year because of compounding',
          'Brands with long-term plans grow revenue by 47% more, profit by 36% more, and overall business value by 81% more',
        ],
      },
      {
        type: 'paragraph',
        text: "From my experience working with fashion stores, supplement companies, and all sorts of other brands, whenever we helped owners cut out pointless changes and focus on making small improvements—speed, conversion rates, data tracking, user experience—their sales and profits became more steady, and they stressed out less.",
      },
      {
        type: 'h2',
        text: 'The Real Cost of Switching Things Up: Team and Strategy',
      },
      {
        type: 'paragraph',
        text: "Every time you change your team, you waste months (and thousands of euros).",
      },
      {
        type: 'list',
        items: [
          'Replacing someone costs between €8,000 and €35,000 when you include recruiting, training, lost productivity, and lost knowledge',
          'New hires can take up to two months to get up to speed',
          'When you switch platforms often, 80% of fashion brands report that conversions drop for 1 to 3 months afterward',
        ],
      },
      {
        type: 'paragraph',
        text: "That's not a coincidence. That's just what happens when you lose context, break continuity, and force people to learn new systems from scratch.",
      },
      {
        type: 'h2',
        text: 'Conclusion',
      },
      {
        type: 'paragraph',
        text: "Scaling in eCommerce is almost never about genius ideas or lucky breaks. It's about doing the fundamentals well: a team that's ready and aligned, one clear strategy, real KPIs, and a tech partner who actually solves problems.",
      },
    ],
  },
]
