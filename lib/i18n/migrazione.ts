import type { Locale } from '@/lib/i18n'

/**
 * Copy module for the "Migrazione a Shopify" / "Shopify Migration" landing page.
 * Routes: it -> /it/migrazione-shopify, en -> /shopify-migration.
 *
 * Isolated from the large shared dictionary in `lib/i18n/index.ts` to keep that
 * file stable, while following the house i18n convention: a typed, locale-keyed
 * object consumed through a `get*` accessor. Only `seo.migrazioneShopify` lives
 * in the shared dictionary (so `buildMetadata({ pageKey })` keeps working).
 */

type ChartData = {
  badge: string
  note: string
  caption: string
  ariaLabel: string
  clicks: string
  impressions: string
  ctr: string
  position: string
}

export type MigrazioneCopy = {
  hero: {
    trustRatingLabel: string
    trustSectors: string
    titlePart1: string
    titleEm1: string
    titleMid: string
    titleEm2: string
    titlePart2: string
    subtitle: string
    microBenefits: string[]
    cta: string
    trustedCount: string
  }
  problem: {
    label: string
    heading: string
    headingEm: string
    description: string
    items: { title: string; description: string }[]
  }
  solution: {
    label: string
    headingPart1: string
    headingEm: string
    description: string
    items: { title: string; description: string }[]
  }
  charts: {
    label: string
    title1: string
    titleEm: string
    subtitle: string
    axisClicks: string
    axisImpressions: string
    metricClicks: string
    metricImpressions: string
    metricCtr: string
    metricPosition: string
    checkpoint1: string
    checkpoint2: string
    foot: string
    bad: ChartData
    good: ChartData
  }
  process: {
    label: string
    headingPart1: string
    headingEm: string
    description: string
    phases: { number: string; title: string; duration: string; description: string }[]
    fourMonths: { title: string; description: string }
    closingLine: string
  }
  pricing: {
    label: string
    heading: string
    subheading: string
    tiers: { price: string; slot: string; tag: string; state: 'completed' | 'current' | 'upcoming' }[]
    priceSuffix: string
    priceBadge: string
    guarantee: string
    trustLabel: string
    cardTitle: string
    cardDescription: string
    cardChecks: string[]
    scarcity: string
    cta: string
  }
  faq: {
    label: string
    heading: string
    headingEm: string
    subheading: string
    items: { question: string; answer: string }[]
  }
}

