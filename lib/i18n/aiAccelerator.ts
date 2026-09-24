import type { Locale } from '@/lib/i18n'

/**
 * Copy module for the "AI Accelerator" landing page (v2, B2B positioning).
 * Routes: it -> /it/ai-accelerator, en -> /ai-accelerator.
 *
 * Follows the same convention as `lib/i18n/migrazione.ts`: a typed,
 * locale-keyed object consumed through a `get*` accessor, isolated from the
 * shared dictionary. Only `seo.aiAccelerator` lives in `lib/i18n/index.ts`.
 *
 * IT copy rules (v2): no "business" (use azienda/attività/eCommerce),
 * "call" -> "videochiamate" (only exception: "pre-call"), "noi" voice
 * everywhere except "Chi ti segue" (third person).
 */

/** Feature flag: show the "NEW" badge next to the AI Accelerator nav item. */
export const AI_NAV_SHOW_NEW_BADGE = true

type QuestionCards = { label: string; options: string[] }

export type AiCopy = {
  hero: {
    eyebrow: string
    titleLine1: string
    titleLine2Pre: string
    titleEm1: string
    titleMid1: string
    titleEm2: string
    titleMid2: string
    titleEm3: string
    titleEnd: string
    leadLine: string
    subtitle: string
    benefits: string[]
    cta: string
    ctaNote: string
    trustRatingLabel: string
    trustLine: string
  }
  problem: {
    label: string
    headingPart1: string
    headingEm: string
    headingEnd: string
    intro: string
    items: { title: string; description: string }[]
  }
  audience: {
    label: string
    headingPart1: string
    headingEm: string
    headingEnd: string
    intro: string
    cards: { title: string; description: string }[]
    notForTitle: string
    notForItems: string[]
  }
  solution: {
    label: string
    headingPart1: string
    headingEm: string
    headingEnd: string
    intro: string
    items: { title: string; description: string }[]
  }
  start: {
    heading: string
    steps: { title: string; description: string }[]
  }
  timeline: {
    label: string
    headingPart1: string
    headingEm: string
    headingEnd: string
    intro: string
    goalBox: { title: string; text: string }
    phaseLabel: string
    phases: {
      number: string
      title: string
      week: string
      description: string
      outputLabel: string
      output: string
    }[]
    note: { title: string; text: string }
    tagline: string
  }
  deliverables: {
    label: string
    headingPart1: string
    headingEm: string
    headingEnd: string
    cards: { title: string; description: string }[]
    extra: string
  }
  scope: {
    headingPart1: string
    headingEm: string
    headingEnd: string
    includedTitle: string
    included: string[]
    excludedTitle: string
    excluded: string[]
    note: string
  }
  contrast: {
    label: string
    headingPart1: string
    headingEm: string
    headingEnd: string
    intro: string
    left: { tag: string; items: string[] }
    right: { tag: string; items: string[] }
    closing: string
  }
  who: {
    label: string
    headingPart1: string
    headingEm: string
    headingEnd: string
    text1: string
    text2: string
    imageAlt: string
  }
  caseStudyHeading: { part1: string; em: string; end: string }
  pricing: {
    label: string
    headingPart1: string
    headingEm: string
    headingEnd: string
    intro: string
    tiers: { price: string; slot: string; tag: string; state: 'completed' | 'current' | 'upcoming' }[]
    tiersNote: string
    card: {
      title: string
      subtitle: string
      features: string[]
      badge: string
      price: string
      priceSuffix: string
      priceNote: string
      cta: string
    }
    trustLine: string
    trustLine2: string
  }
  after: {
    label: string
    headingPart1: string
    headingEm: string
    headingEnd: string
    intro: string
    cards: { title: string; description: string }[]
    note: string
  }
  testimonialsHeading: string
  faq: {
    label: string
    heading: string
    headingEm: string
    subheading: string
    items: { question: string; answer: string }[]
  }
  form: {
    title: string
    subtitle: string
    stepLabel: string
    back: string
    continue: string
    step1: {
      title: string
      qRevenue: { label: string; helper: string; options: string[] }
      qBusiness: QuestionCards
      qRole: QuestionCards
    }
    step2: { title: string; qUsage: QuestionCards; qPain: { label: string; placeholder: string } }
    step3: {
      title: string
      fields: {
        name: { label: string; placeholder: string }
        email: { label: string; placeholder: string }
        legalName: { label: string; placeholder: string }
        vatNumber: { label: string; placeholder: string; helper: string }
        website: { label: string; placeholder: string }
      }
      privacyBefore: string
      privacyLinkLabel: string
      submit: string
      submitting: string
      micro: string
    }
    errors: {
      choice: string
      pain: string
      name: string
      email: string
      legalName: string
      vat: string
      privacy: string
    }
    errorGeneric: string
    errorNetwork: string
    success: { title: string; text: string }
    /** Under-threshold block shown when monthly revenue is below the minimum. */
    dq: { title: string; text: string; blogCta: string; blogHref: string; back: string }
  }
  finalCta: { heading: string; text: string; cta: string }
  sticky: { priceLine: string; cta: string }
}

