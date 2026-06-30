import { type Locale } from '@/lib/i18n'
import { type MigrazioneCopy } from '@/lib/i18n/migrazione'

// Roadmap copy for the dedicated-team (Data-Driven Team) page.
// Reuses the MigrazioneProcess graphic but with a 90-day, team-focused narrative.
type ProcessCopy = MigrazioneCopy['process']

const it: ProcessCopy = {
  label: 'come lavoriamo',
  headingPart1: '90 giorni per ',
  headingEm: 'entrare nel vivo.',
  description:
    'Tre fasi, un ordine logico. Dall’onboarding ai primi risultati misurabili.\nIl metodo testato con cui il team prende in mano il tuo ecommerce.',
  phases: [
    {
      number: '01',
      title: 'Onboarding',
      duration: 'primi ~15 giorni',
      description:
        'Entriamo nel tuo ecommerce: audit completo di dati, tracciamento, analytics, design e sviluppo. Mappiamo lo stato attuale, definiamo i KPI che contano e impostiamo un metodo di comunicazione efficiente. Niente parte finché non sappiamo esattamente dove intervenire.',
    },
    {
      number: '02',
      title: 'Operatività',
      duration: '~45 giorni',
      description:
        'Il team al lavoro su ogni fronte: sviluppo, design, CRO, tracciamento server-side e ottimizzazioni continue. Ogni intervento parte da un dato, non da un’ipotesi. Tu vedi avanzare il lavoro settimana dopo settimana, con step inviati e confermati prima di ogni rilascio.',
    },
    {
      number: '03',
      title: 'Crescita',
      duration: '~30 giorni',
      description:
        'Monitoraggio continuo e iterazione data-driven. Il team completo resta su sviluppo, SEO, tracciamento e design, pronto a intervenire su ogni collo di bottiglia. Ogni ottimizzazione possibile, la troviamo e la facciamo. Giorno dopo giorno, arriviamo alla perfezione.',
    },
  ],
  fourMonths: {
    title: 'Perché 90 giorni per partire davvero?',
    description:
      'Novanta giorni non sono il tempo che ci mettiamo a “sistemare” qualcosa. È il tempo che dedichiamo a entrare a 360° nel tuo ecommerce: capire, operare, far crescere. Troviamo i colli di bottiglia, controlliamo giorno dopo giorno, perfezioniamo ogni dettaglio. Non un fornitore che esegue e sparisce, ma un team che resta finché tutto funziona come deve.',
  },
  closingLine:
    'Non un fornitore che esegue e basta.\nUn team che resta dentro al tuo ecommerce, giorno dopo giorno.',
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
