import SectionLabel from '@/components/ui/SectionLabel'
import { type Locale } from '@/lib/i18n'
import { getMigrazioneCopy } from '@/lib/i18n/migrazione'

/*
  COMPONENTE GRAFICI "SEARCH CONSOLE" — sezione comparativa migrazione.
  Porting fedele del markup HTML/SVG fornito nel brief. Colori fedeli a GSC:
  clic #4793F0 (blu), impressioni #5E3FBE (viola). Font adattato a Inter (font-sans).

  - SOPRA: migrazione gestita male (numeri ILLUSTRATIVI).
  - SOTTO: migrazione gestita da noi (numeri reali Cumini).
  - Quando sara' disponibile lo screenshot REALE di Search Console di Cumini,
    sostituire l'<svg> del grafico "good" con un <Image> dentro lo stesso frame
    bianco (.gsc-card), mantenendo la riga metriche sopra.
  - Tracciato volutamente a zig-zag fitto (dato giornaliero): non smussare.
*/

type GscChartProps = {
  tone: 'bad' | 'good'
  badge: string
  mutedNote: string
  metrics: { clicks: string; impressions: string; ctr: string; position: string }
  clicksPoints: string
  imprPoints: string
  caption: string
  ariaLabel: string
}

function GscChart({
  tone,
  badge,
  mutedNote,
  metrics,
  clicksPoints,
  imprPoints,
  caption,
  ariaLabel,
}: GscChartProps) {
  const isGood = tone === 'good'
  return (
    <div>
      <div
        className={`mb-[9px] flex items-center gap-[7px] text-[14px] font-semibold ${
          isGood ? 'text-[#1D9E75]' : 'text-[#C0392B]'
        }`}
      >
        {isGood ? '↑' : '↓'} {badge}
        <span className="text-[12px] font-normal text-[#9AA0A6]">· {mutedNote}</span>
      </div>

      <div className="overflow-hidden rounded-[14px] border border-[#E4E6EB] bg-white">
        {/* Metrics row */}
        <div className="grid grid-cols-4">
          <div className="bg-[#4793F0] px-[15px] py-3 text-white">
            <div className="text-[12px]">Clic totali</div>
            <div className="mt-[3px] text-[26px] font-normal leading-[1.1]">{metrics.clicks}</div>
          </div>
          <div className="bg-[#5E3FBE] px-[15px] py-3 text-white">
            <div className="text-[12px]">Impressioni totali</div>
            <div className="mt-[3px] text-[26px] font-normal leading-[1.1]">{metrics.impressions}</div>
          </div>
          <div className="border-l border-t border-[#E4E6EB] px-[15px] py-3 text-[#5F6368]">
            <div className="text-[12px]">CTR media</div>
            <div className="mt-[3px] text-[20px] font-normal leading-[1.1] min-[520px]:text-[26px]">
              {metrics.ctr}
            </div>
          </div>
          <div className="border-l border-t border-[#E4E6EB] px-[15px] py-3 text-[#5F6368]">
            <div className="text-[12px]">Posizione media</div>
            <div className="mt-[3px] text-[20px] font-normal leading-[1.1] min-[520px]:text-[26px]">
              {metrics.position}
            </div>
          </div>
        </div>

        {/* Chart */}
        <div className="px-4 pb-2 pt-4">
          <svg
            viewBox="0 0 640 230"
            className="h-auto w-full font-sans"
            style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
            role="img"
            aria-label={ariaLabel}
          >
            <text x="6" y="14" fontSize="11" fill="#80868B">
              Clic
            </text>
            <text x="634" y="14" textAnchor="end" fontSize="11" fill="#80868B">
              Impressioni
            </text>
            <line x1="34" y1="30" x2="606" y2="30" stroke="#ECEDEF" />
            <line x1="34" y1="80" x2="606" y2="80" stroke="#ECEDEF" />
            <line x1="34" y1="130" x2="606" y2="130" stroke="#ECEDEF" />
            <line x1="34" y1="180" x2="606" y2="180" stroke="#D6D8DC" />
            <text x="30" y="33" textAnchor="end" fontSize="9" fill="#9AA0A6">
              450
            </text>
            <text x="30" y="83" textAnchor="end" fontSize="9" fill="#9AA0A6">
              300
            </text>
            <text x="30" y="133" textAnchor="end" fontSize="9" fill="#9AA0A6">
              150
            </text>
            <text x="30" y="183" textAnchor="end" fontSize="9" fill="#9AA0A6">
              0
            </text>
            <text x="612" y="33" fontSize="9" fill="#9AA0A6">
              30K
            </text>
            <text x="612" y="83" fontSize="9" fill="#9AA0A6">
              20K
            </text>
            <text x="612" y="133" fontSize="9" fill="#9AA0A6">
              10K
            </text>
            <text x="612" y="183" fontSize="9" fill="#9AA0A6">
              0
            </text>
            {/* Checkpoint 1 — Migrazione */}
            <line x1="190" y1="24" x2="190" y2="180" stroke="#9AA0A6" strokeDasharray="3 3" />
            <circle cx="190" cy="24" r="7" fill="#5F6368" />
            <text x="190" y="27" textAnchor="middle" fontSize="9" fill="#fff">
              1
            </text>
            {/* Checkpoint 2 — Ri-elaborazione Google */}
            <line x1="250" y1="24" x2="250" y2="180" stroke="#9AA0A6" strokeDasharray="3 3" />
            <circle cx="250" cy="24" r="7" fill="#5F6368" />
            <text x="250" y="27" textAnchor="middle" fontSize="9" fill="#fff">
              2
            </text>
            <polyline fill="none" stroke="#4793F0" strokeWidth="1.5" points={clicksPoints} />
            <polyline fill="none" stroke="#5E3FBE" strokeWidth="1.5" points={imprPoints} />
          </svg>
          <div className="mt-1 flex gap-[18px] pl-[34px] text-[11px] text-[#5F6368]">
            <span>① Migrazione</span>
            <span>② Ri-elaborazione Google</span>
          </div>
        </div>
      </div>

      <div className="mt-2 text-[13px] leading-[1.5] text-[#555]">{caption}</div>
    </div>
  )
}

