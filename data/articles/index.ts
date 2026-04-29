export type ArticleSection =
  | { type: 'paragraph'; text: string }
  | { type: 'h2'; text: string }
  | { type: 'list'; items: string[] }
  | { type: 'h3'; text: string }
  | { type: 'image'; src: string; alt?: string; width?: number; height?: number; maxWidth?: string }
  | { type: 'metrics'; merValue: string; growthValue: string; note?: string }
  | { type: 'cta' }

export type Article = {
  slug: string
  title: string
  excerpt: string
  image: string
  imageAlt?: string
  articleType: string
  date: string
  content?: ArticleSection[]
  titleIt?: string
  excerptIt?: string
  contentIt?: ArticleSection[]
}

export const articles: Article[] = [
  {
    slug: 'ecommerce-growth-secrets',
    title: 'Why Consistent eCommerce Growth Beats Chasing Trends: The Unsexy Secret Winning Brands Know',
    excerpt: "I'll explain you why you should stop trend-chasing and just focus on growing.",
    image: '/images/originals/ueqZoCFRDc46Zk64JejcJN460.png',
    imageAlt: 'eCommerce growth consistency',
    articleType: 'Article',
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
        type: 'paragraph',
        text: "The math is simple: if you're constantly switching direction, you're resetting your progress every few months. But if you stay focused and improve just a little bit each week, those gains compound into something real.",
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
        text: "In my projects, I've observed that whenever a client switches team members (ads/dev/design) or changes platforms without a good reason, productivity goes down and things get worse overall. Sales dropped 8–12% on average in the two months after swapping a key team member or tech stack.",
      },
      {
        type: 'paragraph',
        text: "That's not a coincidence. That's just what happens when you lose context, break continuity, and force people to learn new systems from scratch.",
      },
      {
        type: 'paragraph',
        text: "Want to stop wasting money? Keep your team, improve your processes using data, and stick to one plan. It's that simple.",
      },
      {
        type: 'h2',
        text: 'Why Stable Teams Always Do Better',
      },
      {
        type: 'list',
        items: [
          'Teams that have worked together for at least two years are 15–30% more efficient',
          'Teams with low turnover are 25% better at handling problems and emergencies',
          "Keeping clients' attention and loyalty longer than 70% improves how they see your brand. I've noticed this especially with supplement and subscription-based businesses.",
        ],
      },
      {
        type: 'paragraph',
        text: "Whenever my clients had the same ad person, developer, and UX person for a long time, their results got better, and they experienced more predictable growth. They moved faster. They understood the business better. They spotted opportunities without being told.",
      },
      {
        type: 'paragraph',
        text: "That's not just about productivity. It's about trust, context, and shared vision.",
      },
      {
        type: 'h2',
        text: 'How Much Is a Predictable Brand Worth? Boring Brands Win',
      },
      {
        type: 'list',
        items: [
          'Reliable recurring income (repeat customers, subscriptions) is worth 3.3x more per euro than unpredictable sales',
          "Today, over 80% of what a fashion or supplement brand is worth depends on how steady its cashflow is, not on having occasional big wins",
        ],
      },
      {
        type: 'paragraph',
        text: "Since I started setting up stable dashboards and keeping consistent track of key numbers for my clients, investors and buyers have become much more interested in those businesses.",
      },
      {
        type: 'paragraph',
        text: "Think about it: would you rather invest in a business that does €1M one month and €300k the next? Or one that does €600k every single month? The second one is boring, but the second one is valuable. Predictability is what allows you to plan, hire, invest, and scale without fear.",
      },
      {
        type: 'h2',
        text: 'The NOPROB Framework: How to Build Consistency',
      },
      {
        type: 'h3',
        text: '0. Choose a Real Tech Partner (Step Zero or Final Step, But What Actually Matters)',
      },
      {
        type: 'paragraph',
        text: "It makes a huge difference to have a tech partner who does more than just set up Shopify. They should actually watch your data, handle tech support, fix bugs, manage tracking, and give you an operations team every single day, always on call. At noprob.agency, that's what we do:",
      },
      {
        type: 'list',
        items: [
          'Support 7 days a week by email, WhatsApp, and tickets—always there when you need us',
          'A team ready to go for fashion retail, supplement, and DTC industries—experienced and quick to get started',
          'Problem-solvers who help build plans, manage KPIs, and run operations, so you can focus on your brand, supply chain, and big vision',
        ],
      },
      {
        type: 'paragraph',
        text: "Whether you need a total rebuild or just monthly support, stability starts by finding a real partner, not just a vendor. Don't settle for agencies that just check boxes—find someone who actually closes the gaps.",
      },
      {
        type: 'h3',
        text: '1. Stabilize the Core',
      },
      {
        type: 'paragraph',
        text: 'Freeze unnecessary changes for 30 days:',
      },
      {
        type: 'list',
        items: [
          "Platform: Pick Shopify and stick with it. Don't experiment on multiple platforms at once.",
          "Clear ownership: Assign someone to own ads, someone to own data, someone to own UX. No gray zones.",
          "One dashboard: Get all your real KPIs in one place (AOV, retention, entry points, drop-off, margin). Check it weekly.",
        ],
      },
      {
        type: 'paragraph',
        text: "This step is about creating clarity. You can't optimize what you can't see.",
      },
      {
        type: 'h3',
        text: '2. Audit & Practical Roadmap',
      },
      {
        type: 'paragraph',
        text: "Figure out where you're losing money or conversions. This takes a few weeks, and it's worth it:",
      },
      {
        type: 'list',
        items: [
          "Technical audit: Use GTmetrix, GA4, Clarity, Shopify Analytics to see how your site actually performs. Page speed, mobile experience, checkout flow.",
          "Data audit: Do you track what actually matters? Where do you lose people in your funnel? Are there hidden revenue leaks?",
          "Team audit: Who's aligned? Who responds slowly? Who keeps making the same mistakes?",
          "Competitor audit: What are 3–5 brands in your space doing that you're not? Check SimilarWeb, Semrush, LinkedIn.",
        ],
      },
      {
        type: 'paragraph',
        text: "Then prioritize 2–3 real pain points with measurable impact. Not 10 incomplete projects. Just the ones that will move the needle.",
      },
      {
        type: 'h3',
        text: '3. 90 Days of Focus',
      },
      {
        type: 'paragraph',
        text: "Pick your top 2–3 levers (AOV, shopping funnel, checkout speed, abandoned cart recovery, retention) and commit to them. Give them clear deadlines. Make someone accountable.",
      },
      {
        type: 'paragraph',
        text: "Monitor results every single week. Not just at the end of the quarter. Weekly.",
      },
      {
        type: 'paragraph',
        text: "In every project where I pushed this discipline—real focus, weekly tracking, no distractions—at least one KPI improved noticeably after 90 days. Growth, AOV, or retention. Even when traffic stayed flat.",
      },
      {
        type: 'h2',
        text: "Internal FAQ: Real Questions I Get Asked",
      },
      {
        type: 'h3',
        text: "If I stick to one plan, won't someone else outrun me?",
      },
      {
        type: 'paragraph',
        text: 'Only if you measure progress by how busy you are. Brands that iterate with discipline always beat brands that "move fast and break things". Speed without direction is just noise.',
      },
      {
        type: 'h3',
        text: "What if my market changes? Don't I need to be flexible?",
      },
      {
        type: 'paragraph',
        text: "Sure, change your tactics. But your foundation stays stable. Your platforms, your team, your core processes—those don't pivot every quarter. You adjust your offers, your messaging, your content. But you don't rebuild the house every time the weather changes.",
      },
      {
        type: 'h3',
        text: "Doesn't consistency mean less innovation?",
      },
      {
        type: 'paragraph',
        text: "The opposite. Real innovation comes from teams that have time to think, test, and iterate. Not teams that are constantly firefighting. 80% of winning brands rely on incremental improvements, not dramatic pivots.",
      },
      {
        type: 'h3',
        text: "How do I know if my constant changes are actually costing me?",
      },
      {
        type: 'paragraph',
        text: "Make a list: How many times did you change your main team members, platform, ad strategy, or tracking setup in the last 12 months? If it's more than twice for any of those, you're paying a price you probably don't see.",
      },
      {
        type: 'h2',
        text: 'Conclusion',
      },
      {
        type: 'paragraph',
        text: "Scaling in eCommerce, especially fashion retail and supplements, is almost never about genius ideas or lucky breaks. It's about doing the fundamentals well:",
      },
      {
        type: 'list',
        items: [
          "A team that's ready and aligned",
          "One clear strategy, real KPIs, and a roadmap everyone understands",
          "A tech partner who actually solves problems and takes responsibility",
          "Decisions based on numbers, not whatever trend went viral this week",
        ],
      },
      {
        type: 'paragraph',
        text: "The real game-changer isn't avoiding mistakes. It's fixing them fast and learning from them. Mistakes happen; staying stuck is a choice.",
      },
      {
        type: 'paragraph',
        text: "If you want to see how much you're losing by staying on the treadmill of constant change, let's talk. At noprob.agency, we help brands by building stable systems, providing a tested team, running weekly operations meetings, giving 24/7 support, and always pointing you toward the data.",
      },
      {
        type: 'paragraph',
        text: "The smartest move: find a tech partner who has your back for years, not just weeks. Curious about what that could look like for your brand? Let's talk.",
      },
    ],
    titleIt: 'Perché la Crescita eCommerce Costante Batte la Caccia ai Trend: Il Segreto Poco Glamour dei Brand Vincenti',
    excerptIt: 'Ti spiego perché dovresti smettere di rincorrere i trend e concentrarti solo sulla crescita.',
    contentIt: [
      {
        type: 'paragraph',
        text: "Sentiamo sempre parlare di qualche brand fashion, retail o di integratori che esplode dall'oggi al domani grazie a un growth hack, a una campagna virale o a qualche tool miracoloso. Ma da quello che ho visto lavorando con aziende fashion, DTC, beauty e integratori in Italia e in tutta Europa, i brand che davvero crescono non rincorrono ogni novità appariscente. Costruiscono processi solidi, mantengono i team uniti, ottimizzano costantemente e si fidano dei dati, non dell'hype.",
      },
      {
        type: 'paragraph',
        text: 'Ecco cosa abbiamo imparato lavorando in questo settore per anni:',
      },
      {
        type: 'list',
        items: [
          "Perché rimanere fedeli al piano conta più dell'ultimo trend",
          'Perché i piccoli miglioramenti battono i tentativi di arricchirsi in fretta',
          "Come generare ricavi affidabili e costruire un'azienda vera",
          'Perché il cambiamento continuo può davvero danneggiarti',
          'Un piano pratico per brand fashion, retail e di integratori che ho testato nel mondo reale',
        ],
      },
      {
        type: 'paragraph',
        text: 'Alla fine vedrai perché dovresti smettere di rincorrere i trend e concentrarti solo sulla crescita.',
      },
      {
        type: 'h2',
        text: 'Il Modo Noioso: Più Costanza, Più Profitto',
      },
      {
        type: 'paragraph',
        text: 'Pensi di dover cambiare ad manager, copywriter o piattaforme ogni anno? I dati dicono di no.',
      },
      {
        type: 'list',
        items: [
          "Migliorare anche solo dell'1% ogni giorno lavorativo porta a una crescita del +3700% in un anno grazie all'effetto composto",
          "I brand con piani a lungo termine fanno crescere i ricavi del 47% in più, i profitti del 36% in più e il valore complessivo del business dell'81% in più",
        ],
      },
      {
        type: 'paragraph',
        text: 'Dalla mia esperienza lavorando con store fashion, aziende di integratori e ogni sorta di altri brand, ogni volta che abbiamo aiutato i fondatori a tagliare cambiamenti inutili e a concentrarsi su piccoli miglioramenti — velocità, conversion rate, tracciamento dati, user experience — le loro vendite e i loro profitti sono diventati più stabili, e lo stress è calato.',
      },
      {
        type: 'paragraph',
        text: "La matematica è semplice: se cambi direzione di continuo, resetti i progressi ogni pochi mesi. Ma se rimani concentrato e migliori anche solo un po' ogni settimana, quei guadagni si compongono in qualcosa di concreto.",
      },
      {
        type: 'h2',
        text: 'Il Costo Reale di Cambiare Tutto: Team e Strategia',
      },
      {
        type: 'paragraph',
        text: 'Ogni volta che cambi il team, sprechi mesi (e migliaia di euro).',
      },
      {
        type: 'list',
        items: [
          'Sostituire una persona costa tra €8.000 e €35.000 considerando recruiting, formazione, perdita di produttività e know-how perso',
          'I nuovi assunti possono impiegare fino a due mesi per essere pienamente operativi',
          "Quando cambi piattaforma spesso, l'80% dei brand fashion riporta un calo delle conversioni per 1-3 mesi dopo",
        ],
      },
      {
        type: 'paragraph',
        text: "Nei miei progetti ho osservato che ogni volta che un cliente cambia membri del team (ads/dev/design) o piattaforme senza un motivo solido, la produttività cala e in generale le cose peggiorano. Le vendite sono scese in media dell'8-12% nei due mesi successivi a un cambio di una figura chiave o di stack tecnologico.",
      },
      {
        type: 'paragraph',
        text: 'Non è un caso. È quello che succede quando perdi contesto, rompi la continuità e costringi le persone a imparare nuovi sistemi da zero.',
      },
      {
        type: 'paragraph',
        text: 'Vuoi smettere di buttare soldi? Tieniti il team, migliora i processi con i dati e rimani fedele a un piano. È così semplice.',
      },
      {
        type: 'h2',
        text: 'Perché i Team Stabili Vanno Sempre Meglio',
      },
      {
        type: 'list',
        items: [
          'I team che lavorano insieme da almeno due anni sono il 15-30% più efficienti',
          'I team con basso turnover sono il 25% più efficaci nel gestire problemi ed emergenze',
          "Mantenere l'attenzione e la fedeltà dei clienti oltre il 70% migliora la percezione del tuo brand. L'ho notato soprattutto con le aziende di integratori e quelle a subscription.",
        ],
      },
      {
        type: 'paragraph',
        text: 'Ogni volta che i miei clienti hanno avuto lo stesso responsabile ads, developer e UX per molto tempo, i risultati sono migliorati e la crescita è diventata più prevedibile. Si muovevano più velocemente. Capivano meglio il business. Notavano opportunità senza che gliele si dovesse indicare.',
      },
      {
        type: 'paragraph',
        text: 'Non si tratta solo di produttività. Si tratta di fiducia, contesto e visione condivisa.',
      },
      {
        type: 'h2',
        text: 'Quanto Vale un Brand Prevedibile? I Brand Noiosi Vincono',
      },
      {
        type: 'list',
        items: [
          'Un fatturato ricorrente affidabile (clienti che riacquistano, subscription) vale 3,3 volte di più per euro rispetto a vendite imprevedibili',
          "Oggi, oltre l'80% di quanto vale un brand fashion o di integratori dipende da quanto è stabile il cashflow, non dall'avere occasionali grandi colpi",
        ],
      },
      {
        type: 'paragraph',
        text: 'Da quando ho iniziato a creare dashboard stabili e a monitorare in modo costante i numeri chiave per i miei clienti, investitori e acquirenti sono diventati molto più interessati a quei business.',
      },
      {
        type: 'paragraph',
        text: 'Pensaci: preferiresti investire in un business che fa €1M un mese e €300k il successivo? O in uno che fa €600k ogni singolo mese? Il secondo è noioso, ma è quello di valore. La prevedibilità è ciò che ti permette di pianificare, assumere, investire e scalare senza paura.',
      },
      {
        type: 'h2',
        text: 'Il Framework NOPROB: Come Costruire la Costanza',
      },
      {
        type: 'h3',
        text: '0. Scegli un Vero Tech Partner (Step Zero o Step Finale, Ma È Quello Che Conta Davvero)',
      },
      {
        type: 'paragraph',
        text: 'Fa una differenza enorme avere un tech partner che faccia più che limitarsi a configurare Shopify. Dovrebbe davvero monitorare i tuoi dati, gestire il supporto tecnico, risolvere i bug, occuparsi del tracciamento e metterti a disposizione un team operativo ogni singolo giorno, sempre reperibile. In noprob.agency, è esattamente quello che facciamo:',
      },
      {
        type: 'list',
        items: [
          'Supporto 7 giorni su 7 via email, WhatsApp e ticket — sempre lì quando ti serviamo',
          'Un team pronto per il fashion retail, gli integratori e i brand DTC — esperto e veloce a partire',
          'Problem-solver che aiutano a costruire i piani, gestire i KPI e portare avanti le operations, così tu puoi concentrarti sul brand, la supply chain e la visione di lungo termine',
        ],
      },
      {
        type: 'paragraph',
        text: 'Che ti serva un rebuild completo o un supporto mensile, la stabilità parte dal trovare un vero partner, non solo un fornitore. Non accontentarti di agenzie che spuntano caselle — trova qualcuno che davvero colma i gap.',
      },
      {
        type: 'h3',
        text: '1. Stabilizza il Core',
      },
      {
        type: 'paragraph',
        text: 'Congela i cambiamenti non necessari per 30 giorni:',
      },
      {
        type: 'list',
        items: [
          'Piattaforma: scegli Shopify e rimanici. Non sperimentare su più piattaforme contemporaneamente.',
          'Ownership chiara: assegna a qualcuno gli ads, a qualcuno i dati, a qualcuno la UX. Niente zone grigie.',
          'Una dashboard: porta tutti i KPI reali in un solo posto (AOV, retention, punti di ingresso, drop-off, margine). Controllala ogni settimana.',
        ],
      },
      {
        type: 'paragraph',
        text: 'Questo step serve a creare chiarezza. Non puoi ottimizzare ciò che non vedi.',
      },
      {
        type: 'h3',
        text: '2. Audit e Roadmap Pratica',
      },
      {
        type: 'paragraph',
        text: 'Capisci dove stai perdendo soldi o conversioni. Richiede qualche settimana e ne vale la pena:',
      },
      {
        type: 'list',
        items: [
          'Audit tecnico: usa GTmetrix, GA4, Clarity, Shopify Analytics per vedere come performa davvero il tuo sito. Page speed, esperienza mobile, flusso di checkout.',
          'Audit dei dati: tracci ciò che conta davvero? Dove perdi le persone nel funnel? Ci sono leak di fatturato nascosti?',
          'Audit del team: chi è allineato? Chi risponde lentamente? Chi continua a fare gli stessi errori?',
          'Audit competitor: cosa stanno facendo 3-5 brand del tuo settore che tu non fai? Controlla SimilarWeb, Semrush, LinkedIn.',
        ],
      },
      {
        type: 'paragraph',
        text: "Poi dai priorità a 2-3 vere criticità con impatto misurabile. Non 10 progetti incompleti. Solo quelli che sposteranno l'ago della bilancia.",
      },
      {
        type: 'h3',
        text: '3. 90 Giorni di Focus',
      },
      {
        type: 'paragraph',
        text: "Scegli le tue 2-3 leve principali (AOV, funnel d'acquisto, velocità di checkout, recupero carrelli abbandonati, retention) e concentra le energie su quelle. Dai scadenze chiare. Rendi qualcuno responsabile.",
      },
      {
        type: 'paragraph',
        text: 'Monitora i risultati ogni singola settimana. Non solo a fine trimestre. Settimanalmente.',
      },
      {
        type: 'paragraph',
        text: 'In ogni progetto in cui ho spinto su questa disciplina — focus reale, tracking settimanale, zero distrazioni — almeno un KPI è migliorato in modo evidente dopo 90 giorni. Crescita, AOV o retention. Anche quando il traffico è rimasto piatto.',
      },
      {
        type: 'h2',
        text: 'FAQ Interne: Le Vere Domande che Mi Fanno',
      },
      {
        type: 'h3',
        text: 'Se rimango fedele a un solo piano, qualcun altro non mi supererà?',
      },
      {
        type: 'paragraph',
        text: 'Solo se misuri i progressi in base a quanto sei impegnato. I brand che iterano con disciplina battono sempre quelli che "vanno veloci e rompono tutto". La velocità senza direzione è solo rumore.',
      },
      {
        type: 'h3',
        text: 'E se il mio mercato cambia? Non devo essere flessibile?',
      },
      {
        type: 'paragraph',
        text: 'Certo, cambia le tue tattiche. Ma le fondamenta rimangono stabili. Le piattaforme, il team, i processi core — quelli non si stravolgono ogni trimestre. Adatti le offerte, il messaggio, i contenuti. Ma non ricostruisci la casa ogni volta che cambia il meteo.',
      },
      {
        type: 'h3',
        text: 'Costanza non significa meno innovazione?',
      },
      {
        type: 'paragraph',
        text: "Al contrario. La vera innovazione viene da team che hanno il tempo di pensare, testare e iterare. Non da team che spengono incendi di continuo. L'80% dei brand vincenti si basa su miglioramenti incrementali, non su pivot drastici.",
      },
      {
        type: 'h3',
        text: 'Come faccio a capire se i miei cambiamenti continui mi stanno costando davvero?',
      },
      {
        type: 'paragraph',
        text: 'Fai una lista: quante volte hai cambiato i membri principali del team, la piattaforma, la strategia ads o il setup di tracciamento negli ultimi 12 mesi? Se è più di due volte per uno qualsiasi di questi, stai pagando un prezzo che probabilmente non vedi.',
      },
      {
        type: 'h2',
        text: 'Conclusione',
      },
      {
        type: 'paragraph',
        text: "Scalare nell'eCommerce, soprattutto nel fashion retail e negli integratori, quasi mai è una questione di idee geniali o colpi di fortuna. È una questione di fare bene i fondamentali:",
      },
      {
        type: 'list',
        items: [
          'Un team pronto e allineato',
          'Una strategia chiara, KPI reali e una roadmap che tutti capiscono',
          'Un tech partner che risolve davvero i problemi e si prende responsabilità',
          'Decisioni basate sui numeri, non sul trend virale della settimana',
        ],
      },
      {
        type: 'paragraph',
        text: 'Il vero game-changer non è evitare gli errori. È risolverli velocemente e imparare da essi. Gli errori capitano; rimanere bloccati è una scelta.',
      },
      {
        type: 'paragraph',
        text: 'Se vuoi vedere quanto stai perdendo restando sul tapis roulant del cambiamento continuo, parliamoci. In noprob.agency aiutiamo i brand costruendo sistemi stabili, mettendo a disposizione un team rodato, organizzando meeting operativi settimanali, garantendo supporto 24/7 e indirizzandoti sempre verso i dati.',
      },
      {
        type: 'paragraph',
        text: 'La mossa più intelligente: trova un tech partner che ti supporti per anni, non solo per settimane. Curioso di vedere come potrebbe essere per il tuo brand? Parliamoci.',
      },
    ],
  },
]
