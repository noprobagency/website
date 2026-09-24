#!/usr/bin/env node
// One-shot generator for the AI Accelerator OG images (1200x630, IT + EN).
// Run with: node scripts/generate-ai-og.mjs
// Output: public/images/og-ai-accelerator-{it,en}.png

import sharp from 'sharp'
import { writeFileSync } from 'node:fs'

const ACCENT = '#2F6BFF'

function svg(subtitle) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <rect width="1200" height="630" fill="#0b0e17"/>
  <!-- neural circuits -->
  <g fill="none" stroke="${ACCENT}" stroke-width="2" opacity="0.35">
    <path d="M0 120 H300 Q340 120 340 160 V260 Q340 300 380 300 H520"/>
    <path d="M1200 100 H940 Q900 100 900 140 V240 Q900 280 860 280 H700"/>
    <path d="M80 630 V500 Q80 460 120 460 H400 Q440 460 440 420 V380"/>
    <path d="M1160 630 V520 Q1160 480 1120 480 H860 Q820 480 820 440 V400"/>
    <path d="M420 0 V80 Q420 120 460 120 H620"/>
  </g>
  <g fill="${ACCENT}" opacity="0.8">
    <circle cx="520" cy="300" r="6"/>
    <circle cx="700" cy="280" r="6"/>
    <circle cx="440" cy="380" r="6"/>
    <circle cx="820" cy="400" r="6"/>
    <circle cx="620" cy="120" r="6"/>
  </g>
  <!-- lightning mark -->
  <path d="M600 180 L560 250 H590 L580 310 L630 235 H598 L610 180 Z" fill="${ACCENT}"/>
  <text x="600" y="390" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-size="86" font-weight="700" letter-spacing="-3" fill="#ffffff">AI Accelerator</text>
  <text x="600" y="452" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-size="34" font-weight="500" fill="#9db9ff">${subtitle}</text>
  <text x="600" y="540" text-anchor="middle" font-family="Georgia, serif" font-style="italic" font-size="28" fill="#8a8f9c">noprob agency</text>
</svg>`
}

const variants = [
  { file: 'public/images/og-ai-accelerator-it.png', subtitle: '30 giorni · Audit + Roadmap' },
  { file: 'public/images/og-ai-accelerator-en.png', subtitle: '30 days · Audit + Roadmap' },
]

for (const { file, subtitle } of variants) {
  const png = await sharp(Buffer.from(svg(subtitle))).png().toBuffer()
  writeFileSync(file, png)
  console.log(`written ${file} (${png.length} bytes)`)
}