export default function SearchConsoleCharts({ locale = 'it' }: { locale?: Locale }) {
  const d = getMigrazioneCopy(locale).charts

  return (
    <section className="py-[80px]">
      <div className="container-noprob">
        <div className="mx-auto w-full max-w-[720px] font-sans">
          <div className="mx-auto mb-10 max-w-[640px] text-center">
            <SectionLabel>search console</SectionLabel>
            <h2 className="mt-5 text-np-h2 text-center text-np-dark">
              Dopo ogni migrazione il traffico scende.{' '}
              <span className="font-serif italic">Conta cosa succede dopo.</span>
            </h2>
            <p className="mt-5 font-sans text-body-lg font-medium text-noprob-text">
              Google ri-elabora il sito: il calo è fisiologico. La risalita dipende da come è fatta
              la migrazione.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <GscChart
              tone="bad"
              badge="Migrazione gestita male"
              mutedNote="esempio illustrativo"
              metrics={{ clicks: '28,4K', impressions: '1,84 Mln', ctr: '1,1%', position: '42,8' }}
              clicksPoints="34,92 44,86 54,98 64,82 74,95 84,79 94,90 104,84 114,97 124,80 134,92 144,86 154,99 164,83 174,91 184,87 190,90 200,104 210,118 220,112 230,126 240,120 250,130 262,140 274,134 286,144 298,138 312,146 326,141 340,148 356,143 372,149 390,144 410,150 432,145 456,151 480,146 506,152 534,147 562,153 590,148 606,151"
              imprPoints="34,132 44,128 54,138 64,126 74,135 84,124 94,131 104,127 114,139 124,125 134,133 144,129 154,140 164,127 174,134 184,130 190,132 200,142 210,150 220,146 230,154 240,150 250,156 262,160 274,157 286,162 298,159 312,163 326,160 340,164 356,161 372,165 390,162 410,166 432,163 456,166 480,164 506,167 534,165 562,168 590,166 606,167"
              caption="Redirect mancanti, URL persi. Dopo la ri-elaborazione il traffico si stabilizza più in basso e non torna su."
              ariaLabel="Search Console: traffico che cala dopo la migrazione e si stabilizza in basso"
            />

            <GscChart
              tone="good"
              badge="Migrazione gestita da noi"
              mutedNote="dato reale Cumini"
              metrics={{ clicks: '99,3K', impressions: '3,91 Mln', ctr: '2,5%', position: '9,6' }}
              clicksPoints="34,96 44,90 54,102 64,86 74,99 84,83 94,94 104,88 114,101 124,84 134,96 144,90 154,103 164,87 174,95 184,91 190,94 200,108 210,116 220,110 230,114 240,107 250,112 262,100 274,106 286,92 298,98 312,82 326,90 340,72 356,80 372,64 390,71 410,54 432,62 456,46 480,53 506,38 534,45 562,32 590,40 606,30"
              imprPoints="34,134 44,130 54,140 64,128 74,137 84,126 94,133 104,129 114,141 124,127 134,135 144,131 154,142 164,128 174,136 184,132 190,134 200,144 210,150 220,146 230,148 240,143 250,147 262,140 274,144 286,135 298,139 312,130 326,136 340,124 356,130 372,118 390,124 410,110 432,116 456,104 480,110 506,98 534,104 562,92 590,99 606,90"
              caption="Redirect 1:1 mappati a monte. Breve assestamento, poi Google ritrova tutto e il sito cresce."
              ariaLabel="Search Console: lieve calo dopo la migrazione e poi forte crescita"
            />
          </div>

          <p className="mt-[22px] text-center text-[14px] text-[#555]">
            Stesso punto di partenza. Esito opposto. La differenza è il metodo.
          </p>

          {/* Bridge to the solution */}
          <p className="mx-auto mt-8 max-w-[620px] text-center font-sans text-body-lg font-medium leading-[1.5em] text-noprob-text">
            {d.bridge}
          </p>
        </div>
      </div>
    </section>
  )
}