const it: AiCopy = {
  hero: {
    eyebrow: 'AI Accelerator · Percorso one-to-one di 30 giorni per aziende ed eCommerce',
    titleLine1: 'Smetti di rincorrere tool e novità.',
    titleLine2Pre: 'In 30 giorni sai come usare l’AI per ',
    titleEm1: 'risparmiare tempo',
    titleMid1: ', ',
    titleEm2: 'acquisire clienti',
    titleMid2: ' e ',
    titleEm3: 'vendere di più',
    titleEnd: '.',
    leadLine:
      'Ogni settimana esce un modello nuovo. Noi facciamo il contrario: studiamo la tua azienda one-to-one e costruiamo un piano AI su misura, sull’obiettivo che conta per te: tempo, clienti o fatturato.',
    subtitle:
      'Non un corso, non un guru, non un altro abbonamento. Un mese di lavoro one-to-one sulla tua azienda, con chi lo fa di mestiere ogni giorno. Analizziamo acquisizione, vendite, processi e strumenti, poi decidiamo insieme quali soluzioni AI adottare, in che ordine e con quale obiettivo. Prima il contesto, poi gli strumenti.',
    benefits: ['One-to-one, su misura', '4 videochiamate in 30 giorni', 'Prezzo fisso, zero vincoli'],
    cta: 'Candida la tua azienda',
    ctaNote:
      'Per aziende ed eCommerce già avviati, con almeno €30.000 di fatturato al mese. Valutiamo ogni candidatura.',
    trustRatingLabel: '4,9',
    trustLine: 'Scelti da brand eCommerce, aziende e team marketing',
  },
  problem: {
    label: 'il problema',
    headingPart1: 'Troppa AI, ',
    headingEm: 'nessun sistema',
    headingEnd: '.',
    intro:
      'Ogni settimana esce un tool nuovo, ogni giorno qualcuno ti spiega che sei in ritardo. Intanto il tempo passa, il team fa le stesse cose a mano e l’AI resta un esperimento. Il problema non è la mancanza di strumenti: è l’eccesso.',
    items: [
      {
        title: 'Sovraccarico di informazioni',
        description:
          'Video, newsletter, thread, corsi. Mille consigli che si contraddicono e nessun punto di partenza. Più studi, più sei confuso.',
      },
      {
        title: 'Tool provati e abbandonati',
        description:
          'Abbonamenti attivati con entusiasmo e lasciati lì dopo due settimane. Ogni tool risolve un pezzo, nessuno parla con l’altro.',
      },
      {
        title: 'Tempo perso in attività ripetitive',
        description:
          'Preventivi, report, contenuti, email, passaggi manuali. Il team è sommerso da lavoro che una macchina potrebbe fare in minuti.',
      },
      {
        title: 'Consulenti poco trasparenti',
        description:
          'Prezzi fuori scala, nessuna referenza, promesse vaghe. Hai paura di spendere e ritrovarti con un PDF generico e nessun risultato.',
      },
    ],
  },
  solution: {
    label: 'la soluzione',
    headingPart1: 'Un partner, ',
    headingEm: 'non un guru',
    headingEnd: '.',
    intro:
      'Non ti insegniamo cose che potresti studiare da solo e non ti riempiamo di tool strani. Entriamo nella tua azienda: studiamo dati, processi e come funziona ogni area, poi costruiamo il piano per portare l’AI nei processi giusti. Per velocizzarli, automatizzarli o standardizzarli, con un obiettivo preciso: un risultato misurabile in tempo o in soldi.',
    items: [
      {
        title: 'Contesto prima dei tool',
        description:
          'L’AI senza contesto produce risposte generiche. Partiamo da come funziona la tua azienda (offerta, clienti, acquisizione, vendite, processi) e solo dopo scegliamo gli strumenti.',
      },
      {
        title: 'Dati e processi, non teoria',
        description:
          'Guardiamo i tuoi numeri, i tuoi strumenti e il lavoro reale del team, settimana dopo settimana. Ogni scelta nasce da quello che vediamo, non da una tendenza.',
      },
      {
        title: 'Marketing, vendite, tech e AI insieme',
        description:
          'Un solo partner che conosce acquisizione, sito, dati, tracciamenti e automazioni. Niente tre fornitori che non si parlano.',
      },
      {
        title: 'Autonomia, non dipendenza',
        description:
          'A fine mese il tuo team sa andare avanti da solo, con priorità chiare, procedure scritte e un documento di contesto che resta a te.',
      },
    ],
  },
  audience: {
    label: 'per chi è',
    headingPart1: 'Per chi usa l’AI, ma ',
    headingEm: 'non di mestiere',
    headingEnd: '.',
    intro:
      'Il tuo lavoro non è studiare ogni settimana gli aggiornamenti dell’AI: è far crescere la tua azienda. Che tu sia già pratico o parta quasi da zero, l’AI deve lavorare per te, nei punti giusti.',
    cards: [
      {
        title: 'Founder e titolari',
        description:
          'Guidi un’azienda, un eCommerce avviato o una PMI. Usi ChatGPT o Claude a spot, senti che potresti fare molto di più ma non sai da dove partire. Vuoi più clienti e meno ore perse, non un nuovo hobby.',
      },
      {
        title: 'Uffici marketing',
        description:
          'Lavori nel marketing di un’azienda strutturata. Ti chiedono di “integrare l’AI”, ma nessuno ti ha detto come. Vuoi un metodo chiaro, strumenti scelti con criterio e processi che il team possa seguire.',
      },
    ],
    notForTitle: 'Non fa per te se…',
    notForItems: [
      'sei una startup, un privato o fatturi meno di €30.000 al mese',
      'cerchi il “prompt magico” che risolve tutto',
      'vuoi un corso generico uguale per tutti',
      'vuoi delegare tutto senza coinvolgere il team',
    ],
  },
  start: {
    heading: 'Come si accede',
    steps: [
      {
        title: 'Candidatura e pre-call',
        description:
          'Ci racconti la tua azienda o il tuo eCommerce e cosa vuoi ottenere. Lavoriamo solo con aziende ed eCommerce già avviati, con almeno €30.000 di fatturato al mese: valutiamo ogni candidatura e, se c’è fit, ti confermiamo una pre-call di 40 minuti per analizzare il bisogno e capire insieme se il percorso è quello giusto.',
      },
      {
        title: 'Kick-off',
        description:
          'Prima videochiamata fissata: impostiamo il mese (calendario delle 4 videochiamate, accessi agli strumenti, task manager condiviso) e iniziamo a esplorare l’azienda.',
      },
      {
        title: 'Partenza',
        description:
          '4 settimane di lavoro one-to-one, una videochiamata a settimana, con contatto diretto nel mezzo.',
      },
    ],
  },
  timeline: {
    label: 'come lavoriamo',
    headingPart1: '30 giorni per ',
    headingEm: 'fare chiarezza',
    headingEnd: '.',
    intro:
      '4 videochiamate da circa 60 minuti, una a settimana. Ogni videochiamata scava un’area, raccoglie dati e porta al livello successivo. In mezzo: contatto diretto via email e messaggi e un task manager condiviso.',
    goalBox: {
      title: 'L’obiettivo del mese',
      text: 'Mappare tutta la tua attività (numeri, KPI, processi e opportunità), metterla in ordine di priorità insieme a te e trovare il primo collo di bottiglia da attaccare con l’AI. La soluzione può essere un processo automatico, un messaggio automatico o un intervento tecnico: lo decidiamo quando le priorità sono chiare. Prima capiamo cosa conta, poi agiamo.',
    },
    phaseLabel: 'Fase',
    phases: [
      {
        number: '01',
        title: 'Contesto e obiettivi',
        week: 'Settimana 1',
        description:
          'Costruiamo il quadro completo della tua azienda o del tuo eCommerce: modello, offerta, clienti ideali, team e ruoli, numeri e KPI, obiettivi a 6-12 mesi e uso attuale dell’AI. Prima della videochiamata compili un breve questionario e ci dai gli accessi principali. Dopo, il team annota per 5 giorni le attività ripetitive e il tempo che richiedono: è la base per misurare il tempo che recuperiamo.',
        outputLabel: 'Output',
        output: 'Mappa dell’azienda, KPI di partenza e prima bozza del Context Document.',
      },
      {
        number: '02',
        title: 'Acquisizione, vendite e retention',
        week: 'Settimana 2',
        description:
          'Capiamo come arrivano oggi i clienti, come comprano e come tornano, e dove si perdono opportunità: canali attivi e storico dei risultati, posizionamento e comunicazione, sito, tracciamenti e dati, processo commerciale, fidelizzazione e clienti di ritorno.',
        outputLabel: 'Output',
        output: 'Diagnosi di acquisizione, vendite e retention, con opportunità e aree critiche.',
      },
      {
        number: '03',
        title: 'Operatività e AI',
        week: 'Settimana 3',
        description:
          'Troviamo dove si perde tempo e dove l’AI porta un vantaggio concreto: processi chiave (preventivi, gestione clienti, contenuti, customer care, reportistica), strumenti in uso, cosa adottare e cosa evitare. Parte pratica: in videochiamata impostiamo insieme fino a 2 quick win scelte tra quelle a maggiore impatto.',
        outputLabel: 'Output',
        output: 'Mappa dei colli di bottiglia, strumenti consigliati, prime soluzioni AI già attive.',
      },
      {
        number: '04',
        title: 'Priorità e roadmap',
        week: 'Settimana 4',
        description:
          'Mettiamo tutto in fila nel documento finale: tutte le opportunità e tutto ciò che si può implementare con l’AI, in ordine di impatto e impegno, con la roadmap a 90 giorni, i protocolli operativi e il Context Document. Da qui sei autonomo: puoi andare avanti da solo. Continuare a lavorare insieme è un’opzione, non un obbligo.',
        outputLabel: 'Output',
        output: 'Documento delle priorità, roadmap a 90 giorni, protocolli e Context Document.',
      },
    ],
    note: {
      title: 'Perché un mese e non una videochiamata?',
      text: 'Perché per portare l’AI nei punti giusti dobbiamo conoscere davvero la tua azienda: entrare nei suoi meccanismi, vedere settimana dopo settimana cosa cambia, cosa c’è e cosa manca. Nel mese ci sono piccoli compiti interni e piccoli test sul campo. L’implementazione è la parte veloce: il tempo serve a lavorare in sintonia con il tuo team e a capire cosa conta davvero. Più fino a 2 videochiamate extra, se servono.',
    },
    tagline:
      'Non ti lasciamo una lista di tool. Ti lasciamo priorità chiare e un sistema per andare avanti da solo.',
  },
  deliverables: {
    label: 'cosa ricevi',
    headingPart1: 'Tre strumenti di lavoro, ',
    headingEm: 'non un PDF nel cassetto',
    headingEnd: '.',
    cards: [
      {
        title: 'Documento delle priorità e roadmap',
        description:
          'Il documento finale del percorso: situazione di ogni area, colli di bottiglia e tempo recuperabile, tutte le opportunità e tutto ciò che si può implementare con l’AI in ordine di impatto e impegno, strumenti consigliati e da evitare con costi indicativi, rischi su dati e privacy, roadmap a 90 giorni con priorità e responsabili, KPI da monitorare.',
      },
      {
        title: 'Protocolli operativi',
        description:
          'Procedure passo per passo per le attività prioritarie: cosa fare, con quale strumento, con quali istruzioni (prompt) e come verificare il risultato. Diventano parte dei tuoi processi e tutto il team lavora allo stesso modo.',
      },
      {
        title: 'Context Document aziendale',
        description:
          'Il documento che descrive la tua azienda (offerta, clienti, tono di voce, processi, numeri) strutturato per ChatGPT, Claude e simili. Trasforma risposte generiche in risposte su misura, e lo usi ogni giorno, anche dopo di noi.',
      },
    ],
    extra:
      'In più: le prime soluzioni AI (fino a 2 quick win) impostate insieme durante il mese, già attive nel lavoro quotidiano. E alla fine sei autonomo: continuare insieme è un’opzione, non un obbligo.',
  },
  scope: {
    headingPart1: 'Chiaro fin dall’inizio: ',
    headingEm: 'cosa è incluso',
    headingEnd: '.',
    includedTitle: 'Incluso',
    included: [
      '4 videochiamate da circa 60 minuti + fino a 2 videochiamate extra',
      'Contatto diretto via email e messaggi per 30 giorni, risposta entro 1 giorno lavorativo',
      'Task manager condiviso e riepilogo scritto dopo ogni videochiamata',
      'Analisi dell’azienda: acquisizione, sito e dati, processi e strumenti',
      'Fino a 2 quick win impostate insieme',
      'Documento delle priorità, protocolli operativi e Context Document, che restano tuoi',
    ],
    excludedTitle: 'Non incluso',
    excluded: [
      'Sviluppo di siti, software o automazioni oltre le quick win',
      'Gestione delle campagne e budget pubblicitario',
      'Produzione di contenuti (foto, video, testi)',
      'Acquisto di licenze e abbonamenti AI',
      'Corsi preregistrati o formazione generica',
    ],
    note: 'Tutto ciò che emerge come prossimo passo lo valutiamo insieme, con una proposta separata e solo se ha senso.',
  },
  contrast: {
    label: 'la differenza',
    headingPart1: 'Stessi strumenti. ',
    headingEm: 'Risultato opposto',
    headingEnd: '.',
    intro: 'L’AI è la stessa per tutti. Cambia il modo in cui la usi.',
    left: {
      tag: '↓ AI senza contesto',
      items: [
        'Prompt generici, risposte generiche',
        'Un tool diverso per ogni problema',
        'Abbonamenti che si accumulano',
        'Ognuno nel team fa a modo suo',
        'Tempo speso a sperimentare, non a produrre',
      ],
    },
    right: {
      tag: '↑ AI con contesto',
      items: [
        'Il Context Document guida ogni risposta',
        'Pochi strumenti, scelti per un motivo',
        'Costi sotto controllo',
        'Procedure condivise da tutto il team',
        'Ore recuperate ogni settimana, reinvestite in clienti',
      ],
    },
    closing: 'Stesso punto di partenza. Esito opposto. La differenza è il metodo.',
  },
  who: {
    label: 'chi ti segue',
    headingPart1: 'Un solo interlocutore, ',
    headingEm: 'dall’inizio alla fine',
    headingEnd: '.',
    text1:
      'Antonio Manitta, fondatore di NoProb Agency. Nasce sviluppatore (laurea in Informatica), diventa eCommerce manager e oggi guida un’agenzia che costruisce e fa crescere eCommerce e aziende in settori molto diversi: moda di lusso, food, integratori, B2B industriale. Usa l’AI ogni giorno per far lavorare agenti, dashboard e processi della propria agenzia.',
    text2:
      'È questa visione a 360° (acquisizione, vendite, tecnologia, dati e AI) che permette di capire dove l’AI va implementata subito e dove invece serve ancora una persona.',
    imageAlt: 'Antonio Manitta, fondatore di NoProb Agency',
  },
  caseStudyHeading: {
    part1: 'Cosa succede quando la tecnologia incontra ',
    em: 'l’esecuzione',
    end: '.',
  },
  pricing: {
    label: 'prezzo',
    headingPart1: 'Un prezzo fisso. ',
    headingEm: 'Nessun conteggio a ore',
    headingEnd: '.',
    intro:
      'A ore si contano i minuti e si evita di fare domande. Con un prezzo fisso usi il percorso fino in fondo e sai dall’inizio quanto investi. Il prezzo sale man mano che il metodo si consolida con nuovi clienti: chi entra ora blocca la tariffa.',
    tiers: [
      { price: '€750', slot: 'Fase MVP · Primi clienti pilota', tag: 'Chiuso', state: 'completed' },
      { price: '€1.100', slot: 'Post-MVP · Fino al 15° cliente', tag: 'Disponibile ora', state: 'current' },
      { price: '€2.500', slot: 'Clienti 16-30', tag: 'Prossimo scaglione', state: 'upcoming' },
      { price: '€4.000', slot: 'Dal 31° in poi', tag: 'Prezzo a regime', state: 'upcoming' },
    ],
    tiersNote:
      'Ogni percorso aggiunge metodo, modelli ed esperienza: è il valore di chi entra dopo. Nessun countdown: lo slot resta tuo finché c’è.',
    card: {
      title: 'AI Accelerator',
      subtitle:
        'Il percorso one-to-one di 30 giorni: priorità, roadmap e prime soluzioni AI attive. Un solo interlocutore.',
      features: ['4 videochiamate + fino a 2 extra', '3 deliverable che restano tuoi', '2 quick win impostate insieme'],
      badge:
        'Zero rischio d’ingresso: pre-call gratuita, prezzo fisso, nessun rinnovo automatico. Paghi il 50% alla firma e il 50% alla consegna.',
      price: '€1.100',
      priceSuffix: 'una tantum',
      priceNote: '€550 alla firma + €550 alla consegna',
      cta: 'Candida la tua azienda',
    },
    trustLine: 'Leggiamo ogni candidatura e rispondiamo entro 1 giorno lavorativo.',
    trustLine2: 'Solo aziende ed eCommerce con almeno €30.000 di fatturato al mese.',
  },
  after: {
    label: 'e dopo?',
    headingPart1: 'Il mese finisce. ',
    headingEm: 'Il percorso no',
    headingEnd: '.',
    intro:
      'AI Accelerator è l’audit iniziale: mette ordine, toglie il superfluo e ti fa lavorare solo su ciò che serve davvero. Dopo, sei autonomo. Se vuoi, andiamo avanti insieme.',
    cards: [
      {
        title: 'Autonomia',
        description:
          'Hai roadmap, protocolli e Context Document: il tuo team applica il piano da solo. Nessun vincolo, nessun rinnovo automatico.',
      },
      {
        title: 'Affiancamento continuo',
        description:
          'Restiamo al tuo fianco mese per mese: videochiamate periodiche, aggiornamenti sui nuovi strumenti che contano davvero, supporto quando serve e revisione della roadmap. L’AI cambia ogni mese: tu resti aggiornato senza inseguirla.',
      },
      {
        title: 'Implementazione',
        description:
          'Automazioni, agenti AI, sito, tracciamenti, campagne: se un intervento della roadmap richiede un team operativo, lo realizziamo noi con una proposta dedicata.',
      },
    ],
    note: 'Le opzioni 2 e 3 sono su proposta, definite insieme nella videochiamata finale in base a ciò che è emerso.',
  },
  testimonialsHeading: 'Scelti da imprenditori affermati',
  faq: {
    label: 'domande frequenti',
    heading: 'Le risposte alle ',
    headingEm: 'domande più comuni',
    subheading: 'Le domande più comuni prima di partire. Senza giri di parole.',
    items: [
      {
        question: 'Lavorate anche con startup o privati?',
        answer:
          'No. Lavoriamo con aziende ed eCommerce già avviati, con almeno €30.000 di fatturato al mese e processi da migliorare. Sotto questa soglia l’investimento difficilmente si ripaga: per questo valutiamo ogni candidatura prima della pre-call.',
      },
      {
        question: 'Serve essere tecnici?',
        answer:
          'No. Il percorso si adatta al tuo livello: se sei già pratico ottieni metodo e priorità, se parti da zero una base solida. Documento e protocolli sono scritti per essere compresi da chiunque.',
      },
      {
        question: 'In 30 giorni vedo già un risultato?',
        answer:
          'L’obiettivo del mese è trovare il primo collo di bottiglia e attaccarlo con le prime soluzioni AI, impostate insieme. Se una soluzione richiede sviluppo più ampio, la mettiamo in roadmap con tempi e costi chiari.',
      },
      {
        question: 'Perché un prezzo fisso e non a ore?',
        answer:
          'A ore si contano i minuti e si evita di fare domande. Con un prezzo fisso il team usa il percorso fino in fondo e tu sai dall’inizio quanto investi.',
      },
      {
        question: 'È un corso?',
        answer:
          'No. Non ci sono lezioni preregistrate né contenuti uguali per tutti. Lavoriamo sulla tua azienda, sui tuoi numeri e sui tuoi processi.',
      },
      {
        question: 'Quali strumenti di AI usate?',
        answer:
          'Quelli giusti per il tuo caso. Non siamo legati a nessun fornitore: valutiamo ciò che usi già e consigliamo solo ciò che serve, dicendoti anche cosa evitare.',
      },
      {
        question: 'Funziona anche se non ho un eCommerce?',
        answer:
          'Sì. Il metodo vale per qualsiasi azienda già avviata con un’attività di marketing: servizi, agenzie, studi, PMI. Cambiano le aree su cui scaviamo, non il metodo.',
      },
      {
        question: 'Chi deve partecipare alle videochiamate?',
        answer:
          'Chi prende le decisioni e chi lavora ogni giorno sulle aree che analizziamo. Di solito 1-3 persone: founder, responsabile marketing, una figura operativa.',
      },
      {
        question: 'Quanto tempo devo dedicarci?',
        answer:
          'Circa 1 ora di videochiamate a settimana, più 1-2 ore per questionario, accessi e le attività da annotare. Il lavoro di analisi lo facciamo noi.',
      },
      {
        question: 'I nostri dati sono al sicuro?',
        answer:
          'Sì. Gli accessi servono solo per l’analisi, senza modifiche non concordate, e tutto è coperto da riservatezza contrattuale. Nel report ti indichiamo anche quali dati è meglio non inserire negli strumenti AI.',
      },
      {
        question: 'Lavoriamo già con un’agenzia o un consulente: ha senso?',
        answer:
          'Sì. L’audit ti dà una visione indipendente e una roadmap che puoi condividere con i fornitori attuali.',
      },
      {
        question: 'Cosa succede dopo il mese?',
        answer:
          'Sei autonomo: hai priorità, roadmap e protocolli per andare avanti da solo. Se vuoi, puoi scegliere l’affiancamento continuo o l’implementazione di interventi specifici. Nessun rinnovo automatico: decidi tu, alla fine.',
      },
    ],
  },
  form: {
    title: 'AI Accelerator',
    subtitle:
      '3 passaggi, 2 minuti. Per aziende ed eCommerce con almeno €30.000 di fatturato al mese. Investimento: €1.100, prezzo fisso.',
    stepLabel: 'Passaggio',
    back: '← Indietro',
    continue: 'Avanti',
    step1: {
      title: 'Di cosa si tratta?',
      qRevenue: {
        label: 'Qual è il fatturato mensile della tua attività?',
        helper:
          'Lavoriamo solo con aziende ed eCommerce che fatturano almeno €30.000 al mese (circa €360.000 l’anno). Sotto questa soglia non possiamo prendere in carico la candidatura.',
        options: ['Meno di €30.000', '€30.000 – €100.000', '€100.000 – €300.000', 'Oltre €300.000'],
      },
      qBusiness: {
        label: 'Che tipo di attività è?',
        options: ['eCommerce', 'Attività online o servizi', 'Azienda / PMI', 'Agenzia o freelance'],
      },
      qRole: {
        label: 'Qual è il tuo ruolo?',
        options: ['Founder / titolare', 'Ufficio marketing', 'Altro ruolo'],
      },
    },
    step2: {
      title: 'Da dove partiamo?',
      qUsage: {
        label: 'Quanto usate l’AI oggi?',
        options: ['Quasi per niente', 'A spot, senza metodo', 'Ogni giorno, ma senza sistema'],
      },
      qPain: {
        label: 'Qual è la cosa che oggi vi fa perdere più tempo o più clienti?',
        placeholder:
          'Es. prepariamo i preventivi a mano, non riusciamo a pubblicare con costanza, il team usa l’AI ognuno a modo suo…',
      },
    },
    step3: {
      title: 'Chi sei?',
      fields: {
        name: { label: 'Nome e cognome', placeholder: 'Mario Rossi' },
        email: { label: 'Email aziendale', placeholder: 'nome@azienda.com' },
        legalName: { label: 'Ragione sociale', placeholder: 'Es. Rossi S.r.l.' },
        vatNumber: {
          label: 'Partita IVA',
          placeholder: 'Es. IT01234567890',
          helper: 'Serve solo a verificare che l’attività sia già avviata.',
        },
        website: { label: 'Sito web (facoltativo)', placeholder: 'azienda.com' },
      },
      privacyBefore: 'Ho letto e accetto la ',
      privacyLinkLabel: 'Privacy Policy',
      submit: 'Invia candidatura',
      submitting: 'Invio in corso…',
      micro: 'Risposta entro 1 giorno lavorativo.',
    },
    errors: {
      choice: 'Seleziona un’opzione',
      pain: 'Raccontacelo in almeno 20 caratteri',
      name: 'Inserisci nome e cognome',
      email: 'Inserisci un indirizzo email valido',
      legalName: 'Inserisci la ragione sociale',
      vat: 'Inserisci una Partita IVA valida (11 cifre).',
      privacy: 'Devi accettare la Privacy Policy',
    },
    errorGeneric: 'Qualcosa è andato storto. Riprova tra un momento.',
    errorNetwork: 'Errore di rete. Controlla la connessione e riprova.',
    success: {
      title: 'Candidatura ricevuta ⚡',
      text: 'Grazie. Valutiamo la tua candidatura entro 1 giorno lavorativo. Se c’è fit, ti mandiamo via email il link per fissare la pre-call di 40 minuti.',
    },
    dq: {
      title: 'Per ora AI Accelerator non fa per te',
      text: 'Il percorso è pensato per aziende ed eCommerce con almeno €30.000 di fatturato al mese: sotto questa soglia l’investimento difficilmente si ripaga. Nel frattempo trovi guide pratiche sul nostro blog.',
      blogCta: 'Vai al blog',
      blogHref: '/it/blog',
      back: '← Ho sbagliato risposta',
    },
  },
  finalCta: {
    heading: 'Pronto a mettere ordine nella tua azienda?',
    text: '30 giorni, one-to-one, prezzo fisso. Per aziende ed eCommerce con almeno €30.000 di fatturato al mese.',
    cta: 'Candida la tua azienda',
  },
  sticky: { priceLine: '€1.100 · 30 giorni', cta: 'Candida la tua azienda' },
}

