import type { Locale } from '@/lib/i18n'

/**
 * Copy module for the IT-only "Migrazione a Shopify" landing page
 * (route: /it/migrazione-shopify).
 *
 * It is isolated from the large shared dictionary in `lib/i18n/index.ts` to keep
 * that file stable, while still following the house i18n convention: a typed,
 * locale-keyed object consumed through a `get*` accessor. Only `seo.migrazioneShopify`
 * lives in the shared dictionary (so `buildMetadata({ pageKey })` keeps working).
 *
 * EN: the page ships in Italian only for now. `en` mirrors `it` as a structural
 * placeholder so the module is ready for English translation when the EN route
 * is created. Replace the `en` object with real English copy at that point.
 */

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
  charts: {
    bridge: string
  }
  solution: {
    label: string
    headingPart1: string
    headingEm: string
    description: string
    items: { title: string; description: string }[]
  }
  process: {
    label: string
    headingPart1: string
    headingEm: string
    description: string
    phases: { number: string; title: string; description: string }[]
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
  socialProof: {
    bridgeLine: string
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
    titleMid: ', ',
    titleEm2: 'clienti',
    titlePart2: ' o posizioni su Google',
    subtitle:
      'Un percorso completo di 4 mesi che porta il tuo eCommerce su Shopify: gestione tecnica, design, tracciamento e SEO. Con un solo interlocutore.',
    microBenefits: ['Zero downtime garantito', 'Redirect SEO 1:1', 'Garanzia 30 giorni'],
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
          'Ogni modifica passa da un ticket. Fuori dai saldi è difficile spingere davvero. La piattaforma decide cosa puoi fare, non tu.',
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
  charts: {
    bridge:
      'Il calo dopo la migrazione è inevitabile. Che diventi permanente o un semplice assestamento dipende da una cosa sola: il metodo con cui si migra.',
  },
  solution: {
    label: 'la soluzione',
    headingPart1: 'Non un trasloco. ',
    headingEm: 'Una migrazione gestita.',
    description:
      'La differenza tra un brand che cresce dopo la migrazione e uno che si blocca non è la piattaforma. È come ci si arriva.',
    items: [
      {
        title: 'Continuità totale',
        description:
          'Zero downtime, redirect 1:1 mappati a monte, tracciamento che non si perde un colpo. I tuoi clienti non si accorgono del cambio. Google nemmeno.',
      },
      {
        title: 'Team completo, guidato da te',
        description:
          'Sviluppo, design, SEO, tracciamento. Un team intero coordinato da un eCommerce Manager dedicato. Tu non assembli freelancer.',
      },
      {
        title: 'Un solo interlocutore',
        description:
          'Parli sempre con la stessa persona. Niente ticket, niente account junior, niente brief ripetuti a cinque fornitori diversi.',
      },
    ],
  },
  process: {
    label: 'come lavoriamo',
    headingPart1: 'Cinque fasi, ',
    headingEm: 'un ordine logico.',
    description:
      'Niente scadenze a giorno per impressionarti. Un metodo costruito per fare le cose nell’ordine giusto, senza sorprese.',
    phases: [
      {
        number: '01',
        title: 'Audit e accessi',
        description:
          'Analisi della piattaforma attuale, mappatura di prodotti, ordini, clienti, URL e criticità SEO. Raccolta accessi.',
      },
      {
        number: '02',
        title: 'Migrazione, redirect e tracciamento',
        description:
          'Setup ambiente Shopify in staging, migrazione dati, piano redirect 301 completo, tracciamento server-side (GA4, Meta CAPI, GTM).',
      },
      {
        number: '03',
        title: 'Design su misura',
        description:
          'Costruzione del tema, homepage e schede prodotto in ottica conversione, UX mobile, struttura collezioni.',
      },
      {
        number: '04',
        title: 'Integrazioni e SEO',
        description:
          'Connessioni gestionale, ERP e CRM, app necessarie, ottimizzazione SEO on-page e tecnica, QA su tutti i flussi.',
      },
      {
        number: '05',
        title: 'Lancio e supporto',
        description:
          'Go-live con zero downtime, monitoraggio di ranking e traffico post-migrazione, supporto e ottimizzazione continua.',
      },
    ],
    closingLine: 'Quattro mesi per fare le cose bene. Non un mese in fretta, non sei mesi nel limbo.',
  },
  pricing: {
    label: 'prezzo',
    heading: 'Il prezzo di lancio sale man mano che si riempiono gli slot',
    subheading:
      'Più progetti entrano, più la tariffa cresce. Chi entra ora blocca quella più bassa.',
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
      'Migrazione dati, redirect 301 1:1 e zero downtime',
      'Tracciamento server-side, SEO tecnica e design CRO-first',
      'Un solo interlocutore dedicato per tutto il percorso',
    ],
    scarcity:
      'Il prezzo di lancio è riservato ai primi progetti. Più si riempiono gli slot, più il prezzo sale: chi entra ora blocca la tariffa più bassa. Nessun countdown: lo slot resta tuo finché c’è.',
    cta: 'Candidati ora',
  },
  socialProof: {
    bridgeLine:
      'Lo stesso metodo lo applichiamo su integratori, food, profumeria e altri eCommerce B2C. Il fashion è dove l’abbiamo dimostrato più a lungo.',
  },
  faq: {
    label: 'domande frequenti',
    heading: 'Le risposte alle ',
    headingEm: 'domande che ti stai facendo',
    subheading:
      'Le obiezioni più comuni prima di migrare a Shopify. Senza giri di parole.',
    items: [
      {
        question: 'Quanto dura davvero la migrazione?',
        answer:
          'Quattro mesi è il percorso completo. Le tempistiche si adattano alla complessità del progetto, ma il metodo e le fasi restano questi: nessuna fase viene saltata per fare prima.',
      },
      {
        question: 'Come funziona la garanzia 30 giorni?',
        answer:
          'Entro 30 giorni dall’inizio, se non sei convinto del lavoro, ti rimborsiamo quanto versato. Senza discussioni.',
      },
      {
        question: 'Perderò posizionamento su Google?',
        answer:
          'No, se la migrazione è gestita: redirect 1:1 mappati a monte, SEO tecnica curata e monitoraggio post-lancio. È esattamente il punto su cui lavoriamo, e quello che separa una migrazione riuscita da una sbagliata.',
      },
      {
        question: 'Il mio store resta online durante la migrazione?',
        answer:
          'Sì. Lavoriamo in staging e il go-live è a zero downtime. I clienti continuano ad acquistare sul sito attuale fino allo switch, e non si accorgono di nulla.',
      },
      {
        question: 'Da quali piattaforme migrate?',
        answer:
          'Atelier e gestionali integrati, WooCommerce, PrestaShop, Magento, e store Shopify già esistenti da rifare da capo.',
      },
      {
        question: 'Chi è il mio referente?',
        answer:
          'Un solo interlocutore dedicato per tutto il percorso. Niente ticket, niente account junior, niente brief ripetuti a fornitori diversi.',
      },
      {
        question: 'Cosa succede dopo i 4 mesi?',
        answer:
          'Puoi proseguire con la gestione continuativa del tuo store, se ha senso per te. Non resti mai solo, ma non sei vincolato a nulla.',
      },
    ],
  },
}

const dictionaries: Record<Locale, MigrazioneCopy> = {
  it,
  // EN placeholder: mirrors IT until the English route ships. See file header.
  en: it,
}

export function getMigrazioneCopy(locale: Locale): MigrazioneCopy {
  return dictionaries[locale]
}
