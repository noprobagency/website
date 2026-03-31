'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

export default function Preloader() {
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    const timeout = window.setTimeout(() => setHidden(true), 1500)

    return () => window.clearTimeout(timeout)
  }, [])

  if (hidden) {
    return null
  }

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-np-bg">
      <Image
        src="/images/originals/AY6rjj8ZVUbD4McJGHwEF1x9L08.svg"
        alt="noprob"
        width={120}
        height={40}
        priority
        className="h-10 w-auto"
      />
    </div>
  )
}
