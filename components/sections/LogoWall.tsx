import Image from 'next/image'

import SectionLabel from '@/components/ui/SectionLabel'

const logoRows = [
  [
    '/images/originals/FR3xEp7KJjpolR8QoX59evskBqM.png',
    '/images/originals/RWVPFhFtXLH5J1UMr53qg3AEzL8.svg',
    '/images/originals/N0Tx01aMkN7R9VRqxvyyVyhYwQk.png',
    '/images/originals/HvA5aLVjEBt6fJXZIKt8YOmWX30.svg',
    '/images/originals/vN14wZ29u2zUpcqrMSGkycbAUf0.svg',
    '/images/originals/8occchv7EZ1XL94VC9bEoysJDPU.svg',
  ],
  [
    '/images/originals/TkZPz7oSBvfmLnhfuoopRtZMGOg.svg',
    '/images/originals/XbNI9XSTG5RsPHfZYFc2XLBJmw.webp',
    '/images/originals/4WXTDogs69o24LfYlTlhkJwFNis.svg',
    '/images/originals/dKDeBQLhklB2IlsixCrTFByIQ1w.svg',
    '/images/originals/qwWohvBrgJlSHfTWtvnnrKMguM.svg',
    '/images/originals/qN88QvWhz41zWATtn6ZnzXM2cE.png',
  ],
  [
    '/images/originals/ZdmuSU05kPctAmOJTND91Yiov7Y.svg',
    '/images/originals/HFB669NKhBu4jn7AhQ5uvYL0cY.svg',
    '/images/originals/43oBOi4PKxtyVmYCQkDgPI.svg',
    '/images/originals/SewUzXcHAaqioXr7g1lRajka5Mc.svg',
    '/images/originals/SXlf93ZkIQ5nC06iYVj2bs4d7vg.png',
  ],
] as const

export default function LogoWall() {
  return (
    <section className="px-6 pb-0 pt-[80px] scroll-mt-[150px]">
      <div className="container-noprob">
        <div className="mx-auto max-w-[760px] text-center">
          <SectionLabel>Clients</SectionLabel>
          <h2 className="mt-5 font-display text-[2.8rem] font-semibold leading-[1.2em] tracking-[-0.05em] text-noprob-text">
            Brands that believed in us.
          </h2>
        </div>

        <div className="mt-10 space-y-3">
          {logoRows.map((row, rowIndex) => (
            <div
              key={`row-${rowIndex}`}
              className="grid gap-3 md:grid-cols-3 lg:grid-cols-6"
            >
              {row.map((logo) => (
                <div
                  key={logo}
                  className="border-card-thick shadow-card flex min-h-[94px] items-center justify-center rounded-card bg-noprob-card"
                >
                  <Image
                    src={logo}
                    alt="Client logo"
                    width={180}
                    height={80}
                    className="max-h-10 w-auto object-contain opacity-60 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
