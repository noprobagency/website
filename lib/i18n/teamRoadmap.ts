import { type Locale } from '@/lib/i18n'
import { type MigrazioneCopy } from '@/lib/i18n/migrazione'

// Roadmap copy for the dedicated-team (Data-Driven Team) page.
// Reuses the MigrazioneProcess graphic but with a 90-day, team-focused narrative.
type ProcessCopy = MigrazioneCopy['process']

const it: ProcessCopy = {
  label: 'come entriamo',
  headingPart1: 'Trenta giorni per entrare. ',
  headingEm: 'Poi restiamo per anni.',
  description:
    'Il primo mese è uno sprint di ingresso: entriamo nel progetto, impostiamo il team, colleghiamo i dati e costruiamo le fondamenta.\nDa lì parte una collaborazione che, con i nostri clienti, dura anni.',
  phases: [
    {
      number: '01',
      title: 'Il primo sprint di ingresso',
      duration: '30 giorni',
      description:
        'In 30 giorni entriamo davvero nel tuo eCommerce. Analizziamo dati, store e canali. Impostiamo il team giusto per le aree che servono. Colleghiamo tracciamento, dashboard e reportistica. Definiamo insieme obiettivi chiari e le prime priorità. Alla fine dello sprint il progetto ha una regia, un team e una direzione.',
    },
    {
      number: '02',
      title: 'Una collaborazione che dura nel tempo',
      duration: 'per anni',
      description:
        'Finito lo sprint non finisce niente: comincia il lavoro vero. Seguiamo la crescita dell’eCommerce mese dopo mese e adattiamo team e strategia in base ai dati e agli obiettivi. Abbiamo clienti che ci seguono da anni, perché un partner non si cambia ogni stagione.',
    },
  ],
  fourMonths: {
    title: 'Il primo sprint di 30 giorni lo fai a metà prezzo.',
    description:
      'Vogliamo entrare senza barriere e dimostrarti come lavoriamo. Per questo il primo mese di sprint costa il 50%: in 30 giorni imposti tutto il team e vedi con i tuoi occhi il nostro metodo. Nessun vincolo dopo il primo mese: decidi tu se continuare.',
  },
  closingLine:
    'Cumini ci segue da 4 anni.\nUn partner non si cambia ogni stagione.',
}

const en: ProcessCopy = {
  label: 'how we work',
  headingPart1: '90 days to ',
  headingEm: 'get fully in.',
  description:
    'Three phases, one logical order. From onboarding to the first measurable results.\nThe tested method our team uses to take ownership of your ecommerce.',
  phases: [
    {
      number: '01',
      title: 'Onboarding',
      duration: 'first ~15 days',
      description:
        'We get into your ecommerce: a full audit of data, tracking, analytics, design and development. We map the current state, define the KPIs that matter and set up an efficient way to communicate. Nothing starts until we know exactly where to act.',
    },
    {
      number: '02',
      title: 'Execution',
      duration: '~45 days',
      description:
        'The team at work on every front: development, design, CRO, server-side tracking and continuous optimization. Every move starts from data, not a guess. You see the work progress week after week, with steps shared and confirmed before each release.',
    },
    {
      number: '03',
      title: 'Growth',
      duration: '~30 days',
      description:
        'Continuous monitoring and data-driven iteration. The full team stays on development, SEO, tracking and design, ready to act on every bottleneck. Every possible optimization, we find it and we do it. Day after day, we get to perfection.',
    },
  ],
  fourMonths: {
    title: 'Why 90 days to really get started?',
    description:
      'Ninety days isn’t how long it takes us to “fix” something. It’s the time we dedicate to getting fully into your ecommerce: understand, execute, grow. We find the bottlenecks, we check day after day, we perfect every detail. Not a vendor that delivers and disappears, but a team that stays until everything works the way it should.',
  },
  closingLine:
    'Not a vendor that just executes.\nA team that stays inside your ecommerce, day after day.',
}

export function getTeamRoadmapCopy(locale: Locale): ProcessCopy {
  return locale === 'it' ? it : en
}
