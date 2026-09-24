import type { Locale } from '@/lib/i18n'

/**
 * Copy module for the "AI Accelerator" landing page.
 * Routes: it -> /it/ai-accelerator, en -> /ai-accelerator.
 *
 * Follows the same convention as `lib/i18n/migrazione.ts`: a typed,
 * locale-keyed object consumed through a `get*` accessor, isolated from the
 * shared dictionary. Only `seo.aiAccelerator` lives in `lib/i18n/index.ts`.
 */

/** Feature flag: show the "NEW" badge next to the AI Accelerator nav item. */
export const AI_NAV_SHOW_NEW_BADGE = true

/** TidyCal booking link shown on the form success state. */
export const AI_TIDYCAL_URL = 'https://tidycal.com/noprobagency/ai-accelerator'

type QuestionCards = { label: string; options: string[] }

export type AiCopy = {
  hero: {
    eyebrow: string
    titlePart1: string
    titleEm1: string
    titleMid: string
    titleEm2: string
    titleEnd: string
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
    text: string
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
    step1: { title: string; qBusiness: QuestionCards; qRole: QuestionCards }
    step2: { title: string; qUsage: QuestionCards; qPain: { label: string; placeholder: string } }
    step3: {
      title: string
      fields: {
        name: { label: string; placeholder: string }
        email: { label: string; placeholder: string }
        company: { label: string; placeholder: string }
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
      company: string
      privacy: string
    }
    errorGeneric: string
    errorNetwork: string
    success: { title: string; text: string; cta: string }
  }
  sticky: { priceLine: string; cta: string }
}

const it: AiCopy = {
  hero: {
    eyebrow: 'AI Accelerator · Audit e roadmap in 30 giorni',
    titlePart1: 'Smetti di rincorrere tool. In 30 giorni sai dove l’AI ti fa risparmiare ',
    titleEm1: 'tempo',
    titleMid: ' e portare ',
    titleEm2: 'clienti',
    titleEnd: '.',
    subtitle:
      'Non un corso, non un guru, non un altro abbonamento. Un mese di lavoro insieme sul tuo business: analizziamo acquisizione, marketing, processi e strumenti, poi decidiamo quali soluzioni AI adottare, in che ordine e con quale obiettivo. Prima il contesto, poi gli strumenti.',
    benefits: ['Prima il contesto, poi i tool', '4 call in 30 giorni', 'Prezzo fisso, zero vincoli'],
    cta: 'Candidati per AI Accelerator',
    ctaNote: 'Pre-call gratuita di 30 minuti. Nessun impegno.',
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
  audience: {
    label: 'per chi è',
    headingPart1: 'Per chi usa l’AI, ma ',
    headingEm: 'non di mestiere',
    headingEnd: '.',
    intro:
      'Che tu sia già smanettone o parta quasi da zero, il punto è lo stesso: l’AI non è il tuo lavoro principale e non hai tempo di diventarne esperto.',
    cards: [
      {
        title: 'Founder e titolari',
        description:
          'Guidi un eCommerce, un business online o una PMI. Usi ChatGPT o Claude a spot, senti che potresti fare molto di più ma non sai da dove partire. Vuoi più clienti e meno ore perse, non un nuovo hobby.',
      },
      {
        title: 'Uffici marketing',
        description:
          'Lavori nel marketing di un’azienda strutturata. Ti chiedono di “integrare l’AI”, ma nessuno ti ha detto come. Vuoi un metodo chiaro, strumenti scelti con criterio e processi che il team possa seguire.',
      },
    ],
    notForTitle: 'Non fa per te se…',
    notForItems: [
      'cerchi il “prompt magico” che risolve tutto',
      'vuoi un corso generico uguale per tutti',
      'vuoi delegare tutto senza coinvolgere il team',
      'valuti solo in base al prezzo più basso',
    ],
  },
  solution: {
    label: 'la soluzione',
    headingPart1: 'Un acceleratore, ',
    headingEm: 'non un guru',
    headingEnd: '.',
    intro:
      'Non ti insegno cose che non potresti studiare da solo. Ti faccio risparmiare i mesi di tentativi: lavoro con questi strumenti ogni giorno, su business reali, e so quali usare e quali evitare. La chiave è il contesto: capito il tuo business, scegliere lo strumento giusto diventa semplice.',
    items: [
      {
        title: 'Contesto prima dei tool',
        description:
          'L’AI senza contesto produce risposte generiche. Partiamo da come funziona la tua azienda: offerta, clienti, acquisizione, processi. Poi scegliamo gli strumenti.',
      },
      {
        title: 'Esperienza sul campo',
        description:
          'Uso questi sistemi ogni giorno su progetti di clienti e nella mia agenzia. Ti consiglio solo ciò che ho testato, e ti dico chiaramente cosa lasciar perdere.',
      },
      {
        title: 'Marketing, tech e AI insieme',
        description:
          'Un solo interlocutore che conosce acquisizione, sito, dati, tracciamenti e automazioni. Niente tre fornitori che non si parlano.',
      },
      {
        title: 'Autonomia, non dipendenza',
        description:
          'Alla fine del mese il tuo team sa andare avanti da solo, con procedure scritte e un documento di contesto che resta a te.',
      },
    ],
  },
  start: {
    heading: 'Come si parte',
    steps: [
      { title: 'Candidatura', description: '2 minuti, 3 passaggi. Ci racconti chi sei e cosa vuoi ottenere.' },
      {
        title: 'Pre-call gratuita',
        description:
          '30 minuti per capire il tuo business e valutare insieme se il percorso fa per te. Se non è così, te lo diciamo subito.',
      },
      { title: 'Kick-off', description: 'Firma, primo pagamento del 50% e prima call entro 7 giorni.' },
    ],
  },
  timeline: {
    label: 'come lavoriamo',
    headingPart1: '30 giorni per ',
    headingEm: 'fare chiarezza',
    headingEnd: '.',
    intro:
      '4 call da circa 60 minuti, una a settimana. Ogni call scava un’area, raccoglie dati e porta al livello successivo. In mezzo: contatto diretto via email e messaggi e un task manager condiviso.',
    phaseLabel: 'Fase',
    phases: [
      {
        number: '01',
        title: 'Contesto e obiettivi',
        week: 'Settimana 1',
        description:
          'Costruiamo il quadro completo: modello di business, offerta, clienti ideali, team e ruoli, numeri chiave, obiettivi a 6-12 mesi e uso attuale dell’AI. Prima della call compili un breve questionario e ci dai gli accessi principali. Dopo la call il tuo team annota per 5 giorni le attività ripetitive e il tempo che richiedono.',
        outputLabel: 'Output',
        output: 'Mappa dell’azienda e prima bozza del Context Document.',
      },
      {
        number: '02',
        title: 'Offerta e acquisizione',
        week: 'Settimana 2',
        description:
          'Capiamo come arrivano oggi i clienti e dove si perdono opportunità: canali attivi e storico dei risultati, posizionamento, comunicazione, ruolo del sito, tracciamenti e dati, processo commerciale dal primo contatto alla vendita.',
        outputLabel: 'Output',
        output: 'Diagnosi dell’acquisizione, con opportunità e aree critiche.',
      },
      {
        number: '03',
        title: 'Operatività e AI',
        week: 'Settimana 3',
        description:
          'Troviamo dove si perde tempo e dove l’AI porta un vantaggio concreto: processi chiave (preventivi, gestione clienti, contenuti, reportistica), strumenti in uso, cosa adottare e cosa evitare. Parte pratica: impostiamo insieme, in call, fino a 2 quick win scelte tra quelle a maggiore impatto.',
        outputLabel: 'Output',
        output: 'Mappa dei colli di bottiglia, strumenti consigliati, 2 soluzioni già attive.',
      },
      {
        number: '04',
        title: 'Restituzione e roadmap',
        week: 'Settimana 4',
        description:
          'Trasformiamo l’analisi in un piano d’azione: priorità ordinate per impatto e impegno, roadmap a 90 giorni, protocolli operativi e Context Document. Ti diciamo chiaramente cosa puoi gestire da solo e cosa richiede supporto.',
        outputLabel: 'Output',
        output: 'Tutti i deliverable finali.',
      },
    ],
    note: {
      title: 'Perché un mese e non una call?',
      text: 'Perché in una call vedi la superficie. In un mese vedi come lavora davvero l’azienda: i numeri, i processi, le abitudini del team. Una settimana per area, il tempo di raccogliere dati, testare e tornare con risposte concrete. Più fino a 2 call extra, se servono, per approfondire un’area o affiancare una persona chiave.',
    },
    tagline: 'Non ti lasciamo una lista di tool. Ti lasciamo un sistema.',
  },
  deliverables: {
    label: 'cosa ricevi',
    headingPart1: 'Tre strumenti di lavoro, ',
    headingEm: 'non un PDF nel cassetto',
    headingEnd: '.',
    cards: [
      {
        title: 'Report di Audit e Roadmap',
        description:
          'Sintesi per la direzione, situazione di ogni area, cosa ha funzionato e cosa no, colli di bottiglia e tempo recuperabile, opportunità ordinate per impatto e impegno, strumenti consigliati e da evitare con costi indicativi, rischi su dati e privacy, roadmap a 90 giorni con priorità e responsabili, indicatori da monitorare.',
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
      'In più: fino a 2 quick win impostate insieme durante il mese, già attive nel tuo lavoro quotidiano.',
  },
  scope: {
    headingPart1: 'Chiaro fin dall’inizio: ',
    headingEm: 'cosa è incluso',
    headingEnd: '.',
    includedTitle: 'Incluso',
    included: [
      '4 call da circa 60 minuti + fino a 2 call extra',
      'Contatto diretto via email e messaggi per 30 giorni, risposta entro 1 giorno lavorativo',
      'Task manager condiviso e riepilogo scritto dopo ogni call',
      'Analisi di business, acquisizione, sito e dati, processi e strumenti',
      'Fino a 2 quick win impostate insieme',
      'Report, protocolli operativi e Context Document, che restano tuoi',
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
    text: 'Sono Antonio Manitta, fondatore di NoProb Agency. Vengo dall’informatica (laurea in Scienze e Tecnologie Informatiche) e da anni costruisco e faccio crescere eCommerce e business online: sviluppo, tracciamenti, advertising, SEO. Oggi uso l’AI ogni giorno per me e per i miei clienti. Non vendo segreti: ti faccio arrivare prima dove arriveresti da solo in mesi.',
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
      { price: '€950', slot: 'Fase MVP · Primi clienti pilota', tag: 'Chiuso', state: 'completed' },
      { price: '€1.000', slot: 'Post-MVP · Fino al 15° cliente', tag: 'Disponibile ora', state: 'current' },
      { price: '€1.500', slot: 'Clienti 16-30', tag: 'Prossimo scaglione', state: 'upcoming' },
      { price: '€2.000', slot: 'Dal 31° in poi', tag: 'Prezzo a regime', state: 'upcoming' },
    ],
    tiersNote:
      'Ogni percorso aggiunge metodo, modelli ed esperienza: è il valore di chi entra dopo. Nessun countdown: lo slot resta tuo finché c’è.',
    card: {
      title: 'AI Accelerator',
      subtitle:
        'Il percorso completo di 30 giorni: audit, roadmap e prime soluzioni AI attive. Un solo interlocutore.',
      features: ['4 call + fino a 2 extra', '3 deliverable che restano tuoi', '2 quick win impostate insieme'],
      badge:
        'Zero rischio d’ingresso: pre-call gratuita, prezzo fisso, nessun rinnovo automatico. Paghi il 50% alla firma e il 50% alla consegna.',
      price: '€1.000',
      priceSuffix: 'una tantum',
      priceNote: '€500 alla firma + €500 alla consegna',
      cta: 'Candidati ora',
    },
    trustLine: 'Leggiamo ogni candidatura e rispondiamo entro 1 giorno lavorativo.',
  },
  after: {
    label: 'e dopo?',
    headingPart1: 'Il mese finisce. ',
    headingEm: 'Il percorso no',
    headingEnd: '.',
    intro: 'L’audit non ti lega a niente. Alla fine scegli tu come andare avanti.',
    cards: [
      {
        title: 'Autonomia',
        description:
          'Hai roadmap, protocolli e Context Document: il tuo team applica il piano da solo. Nessun vincolo, nessun rinnovo automatico.',
      },
      {
        title: 'Affiancamento continuo',
        description:
          'Restiamo al tuo fianco mese per mese: call periodiche, aggiornamenti sui nuovi strumenti che contano davvero, supporto quando serve e revisione della roadmap. L’AI cambia ogni mese: tu resti aggiornato senza inseguirla.',
      },
      {
        title: 'Implementazione',
        description:
          'Automazioni, agenti AI, sito, tracciamenti, campagne: se un intervento della roadmap richiede un team operativo, lo realizziamo noi con una proposta dedicata.',
      },
    ],
    note: 'Le opzioni 2 e 3 sono su proposta, definite insieme nella call finale in base a ciò che è emerso.',
  },
  testimonialsHeading: 'Scelti da imprenditori affermati',
  faq: {
    label: 'domande frequenti',
    heading: 'Le risposte alle ',
    headingEm: 'domande più comuni',
    subheading: 'Le domande più comuni prima di partire. Senza giri di parole.',
    items: [
      {
        question: 'Serve essere tecnici?',
        answer:
          'No. Il percorso si adatta al tuo livello: se sei già smanettone ottieni metodo e priorità, se parti da zero una base solida. Report e protocolli sono scritti per essere compresi da chiunque.',
      },
      {
        question: 'Perché un prezzo fisso e non a ore?',
        answer:
          'A ore si contano i minuti e si evita di fare domande. Con un prezzo fisso il team usa il percorso fino in fondo e tu sai dall’inizio quanto investi.',
      },
      {
        question: 'È un corso?',
        answer:
          'No. Non ci sono lezioni preregistrate né contenuti uguali per tutti. Lavoriamo sul tuo business, sui tuoi numeri e sui tuoi processi.',
      },
      {
        question: 'Quali strumenti di AI usate?',
        answer:
          'Quelli giusti per il tuo caso. Non siamo legati a nessun fornitore: valutiamo ciò che usi già e consigliamo solo ciò che serve, dicendoti anche cosa evitare.',
      },
      {
        question: 'Funziona anche se non ho un eCommerce?',
        answer:
          'Sì. Il metodo vale per qualsiasi business online o azienda con un’attività di marketing: servizi, agenzie, studi, PMI. Cambiano le aree su cui scaviamo, non il metodo.',
      },
      {
        question: 'Chi deve partecipare alle call?',
        answer:
          'Chi prende le decisioni e chi lavora ogni giorno sulle aree che analizziamo. Di solito 1-3 persone: founder, responsabile marketing, una figura operativa.',
      },
      {
        question: 'Quanto tempo devo dedicarci?',
        answer:
          'Circa 1 ora di call a settimana, più 1-2 ore per questionario, accessi e le attività da annotare. Il lavoro di analisi lo facciamo noi.',
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
          'Ti fermi e vai avanti in autonomia, oppure scegli l’affiancamento continuo o l’implementazione di interventi specifici. Nessun rinnovo automatico: decidi tu, alla fine.',
      },
    ],
  },
  form: {
    title: 'AI Accelerator',
    subtitle: '3 passaggi, 2 minuti. Leggiamo ogni candidatura.',
    stepLabel: 'Passaggio',
    back: '← Indietro',
    continue: 'Avanti',
    step1: {
      title: 'Di cosa si tratta?',
      qBusiness: {
        label: 'Che tipo di attività è?',
        options: ['eCommerce', 'Business online o servizi', 'Azienda / PMI', 'Agenzia o freelance'],
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
        company: { label: 'Nome azienda / brand', placeholder: 'Azienda srl' },
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
      company: 'Inserisci il nome dell’azienda',
      privacy: 'Devi accettare la Privacy Policy',
    },
    errorGeneric: 'Qualcosa è andato storto. Riprova tra un momento.',
    errorNetwork: 'Errore di rete. Controlla la connessione e riprova.',
    success: {
      title: 'Candidatura ricevuta ⚡',
      text: 'Grazie! Vuoi accelerare? Prenota subito la pre-call gratuita di 30 minuti.',
      cta: 'Prenota la pre-call',
    },
  },
  sticky: { priceLine: '€1.000 · 30 giorni', cta: 'Candidati' },
}

const en: AiCopy = {
  hero: {
    eyebrow: 'AI Accelerator · Audit & roadmap in 30 days',
    titlePart1: 'Stop chasing tools. In 30 days you’ll know where AI saves you ',
    titleEm1: 'time',
    titleMid: ' and brings in ',
    titleEm2: 'clients',
    titleEnd: '.',
    subtitle:
      'Not a course, not a guru, not another subscription. One month working together on your business: we analyze acquisition, marketing, processes and tools, then decide which AI solutions to adopt, in what order and to what end. Context first, tools second.',
    benefits: ['Context first, tools second', '4 calls in 30 days', 'Fixed price, no lock-in'],
    cta: 'Apply for AI Accelerator',
    ctaNote: 'Free 30-minute intro call. No obligation.',
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
  audience: {
    label: 'who it’s for',
    headingPart1: 'For people who use AI, but ',
    headingEm: 'not for a living',
    headingEnd: '.',
    intro:
      'Whether you’re already tinkering or starting almost from scratch, the point is the same: AI isn’t your main job and you don’t have time to become an expert.',
    cards: [
      {
        title: 'Founders and owners',
        description:
          'You run an eCommerce store, an online business or an SME. You use ChatGPT or Claude here and there, you feel you could do much more but don’t know where to start. You want more clients and fewer wasted hours, not a new hobby.',
      },
      {
        title: 'Marketing teams',
        description:
          'You work in marketing at an established company. You’ve been asked to “integrate AI”, but nobody told you how. You want a clear method, carefully chosen tools and processes the whole team can follow.',
      },
    ],
    notForTitle: 'Not for you if…',
    notForItems: [
      'you’re looking for the “magic prompt” that fixes everything',
      'you want a one-size-fits-all course',
      'you want to hand everything off without involving your team',
      'you only compare on the lowest price',
    ],
  },
  solution: {
    label: 'the solution',
    headingPart1: 'An accelerator, ',
    headingEm: 'not a guru',
    headingEnd: '.',
    intro:
      'I won’t teach you things you couldn’t learn on your own. I’ll save you months of trial and error: I work with these tools every day, on real businesses, and I know which ones to use and which to avoid. The key is context: once your business is clear, choosing the right tool becomes simple.',
    items: [
      {
        title: 'Context before tools',
        description:
          'AI without context produces generic answers. We start from how your company works: offer, clients, acquisition, processes. Then we choose the tools.',
      },
      {
        title: 'Hands-on experience',
        description:
          'I use these systems every day on client projects and in my own agency. I only recommend what I’ve tested, and I tell you clearly what to skip.',
      },
      {
        title: 'Marketing, tech and AI together',
        description:
          'One point of contact who knows acquisition, website, data, tracking and automation. No three vendors who never talk to each other.',
      },
      {
        title: 'Autonomy, not dependency',
        description:
          'By the end of the month your team can move forward on its own, with written procedures and a context document that stays with you.',
      },
    ],
  },
  start: {
    heading: 'How to get started',
    steps: [
      { title: 'Application', description: '2 minutes, 3 steps. Tell us who you are and what you want to achieve.' },
      {
        title: 'Free intro call',
        description:
          '30 minutes to understand your business and see together if the program is right for you. If it isn’t, we’ll tell you straight away.',
      },
      { title: 'Kick-off', description: 'Sign, pay the first 50% and have your first call within 7 days.' },
    ],
  },
  timeline: {
    label: 'how we work',
    headingPart1: '30 days to ',
    headingEm: 'get clarity',
    headingEnd: '.',
    intro:
      '4 calls of about 60 minutes, one per week. Each call digs into one area, collects data and moves to the next level. In between: direct contact via email and messages, and a shared task manager.',
    phaseLabel: 'Phase',
    phases: [
      {
        number: '01',
        title: 'Context & goals',
        week: 'Week 1',
        description:
          'We build the full picture: business model, offer, ideal clients, team and roles, key numbers, 6-12 month goals and current AI usage. Before the call you fill in a short questionnaire and share the main accesses. After the call your team logs repetitive tasks and the time they take for 5 days.',
        outputLabel: 'Output',
        output: 'Company map and first draft of the Context Document.',
      },
      {
        number: '02',
        title: 'Offer & acquisition',
        week: 'Week 2',
        description:
          'We understand how clients find you today and where opportunities are lost: active channels and past results, positioning, messaging, the role of your website, tracking and data, the sales process from first contact to sale.',
        outputLabel: 'Output',
        output: 'Acquisition diagnosis, with opportunities and critical areas.',
      },
      {
        number: '03',
        title: 'Operations & AI',
        week: 'Week 3',
        description:
          'We find where time is lost and where AI brings a real advantage: key processes (quotes, client management, content, reporting), current tools, what to adopt and what to avoid. Hands-on part: we set up together, live, up to 2 quick wins chosen among the highest-impact ones.',
        outputLabel: 'Output',
        output: 'Bottleneck map, recommended tools, 2 solutions already running.',
      },
      {
        number: '04',
        title: 'Handover & roadmap',
        week: 'Week 4',
        description:
          'We turn the analysis into an action plan: priorities ranked by impact and effort, a 90-day roadmap, operating protocols and the Context Document. We tell you clearly what you can handle alone and what needs support.',
        outputLabel: 'Output',
        output: 'All final deliverables.',
      },
    ],
    note: {
      title: 'Why a month and not a single call?',
      text: 'Because a call only shows you the surface. A month shows you how the company really works: numbers, processes, team habits. One week per area, enough time to collect data, test and come back with concrete answers. Plus up to 2 extra calls, if needed, to go deeper into one area or coach a key person.',
    },
    tagline: 'We don’t leave you a list of tools. We leave you a system.',
  },
  deliverables: {
    label: 'what you get',
    headingPart1: 'Three working tools, ',
    headingEm: 'not a PDF in a drawer',
    headingEnd: '.',
    cards: [
      {
        title: 'Audit Report & Roadmap',
        description:
          'Executive summary, status of every area, what worked and what didn’t, bottlenecks and recoverable time, opportunities ranked by impact and effort, tools to use and to avoid with indicative costs, data and privacy risks, a 90-day roadmap with priorities and owners, KPIs to track.',
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
    extra: 'Plus: up to 2 quick wins set up together during the month, already running in your daily work.',
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
      'Report, operating protocols and Context Document, which stay yours',
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
    text: 'I’m Antonio Manitta, founder of NoProb Agency. My background is in computer science (BSc in Computer Science and Technology) and I’ve spent years building and growing eCommerce and online businesses: development, tracking, advertising, SEO. Today I use AI every day, for myself and for my clients. I don’t sell secrets: I get you where you’d get on your own, months sooner.',
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
      { price: '€950', slot: 'MVP phase · First pilot clients', tag: 'Closed', state: 'completed' },
      { price: '€1,000', slot: 'Post-MVP · Up to client #15', tag: 'Available now', state: 'current' },
      { price: '€1,500', slot: 'Clients 16-30', tag: 'Next tier', state: 'upcoming' },
      { price: '€2,000', slot: 'From client #31', tag: 'Standard price', state: 'upcoming' },
    ],
    tiersNote:
      'Every program adds method, templates and experience: that’s the value for whoever joins later. No countdown: the slot is yours as long as it’s available.',
    card: {
      title: 'AI Accelerator',
      subtitle:
        'The complete 30-day program: audit, roadmap and your first AI solutions up and running. One point of contact.',
      features: ['4 calls + up to 2 extra', '3 deliverables you keep', '2 quick wins set up together'],
      badge:
        'Zero entry risk: free intro call, fixed price, no auto-renewal. Pay 50% on signing and 50% on delivery.',
      price: '€1,000',
      priceSuffix: 'one-off',
      priceNote: '€500 on signing + €500 on delivery',
      cta: 'Apply now',
    },
    trustLine: 'We read every application and reply within 1 business day.',
  },
  after: {
    label: 'what’s next?',
    headingPart1: 'The month ends. ',
    headingEm: 'The journey doesn’t',
    headingEnd: '.',
    intro: 'The audit doesn’t tie you to anything. At the end, you choose how to move forward.',
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
        question: 'Do I need to be technical?',
        answer:
          'No. The program adapts to your level: if you’re already tinkering you get method and priorities, if you’re starting from scratch you get a solid foundation. Reports and protocols are written for anyone to understand.',
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
          'Yes. The method works for any online business or company with marketing activity: services, agencies, studios, SMEs. The areas we dig into change, the method doesn’t.',
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
          'You stop and move forward on your own, or you choose ongoing support or implementation of specific projects. No auto-renewal: you decide, at the end.',
      },
    ],
  },
  form: {
    title: 'AI Accelerator',
    subtitle: '3 steps, 2 minutes. We read every application.',
    stepLabel: 'Step',
    back: '← Back',
    continue: 'Continue',
    step1: {
      title: 'What are we talking about?',
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
        company: { label: 'Company / brand name', placeholder: 'Company Ltd' },
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
      company: 'Enter your company name',
      privacy: 'You must accept the Privacy Policy',
    },
    errorGeneric: 'Something went wrong. Please try again.',
    errorNetwork: 'Network error. Check your connection and try again.',
    success: {
      title: 'Application received ⚡',
      text: 'Thank you! Want to speed things up? Book your free 30-minute intro call now.',
      cta: 'Book the intro call',
    },
  },
  sticky: { priceLine: '€1,000 · 30 days', cta: 'Apply' },
}

const dictionaries: Record<Locale, AiCopy> = { it, en }

export function getAiCopy(locale: Locale): AiCopy {
  return dictionaries[locale]
}
