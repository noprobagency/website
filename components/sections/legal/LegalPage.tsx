import Footer from '@/components/layout/Footer'
import SectionLabel from '@/components/ui/SectionLabel'
import CookiePreferencesButton from '@/components/sections/legal/CookiePreferencesButton'
import { parseInline } from '@/components/article/renderSection'
import type { Locale } from '@/lib/i18n'
import { formatLegalDate, getLegalCopy } from '@/lib/i18n/legal'

const BODY = 'font-sans text-[16px] font-medium leading-[1.6em] tracking-[-0.02em] text-np-text'

/**
 * Shared layout for the in-house Privacy Policy and Cookie Policy pages:
 * intro, "in short" summary card, then the plain-language sections.
 * Copy lives in `lib/i18n/legal.ts`.
 */
export default function LegalPage({ locale, doc: docKey }: { locale: Locale; doc: 'privacy' | 'cookie' }) {
  const copy = getLegalCopy(locale)
  const doc = copy[docKey]
  const th = copy.cookieTable

  return (
    <main>
      <section className="bg-np-bg pb-20 pt-[150px] min-[810px]:pt-[180px]">
        <div className="container-noprob">
          <div className="mx-auto max-w-[800px]">
            <SectionLabel>{doc.eyebrow}</SectionLabel>
            <h1 className="mt-5 font-display text-[2.4rem] font-semibold leading-[1.1em] tracking-[-0.05em] text-np-dark min-[810px]:text-[3.4rem]">
              {doc.title}
              <em className="font-serif font-normal italic">{doc.titleEm}</em>
            </h1>
            <p className="mt-4 font-sans text-[14px] font-medium tracking-[-0.02em] text-np-grey">
              {doc.updatedLabel}: {formatLegalDate(locale)}
            </p>

            <div className="mt-10 rounded-card bg-np-card px-6 py-8 shadow-card np-border-card min-[810px]:px-10">
              <h2 className="font-display text-[1.25rem] font-semibold tracking-[-0.04em] text-np-dark">
                {doc.summaryTitle}
              </h2>
              <ul className="mt-4 flex list-disc flex-col gap-2 pl-5">
                {doc.summary.map((item) => (
                  <li key={item} className={BODY}>
                    {parseInline(item)}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-12 flex flex-col gap-10">
              {doc.sections.map((section, idx) => (
                <section key={section.title}>
                  <h2 className="font-display text-[1.5rem] font-semibold leading-[1.2em] tracking-[-0.04em] text-np-dark">
                    {idx + 1}. {section.title}
                  </h2>

                  {section.cookies && (
                    <div className="mt-4 overflow-x-auto rounded-[16px] bg-np-card np-border-card">
                      <table className="w-full min-w-[640px] border-collapse text-left">
                        <thead>
                          <tr className="border-b border-np-border">
                            {[th.name, th.provider, th.purpose, th.duration].map((label) => (
                              <th
                                key={label}
                                scope="col"
                                className="px-4 py-3 font-sans text-[13px] font-semibold tracking-[-0.02em] text-np-grey"
                              >
                                {label}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {section.cookies.map((row) => (
                            <tr key={row.name} className="border-b border-np-border align-top last:border-b-0">
                              <td className="px-4 py-3 font-mono text-[13px] text-np-dark">{row.name}</td>
                              <td className="px-4 py-3 font-sans text-[14px] font-medium tracking-[-0.02em] text-np-text">
                                {row.provider}
                              </td>
                              <td className="px-4 py-3 font-sans text-[14px] font-medium leading-[1.5em] tracking-[-0.02em] text-np-text">
                                {row.purpose}
                              </td>
                              <td className="whitespace-nowrap px-4 py-3 font-sans text-[14px] font-medium tracking-[-0.02em] text-np-text">
                                {row.duration}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}

                  {/* Sections that open with a lead-in line render it above the list. */}
                  {section.items && section.paragraphs && section.paragraphs.length === 1 && section.paragraphs[0].endsWith(':') ? (
                    <>
                      <p className={`mt-4 ${BODY}`}>{parseInline(section.paragraphs[0])}</p>
                      <LegalList items={section.items} />
                    </>
                  ) : (
                    <>
                      {section.items && <LegalList items={section.items} />}
                      {section.paragraphs?.map((p) => (
                        <p key={p} className={`mt-4 ${BODY}`}>
                          {parseInline(p)}
                        </p>
                      ))}
                    </>
                  )}

                  {section.preferencesButton && <CookiePreferencesButton label={copy.preferencesButton} />}
                </section>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer locale={locale} />
    </main>
  )
}

function LegalList({ items }: { items: string[] }) {
  return (
    <ul className="mt-4 flex list-disc flex-col gap-3 pl-5">
      {items.map((item) => (
        <li key={item} className={BODY}>
          {parseInline(item)}
        </li>
      ))}
    </ul>
  )
}
