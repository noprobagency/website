#!/usr/bin/env node
// Fails (exit 1) if any em dash (U+2014) is present inside the Italian blog
// fields of data/articles/index.ts: titleIt, excerptIt, ledeIt, contentIt, faqIt.
// English content is intentionally NOT scanned (em dashes are valid English
// punctuation). To extend scope, add file paths to FILES below.

import { readFileSync, existsSync } from 'node:fs'

const FILES = ['data/articles/index.ts']
const IT_FIELD_RE = /\b(titleIt|excerptIt|ledeIt|contentIt|faqIt)\b/

let hits = 0

for (const file of FILES) {
  if (!existsSync(file)) continue
  const lines = readFileSync(file, 'utf8').split('\n')

  // Track whether we are currently inside an IT field block.
  let inItBlock = false
  let braceDepth = 0

  lines.forEach((line, idx) => {
    if (IT_FIELD_RE.test(line)) {
      inItBlock = true
      braceDepth = 0
    }

    if (inItBlock) {
      if (line.includes('—')) {
        console.error(`${file}:${idx + 1}: ${line.trim()}`)
        hits++
      }
      // Crude block exit: when an IT array/object closes and we hit a top-level
      // article-level field (slug:, title:, etc) outside braces, exit.
      braceDepth += (line.match(/[{[]/g) || []).length
      braceDepth -= (line.match(/[}\]]/g) || []).length
      if (braceDepth < 0) {
        inItBlock = false
        braceDepth = 0
      }
    }
  })
}

if (hits > 0) {
  console.error(`\nFound ${hits} em dash occurrence(s) inside IT blog content. Replace with comma, parentheses, or colon.`)
  process.exit(1)
}

console.log('OK: no em dash in IT blog content')
