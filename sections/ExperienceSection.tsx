'use client'

import { motion } from 'framer-motion'
import { Sunset, Music, Wine, Sparkles } from 'lucide-react'
import FadeIn from '@/components/ui/FadeIn'
import SectionLabel from '@/components/ui/SectionLabel'

const experiences = [
  {
    icon: Sunset,
    title: 'Evening Dining',
    description: 'As the city settles into dusk, Olea transforms — candlelit tables, ambient warmth and a carefully curated evening menu come together in seamless harmony.',
    image: 'https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?w=600&q=80',
  },
  {
    icon: Music,
    title: 'Live Music',
    description: 'Every Friday and Saturday evening, Delhi\'s finest acoustic and jazz artists perform intimate sets while you dine. No reservations required for the soul.',
    image: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=600&q=80',
  },
  {
    icon: Wine,
    title: 'Signature Cocktails',
    description: 'Our award-winning bar programme fuses classical mixology with Indian botanicals, seasonal fruit infusions and house-made syrups. Every glass, a small masterpiece.',
    image: 'https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=600&q=80',
  },
]

export default function ExperienceSection() {
  return (
    <section id="experience" className="section-pad bg-navy relative overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(ellipse at 20% 50%, rgba(184,149,90,0.3) 0%, transparent 50%),
            radial-gradient(ellipse at 80% 20%, rgba(193,113,79,0.2) 0%, transparent 50%)`,
        }}
      />

      {/* Decorative rings */}
      <div className="absolute top-20 right-20 w-80 h-80 rounded-full border border-gold/5 hidden lg:block" />
      <div className="absolute top-32 right-32 w-56 h-56 rounded-full border border-gold/8 hidden lg:block" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <FadeIn direction="up" className="text-center mb-16">
          <SectionLabel label="The Olea Experience" light className="justify-center mb-4" />
          <h2
            className="text-4xl lg:text-5xl font-bold text-cream mb-4"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Beyond the Plate
          </h2>
          <p className="text-cream/50 max-w-xl mx-auto font-light leading-relaxed">
            At Olea, we believe a great restaurant is more than its menu. It is a feeling, a ritual, a place you return to again and again.
          </p>
        </FadeIn>

        {/* Experience Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {experiences.map((exp, i) => (
            <FadeIn key={exp.title} delay={i * 0.15} direction="up">
              <motion.div
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group relative rounded-3xl overflow-hidden border border-white/8 hover:border-gold/30 transition-all duration-500 cursor-default"
              >
                {/* Background image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={exp.image}
                    alt={exp.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-60 group-hover:opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/70 to-navy/20" />
                </div>

                {/* Content */}
                <div className="p-7 bg-navy-light border-t border-white/5">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-gold/15 flex items-center justify-center group-hover:bg-gold/25 transition-colors">
                      <exp.icon size={18} className="text-gold" />
                    </div>
                    <h3
                      className="text-cream font-bold text-xl"
                      style={{ fontFamily: 'Playfair Display, serif' }}
                    >
                      {exp.title}
                    </h3>
                  </div>
                  <p className="text-cream/50 text-sm leading-relaxed font-light">{exp.description}</p>
                </div>

                {/* Hover glow */}
                <div className="absolute inset-0 rounded-3xl bg-gold/3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </motion.div>
            </FadeIn>
          ))}
        </div>

        {/* Bottom CTA strip */}
        <FadeIn direction="up" delay={0.3}>
          <div className="mt-16 p-8 lg:p-10 rounded-3xl border border-gold/15 bg-white/5 flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <Sparkles size={24} className="text-gold flex-shrink-0" />
              <div>
                <p
                  className="text-cream font-bold text-xl"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  Private Dining & Events
                </p>
                <p className="text-cream/50 text-sm font-light mt-0.5">
                  Bespoke experiences for intimate celebrations, corporate gatherings and special occasions
                </p>
              </div>
            </div>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.04, boxShadow: '0 0 30px rgba(184,149,90,0.3)' }}
              whileTap={{ scale: 0.97 }}
              className="px-8 py-3.5 rounded-full bg-gold text-navy font-semibold text-sm tracking-widest uppercase whitespace-nowrap transition-all duration-300"
            >
              Enquire Now
            </motion.a>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
