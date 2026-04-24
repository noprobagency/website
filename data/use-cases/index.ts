import type { ArticleSection } from '@/data/articles'

export type UseCase = {
  slug: string
  title: string
  excerpt: string
  image: string
  imageAlt?: string
  caseType: string
  date: string
  content?: ArticleSection[]
}

export const useCases: UseCase[] = [
  {
    slug: 'cumini-luxury-fashion-ecommerce',
    title: "Come far crescere l'eCommerce di una Luxury Fashion Boutique",
    excerpt: 'Il caso studio di Cumini',
    image: '/images/originals/2QNUkNFRX0OUC0qTVjeplIvlFS0.jpg',
    imageAlt: 'Cumini fashion case study',
    caseType: 'Use Case',
    date: '2026-04-24',
    content: [
      {
        type: 'paragraph',
        text: 'Settore: Fashion retail | Luxury multibrand',
      },
      {
        type: 'paragraph',
        text: 'Durata partnership: Oltre 4 anni (attiva)',
      },
      {
        type: 'paragraph',
        text: 'Stato: In crescita costante',
      },
      {
        type: 'paragraph',
        text: 'Un eCommerce non cresce per caso, serve un sistema. Questo caso studio racconta cosa succede quando viene costruito nel modo corretto.',
      },
      {
        type: 'paragraph',
        text: 'In poco più di 4 anni, dal 2022:',
      },
      {
        type: 'list',
        items: [
          'da un eCommerce con fatturato marginale a milioni di euro di revenue online annui',
          'prime vendite a sei cifre mensili, oggi una media stabile nei periodi di picco',
          '+226,9% di crescita nel secondo anno',
          'tracciamento passato da incompleto a una copertura del 95% delle conversioni reali',
          'conversion rate mobile quasi raddoppiato',
          'email marketing reso finalmente affidabile e misurabile, con un +23% di fatturato attribuibile',
        ],
      },
      {
        type: 'h2',
        text: 'Il punto di partenza',
      },
      {
        type: 'paragraph',
        text: 'Cumini è una luxury fashion boutique multibrand italiana, con due negozi fisici in Friuli-Venezia Giulia. Da anni rappresenta un punto di riferimento per l’alta moda sul territorio, grazie a una selezione che include alcuni dei nomi più rilevanti del prêt-à-porter internazionale.',
      },
      {
        type: 'paragraph',
        text: 'Un posizionamento solido che, tuttavia, non trovava ancora una piena espressione nel canale digitale: l’eCommerce era già attivo, ma usato come sola estensione del punto vendita fisico e non sviluppato come strumento strategico.',
      },
      {
        type: 'paragraph',
        text: 'Il tasso di conversione era infatti vicino allo zero, la navigazione poco intuitiva e tecnicamente vincolata a un fornitore esterno collegato al gestionale interno, con margini di intervento limitati.',
      },
      {
        type: 'paragraph',
        text: 'Dal punto di vista marketing,invece, il quadro era piuttosto frammentato: non c’era un sistema di tracciamento dati, i social media erano penalizzati da gestioni precedenti, l’email marketing era limitato a invii sporadici e le attività di advertising erano minime e senza una struttura definita.',
      },
      {
        type: 'paragraph',
        text: 'Mancava, in sintesi, un ecosistema strutturato capace di supportare lo sviluppo del brand anche sul digitale.',
      },
      {
        type: 'h2',
        text: '2022-2024: Gli anni di costruzione',
      },
      {
        type: 'paragraph',
        text: 'I dettagli di questi anni richiederebbero un’analisi a sé. Qui vengono sintetizzati per offrire il contesto necessario, non per costruire un manuale operativo.',
      },
      {
        type: 'paragraph',
        text: 'Al termine di ogni anno sono riportati due indicatori: il MER (Marketing Efficiency Ratio, indice della profittabilità complessiva) e la crescita percentuale del fatturato eCommerce rispetto all’anno precedente.',
      },
      {
        type: 'h3',
        text: '2022: impostazione del progetto e prime integrazioni',
      },
      {
        type: 'paragraph',
        text: 'Il 2022 ha segnato l’avvio della gestione operativa dell’intero progetto.',
      },
      {
        type: 'paragraph',
        text: 'L’obiettivo era iniziare a integrare alcuni primi interventi in modo progressivo, calibrandoli sulle reali necessità del momento.',
      },
      {
        type: 'paragraph',
        text: 'La prima attività è stata l’attivazione di Google Ads, affidata a un professionista verticale nel settore.',
      },
      {
        type: 'paragraph',
        text: 'La situazione di partenza era favorevole: un catalogo composto da brand di lusso con una selezione distintiva e prezzi competitivi sul digitale, unito a un pubblico già “formato”, che cercava attivamente quei prodotti online.',
      },
      {
        type: 'paragraph',
        text: 'In pochi mesi, questo unico canale ha permesso di raggiungere lo stesso fatturato eCommerce dell’intero anno precedente.',
      },
      {
        type: 'paragraph',
        text: 'Questo risultato va interpretato nel modo corretto.',
      },
      {
        type: 'paragraph',
        text: 'Non è stato un picco eccezionale, ma la risposta a una domanda che, in fondo, era già esistente: l’attivazione di Google Ads ha semplicemente reso visibile un’offerta che prima non lo era.',
      },
      {
        type: 'paragraph',
        text: 'MER > 9 Crescita fatturato eCommerce: +25,8%',
      },
      {
        type: 'h3',
        text: '2023: sviluppo e consolidamento operativo',
      },
      {
        type: 'paragraph',
        text: 'Nel secondo anno, la strategia si è strutturata attorno ai momenti chiave del calendario commerciale, dai saldi ai lanci delle nuove collezioni.',
      },
      {
        type: 'paragraph',
        text: 'Il sistema ha iniziato a prendere forma, con un primo picco rilevante già a gennaio, durante i saldi invernali.',
      },
      {
        type: 'paragraph',
        text: 'Il principale limite, però, restava la piattaforma eCommerce.',
      },
      {
        type: 'paragraph',
        text: 'Costruita su codice proprietario e non gestita direttamente, presentava criticità tecniche ricorrenti e difficilmente prevedibili: instabilità del sito, interruzioni nei processi di acquisto e una conseguente perdita di vendite.',
      },
      {
        type: 'paragraph',
        text: 'Questo ha avuto un impatto diretto anche sulle attività marketing. In più momenti è stato necessario ridurre o sospendere le campagne advertising, per evitare di investire traffico su un’infrastruttura non affidabile.',
      },
      {
        type: 'paragraph',
        text: 'Nel corso dell’anno sono stati fatti diversi tentativi per aggirare questi limiti: integrazioni esterne, modifiche ai flussi di tracciamento, adattamenti operativi per mantenere attivi i canali principali.',
      },
      {
        type: 'paragraph',
        text: 'Interventi utili a tamponare le criticità, ma non risolutivi, perché non intervenivano direttamente sulla causa del problema.',
      },
      {
        type: 'paragraph',
        text: 'In questo contesto, la leva principale è stata la flessibilità: integrazione rapida di competenze verticali, test continui, lettura dei dati e adattamento costante.',
      },
      {
        type: 'paragraph',
        text: 'Nonostante le limitazioni tecniche, il fatturato eCommerce ha registrato una crescita significativa.',
      },
      {
        type: 'paragraph',
        text: 'MER > 7,5 Crescita fatturato eCommerce: +226,9%',
      },
      {
        type: 'h3',
        text: '2024: verso una nuova infrastruttura',
      },
      {
        type: 'paragraph',
        text: 'Gennaio 2024 segna un passaggio simbolico: il primo mese a sei cifre di fatturato online.',
      },
      {
        type: 'paragraph',
        text: 'Un risultato che, due anni prima, sembrava totalmente fuori portata',
      },
      {
        type: 'paragraph',
        text: 'Il limite principale, tuttavia, restava lo stesso: la piattaforma eCommerce presentava ancora crash improvvisi, non ci permetteva né di impostare attività di marketing automation né di inserire sistemi di tracciamento completi e precisi.',
      },
      {
        type: 'paragraph',
        text: 'Inoltre, a settembre 2024, il catalogo Google è rimasto offline per tre settimane consecutive, compromettendo uno dei momenti più strategici dell’anno (saldi).',
      },
      {
        type: 'paragraph',
        text: 'Tutti i dati indicavano una perdita costante di vendite potenziali, legata a fattori tecnici fuori dal nostro controllo.',
      },
      {
        type: 'paragraph',
        text: 'Parallelamente, il team ha raggiunto una maggiore stabilità operativa: i professionisti coinvolti lavoravano in modo sempre più coordinato sui diversi canali, rendendo la gestione complessiva più efficace.',
      },
      {
        type: 'paragraph',
        text: 'In questo contesto si è aperta una nuova fase del progetto.',
      },
      {
        type: 'paragraph',
        text: 'Accanto alle attività di performance ci siamo dedicati al branding, con l’introduzione di nuove linee editoriali per i social, con una maggiore attenzione alla coerenza complessiva dell’immagine, con l’obiettivo di rendere il brand più riconoscibile e coerente anche nel digitale.',
      },
      {
        type: 'paragraph',
        text: 'Tutto ciò ha permesso al brand di continuare a crescere in modo coerente su tutti i fronti, nonostante i limiti della piattaforma.',
      },
      {
        type: 'paragraph',
        text: 'A fine anno, insieme al cliente, è stata presa una decisione strategica e pianificata come investimento sul lungo termine: migrare l’intero ecosistema su una piattaforma moderna e sviluppare internamente una soluzione tecnica in grado di integrarsi con il gestionale proprietario di Cumini.',
      },
      {
        type: 'paragraph',
        text: 'MER > 6 Crescita fatturato eCommerce: +71,6%',
      },
      {
        type: 'h2',
        text: '2025: Un cambio strutturale con Shopify',
      },
      {
        type: 'image',
        src: '/images/use-case-cumini/use-case-cumini5.png',
        alt: 'Cumini eCommerce su Shopify',
      },
      {
        type: 'paragraph',
        text: 'Con Shopify, tutto quello che prima non funzionava ha smesso di essere un problema',
      },
      {
        type: 'list',
        items: [
          'tracciamento reale: dal 30% al 95% delle conversioni identificate',
          'conversion rate mobile quasi raddoppiato',
          'email automation finalmente attiva e misurabile',
          'zero crash, zero cataloghi offline, zero vendite perse per problemi tecnici',
          'decisioni basate su dati precisi, non su stime',
        ],
      },
      {
        type: 'paragraph',
        text: 'Il passaggio a Shopify non è stato un semplice cambio di piattaforma, ma un vero e proprio punto di svolta per l’intero progetto: ecco perché.',
      },
      {
        type: 'paragraph',
        text: 'I primi mesi del 2025 si sono rivelati i migliori di sempre per l’eCommerce.',
      },
      {
        type: 'paragraph',
        text: 'Anni di lavoro, processi interni ben consolidati e la stabilità del team stavano finalmente producendo risultati prevedibili e pianificabili.',
      },
      {
        type: 'paragraph',
        text: 'La struttura era solida, ma mancava ancora una piattaforma all’altezza.',
      },
      {
        type: 'paragraph',
        text: 'Dalla primavera 2025, per circa tre mesi, il team si è dedicato completamente alla pianificazione e all’organizzazione della transizione verso Shopify: architettura tecnica, integrazioni, flussi e tracciamento.',
      },
      {
        type: 'paragraph',
        text: 'Da maggio a dicembre si è svolta la fase di migrazione attiva, accompagnata da un costante lavoro di ottimizzazione su tutti i fronti: recupero del traffico SEO, risoluzione di problemi tecnici, formazione del personale, automazione dei processi operativi, miglioramento della conversione (CRO) e integrazione con strumenti come Klaviyo e Stape.',
      },
      {
        type: 'paragraph',
        text: 'Il 2025 si è chiuso con il record assoluto di fatturato, nonostante i mesi di transizione tecnica.',
      },
      {
        type: 'paragraph',
        text: "MER > 5   Crescita fatturato eCommerce: +26,2% rispetto all'anno precedente. Record storico.",
      },
      {
        type: 'h3',
        text: 'Tracciamento: da parziale a completo',
      },
      {
        type: 'image',
        src: '/images/use-case-cumini/use-case-cumini2.png',
        alt: 'Tracking system score pre e post Sprint',
        maxWidth: '420px',
      },
      {
        type: 'paragraph',
        text: 'Prima di Shopify, il sistema di tracciamento era un “accumulo di patch”: integrazioni parziali, dati mancanti e attribuzioni errate tra i diversi canali. Sapevamo che i numeri non erano affidabili, ma non immaginavamo fino a che punto.',
      },
      {
        type: 'paragraph',
        text: 'Con la migrazione abbiamo introdotto un sistema di tracking server-to-server tramite Stape.',
      },
      {
        type: 'paragraph',
        text: 'Ad oggi, il sito raggiunge un punteggio complessivo di 92/100, con gli Analytics a 100 e le Ads a 97.',
      },
      {
        type: 'paragraph',
        text: 'Questo ci permette di tracciare con precisione circa il 95% delle sessioni e delle conversioni reali, dandoci una visione completa di ciò che accade in ogni canale: quali campagne producono risultati, dove gli utenti abbandonano il funnel e qual è il reale valore di ogni touchpoint.',
      },
      {
        type: 'paragraph',
        text: 'Naturalmente, un tracciamento al 95% non è un obiettivo in sé, ma la condizione necessaria per prendere decisioni tutte le decisioni a livello strategico, di marketing e di comunicazione.',
      },
      {
        type: 'h3',
        text: 'Data-driven: la svolta strategica',
      },
      {
        type: 'image',
        src: '/images/use-case-cumini/use-case-cumini6.png',
        alt: 'Dashboard metriche mensili — ROAS, MER, margine',
      },
      {
        type: 'image',
        src: '/images/use-case-cumini/use-case-cumini3.png',
        alt: 'Shopify analytics: sessioni, vendite, ordini, conversion rate',
      },
      {
        type: 'paragraph',
        text: 'Con Shopify, abbiamo accesso a una dashboard chiara, facilmente integrabile con strumenti di analisi esterni e capace di restituire metriche che prima calcolavamo manualmente su fogli Google.',
      },
      {
        type: 'paragraph',
        text: 'Parliamo di numeri precisi, non di stime generiche: CAC complessivo, nCAC (costo di acquisizione di un nuovo cliente), ROAS per canale, ROAS totale dello shop, margine di contribuzione reale al netto di tutti i costi.',
      },
      {
        type: 'paragraph',
        text: 'Incrociando tutti questi dati con la stagionalità, riusciamo a leggere con chiarezza le dinamiche dello shop: quanto costa davvero un nuovo cliente, quando è il momento giusto per fare più leva sulle campagne e quando rallentare, quali strategie restano solide nel tempo e quali vincono solo durante i saldi.',
      },
      {
        type: 'paragraph',
        text: 'Ad oggi, il focus è sulla retention e sulla LTV: la crescita non passa solo dall’acquisizione di nuovi clienti, ma dal saper valorizzare quelli esistenti e aumentare il loro valore nel tempo.',
      },
      {
        type: 'h3',
        text: 'Conversion rate: priorità mobile',
      },
      {
        type: 'paragraph',
        text: 'esempio',
      },
      {
        type: 'paragraph',
        text: 'Il tasso di conversione da mobile rappresenta uno degli indicatori più sensibili per un eCommerce fashion.',
      },
      {
        type: 'paragraph',
        text: 'Oggi, nel caso di Cumini, la maggior parte delle visite proviene da smartphone (un dato ormai standard nel settore) ma fino a poco tempo fa la quasi totalità delle transazioni avveniva ancora da desktop.',
      },
      {
        type: 'paragraph',
        text: 'Questo squilibrio evidenziava una criticità chiara: il percorso d’acquisto su mobile non era sufficientemente fluido o intuitivo, e la user experience stava frenando clienti già intenzionati all’acquisto.',
      },
      {
        type: 'paragraph',
        text: 'Con la transizione a Shopify, la situazione è cambiata radicalmente: il tasso di conversione da mobile è quasi raddoppiato e il merito va a un checkout nativo progettato per l’esperienza mobile, privo di errori e perfettamente coerente con gli standard del brand.',
      },
      {
        type: 'paragraph',
        text: 'In un eCommerce fashion con un AOV elevato, anche un singolo punto percentuale di incremento nel tasso di conversione può generare decine di migliaia di euro di ricavi aggiuntivi ogni anno.',
      },
      {
        type: 'h3',
        text: 'Klaviyo e marketing automation: dati affidabili, strategie più efficaci',
      },
      {
        type: 'image',
        src: '/images/use-case-cumini/use-case-cumini-7.png',
        alt: 'Klaviyo: riepilogo prestazioni ed entrate attribuite',
      },
      {
        type: 'paragraph',
        text: 'Con il passaggio a Shopify, l’integrazione con Klaviyo è diventata nativa e perfettamente funzionante. In precedenza, la connessione era instabile: dati incompleti, acquisti non riconosciuti, flussi automatici intermittenti. Anche le automazioni più semplici operavano in modo irregolare.',
      },
      {
        type: 'paragraph',
        text: 'Oggi Klaviyo riceve dati puliti e aggiornati in tempo reale su ogni comportamento utente. I flussi sono attivi, coerenti, performanti. Il risultato? Un incremento del fatturato attribuibile all’email marketing di circa il 23% rispetto al periodo precedente.',
      },
      {
        type: 'h3',
        text: 'Periodi di nuova collezione -> prezzo pieno',
      },
      {
        type: 'paragraph',
        text: '[ Screenshot: Dashboard ROAS/MER con dati mensili (blurrata) ]',
      },
      {
        type: 'paragraph',
        text: 'Nel fashion multibrand, le dinamiche di vendita cambiano in modo significativo tra periodi di saldo e prezzo pieno.',
      },
      {
        type: 'paragraph',
        text: 'Molti store tendono a ridurre o interrompere l’advertising durante il lancio delle nuove collezioni, perché il ROAS appare più basso nel breve periodo.',
      },
      {
        type: 'paragraph',
        text: 'Il nostro approccio è stato diverso: un prodotto da 400€ raramente viene acquistato alla prima visita. Il processo decisionale è più lungo, richiede più interazioni e tempo.',
      },
      {
        type: 'paragraph',
        text: 'Per questo, gli investimenti durante i periodi di lancio della nuova collezione non sono finalizzati alla conversione immediata, ma alla costruzione di una base di utenti che, nella maggior parte dei casi, si attiva nei mesi successivi, spesso in corrispondenza dei saldi.',
      },
      {
        type: 'paragraph',
        text: 'Per gestire questa strategia in modo davvero profittevole servono dati accurati: breakeven per campagna, costo per add-to-cart, costo per inizio checkout, CAC e nCAC monitorati in tempo reale.',
      },
      {
        type: 'paragraph',
        text: 'Oggi, anche nei periodi storicamente più complessi, lo store mantiene una redditività solida, con decine di migliaia di euro investiti ogni mese in advertising.',
      },
      {
        type: 'h2',
        text: '2026: nuovi risultati',
      },
      {
        type: 'paragraph',
        text: 'Nei mesi successivi alla migrazione, i risultati hanno iniziato a consolidarsi.',
      },
      {
        type: 'paragraph',
        text: 'Lo store ha raggiunto una media mensile di fatturato a sei cifre, non più legata a singoli picchi eccezionali ma ormai stabile e ricorrente.',
      },
      {
        type: 'paragraph',
        text: 'Ad oggi, Cumini ha raggiunto un livello di maturità che le permette di crescere in modo costante e prevedibile nel tempo.',
      },
      {
        type: 'h2',
        text: 'Metodo, numeri, crescita: la combinazione che fa la differenza',
      },
      {
        type: 'paragraph',
        text: '[grafico decrescita MER e crescita di fatturato -> profitto]',
      },
      {
        type: 'image',
        src: '/images/use-case-cumini/use-case-cumini1.png',
        alt: 'Grafico MER in decrescita e fatturato generale in crescita',
      },
      {
        type: 'image',
        src: '/images/use-case-cumini/use-case-cumini4.png',
        alt: 'Grafico MER vs margine di contribuzione (ricavi netti) nel tempo',
      },
      {
        type: 'paragraph',
        text: '[Grafico: MER in decrescita progressiva anno su anno, fatturato eCommerce in crescita costante]',
      },
      {
        type: 'paragraph',
        text: 'La crescita di un eCommerce fashion non è mai lineare: alterna fasi di accelerazione, momenti di stallo e periodi in cui si lavora per costruire, non per raccogliere.',
      },
      {
        type: 'paragraph',
        text: 'Il grafico qui sopra racconta questa dinamica meglio di qualsiasi parola. Il MER tende a diminuire nel tempo, segno di un mercato sempre più competitivo e di margini che si riducono con la scala. Eppure, il fatturato continua a crescere.',
      },
      {
        type: 'paragraph',
        text: 'Il vero indicatore di valore è il margine di contribuzione, cioè i ricavi netti anno su anno (la linea verde nel grafico). È questa la metrica che conta davvero: quanto l’azienda guadagna, di netto, ogni anno.',
      },
      {
        type: 'paragraph',
        text: 'Naturalmente, la crescita dei ricavi netti non va interpretata come una linea costante in ascesa, ma come un valore che si costruisce e si accumula nel tempo. Ci possono essere anni, come il 2025, in cui si registra una lieve flessione dovuta agli investimenti lato piattaforma, pur mantenendo una base positiva e solida.',
      },
      {
        type: 'paragraph',
        text: 'Nel lungo periodo, con numeri coerenti e una strategia fondata sulla stabilità, il valore tende a crescere in modo costante e ad accumulare risultati duraturi. È il frutto di un lavoro pensato e portato avanti con una logica di lungo termine.',
      },
      {
        type: 'h2',
        text: 'Oggi: struttura e crescita',
      },
      {
        type: 'paragraph',
        text: 'Nel fashion, lo spazio tra la scoperta di un brand e l’acquisto è ampio e non riconducibile a un singolo canale.',
      },
      {
        type: 'paragraph',
        text: 'Per questo, la crescita non può essere gestita in modo isolato. Richiede una strategia multicanale integrata, in cui ogni touchpoint contribuisce in modo diverso al percorso d’acquisto.',
      },
      {
        type: 'paragraph',
        text: 'Social, email, Google, Meta, SEO: ogni canale ha un ruolo specifico. Il ROAS diretto, da solo, non è sufficiente per valutarne l’efficacia. Un utente può scoprire il brand su Instagram, ritrovarlo su Google, ricevere un’email e acquistare settimane dopo, spesso durante i saldi. È un percorso distribuito nel tempo, che si costruisce attraverso interazioni successive.',
      },
      {
        type: 'paragraph',
        text: 'Per questo, nessun canale viene interrotto sulla base delle sole performance di breve periodo. Il risultato è sempre l’effetto combinato di più leve che lavorano insieme.',
      },
      {
        type: 'paragraph',
        text: 'Questo approccio si riflette direttamente sui risultati complessivi. Il vero indicatore di crescita non è il fatturato online in sé, ma la capacità di generare valore in modo costante e prevedibile nel tempo.',
      },
      {
        type: 'paragraph',
        text: 'Operativamente, il lavoro si basa sul monitoraggio continuo degli stessi indicatori (MER, ROAS per canale, margine di contribuzione, CAC e tasso di riacquisto) da cui derivano le decisioni. I risultati sono il prodotto di un insieme di scelte progressive, non di singole azioni isolate.',
      },
      {
        type: 'paragraph',
        text: 'La variabile determinante è il bilanciamento. Gestire un eCommerce oggi significa coordinare in modo coerente tutte le leve , advertising, branding, email marketing, SEO, sviluppo tecnico e analytics.',
      },
      {
        type: 'paragraph',
        text: 'È da questo equilibrio che dipende il potenziale di crescita. Anche una sola area gestita in modo non adeguato può limitarlo.',
      },
      {
        type: 'paragraph',
        text: 'Ad oggi:',
      },
      {
        type: 'list',
        items: [
          'Lo store eCommerce è passato da fatturato praticamente assente a milioni di euro di revenue online ogni anno',
          'Le prime sei cifre in un singolo mese sono state raggiunte e superate',
          'Il fatturato generale aziendale è cresciuto anno su anno per tutta la durata della collaborazione',
          'Il tracciamento copre oggi circa il 95% delle sessioni e conversioni reali',
          'Il tasso di conversione su mobile è raddoppiato dalla migrazione a Shopify',
          "Il fatturato attribuibile all'email marketing è cresciuto di circa il 23% con Klaviyo integrato correttamente",
          'I problemi tecnici urgenti sono passati da 86 comunicazioni nel 2024 a 14 nel 2025',
        ],
      },
      {
        type: 'h2',
        text: 'CTA - Questo modello funziona per te?',
      },
      {
        type: 'paragraph',
        text: 'Se sei arrivato fin qui, probabilmente riconosci qualcosa della tua realtà in queste pagine. Un brand con un prodotto forte e negozi fisici che performano bene, ma con un eCommerce che non esprime il suo pieno potenziale. O uno store online attivo, ma privo di una vera governance: dati incompleti, advertising guidato dall’intuizione, piattaforma tecnica che non scala con l’ambizione del business.',
      },
      {
        type: 'paragraph',
        text: 'Il modello costruito con Cumini è pensato per boutique fashion e brand multibrand B2C che vantano già un prodotto validato e un fatturato aziendale strutturato. È per chi vuole trasformare il canale online in un asset strategico, gestito con la stessa cura e attenzione dedicate al punto vendita fisico.',
      },
      {
        type: 'paragraph',
        text: 'Non è la soluzione per chi cerca risultati in 30 giorni, né per chi desidera un semplice fornitore a cui delegare senza coinvolgimento.',
      },
      {
        type: 'paragraph',
        text: 'Cumini è un cliente attivo di NoProb Agency da oltre 4 anni.',
      },
    ],
  },
  {
    slug: 'ecommerce-growth-secrets',
    title: 'Why Consistent eCommerce Growth Beats Chasing Trends: The Unsexy Secret Winning Brands Know',
    excerpt: "I'll explain you why you should stop trend-chasing and just focus on growing.",
    image: '/images/originals/ueqZoCFRDc46Zk64JejcJN460.png',
    imageAlt: 'eCommerce growth consistency',
    caseType: 'Use Case',
    date: '2026-03-22',
    content: [
      {
        type: 'paragraph',
        text: "We always hear about some fashion, retail, or supplement brand blowing up overnight thanks to a growth hack, viral campaign, or some miracle tool. But from what I've seen working with fashion, DTC, beauty, and supplement businesses in Italy and across Europe, the brands that actually grow don't chase every shiny new thing. They create solid processes, keep their teams together, tweak things constantly, and trust data, not hype.",
      },
      {
        type: 'paragraph',
        text: 'This is what we have learned working in the industry for years:',
      },
      {
        type: 'list',
        items: [
          'Why sticking with it matters more than the latest trend',
          'Why small improvements beat trying to get rich quick',
          'How to make reliable money and build a real company',
          'Why constant change can actually hurt you',
          "A practical plan for fashion, retail, and supplement brands that I've tested in the real world",
        ],
      },
      {
        type: 'paragraph',
        text: "By the end, you'll see why you should stop trend-chasing and just focus on growing.",
      },
      {
        type: 'h2',
        text: 'The Boring Way: More Consistency, More Profit',
      },
      {
        type: 'paragraph',
        text: "Think you need to be switching ad managers, copywriters, or platforms every year? Data says no.",
      },
      {
        type: 'list',
        items: [
          'Improving by just 1% each workday adds up to +3700% growth over a year because of compounding',
          'Brands with long-term plans grow revenue by 47% more, profit by 36% more, and overall business value by 81% more',
        ],
      },
      {
        type: 'paragraph',
        text: "From my experience working with fashion stores, supplement companies, and all sorts of other brands, whenever we helped owners cut out pointless changes and focus on making small improvements—speed, conversion rates, data tracking, user experience—their sales and profits became more steady, and they stressed out less.",
      },
      {
        type: 'h2',
        text: 'The Real Cost of Switching Things Up: Team and Strategy',
      },
      {
        type: 'paragraph',
        text: "Every time you change your team, you waste months (and thousands of euros).",
      },
      {
        type: 'list',
        items: [
          'Replacing someone costs between €8,000 and €35,000 when you include recruiting, training, lost productivity, and lost knowledge',
          'New hires can take up to two months to get up to speed',
          'When you switch platforms often, 80% of fashion brands report that conversions drop for 1 to 3 months afterward',
        ],
      },
      {
        type: 'paragraph',
        text: "That's not a coincidence. That's just what happens when you lose context, break continuity, and force people to learn new systems from scratch.",
      },
      {
        type: 'h2',
        text: 'Conclusion',
      },
      {
        type: 'paragraph',
        text: "Scaling in eCommerce is almost never about genius ideas or lucky breaks. It's about doing the fundamentals well: a team that's ready and aligned, one clear strategy, real KPIs, and a tech partner who actually solves problems.",
      },
    ],
  },
]
