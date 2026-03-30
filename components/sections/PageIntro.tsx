import Button from '@/components/ui/Button'
import SectionLabel from '@/components/ui/SectionLabel'

type PageIntroProps = {
  eyebrow: string
  title: string
  description: string
}

export default function PageIntro({ eyebrow, title, description }: PageIntroProps) {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="noise-mask absolute inset-0 opacity-60" aria-hidden />
      <div className="container-custom relative">
        <div className="surface-panel mx-auto max-w-4xl px-8 py-16 text-center md:px-14">
          <SectionLabel>{eyebrow}</SectionLabel>
          <h1 className="mx-auto mt-5 max-w-3xl text-4xl font-bold tracking-[-0.05em] text-text-primary md:text-6xl">
            {title}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-text-secondary md:text-lg">
            {description}
          </p>
          <div className="mt-10 flex justify-center">
            <Button href="/contacts" size="lg" trackingLabel={`page_intro_${eyebrow.toLowerCase()}`}>
              Reserve your sprint
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
