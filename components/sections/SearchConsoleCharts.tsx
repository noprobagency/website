import SectionLabel from '@/components/ui/SectionLabel'
import { type Locale } from '@/lib/i18n'
import { getMigrazioneCopy, type MigrazioneCopy } from '@/lib/i18n/migrazione'

/*
  COMPONENTE GRAFICI "SEARCH CONSOLE" — sezione comparativa migrazione.
  Colori fedeli a GSC: clic #4793F0 (blu), impressioni #5E3FBE (viola).
  Tutto il testo è localizzato dal blocco `charts` del copy module (IT/EN).
  Tracciato volutamente a zig-zag fitto (dato giornaliero): non smussare.
*/

type ChartsCopy = MigrazioneCopy['charts']

function GscChart({
  tone,
  data,
  c,
  clicksPoints,
  imprPoints,
}: {
  tone: 'bad' | 'good'
  data: ChartsCopy['bad']
  c: ChartsCopy
  clicksPoints: string
  imprPoints: string
}) {
  const isGood = tone === 'good'
  return (
    <div>
      <div
        className={`mb-[9px] flex items-center gap-[7px] text-[14px] font-semibold ${
          isGood ? 'text-[#1D9E75]' : 'text-[#C0392B]'
        }`}
      >
        {isGood ? '↑' : '↓'} {data.badge}
        <span className="text-[12px] font-normal text-[#9AA0A6]">· {data.note}</span>
      </div>

      <div className="overflow-hidden rounded-[14px] border border-[#E4E6EB] bg-white">
        {/* Metrics row — responsive: tighter padding + smaller type on mobile */}
        <div className="grid grid-cols-4">
          <div className="bg-[#4793F0] px-2 py-2.5 text-white min-[520px]:px-[15px] min-[520px]:py-3">
            <div className="text-[10px] leading-[1.2] min-[520px]:text-[12px]">{c.metricClicks}</div>
            <div className="mt-[2px] text-[15px] font-normal leading-[1.1] min-[520px]:mt-[3px] min-[520px]:whitespace-nowrap min-[520px]:text-[26px]">
              {data.clicks}
            </div>
          </div>
          <div className="bg-[#5E3FBE] px-2 py-2.5 text-white min-[520px]:px-[15px] min-[520px]:py-3">
            <div className="text-[10px] leading-[1.2] min-[520px]:text-[12px]">{c.metricImpressions}</div>
            <div className="mt-[2px] text-[15px] font-normal leading-[1.1] min-[520px]:mt-[3px] min-[520px]:whitespace-nowrap min-[520px]:text-[26px]">
              {data.impressions}
            </div>
          </div>
          <div className="border-l border-t border-[#E4E6EB] px-2 py-2.5 text-[#5F6368] min-[520px]:px-[15px] min-[520px]:py-3">
            <div className="text-[10px] leading-[1.2] min-[520px]:text-[12px]">{c.metricCtr}</div>
            <div className="mt-[2px] text-[15px] font-normal leading-[1.1] min-[520px]:mt-[3px] min-[520px]:text-[26px]">
              {data.ctr}
            </div>
          </div>
          <div className="border-l border-t border-[#E4E6EB] px-2 py-2.5 text-[#5F6368] min-[520px]:px-[15px] min-[520px]:py-3">
            <div className="text-[10px] leading-[1.2] min-[520px]:text-[12px]">{c.metricPosition}</div>
            <div className="mt-[2px] text-[15px] font-normal leading-[1.1] min-[520px]:mt-[3px] min-[520px]:text-[26px]">
              {data.position}
            </div>
          </div>
        </div>

        {/* Chart */}
        <div className="px-2 pb-2 pt-4 min-[520px]:px-4">
          <svg
            viewBox="0 0 640 230"
            className="h-auto w-full font-sans"
            style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
            role="img"
            aria-label={data.ariaLabel}
          >
            <text x="6" y="14" fontSize="11" fill="#80868B">
              {c.axisClicks}
            </text>
            <text x="634" y="14" textAnchor="end" fontSize="11" fill="#80868B">
              {c.axisImpressions}
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
            <line x1="190" y1="24" x2="190" y2="180" stroke="#9AA0A6" strokeDasharray="3 3" />
            <circle cx="190" cy="24" r="7" fill="#5F6368" />
            <text x="190" y="27" textAnchor="middle" fontSize="9" fill="#fff">
              1
            </text>
            <line x1="250" y1="24" x2="250" y2="180" stroke="#9AA0A6" strokeDasharray="3 3" />
            <circle cx="250" cy="24" r="7" fill="#5F6368" />
            <text x="250" y="27" textAnchor="middle" fontSize="9" fill="#fff">
              2
            </text>
            <polyline fill="none" stroke="#4793F0" strokeWidth="1.5" points={clicksPoints} />
            <polyline fill="none" stroke="#5E3FBE" strokeWidth="1.5" points={imprPoints} />
          </svg>
          <div className="mt-1 flex flex-wrap gap-x-[18px] gap-y-1 pl-[20px] text-[11px] text-[#5F6368] min-[520px]:pl-[34px]">
            <span>{c.checkpoint1}</span>
            <span>{c.checkpoint2}</span>
          </div>
        </div>
      </div>

      <div className="mt-2 text-[13px] leading-[1.5] text-[#555]">{data.caption}</div>
    </div>
  )
}

