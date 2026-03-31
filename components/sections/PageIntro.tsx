import Button from '@/components/ui/Button'
import SectionLabel from '@/components/ui/SectionLabel'

type PageIntroProps = {
  eyebrow: string
  title: string
  description: string
}

export default function PageIntro({ eyebrow, title, description }: PageIntroProps) {
  return (
    <section className="bg-noprob-bg px-0 pb-20 pt-[180px]">
      <div className="container-noprob">
        <div className="rounded-card border-card-thick shadow-card mx-auto max-w-4xl bg-noprob-card-white px-8 py-16 text-center md:px-14">
          <SectionLabel>{eyebrow}</SectionLabel>
          <h1 className="mx-auto mt-6 max-w-3xl font-display text-h2-xl text-noprob-text md:text-[56px]">
            {title}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl font-sans text-body-lg font-medium text-noprob-text">
            {description}
          </p>
          <div className="mt-10 flex justify-center">
            <Button href="/contacts" variant="primary" trackingLabel={`page_intro_${eyebrow.toLowerCase()}`}>
              Reserve your sprint
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
