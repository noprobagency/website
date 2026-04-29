/**
 * Renders one or more JSON-LD schema objects as <script type="application/ld+json">
 * tags. Each schema is serialized with `JSON.stringify` (which handles HTML-safe
 * escaping of `<`, `>`, `&`). Use it for BlogPosting, FAQPage, Organization, etc.
 */
export function StructuredData({ schemas }: { schemas: Array<Record<string, unknown>> }) {
  return (
    <>
      {schemas.map((schema, idx) => (
        <script
          key={idx}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  )
}