const BAD_CLICKS =
  '34,92 44,86 54,98 64,82 74,95 84,79 94,90 104,84 114,97 124,80 134,92 144,86 154,99 164,83 174,91 184,87 190,90 200,104 210,118 220,112 230,126 240,120 250,130 262,140 274,134 286,144 298,138 312,146 326,141 340,148 356,143 372,149 390,144 410,150 432,145 456,151 480,146 506,152 534,147 562,153 590,148 606,151'
const BAD_IMPR =
  '34,132 44,128 54,138 64,126 74,135 84,124 94,131 104,127 114,139 124,125 134,133 144,129 154,140 164,127 174,134 184,130 190,132 200,142 210,150 220,146 230,154 240,150 250,156 262,160 274,157 286,162 298,159 312,163 326,160 340,164 356,161 372,165 390,162 410,166 432,163 456,166 480,164 506,167 534,165 562,168 590,166 606,167'
const GOOD_CLICKS =
  '34,96 44,90 54,102 64,86 74,99 84,83 94,94 104,88 114,101 124,84 134,96 144,90 154,103 164,87 174,95 184,91 190,94 200,108 210,116 220,110 230,114 240,107 250,112 262,100 274,106 286,92 298,98 312,82 326,90 340,72 356,80 372,64 390,71 410,54 432,62 456,46 480,53 506,38 534,45 562,32 590,40 606,30'
const GOOD_IMPR =
  '34,134 44,130 54,140 64,128 74,137 84,126 94,133 104,129 114,141 124,127 134,135 144,131 154,142 164,128 174,136 184,132 190,134 200,144 210,150 220,146 230,148 240,143 250,147 262,140 274,144 286,135 298,139 312,130 326,136 340,124 356,130 372,118 390,124 410,110 432,116 456,104 480,110 506,98 534,104 562,92 590,99 606,90'

export default function SearchConsoleCharts({ locale = 'it' }: { locale?: Locale }) {
  const c = getMigrazioneCopy(locale).charts

  return (
    <section className="pb-0 pt-[40px]">
      <div className="container-noprob">
        <div className="mx-auto w-full max-w-[720px] font-sans">
          <div className="mx-auto mb-10 max-w-[640px] text-center">
            <SectionLabel>{c.label}</SectionLabel>
            <h2 className="mt-5 text-np-h2 text-center text-np-dark">
              {c.title1}
              <span className="font-serif italic">{c.titleEm}</span>
            </h2>
            <p className="mt-5 font-sans text-body-lg font-medium text-noprob-text">{c.subtitle}</p>
          </div>

          <div className="flex flex-col gap-6">
            <GscChart tone="bad" data={c.bad} c={c} clicksPoints={BAD_CLICKS} imprPoints={BAD_IMPR} />
            <GscChart tone="good" data={c.good} c={c} clicksPoints={GOOD_CLICKS} imprPoints={GOOD_IMPR} />
          </div>

          <p className="mt-[22px] text-center text-[14px] text-[#555]">{c.foot}</p>
        </div>
      </div>
    </section>
  )
}
