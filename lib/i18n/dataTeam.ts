import type { Locale } from '@/lib/i18n'
import type { MigrazioneCopy } from '@/lib/i18n/migrazione'

/**
 * Pricing + application-form copy for the Data-Driven Team page
 * (/data-driven-team, /it/team-ecommerce-dedicato).
 *
 * Reuses the migrazione black pricing+form section (MigrazionePricing) but with
 * the tier progression bar and the price hidden (showTiers/showPrice = false),
 * so only the fields below are actually rendered. `tiers`, `priceSuffix` and
 * `scarcity` are kept empty to satisfy the shared type.
 */

export type DataTeamCopy = {
  pricing: MigrazioneCopy['pricing']
  form: MigrazioneCopy['form']
}

const it: DataTeamCopy = {
  pricing: {
    label: 'inizia qui',
    heading: 'Un team eCommerce dedicato.\nUn solo interlocutore.',
    subheading:
      'Non un servizio a pacchetto, ma un team che entra nel tuo brand e lo fa crescere nel tempo. Il prezzo si costruisce sul percorso: candidati e ne parliamo.',
    tiers: [],
    priceSuffix: '',
    priceBadge: 'metodo noprobagency',
    guarantee:
      'Sconto trial per iniziare con fiducia: parti, valuti i risultati e decidi con calma.',
    trustLabel: 'Scelti da brand Fashion, Integratori e DTC',
    cardTitle: 'Data-Driven Team',
    cardDescription:
      'Un eCommerce Manager dedicato che guida un team full-stack sul tuo store. Sviluppo, marketing, CRO e dati, gestiti per te con un solo punto di riferimento.',
    cardChecks: [
      'Un eCommerce Manager dedicato come unico interlocutore',
      'Team full-stack: sviluppo, marketing, CRO e analytics',
      'Tracciamento server-side e report chiari sulle performance',
      'Supporto 7/7, costi fissi e nessuna sorpresa',
    ],
    scarcity: '',
    cta: 'Candidati per il team',
  },
  form: {
    label: 'candidatura',
    heading: 'Candidati per il team dedicato',
    subheading: 'Lavoriamo con pochi brand alla volta. Candidati e vediamo se sei il progetto giusto.',
    intro: 'Più dettagli ci dai, più la valutazione è precisa. Leggiamo ogni candidatura.',
    fields: {
      name: { label: 'Nome e cognome', placeholder: 'Mario Rossi' },
      email: { label: 'Email aziendale', placeholder: 'nome@brand.com' },
      brand: { label: 'Nome del brand / azienda', placeholder: 'Brand srl' },
      websiteUrl: { label: 'URL del tuo eCommerce', placeholder: 'brand.com' },
      platform: {
        label: 'Su quale piattaforma sei ora?',
        placeholder: 'es. Shopify, WooCommerce, Magento…',
      },
      revenue: {
        label: 'Fatturato online annuo indicativo',
        placeholder: 'Seleziona…',
        options: ['< 100k', '100k - 300k', '300k - 1M', '1M - 3M', '3M+'],
      },
      timeline: {
        label: 'Da quando vuoi partire?',
        placeholder: 'Seleziona…',
        options: ['Il prima possibile', 'Entro 1-3 mesi', 'Sto solo valutando'],
      },
      reason: {
        label: 'Cosa vuoi ottenere da un team eCommerce dedicato?',
        placeholder: 'Raccontaci dove sei oggi, cosa ti blocca e gli obiettivi che vuoi raggiungere.',
      },
    },
    privacyBefore: 'Ho letto e accetto la ',
    privacyLinkLabel: 'Privacy Policy',
    submit: 'Candidati ora',
    submitting: 'Invio in corso…',
    errors: {
      name: 'Inserisci nome e cognome',
      email: 'Inserisci un indirizzo email valido',
      brand: 'Inserisci il nome del brand',
      websiteUrl: 'Inserisci l’URL del tuo sito',
      platform: 'Indica la piattaforma attuale',
      revenue: 'Seleziona un’opzione',
      timeline: 'Seleziona un’opzione',
      reason: 'Spiega in almeno 30 caratteri i tuoi obiettivi',
      privacy: 'Devi accettare la Privacy Policy',
    },
    errorGeneric: 'Qualcosa è andato storto. Riprova tra un momento.',
    errorNetwork: 'Errore di rete. Controlla la connessione e riprova.',
  },
}

const en: DataTeamCopy = {
  pricing: {
    label: 'get started',
    heading: 'A dedicated eCommerce team.\nOne point of contact.',
    subheading:
      'Not a packaged service, but a team that steps into your brand and grows it over time. Pricing is built around the scope: apply and let’s talk.',
    tiers: [],
    priceSuffix: '',
    priceBadge: 'noprobagency method',
    guarantee:
      'Trial discount to start with confidence: begin, review the results and decide with no pressure.',
    trustLabel: 'Chosen by Fashion, Supplements and DTC brands',
    cardTitle: 'Data-Driven Team',
    cardDescription:
      'A dedicated eCommerce Manager leading a full-stack team on your store. Development, marketing, CRO and data, managed for you through a single point of contact.',
    cardChecks: [
      'A dedicated eCommerce Manager as your single point of contact',
      'Full-stack team: development, marketing, CRO and analytics',
      'Server-side tracking and clear performance reporting',
      '7/7 support, fixed costs and no surprises',
    ],
    scarcity: '',
    cta: 'Apply for the team',
  },
  form: {
    label: 'application',
    heading: 'Apply for your dedicated team',
    subheading: 'We work with a few brands at a time. Apply and let’s see if you’re the right fit.',
    intro: 'The more detail you give, the sharper our assessment. We read every application.',
    fields: {
      name: { label: 'Full name', placeholder: 'John Smith' },
      email: { label: 'Business email', placeholder: 'name@brand.com' },
      brand: { label: 'Brand / company name', placeholder: 'Brand ltd' },
      websiteUrl: { label: 'Your eCommerce URL', placeholder: 'brand.com' },
      platform: {
        label: 'What platform are you on now?',
        placeholder: 'e.g. Shopify, WooCommerce, Magento…',
      },
      revenue: {
        label: 'Approximate annual online revenue',
        placeholder: 'Select…',
        options: ['< 100k', '100k - 300k', '300k - 1M', '1M - 3M', '3M+'],
      },
      timeline: {
        label: 'When do you want to start?',
        placeholder: 'Select…',
        options: ['As soon as possible', 'Within 1-3 months', 'Just exploring'],
      },
      reason: {
        label: 'What do you want from a dedicated eCommerce team?',
        placeholder: 'Tell us where you are today, what’s blocking you and the goals you want to reach.',
      },
    },
    privacyBefore: 'I have read and accept the ',
    privacyLinkLabel: 'Privacy Policy',
    submit: 'Apply now',
    submitting: 'Sending…',
    errors: {
      name: 'Enter your full name',
      email: 'Enter a valid email address',
      brand: 'Enter the brand name',
      websiteUrl: 'Enter your site URL',
      platform: 'Tell us your current platform',
      revenue: 'Select an option',
      timeline: 'Select an option',
      reason: 'Explain your goals in at least 30 characters',
      privacy: 'You must accept the Privacy Policy',
    },
    errorGeneric: 'Something went wrong. Please try again in a moment.',
    errorNetwork: 'Network error. Check your connection and try again.',
  },
}

const dictionaries: Record<Locale, DataTeamCopy> = { it, en }

export function getDataTeamCopy(locale: Locale): DataTeamCopy {
  return dictionaries[locale]
}
