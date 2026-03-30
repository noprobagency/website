import Button from '@/components/ui/Button'

export default function FinalCTA() {
  return (
    <section className="section-padding bg-bg-secondary/20">
      <div className="container-custom">
        <div className="surface-panel relative overflow-hidden px-8 py-16 md:px-14 md:py-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(123,255,106,0.16),transparent_28%)]" />
          <div className="relative mx-auto max-w-4xl text-center">
            <div className="mx-auto inline-flex items-center gap-3 rounded-pill border border-accent-green/20 bg-accent-green/10 px-4 py-2 text-xs text-accent-green">
              <span className="h-2 w-2 rounded-full bg-accent-green" aria-hidden />
              Slot Available for November
            </div>
            <h2 className="mt-8 text-4xl font-semibold tracking-[-0.06em] text-text-primary md:text-6xl">
              Ready to fix what’s slowing you down?
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-text-secondary md:text-lg">
              If your store needs a real technical partner, cleaner data, and faster execution,
              let’s map the next sprint together.
            </p>
            <div className="mt-10 flex justify-center">
              <Button href="/contacts" size="lg" trackingLabel="final_cta">
                Reserve Your Sprint
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
