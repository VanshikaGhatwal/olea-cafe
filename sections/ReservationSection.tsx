'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Calendar, Clock, Users, User, CheckCircle } from 'lucide-react'
import FadeIn from '@/components/ui/FadeIn'
import SectionLabel from '@/components/ui/SectionLabel'

const timeSlots = [
  '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM',
  '7:00 PM', '7:30 PM', '8:00 PM', '8:30 PM', '9:00 PM', '9:30 PM',
]

export default function ReservationSection() {
  const [form, setForm] = useState({ name: '', date: '', time: '', guests: '2' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.name || !form.date || !form.time) return
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 1500)
  }

  return (
    <section id="reservation" className="section-pad bg-cream overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Info */}
          <FadeIn direction="left">
            <SectionLabel label="Reservations" className="mb-6" />
            <h2
              className="text-4xl lg:text-5xl font-bold text-navy mb-6"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Reserve Your Table
            </h2>
            <p className="text-navy/60 font-light leading-relaxed mb-8">
              Secure your table at Olea and arrive to a warm welcome, your preferred setting ready. We honour reservations with the same care we bring to every dish.
            </p>

            {/* Info cards */}
            <div className="space-y-4">
              {[
                { icon: Clock, title: 'Lunch', detail: 'Monday – Sunday · 12:00 PM – 3:30 PM' },
                { icon: Clock, title: 'Dinner', detail: 'Monday – Sunday · 7:00 PM – 11:00 PM' },
                { icon: Users, title: 'Groups of 8+', detail: 'Please call us for private dining arrangements' },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-cream-dark">
                  <div className="w-9 h-9 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <item.icon size={16} className="text-gold" />
                  </div>
                  <div>
                    <p className="text-navy font-semibold text-sm">{item.title}</p>
                    <p className="text-navy/50 text-sm font-light">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>

          {/* Right: Form */}
          <FadeIn direction="right">
            <div className="bg-white rounded-3xl shadow-xl border border-cream-dark p-8 lg:p-10">
              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.form
                    key="form"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-5"
                  >
                    <h3
                      className="text-2xl font-bold text-navy mb-2"
                      style={{ fontFamily: 'Playfair Display, serif' }}
                    >
                      Book a Table
                    </h3>
                    <p className="text-navy/50 text-sm font-light mb-6">
                      We'll confirm your reservation within 30 minutes.
                    </p>

                    {/* Name */}
                    <div className="relative">
                      <label className="block text-xs tracking-widest uppercase text-navy/60 font-medium mb-2">
                        Full Name
                      </label>
                      <div className="relative">
                        <User size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-navy/30" />
                        <input
                          type="text"
                          placeholder="Your full name"
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          className="luxury-input pl-10"
                          required
                        />
                      </div>
                    </div>

                    {/* Date & Time */}
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs tracking-widest uppercase text-navy/60 font-medium mb-2">
                          Date
                        </label>
                        <div className="relative">
                          <Calendar size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-navy/30 z-10 pointer-events-none" />
                          <input
                            type="date"
                            value={form.date}
                            onChange={(e) => setForm({ ...form, date: e.target.value })}
                            min={new Date().toISOString().split('T')[0]}
                            className="luxury-input pl-10"
                            required
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-xs tracking-widest uppercase text-navy/60 font-medium mb-2">
                          Time
                        </label>
                        <div className="relative">
                          <Clock size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-navy/30 z-10 pointer-events-none" />
                          <select
                            value={form.time}
                            onChange={(e) => setForm({ ...form, time: e.target.value })}
                            className="luxury-input pl-10 appearance-none cursor-pointer"
                            required
                          >
                            <option value="">Select</option>
                            {timeSlots.map((t) => (
                              <option key={t} value={t}>{t}</option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>

                    {/* Guests */}
                    <div>
                      <label className="block text-xs tracking-widest uppercase text-navy/60 font-medium mb-2">
                        Number of Guests
                      </label>
                      <div className="relative">
                        <Users size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-navy/30 z-10 pointer-events-none" />
                        <select
                          value={form.guests}
                          onChange={(e) => setForm({ ...form, guests: e.target.value })}
                          className="luxury-input pl-10 appearance-none cursor-pointer"
                        >
                          {[1, 2, 3, 4, 5, 6, 7].map((n) => (
                            <option key={n} value={n}>
                              {n} {n === 1 ? 'Guest' : 'Guests'}
                            </option>
                          ))}
                          <option value="8+">8+ Guests (Group)</option>
                        </select>
                      </div>
                    </div>

                    {/* Submit */}
                    <motion.button
                      type="submit"
                      disabled={loading}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-4 rounded-2xl bg-navy text-cream font-semibold text-sm tracking-widest uppercase transition-all duration-300 hover:bg-navy-light disabled:opacity-70 mt-2"
                    >
                      {loading ? (
                        <span className="flex items-center justify-center gap-2">
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                            className="w-4 h-4 border-2 border-cream/30 border-t-cream rounded-full"
                          />
                          Confirming…
                        </span>
                      ) : (
                        'Reserve My Table'
                      )}
                    </motion.button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                    className="text-center py-8"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2, type: 'spring', stiffness: 400 }}
                      className="w-16 h-16 rounded-full bg-gold/15 flex items-center justify-center mx-auto mb-5"
                    >
                      <CheckCircle size={32} className="text-gold" />
                    </motion.div>
                    <h3
                      className="text-2xl font-bold text-navy mb-3"
                      style={{ fontFamily: 'Playfair Display, serif' }}
                    >
                      We'll See You Soon
                    </h3>
                    <p className="text-navy/60 font-light text-sm leading-relaxed mb-2">
                      Thank you, <strong>{form.name}</strong>. Your table for {form.guests} on{' '}
                      <strong>{form.date}</strong> at <strong>{form.time}</strong> is being confirmed.
                    </p>
                    <p className="text-navy/40 text-xs">A confirmation will reach you shortly.</p>
                    <button
                      onClick={() => { setSubmitted(false); setForm({ name: '', date: '', time: '', guests: '2' }) }}
                      className="mt-6 text-gold text-sm underline underline-offset-4 hover:text-terracotta transition-colors"
                    >
                      Make another reservation
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
