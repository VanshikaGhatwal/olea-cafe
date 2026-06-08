'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Menu', href: '#menu' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-navy/95 backdrop-blur-xl shadow-2xl border-b border-gold/10'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="#" className="group flex items-center gap-2">
              <div className="w-8 h-8 rounded-full border-2 border-gold flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-gold" />
              </div>
              <span
                className="text-2xl font-bold tracking-widest text-cream uppercase"
                style={{ fontFamily: 'Playfair Display, serif', letterSpacing: '0.25em' }}
              >
                Olea
              </span>
            </a>

            {/* Desktop Links */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-cream/70 hover:text-gold transition-colors duration-300 text-sm tracking-widest uppercase font-medium"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href="#reservation"
                className="px-6 py-2.5 rounded-full bg-gold/10 border border-gold/40 text-gold hover:bg-gold hover:text-navy text-sm tracking-widest uppercase font-medium transition-all duration-300"
              >
                Reserve
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden text-cream p-2"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-navy/98 backdrop-blur-xl flex flex-col items-center justify-center gap-8"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                onClick={() => setMobileOpen(false)}
                className="text-3xl font-light tracking-widest text-cream/80 hover:text-gold transition-colors uppercase"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                {link.label}
              </motion.a>
            ))}
            <motion.a
              href="#reservation"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navLinks.length * 0.08 }}
              onClick={() => setMobileOpen(false)}
              className="mt-4 px-8 py-3 rounded-full bg-gold text-navy text-sm tracking-widest uppercase font-semibold"
            >
              Reserve a Table
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