const it: MigrazioneCopy = {
  hero: {
    trustRatingLabel: '4,9',
    trustSectors: 'Scelti da brand Fashion, Integratori e DTC eCommerce',
    titlePart1: 'Migra a Shopify senza perdere ',
    titleEm1: 'vendite',
    titleMid: ' e ',
    titleEm2: 'clienti',
    titlePart2: '',
    subtitle:
      'Non un semplice “ricostruiamo il tuo sito”. Impostiamo il tuo store su Shopify per vendere meglio: design, tracciamento, performance, affidabilità, flessibilità, SEO. Con un solo interlocutore, un report di conferma per ogni area di lavoro, garanzia di rimborso e manutenzione inclusa.',
    microBenefits: ['Nemmeno un secondo offline', 'Redirect SEO 1:1', 'Garanzia rimborso 30 giorni'],
    cta: 'Candidati per la migrazione',
    trustedCount: 'Scelti da 33+ brand',
  },
  problem: {
    label: 'il problema',
    heading: 'La tua piattaforma ',
    headingEm: 'ti tiene fermo',
    description:
      'Cambiare piattaforma sembra un rischio enorme. Restare dove sei costa di più, ogni giorno, in vendite che non fai. Lo dicono i numeri.',
    items: [
      {
        title: 'Piattaforma rigida',
        description:
          'Ogni modifica passa da un ticket. Fuori dagli sconti non riesci a spingere. La piattaforma decide cosa puoi fare, non tu.',
      },
      {
        title: 'Paura di migrare',
        description:
          'Hai sentito storie di chi ha cambiato piattaforma e ha perso metà del traffico organico. È la paura numero uno, ed è legittima.',
      },
      {
        title: 'Caos gestionale',
        description:
          'Inventario, ordini in corso, clienti abituali. Cambiare piattaforma sembra aprire un cantiere che blocca tutto per mesi.',
      },
    ],
  },
  solution: {
    label: 'la soluzione',
    headingPart1: 'Team con esperienza per una migrazione ',
    headingEm: 'gestita e prevedibile.',
    description:
      'In una migrazione quasi tutto si può prevedere: dati, redirect, integrazioni, SEO. Un team che le ha già fatte sa dove sono i punti critici e li copre prima che diventino problemi.',
    items: [
      {
        title: 'Esperienza reale',
        description:
          'Migrazioni complesse e redirect su larga scala, fatti bene. Sappiamo dove guardare prima ancora di iniziare.',
      },
      {
        title: 'Un team esperto',
        description:
          'Sviluppo, SEO, tracciamento, design. Quando emerge un imprevisto non aspetti il freelancer giusto: il team è già lì, completo, e interviene subito.',
      },
      {
        title: 'Bottleneck killer',
        description:
          'Troviamo i colli di bottiglia. E li sistemiamo. Il valore non è fare tutto perfetto al primo colpo. È individuare cosa frena lo store e ottimizzarlo.',
      },
    ],
  },
  charts: {
    label: 'search console',
    title1: 'Dopo ogni migrazione il traffico scende. ',
    titleEm: 'Conta cosa succede dopo.',
    subtitle:
      'Google ri-elabora il sito: il calo è fisiologico. La risalita dipende da come è fatta la migrazione.',
    axisClicks: 'Clic',
    axisImpressions: 'Impressioni',
    metricClicks: 'Clic totali',
    metricImpressions: 'Impressioni totali',
    metricCtr: 'CTR media',
    metricPosition: 'Posizione media',
    checkpoint1: '① Migrazione',
    checkpoint2: '② Ri-elaborazione Google',
    foot: 'Stesso punto di partenza. Esito opposto. La differenza è il metodo.',
    bad: {
      badge: 'Migrazione gestita male',
      note: 'esempio illustrativo',
      caption:
        'Redirect mancanti, URL persi. Dopo la ri-elaborazione il traffico si stabilizza più in basso e non torna su.',
      ariaLabel: 'Search Console: traffico che cala dopo la migrazione e si stabilizza in basso',
      clicks: '28,4K',
      impressions: '1,84 Mln',
      ctr: '1,1%',
      position: '42,8',
    },
    good: {
      badge: 'Migrazione gestita da noi',
      note: 'dato reale Cumini',
      caption:
        'Redirect 1:1 mappati a monte. Breve assestamento, poi Google ritrova tutto e il sito cresce. Monitoraggio post lancio continuo e modifiche rapide.',
      ariaLabel: 'Search Console: lieve calo dopo la migrazione e poi forte crescita',
      clicks: '99,3K',
      impressions: '3,91 Mln',
      ctr: '2,5%',
      position: '9,6',
    },
  },
  process: {
    label: 'come lavoriamo',
    headingPart1: '4 mesi per ',
    headingEm: 'fare tutto.',
    description:
      'Tre fasi, un ordine logico. Niente fretta, niente limbo. Il tempo per seguire ogni dettaglio.\nIl flusso testato e confermato dopo oltre 10 progetti.',
    phases: [
      {
        number: '01',
        title: 'Analisi',
        duration: 'primi ~15 giorni',
        description:
          'Capiamo ogni dettaglio dello store: dati, prodotti, ordini, clienti, URL, integrazioni, criticità SEO. Mappiamo tutto prima di toccare qualsiasi cosa. Niente parte finché non sappiamo esattamente dove mettere le mani e impostiamo un metodo di comunicazione efficiente con il cliente.',
      },
      {
        number: '02',
        title: 'Operatività',
        duration: '~55 giorni',
        description:
          'La parte di costruzione. Migrazione di prodotti e ordini, setup in staging, piano redirect 1:1, tracciamento server-side, design su misura e sviluppo dello store. Lo store nuovo prende forma, pezzo per pezzo. Tutti gli step verranno inviati e confermati prima del lancio ufficiale.',
      },
      {
        number: '03',
        title: 'Monitoraggio',
        duration: '~50 giorni',
        description:
          'Go-live e poi controllo continuo. Il team completo resta su ogni fronte: sviluppo, SEO, tracciamento, design, pronto a intervenire su ogni collo di bottiglia. Ogni ottimizzazione possibile, la troviamo e la facciamo. Giorno dopo giorno, ottimizzazione dopo ottimizzazione, arriviamo alla perfezione.',
      },
    ],
    fourMonths: {
      title: 'Perché 4 mesi di tempo per fare tutto?',
      description:
        'Quattro mesi non è il tempo che ci mettiamo a migrare. È il tempo che dedichiamo a seguire tutto a 360°: analizzare, operare, monitorare. Troviamo i colli di bottiglia, controlliamo giorno dopo giorno, perfezioniamo ogni dettaglio. Non un team che consegna e sparisce, ma uno che resta finché tutto funziona come deve.',
    },
    closingLine: 'Non un team che consegna e sparisce.\nUn team che resta finché tutto funziona come deve.',
  },
  pricing: {
    label: 'prezzo',
    heading: 'Un percorso non un servizio.\nLo paghi mentre lo costruiamo.',
    subheading:
      'Niente esborso da migliaia di euro in anticipo. Paghi a step, mentre vedi lo store prendere forma.',
    tiers: [
      { price: '€1.100', slot: 'Primi 10 progetti', tag: 'Esaurito', state: 'completed' },
      { price: '€1.350', slot: 'Fino a 20', tag: 'Prezzo attuale', state: 'current' },
      { price: '€1.700', slot: 'Fino a 30', tag: 'Quasi pieno', state: 'upcoming' },
      { price: '€2.000', slot: 'A regime', tag: 'Prezzo pieno', state: 'upcoming' },
    ],
    priceSuffix: '/mese × 4 mesi',
    priceBadge: 'metodo noprobagency',
    guarantee:
      'Garanzia 30 giorni: se entro 30 giorni il progetto non ti convince, ti rimborsiamo, senza domande.',
    trustLabel: 'Scelti da brand Fashion, Integratori e DTC',
    cardTitle: 'Migrazione Shopify',
    cardDescription:
      'Il percorso completo di 4 mesi: migrazione tecnica, design, tracciamento e SEO. Gestito end to end, con un solo interlocutore.',
    cardChecks: [
      'Migrazione dati, redirect 301 1:1 e nessuna interruzione del sito',
      'Tracciamento server-side, SEO tecnica e design CRO-first',
      'Un solo interlocutore dedicato per tutto il percorso',
    ],
    scarcity:
      'Ogni progetto aggiunge esperienza, metodo, efficienza. È il valore di chi entra dopo. Chi parte ora blocca la tariffa, prima che salga. Nessun countdown: lo slot resta tuo finché c’è.',
    cta: 'Candidati ora',
  },
  faq: {
    label: 'domande frequenti',
    heading: 'Le risposte alle ',
    headingEm: 'domande più comuni',
    subheading:
      'Le obiezioni più comuni prima di migrare a Shopify. Senza giri di parole.',
    items: [
      {
        question: 'Quanto dura davvero la migrazione?',
        answer:
          'Il percorso è di 4 mesi. Le tempistiche si adattano alla complessità, ma il metodo e le fasi restano questi. Ogni progetto ha la sua storia, le sue criticità, le sue difficoltà, e quattro mesi sono il tempo giusto per gestirle tutte e farla bene, senza fretta.',
      },
      {
        question: 'Come funziona la garanzia 30 giorni?',
        answer:
          'Entro 30 giorni, se il progetto non ti convince, ti rimborsiamo. Nel primo mese facciamo il lavoro tecnico e reversibile: vedi lo store prendere forma prima di esserti impegnato del tutto.',
      },
      {
        question: 'Perderò posizionamento su Google?',
        answer:
          'No, se la migrazione è gestita. Redirect 1:1, SEO tecnica, monitoraggio post-lancio: il lavoro è impostato nel dettaglio proprio per evitare penalizzazioni e cali. È il punto su cui lavoriamo di più.',
      },
      {
        question: 'Il mio store resta online durante la migrazione?',
        answer:
          'Sì. Lavoriamo in staging e al go-live il sito non si ferma un secondo. I tuoi clienti non si accorgono di nulla.',
      },
      {
        question: 'Da quali piattaforme migrate?',
        answer:
          'CRM, ERP e gestionali integrati, WooCommerce, PrestaShop, Magento. E store già esistenti da ricostruire.',
      },
      {
        question: 'Chi è il mio referente?',
        answer:
          'Un solo interlocutore dedicato, per tutto il percorso. La stessa persona dall’inizio alla fine. Non un venditore, ma il project manager ed esperto eCommerce del tuo progetto.',
      },
      {
        question: 'Cosa succede dopo i 4 mesi?',
        answer:
          'Dopo la migrazione inizia il lavoro vero. Lo store è su Shopify, solido e pronto: da qui può entrare tutto il team performance per farlo crescere con advertising, email marketing, CRO, ottimizzazione continua. È il passo naturale verso una [gestione completa](/it/team-ecommerce-dedicato).',
      },
      {
        question: 'E se il lavoro finisse prima o dopo i 4 mesi?',
        answer:
          'Prima non può finire: quattro mesi servono proprio a gestire ogni minimo dettaglio, ed è il tempo giusto per fare tutto bene (e per permetterti di rateizzare con serenità). Se avanza tempo, lo investiamo in analisi e strategia performance: abbiamo già il team pronto, quindi iniziamo a studiare come farti crescere. Se invece servisse più tempo, cosa rarissima vista l’esperienza, il team continua a lavorare senza costi aggiuntivi finché non arriviamo al massimo della qualità.',
      },
    ],
  },
}

