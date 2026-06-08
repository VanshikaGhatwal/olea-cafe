'use client'

import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'
import { stats } from '@/data'
import FadeIn from '@/components/ui/FadeIn'

function AnimatedCounter({
  target,
  suffix,
  prefix,
  decimals = 0,
}: {
  target: number
  suffix: string
  prefix: string
  decimals?: number
}) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const started = useRef(false)

  useEffect(() => {
    if (!inView || started.current) return
    started.current = true

    const duration = 2000
    const steps = 60
    const increment = target / steps
    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(parseFloat(current.toFixed(decimals)))
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [inView, target, decimals])

  return (
    <span ref={ref}>
      {prefix}{decimals > 0 ? count.toFixed(1) : Math.floor(count)}{suffix}
    </span>
  )
}

export default function StatsSection() {
  return (
    <section id="stats" className="py-20 bg-navy relative overflow-hidden">
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(184,149,90,0.8) 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <FadeIn direction="up" className="text-center mb-16">
          <p className="text-gold/60 text-xs tracking-[0.4em] uppercase mb-3">Our Story in Numbers</p>
          <h2
            className="text-cream text-3xl lg:text-4xl font-bold"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Eight Years of Excellence
          </h2>
        </FadeIn>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
          {stats.map((stat, i) => (
            <FadeIn key={stat.label} delay={i * 0.1} direction="up">
              <div className="relative group text-center">
                {/* Card */}
                <div className="p-8 rounded-3xl border border-gold/10 bg-white/5 hover:bg-white/10 hover:border-gold/30 transition-all duration-500 group-hover:-translate-y-1">
                  {/* Glow */}
                  <div className="absolute inset-0 rounded-3xl bg-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />

                  <div
                    className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-3"
                    style={{
                      fontFamily: 'Playfair Display, serif',
                      background: 'linear-gradient(135deg, #B8955A 0%, #D4AF6A 50%, #B8955A 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    <AnimatedCounter
                      target={stat.value}
                      suffix={stat.suffix}
                      prefix={stat.prefix}
                      decimals={stat.value % 1 !== 0 ? 1 : 0}
                    />
                  </div>
                  <p className="text-cream/50 text-sm tracking-widest uppercase font-medium">
                    {stat.label}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
