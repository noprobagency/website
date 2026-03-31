import Button from '@/components/ui/Button'
import SectionLabel from '@/components/ui/SectionLabel'

type PageIntroProps = {
  eyebrow: string
  title: string
  description: string
}

export default function PageIntro({ eyebrow, title, description }: PageIntroProps) {
  return (
    <section className="bg-np-bg px-0 pb-20 pt-[180px]">
      <div className="container-noprob">
        <div className="mx-auto max-w-4xl rounded-card bg-np-card px-8 py-16 text-center shadow-card np-border-card md:px-14">
          <SectionLabel>{eyebrow}</SectionLabel>
          <h1 className="mx-auto mt-6 max-w-3xl font-display text-[2.8rem] font-semibold tracking-[-0.05em] text-np-text md:text-[56px]">
            {title}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl font-sans text-[1.125rem] font-medium leading-[1.4em] tracking-[-0.02em] text-np-text">
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
