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
      'Migrazione dati, redirect 301 1:1 e zero downtime',
      'Tracciamento server-side, SEO tecnica e design CRO-first',
      'Un solo interlocutore dedicato per tutto il percorso',
    ],
    scarcity:
      'Ogni progetto aggiunge esperienza, metodo, efficienza. È il valore di chi entra dopo. Chi parte ora blocca la tariffa, prima che salga. Nessun countdown: lo slot resta tuo finché c’è.',
    cta: 'Candidati ora',
  },
  socialProof: {
    bridgeLine:
      'Lo stesso metodo lo applichiamo su integratori, food, profumeria e altri eCommerce B2C. Il fashion è dove l’abbiamo dimostrato più a lungo.',
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

const dictionaries: Record<Locale, MigrazioneCopy> = {
  it,
  // EN placeholder: mirrors IT until the English route ships. See file header.
  en: it,
}

export function getMigrazioneCopy(locale: Locale): MigrazioneCopy {
  return dictionaries[locale]
}
