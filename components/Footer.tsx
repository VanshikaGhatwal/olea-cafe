'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Instagram, Facebook, Twitter } from 'lucide-react'

const footerLinks = {
  Experience: ['About Us', 'Menu', 'Gallery', 'Testimonials'],
  Visit: ['Make a Reservation', 'Private Dining', 'Contact Us', 'Find Us'],
  Legal: ['Privacy Policy', 'Terms of Service', 'Allergen Info'],
}

export default function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    setSubscribed(true)
    setEmail('')
  }

  return (
    <footer className="bg-navy border-t border-white/8">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 rounded-full border-2 border-gold flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-gold" />
              </div>
              <span
                className="text-xl font-bold tracking-[0.25em] text-cream uppercase"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Olea
              </span>
            </div>
            <p
              className="text-cream/50 text-sm italic font-light mb-6 leading-relaxed"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              "Where Food, Coffee & Memories Come Together"
            </p>
            <p className="text-cream/40 text-xs font-light leading-relaxed mb-6">
              23 Lodhi Road, Khan Market Area<br />
              New Delhi, Delhi 110003 · India
            </p>

            {/* Socials */}
            <div className="flex gap-3">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-cream/40 hover:border-gold/50 hover:text-gold transition-all duration-300"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h4 className="text-cream/70 text-xs tracking-[0.25em] uppercase font-semibold mb-4">
                {section}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-cream/40 hover:text-gold text-sm font-light transition-colors duration-300"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="mt-14 pt-10 border-t border-white/8">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="max-w-sm">
              <h4
                className="text-cream font-bold text-xl mb-2"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Stay in the Loop
              </h4>
              <p className="text-cream/40 text-sm font-light">
                Seasonal menus, events and exclusive offers — delivered to your inbox.
              </p>
            </div>

            {!subscribed ? (
              <form onSubmit={handleSubscribe} className="flex gap-3 w-full max-w-md">
                <input
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-5 py-3 rounded-xl bg-white/8 border border-white/12 text-cream placeholder-cream/30 text-sm font-light focus:outline-none focus:border-gold/50 transition-colors"
                  required
                />
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  className="px-5 py-3 rounded-xl bg-gold text-navy font-semibold text-sm flex items-center gap-2 whitespace-nowrap hover:bg-gold-light transition-colors"
                >
                  Subscribe <ArrowRight size={15} />
                </motion.button>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-gold text-sm font-medium"
              >
                ✓ You're subscribed. Welcome to the Olea family.
              </motion.div>
            )}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5 py-5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-cream/25 font-light">
          <p>© 2024 Olea Café & Restaurant. All rights reserved.</p>
          <p>Crafted with care in New Delhi, India</p>
        </div>
      </div>
    </footer>
  )
}