const en: AiCopy = {
  hero: {
    eyebrow: 'AI Accelerator · A 30-day one-to-one program for companies and eCommerce brands',
    titleLine1: 'Stop chasing tools and hype.',
    titleLine2Pre: 'In 30 days you’ll know how to use AI to ',
    titleEm1: 'save time',
    titleMid1: ', ',
    titleEm2: 'win clients',
    titleMid2: ' and ',
    titleEm3: 'sell more',
    titleEnd: '.',
    leadLine:
      'A new model launches every week. We do the opposite: we study your company one-to-one and build a tailored AI plan around the goal that matters to you: time, clients or revenue.',
    subtitle:
      'Not a course, not a guru, not another subscription. One month of one-to-one work on your company, with people who do this every day. We analyze acquisition, sales, processes and tools, then decide together which AI solutions to adopt, in what order and to what end. Context first, tools second.',
    benefits: ['One-to-one, tailored', '4 video calls in 30 days', 'Fixed price, no lock-in'],
    cta: 'Apply with your company',
    ctaNote:
      'For established companies and eCommerce brands with at least €30,000 in monthly revenue. We review every application.',
    trustRatingLabel: '4.9',
    trustLine: 'Chosen by eCommerce brands, companies and marketing teams',
  },
  problem: {
    label: 'the problem',
    headingPart1: 'Too much AI, ',
    headingEm: 'no system',
    headingEnd: '.',
    intro:
      'A new tool launches every week, and every day someone tells you you’re falling behind. Meanwhile time goes by, your team still does the same things by hand and AI stays an experiment. The problem isn’t a lack of tools: it’s too many of them.',
    items: [
      {
        title: 'Information overload',
        description:
          'Videos, newsletters, threads, courses. A thousand contradicting tips and no starting point. The more you study, the more confused you get.',
      },
      {
        title: 'Tools tried and abandoned',
        description:
          'Subscriptions started with enthusiasm and forgotten after two weeks. Each tool solves one piece, none of them talk to each other.',
      },
      {
        title: 'Time lost on repetitive work',
        description:
          'Quotes, reports, content, emails, manual handoffs. Your team is buried in work a machine could do in minutes.',
      },
      {
        title: 'Opaque consultants',
        description:
          'Sky-high prices, no references, vague promises. You’re afraid of paying and ending up with a generic PDF and no results.',
      },
    ],
  },
  solution: {
    label: 'the solution',
    headingPart1: 'A partner, ',
    headingEm: 'not a guru',
    headingEnd: '.',
    intro:
      'We won’t teach you things you could learn on your own, and we won’t bury you in obscure tools. We step inside your company: we study data, processes and how every area works, then build the plan to bring AI into the right processes. To speed them up, automate them or standardize them, with one clear goal: a measurable result in time or money.',
    items: [
      {
        title: 'Context before tools',
        description:
          'AI without context produces generic answers. We start from how your company works (offer, clients, acquisition, sales, processes) and only then choose the tools.',
      },
      {
        title: 'Data and processes, not theory',
        description:
          'We look at your numbers, your tools and your team’s real work, week after week. Every choice comes from what we see, not from a trend.',
      },
      {
        title: 'Marketing, sales, tech and AI together',
        description:
          'One partner who knows acquisition, website, data, tracking and automation. No three vendors who never talk to each other.',
      },
      {
        title: 'Autonomy, not dependency',
        description:
          'By the end of the month your team can move forward on its own, with clear priorities, written procedures and a context document that stays with you.',
      },
    ],
  },
  audience: {
    label: 'who it’s for',
    headingPart1: 'For people who use AI, but ',
    headingEm: 'not for a living',
    headingEnd: '.',
    intro:
      'Your job isn’t keeping up with AI updates every week: it’s growing your company. Whether you’re already hands-on or starting almost from scratch, AI should work for you, in the right places.',
    cards: [
      {
        title: 'Founders and owners',
        description:
          'You run an established company or eCommerce brand, or an SME. You use ChatGPT or Claude here and there, you feel you could do much more but don’t know where to start. You want more clients and fewer wasted hours, not a new hobby.',
      },
      {
        title: 'Marketing teams',
        description:
          'You work in marketing at an established company. You’ve been asked to “integrate AI”, but nobody told you how. You want a clear method, carefully chosen tools and processes the whole team can follow.',
      },
    ],
    notForTitle: 'Not for you if…',
    notForItems: [
      'you’re a startup, an individual, or your revenue is under €30,000 per month',
      'you’re looking for the “magic prompt” that fixes everything',
      'you want a one-size-fits-all course',
      'you want to hand everything off without involving your team',
    ],
  },
  start: {
    heading: 'How to get in',
    steps: [
      {
        title: 'Application & intro call',
        description:
          'Tell us about your company or eCommerce brand and what you want to achieve. We only work with established companies and eCommerce brands with at least €30,000 in monthly revenue: we review every application and, if there’s a fit, confirm a 40-minute intro call to assess your needs and decide together whether the program is right for you.',
      },
      {
        title: 'Kick-off',
        description:
          'First video call scheduled: we set up the month (calendar of the 4 video calls, tool access, shared task manager) and start exploring your company.',
      },
      {
        title: 'Start',
        description: '4 weeks of one-to-one work, one video call per week, with direct contact in between.',
      },
    ],
  },
  timeline: {
    label: 'how we work',
    headingPart1: '30 days to ',
    headingEm: 'get clarity',
    headingEnd: '.',
    intro:
      '4 video calls of about 60 minutes, one per week. Each call digs into one area, collects data and moves to the next level. In between: direct contact via email and messages, and a shared task manager.',
    goalBox: {
      title: 'The goal of the month',
      text: 'Map your whole operation (numbers, KPIs, processes and opportunities), rank it by priority together with you and find the first bottleneck to tackle with AI. The solution may be an automated process, an automated message or a technical change: we decide once priorities are clear. First we understand what matters, then we act.',
    },
    phaseLabel: 'Phase',
    phases: [
      {
        number: '01',
        title: 'Context & goals',
        week: 'Week 1',
        description:
          'We build the full picture of your company or eCommerce brand: model, offer, ideal clients, team and roles, numbers and KPIs, 6-12 month goals and current AI usage. Before the call you fill in a short questionnaire and share the main accesses. After it, your team logs repetitive tasks and the time they take for 5 days: that’s the baseline for measuring the time we win back.',
        outputLabel: 'Output',
        output: 'Company map, starting KPIs and first draft of the Context Document.',
      },
      {
        number: '02',
        title: 'Acquisition, sales & retention',
        week: 'Week 2',
        description:
          'We understand how clients find you today, how they buy and how they come back, and where opportunities are lost: active channels and past results, positioning and messaging, website, tracking and data, sales process, loyalty and repeat customers.',
        outputLabel: 'Output',
        output: 'Acquisition, sales and retention diagnosis, with opportunities and critical areas.',
      },
      {
        number: '03',
        title: 'Operations & AI',
        week: 'Week 3',
        description:
          'We find where time is lost and where AI brings a real advantage: key processes (quotes, client management, content, customer care, reporting), current tools, what to adopt and what to avoid. Hands-on part: during the call we set up together up to 2 quick wins chosen among the highest-impact ones.',
        outputLabel: 'Output',
        output: 'Bottleneck map, recommended tools, first AI solutions already running.',
      },
      {
        number: '04',
        title: 'Priorities & roadmap',
        week: 'Week 4',
        description:
          'We put everything in order in the final document: every opportunity and everything that can be implemented with AI, ranked by impact and effort, with a 90-day roadmap, operating protocols and the Context Document. From here you’re autonomous: you can move forward on your own. Continuing together is an option, not an obligation.',
        outputLabel: 'Output',
        output: 'Priority document, 90-day roadmap, protocols and Context Document.',
      },
    ],
    note: {
      title: 'Why a month and not a single call?',
      text: 'Because bringing AI into the right places means truly knowing your company: getting inside how it works, seeing week after week what changes, what’s there and what’s missing. The month includes small internal tasks and small field tests. Implementation is the fast part: the time is for working in sync with your team and understanding what really matters. Plus up to 2 extra video calls, if needed.',
    },
    tagline: 'We don’t leave you a list of tools. We leave you clear priorities and a system to move forward on your own.',
  },
  deliverables: {
    label: 'what you get',
    headingPart1: 'Three working tools, ',
    headingEm: 'not a PDF in a drawer',
    headingEnd: '.',
    cards: [
      {
        title: 'Priority document & roadmap',
        description:
          'The program’s final document: status of every area, bottlenecks and recoverable time, every opportunity and everything that can be implemented with AI ranked by impact and effort, tools to use and to avoid with indicative costs, data and privacy risks, a 90-day roadmap with priorities and owners, KPIs to track.',
      },
      {
        title: 'Operating protocols',
        description:
          'Step-by-step procedures for priority tasks: what to do, with which tool, with which instructions (prompts) and how to check the result. They become part of your processes and the whole team works the same way.',
      },
      {
        title: 'Company Context Document',
        description:
          'The document that describes your company (offer, clients, tone of voice, processes, numbers) structured for ChatGPT, Claude and similar tools. It turns generic answers into tailored ones, and you use it every day, even after we’re done.',
      },
    ],
    extra:
      'Plus: your first AI solutions (up to 2 quick wins) set up together during the month, already running in your daily work. And by the end you’re autonomous: continuing together is an option, not an obligation.',
  },
  scope: {
    headingPart1: 'Clear from day one: ',
    headingEm: 'what’s included',
    headingEnd: '.',
    includedTitle: 'Included',
    included: [
      '4 calls of about 60 minutes + up to 2 extra calls',
      'Direct contact via email and messages for 30 days, reply within 1 business day',
      'Shared task manager and written recap after every call',
      'Analysis of business, acquisition, website and data, processes and tools',
      'Up to 2 quick wins set up together',
      'Priority document, operating protocols and Context Document, which stay yours',
    ],
    excludedTitle: 'Not included',
    excluded: [
      'Building websites, software or automations beyond the quick wins',
      'Running ad campaigns and ad budget',
      'Content production (photos, videos, copy)',
      'AI licenses and subscriptions',
      'Pre-recorded courses or generic training',
    ],
    note: 'Anything that comes up as a next step, we evaluate together, with a separate proposal and only if it makes sense.',
  },
  contrast: {
    label: 'the difference',
    headingPart1: 'Same tools. ',
    headingEm: 'Opposite results',
    headingEnd: '.',
    intro: 'AI is the same for everyone. What changes is how you use it.',
    left: {
      tag: '↓ AI without context',
      items: [
        'Generic prompts, generic answers',
        'A different tool for every problem',
        'Subscriptions piling up',
        'Everyone on the team does it their own way',
        'Time spent experimenting, not producing',
      ],
    },
    right: {
      tag: '↑ AI with context',
      items: [
        'The Context Document guides every answer',
        'Few tools, each chosen for a reason',
        'Costs under control',
        'Procedures shared by the whole team',
        'Hours saved every week, reinvested in clients',
      ],
    },
    closing: 'Same starting point. Opposite outcome. The difference is the method.',
  },
  who: {
    label: 'who you’ll work with',
    headingPart1: 'One point of contact, ',
    headingEm: 'from start to finish',
    headingEnd: '.',
    text1:
      'Antonio Manitta, founder of NoProb Agency. He started as a developer (Computer Science degree), became an eCommerce manager and now runs an agency that builds and grows eCommerce brands and companies across very different industries: luxury fashion, food, supplements, industrial B2B. He uses AI every day to run agents, dashboards and processes inside his own agency.',
    text2:
      'This 360° view (acquisition, sales, technology, data and AI) is what makes it possible to see where AI should be implemented right away and where a person is still needed.',
    imageAlt: 'Antonio Manitta, founder of NoProb Agency',
  },
  caseStudyHeading: {
    part1: 'What happens when technology meets ',
    em: 'execution',
    end: '.',
  },
  pricing: {
    label: 'pricing',
    headingPart1: 'A fixed price. ',
    headingEm: 'No hourly billing',
    headingEnd: '.',
    intro:
      'With hourly billing you count minutes and avoid asking questions. With a fixed price you use the program to the fullest and know upfront what you’re investing. The price goes up as the method matures with new clients: join now and lock in your rate.',
    tiers: [
      { price: '€750', slot: 'MVP phase · First pilot clients', tag: 'Closed', state: 'completed' },
      { price: '€1,100', slot: 'Post-MVP · Up to client #15', tag: 'Available now', state: 'current' },
      { price: '€2,500', slot: 'Clients 16-30', tag: 'Next tier', state: 'upcoming' },
      { price: '€4,000', slot: 'From client #31', tag: 'Standard price', state: 'upcoming' },
    ],
    tiersNote:
      'Every program adds method, templates and experience: that’s the value for whoever joins later. No countdown: the slot is yours as long as it’s available.',
    card: {
      title: 'AI Accelerator',
      subtitle:
        'The 30-day one-to-one program: priorities, roadmap and your first AI solutions running. One point of contact.',
      features: ['4 calls + up to 2 extra', '3 deliverables you keep', '2 quick wins set up together'],
      badge:
        'Zero entry risk: free intro call, fixed price, no auto-renewal. Pay 50% on signing and 50% on delivery.',
      price: '€1,100',
      priceSuffix: 'one-off',
      priceNote: '€550 on signing + €550 on delivery',
      cta: 'Apply with your company',
    },
    trustLine: 'We read every application and reply within 1 business day.',
    trustLine2: 'Only companies and eCommerce brands with at least €30,000 in monthly revenue.',
  },
  after: {
    label: 'what’s next?',
    headingPart1: 'The month ends. ',
    headingEm: 'The journey doesn’t',
    headingEnd: '.',
    intro:
      'AI Accelerator is the starting audit: it brings order, strips away what you don’t need and has you work only on what really matters. After that, you’re autonomous. If you want, we keep going together.',
    cards: [
      {
        title: 'Autonomy',
        description:
          'You have the roadmap, protocols and Context Document: your team runs the plan on its own. No lock-in, no auto-renewal.',
      },
      {
        title: 'Ongoing support',
        description:
          'We stay by your side month after month: regular calls, updates on the new tools that actually matter, support when you need it and roadmap reviews. AI changes every month: you stay up to date without chasing it.',
      },
      {
        title: 'Implementation',
        description:
          'Automations, AI agents, website, tracking, campaigns: if a roadmap item needs an operating team, we build it for you with a dedicated proposal.',
      },
    ],
    note: 'Options 2 and 3 are by proposal, defined together in the final call based on what emerged.',
  },
  testimonialsHeading: 'Chosen by established entrepreneurs',
  faq: {
    label: 'FAQ',
    heading: 'Answers to the ',
    headingEm: 'most common questions',
    subheading: 'The most common questions before getting started. Straight answers.',
    items: [
      {
        question: 'Do you work with startups or individuals?',
        answer:
          'No. We work with established companies and eCommerce brands with at least €30,000 in monthly revenue and processes to improve. Below that, the investment rarely pays back: that’s why we review every application before the intro call.',
      },
      {
        question: 'Do I need to be technical?',
        answer:
          'No. The program adapts to your level: if you’re already hands-on you get method and priorities, if you’re starting from scratch you get a solid foundation. The document and protocols are written for anyone to understand.',
      },
      {
        question: 'Will I see a result within 30 days?',
        answer:
          'The goal of the month is to find the first bottleneck and tackle it with your first AI solutions, set up together. If a solution needs broader development, we put it in the roadmap with clear timing and costs.',
      },
      {
        question: 'Why a fixed price instead of hourly?',
        answer:
          'With hourly billing you count minutes and avoid asking questions. With a fixed price your team uses the program to the fullest and you know upfront what you’re investing.',
      },
      {
        question: 'Is it a course?',
        answer:
          'No. There are no pre-recorded lessons and no one-size-fits-all content. We work on your business, your numbers and your processes.',
      },
      {
        question: 'Which AI tools do you use?',
        answer:
          'The right ones for your case. We’re not tied to any vendor: we assess what you already use and recommend only what you need, including what to avoid.',
      },
      {
        question: 'Does it work if I don’t run an eCommerce store?',
        answer:
          'Yes. The method works for any established business with marketing activity: services, agencies, studios, SMEs. The areas we dig into change, the method doesn’t.',
      },
      {
        question: 'Who should join the calls?',
        answer:
          'The decision-makers and the people who work every day on the areas we analyze. Usually 1-3 people: founder, marketing lead, an operations person.',
      },
      {
        question: 'How much time does it take?',
        answer:
          'About 1 hour of calls per week, plus 1-2 hours for the questionnaire, accesses and task logging. We do the analysis work.',
      },
      {
        question: 'Is our data safe?',
        answer:
          'Yes. Accesses are used only for the analysis, with no unagreed changes, and everything is covered by contractual confidentiality. In the report we also tell you which data is best kept out of AI tools.',
      },
      {
        question: 'We already work with an agency or consultant: does it make sense?',
        answer:
          'Yes. The audit gives you an independent view and a roadmap you can share with your current vendors.',
      },
      {
        question: 'What happens after the month?',
        answer:
          'You’re autonomous: you have priorities, a roadmap and protocols to move forward on your own. If you want, you can choose ongoing support or implementation of specific projects. No auto-renewal: you decide, at the end.',
      },
    ],
  },
  form: {
    title: 'AI Accelerator',
    subtitle:
      '3 steps, 2 minutes. For companies and eCommerce brands with at least €30,000 in monthly revenue. Investment: €1,100, fixed price.',
    stepLabel: 'Step',
    back: '← Back',
    continue: 'Continue',
    step1: {
      title: 'What are we talking about?',
      qRevenue: {
        label: 'What’s your company’s monthly revenue?',
        helper:
          'We only work with companies and eCommerce brands generating at least €30,000 per month (about €360,000 a year). Below that threshold we can’t take on your application.',
        options: ['Under €30,000', '€30,000 – €100,000', '€100,000 – €300,000', 'Over €300,000'],
      },
      qBusiness: {
        label: 'What kind of business is it?',
        options: ['eCommerce', 'Online business or services', 'Company / SME', 'Agency or freelancer'],
      },
      qRole: {
        label: 'What’s your role?',
        options: ['Founder / owner', 'Marketing team', 'Other role'],
      },
    },
    step2: {
      title: 'Where do we start?',
      qUsage: {
        label: 'How much do you use AI today?',
        options: ['Barely at all', 'Here and there, no method', 'Every day, but no system'],
      },
      qPain: {
        label: 'What’s the one thing costing you the most time or clients today?',
        placeholder:
          'E.g. we write quotes by hand, we can’t publish consistently, everyone on the team uses AI their own way…',
      },
    },
    step3: {
      title: 'Who are you?',
      fields: {
        name: { label: 'Full name', placeholder: 'John Smith' },
        email: { label: 'Work email', placeholder: 'name@company.com' },
        legalName: { label: 'Company legal name', placeholder: 'e.g. Acme Ltd' },
        vatNumber: {
          label: 'VAT or company registration number',
          placeholder: 'e.g. GB123456789',
          helper: 'Only used to verify that the business is already established.',
        },
        website: { label: 'Website (optional)', placeholder: 'company.com' },
      },
      privacyBefore: 'I have read and accept the ',
      privacyLinkLabel: 'Privacy Policy',
      submit: 'Send application',
      submitting: 'Sending…',
      micro: 'Reply within 1 business day.',
    },
    errors: {
      choice: 'Select an option',
      pain: 'Tell us in at least 20 characters',
      name: 'Enter your full name',
      email: 'Enter a valid email address',
      legalName: 'Enter your company legal name',
      vat: 'Please enter a valid VAT or company registration number.',
      privacy: 'You must accept the Privacy Policy',
    },
    errorGeneric: 'Something went wrong. Please try again.',
    errorNetwork: 'Network error. Check your connection and try again.',
    success: {
      title: 'Application received ⚡',
      text: 'Thank you. We’ll review your application within 1 business day. If there’s a fit, we’ll email you the link to book your 40-minute intro call.',
    },
    dq: {
      title: 'AI Accelerator isn’t the right fit yet',
      text: 'The program is built for companies and eCommerce brands with at least €30,000 in monthly revenue: below that, the investment rarely pays back. In the meantime, you’ll find practical guides on our blog.',
      blogCta: 'Go to the blog',
      blogHref: '/blog',
      back: '← I picked the wrong answer',
    },
  },
  finalCta: {
    heading: 'Ready to bring order to your company?',
    text: '30 days, one-to-one, fixed price. For companies and eCommerce brands with at least €30,000 in monthly revenue.',
    cta: 'Apply with your company',
  },
  sticky: { priceLine: '€1,100 · 30 days', cta: 'Apply with your company' },
}

const dictionaries: Record<Locale, AiCopy> = { it, en }

export function getAiCopy(locale: Locale): AiCopy {
  return dictionaries[locale]
}