const en: MigrazioneCopy = {
  hero: {
    trustRatingLabel: '4.9',
    trustSectors: 'Chosen by Fashion, Supplements and DTC eCommerce brands',
    titlePart1: 'Migrate to Shopify without losing ',
    titleEm1: 'sales',
    titleMid: ' or ',
    titleEm2: 'customers',
    titlePart2: '',
    subtitle:
      'Not just “we’ll rebuild your site.” We set up your store on Shopify to sell better: design, tracking, performance, reliability, flexibility, SEO. One point of contact, a confirmation report for every work area, money-back guarantee and maintenance included.',
    microBenefits: ['Never a second offline', '1:1 SEO redirects', '30-day money-back guarantee'],
    cta: 'Apply for your migration',
    trustedCount: 'Chosen by 33+ brands',
  },
  problem: {
    label: 'the problem',
    heading: 'Your platform ',
    headingEm: 'is holding you back',
    description:
      'Switching platforms feels like a huge risk. Staying where you are costs you more, every day, in sales you’re not making. The numbers say so.',
    items: [
      {
        title: 'Rigid platform',
        description:
          'Every change goes through a ticket. Outside of sales periods you can’t really push. The platform decides what you can do, not you.',
      },
      {
        title: 'Fear of migrating',
        description:
          'You’ve heard stories of brands that switched and lost half their organic traffic. It’s the number one fear, and it’s a fair one.',
      },
      {
        title: 'Operational chaos',
        description:
          'Inventory, open orders, returning customers. Switching platforms feels like opening a construction site that blocks everything for months.',
      },
    ],
  },
  solution: {
    label: 'the solution',
    headingPart1: 'An experienced team for a ',
    headingEm: 'managed, predictable migration.',
    description:
      'In a migration, almost everything can be planned for: data, redirects, integrations, SEO. A team that has done them well already knows where the critical points are and covers them before they become problems.',
    items: [
      {
        title: 'Real experience',
        description:
          'Complex migrations and large-scale redirects, done right. We know where to look before we even start.',
      },
      {
        title: 'An expert team',
        description:
          'Development, SEO, tracking, design. When something unexpected comes up you don’t wait for the right freelancer: the team is already there, complete, and steps in right away.',
      },
      {
        title: 'Bottleneck killers',
        description:
          'We find the bottlenecks. And we fix them. The value isn’t doing everything perfectly on the first try. It’s spotting what slows the store down and optimizing it.',
      },
    ],
  },
  charts: {
    label: 'search console',
    title1: 'After every migration, traffic drops. ',
    titleEm: 'What matters is what happens next.',
    subtitle:
      'Google re-processes the site: the drop is physiological. The recovery depends on how the migration is done.',
    axisClicks: 'Clicks',
    axisImpressions: 'Impressions',
    metricClicks: 'Total clicks',
    metricImpressions: 'Total impressions',
    metricCtr: 'Avg CTR',
    metricPosition: 'Avg position',
    checkpoint1: '① Migration',
    checkpoint2: '② Google re-processing',
    foot: 'Same starting point. Opposite outcome. The difference is the method.',
    bad: {
      badge: 'Poorly managed migration',
      note: 'illustrative example',
      caption:
        'Missing redirects, lost URLs. After re-processing, traffic settles lower and doesn’t come back up.',
      ariaLabel: 'Search Console: traffic dropping after migration and settling lower',
      clicks: '28.4K',
      impressions: '1.84M',
      ctr: '1.1%',
      position: '42.8',
    },
    good: {
      badge: 'Migration managed by us',
      note: 'real Cumini data',
      caption:
        '1:1 redirects mapped upfront. Brief settling, then Google finds everything again and the site grows. Continuous post-launch monitoring and fast fixes.',
      ariaLabel: 'Search Console: slight drop after migration then strong growth',
      clicks: '99.3K',
      impressions: '3.91M',
      ctr: '2.5%',
      position: '9.6',
    },
  },
  process: {
    label: 'how we work',
    headingPart1: '4 months to ',
    headingEm: 'do it all.',
    description:
      'Three phases, one logical order. No rush, no limbo. The time to look after every detail.\nThe flow tested and confirmed over 10+ projects.',
    phases: [
      {
        number: '01',
        title: 'Analysis',
        duration: 'first ~15 days',
        description:
          'We understand every detail of your store: data, products, orders, customers, URLs, integrations, SEO issues. We map everything before touching anything. Nothing starts until we know exactly where to put our hands, and we set up an efficient way to communicate with you.',
      },
      {
        number: '02',
        title: 'Execution',
        duration: '~55 days',
        description:
          'The build phase. Product and order migration, staging setup, 1:1 redirect plan, server-side tracking, custom design and store development. The new store takes shape, piece by piece. Every step is shared and approved before the official launch.',
      },
      {
        number: '03',
        title: 'Monitoring',
        duration: '~50 days',
        description:
          'Go-live, then continuous oversight. The full team stays on every front: development, SEO, tracking, design, ready to act on every bottleneck. Every possible optimization, we find it and we do it. Day after day, optimization after optimization, we get to perfection.',
      },
    ],
    fourMonths: {
      title: 'Why 4 months to do everything?',
      description:
        'Four months isn’t how long it takes us to migrate. It’s the time we dedicate to following everything end to end: analyze, execute, monitor. We find the bottlenecks, check day after day, perfect every detail. Not a team that delivers and disappears, but one that stays until everything works the way it should.',
    },
    closingLine:
      'Not a team that delivers and disappears.\nA team that stays until everything works the way it should.',
  },
  pricing: {
    label: 'pricing',
    heading: 'A journey, not a service.\nYou pay as we build it.',
    subheading:
      'No thousands of euros up front. You pay step by step, while you watch your store take shape.',
    tiers: [
      { price: '€1,100', slot: 'First 10 projects', tag: 'Sold out', state: 'completed' },
      { price: '€1,350', slot: 'Up to 20', tag: 'Current price', state: 'current' },
      { price: '€1,700', slot: 'Up to 30', tag: 'Almost full', state: 'upcoming' },
      { price: '€2,000', slot: 'At full capacity', tag: 'Full price', state: 'upcoming' },
    ],
    priceSuffix: '/month × 4 months',
    priceBadge: 'noprobagency method',
    guarantee:
      '30-day guarantee: if you’re not convinced within 30 days, we refund you, no questions asked.',
    trustLabel: 'Chosen by Fashion, Supplements and DTC brands',
    cardTitle: 'Shopify Migration',
    cardDescription:
      'The complete 4-month journey: technical migration, design, tracking and SEO. Managed end to end, with one point of contact.',
    cardChecks: [
      'Data migration, 1:1 301 redirects and no site interruption',
      'Server-side tracking, technical SEO and CRO-first design',
      'One dedicated point of contact for the whole journey',
    ],
    scarcity:
      'Every project adds experience, method, efficiency. That’s the value for whoever comes next. Whoever starts now locks in the rate before it goes up. No countdown: your slot stays yours as long as it’s there.',
    cta: 'Apply now',
  },
  faq: {
    label: 'faq',
    heading: 'Answers to the ',
    headingEm: 'most common questions',
    subheading: 'The most common objections before migrating to Shopify. No fluff.',
    items: [
      {
        question: 'How long does the migration really take?',
        answer:
          'The journey is 4 months. Timing adapts to complexity, but the method and phases stay the same. Every project has its own story, its own challenges, and four months is the right amount of time to handle them all and do it well, without rushing.',
      },
      {
        question: 'How does the 30-day guarantee work?',
        answer:
          'Within 30 days, if you’re not convinced, we refund you. In the first month we do the technical, reversible work: you see the store take shape before you’re fully committed.',
      },
      {
        question: 'Will I lose my Google rankings?',
        answer:
          'No, if the migration is managed. 1:1 redirects, technical SEO, post-launch monitoring: the work is set up in detail precisely to avoid penalties and drops. It’s what we work on most.',
      },
      {
        question: 'Does my store stay online during the migration?',
        answer:
          'Yes. We work in staging, and at go-live the site doesn’t stop for a second. Your customers don’t notice a thing.',
      },
      {
        question: 'Which platforms do you migrate from?',
        answer:
          'CRM, ERP and integrated management systems, WooCommerce, PrestaShop, Magento. And existing stores that need rebuilding.',
      },
      {
        question: 'Who is my point of contact?',
        answer:
          'One dedicated point of contact, for the whole journey. The same person from start to finish. Not a salesperson, but the project manager and eCommerce expert for your project.',
      },
      {
        question: 'What happens after the 4 months?',
        answer:
          'After the migration the real work begins. The store is on Shopify, solid and ready: from here the full performance team can step in to grow it with advertising, email marketing, CRO, continuous optimization. It’s the natural step toward [complete management](/data-driven-team).',
      },
      {
        question: 'What if the work finishes before or after the 4 months?',
        answer:
          'It can’t finish earlier: four months is exactly what’s needed to handle every last detail, and it’s the right time to do everything well (and to let you pay in installments with peace of mind). If there’s time left over, we invest it in analysis and performance strategy: we already have the team ready, so we start studying how to grow you. If it needs more time, which is extremely rare given our experience, the team keeps working at no extra cost until we reach the highest quality.',
      },
    ],
  },
}

const dictionaries: Record<Locale, MigrazioneCopy> = { it, en }

export function getMigrazioneCopy(locale: Locale): MigrazioneCopy {
  return dictionaries[locale]
}
