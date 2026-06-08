'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { ChevronDown } from 'lucide-react'

export default function HeroSection() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '15%'])
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  return (
    <section ref={ref} id="home" className="relative h-screen min-h-[700px] overflow-hidden flex items-center justify-center">
      {/* Parallax Background */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 scale-110"
      >
        <img
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&q=90"
          alt="Olea Restaurant Interior"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy/80 via-navy/60 to-navy/90" />
      <div className="absolute inset-0 bg-gradient-to-r from-navy/40 via-transparent to-navy/20" />

      {/* Decorative grain */}
      <div className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.05'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Content */}
      <motion.div
        style={{ y: textY, opacity }}
        className="relative z-10 text-center px-6 max-w-5xl mx-auto"
      >
        {/* Pre-heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex items-center justify-center gap-3 mb-6"
        >
          <div className="h-px w-16 bg-gold/70" />
          <span className="text-gold text-xs tracking-[0.4em] uppercase font-medium">
            Delhi, India
          </span>
          <div className="h-px w-16 bg-gold/70" />
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="text-cream font-bold leading-none mb-6"
          style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: 'clamp(3rem, 8vw, 7rem)',
          }}
        >
          Olea
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.75 }}
          className="text-cream/70 font-light tracking-wide mb-4 italic"
          style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: 'clamp(1.1rem, 2.5vw, 1.6rem)',
          }}
        >
          Where Food, Coffee &amp; Memories Come Together
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.95 }}
          className="text-cream/50 font-light text-base max-w-xl mx-auto mb-12 tracking-wide"
        >
          A sanctuary of flavour in the heart of Delhi — where every cup, plate and evening is crafted with love.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.a
            href="#reservation"
            whileHover={{ scale: 1.04, boxShadow: '0 0 32px rgba(184,149,90,0.4)' }}
            whileTap={{ scale: 0.97 }}
            className="px-8 py-4 rounded-full bg-gold text-navy font-semibold text-sm tracking-widest uppercase transition-all duration-300 min-w-[200px] text-center"
          >
            Reserve a Table
          </motion.a>
          <motion.a
            href="#menu"
            whileHover={{ scale: 1.04, borderColor: 'rgba(184,149,90,0.8)' }}
            whileTap={{ scale: 0.97 }}
            className="px-8 py-4 rounded-full border border-cream/30 text-cream font-medium text-sm tracking-widest uppercase transition-all duration-300 hover:bg-cream/10 min-w-[200px] text-center"
          >
            Explore Menu
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
        onClick={() => document.getElementById('stats')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <span className="text-cream/40 text-xs tracking-[0.2em] uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        >
          <ChevronDown size={18} className="text-gold" />
        </motion.div>
      </motion.div>

      {/* Corner decorations */}
      <div className="absolute top-24 left-8 hidden lg:block">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          className="w-16 h-16 border border-gold/20 rounded-full flex items-center justify-center"
        >
          <div className="w-8 h-8 border border-gold/30 rounded-full" />
        </motion.div>
      </div>
    </section>
  )
}
