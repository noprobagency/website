import Image from 'next/image'

import SectionLabel from '@/components/ui/SectionLabel'

const logoRows = [
  [
    { src: '/images/originals/FR3xEp7KJjpolR8QoX59evskBqM.png', height: 30 },
    { src: '/images/originals/RWVPFhFtXLH5J1UMr53qg3AEzL8.svg', height: 60 },
    { src: '/images/originals/N0Tx01aMkN7R9VRqxvyyVyhYwQk.png', height: 46 },
    { src: '/images/originals/HvA5aLVjEBt6fJXZIKt8YOmWX30.svg', height: 39 },
    { src: '/images/originals/vN14wZ29u2zUpcqrMSGkycbAUf0.svg', height: 15 },
    { src: '/images/originals/8occchv7EZ1XL94VC9bEoysJDPU.svg', height: 52 },
  ],
  [
    { src: '/images/originals/TkZPz7oSBvfmLnhfuoopRtZMGOg.svg', height: 12 },
    { src: '/images/originals/XbNI9XSTG5RsPHfZYFc2XLBJmw.webp', height: 51 },
    { src: '/images/originals/4WXTDogs69o24LfYlTlhkJwFNis.svg', height: 31 },
    { src: '/images/originals/dKDeBQLhklB2IlsixCrTFByIQ1w.svg', height: 35 },
    { src: '/images/originals/qwWohvBrgJlSHfTWtvnnrKMguM.svg', height: 32 },
    { src: '/images/originals/qN88QvWhz41zWATtn6ZnzXM2cE.png', height: 47 },
  ],
  [
    { src: '/images/originals/ZdmuSU05kPctAmOJTND91Yiov7Y.svg', height: 24 },
    { src: '/images/originals/HFB669NKhBu4jn7AhQ5uvYL0cY.svg', height: 25 },
    { src: '/images/originals/43oBOi4PKxtyVmYCQkDgPI.svg', height: 19 },
    { src: '/images/originals/SewUzXcHAaqioXr7g1lRajka5Mc.svg', height: 49 },
    { src: '/images/originals/SXlf93ZkIQ5nC06iYVj2bs4d7vg.png', height: 50 },
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

        <div className="mt-10 space-y-1">
          {logoRows.map((row, rowIndex) => (
            <div
              key={`row-${rowIndex}`}
              className="flex flex-wrap items-center justify-center gap-0"
            >
              {row.map((logo) => (
                <div
                  key={logo.src}
                  className="flex h-[100px] flex-1 basis-[160px] items-center justify-center"
                >
                  <Image
                    src={logo.src}
                    alt="Client logo"
                    width={180}
                    height={logo.height}
                    className="w-auto object-contain opacity-70 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0"
                    style={{ height: logo.height }}
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
