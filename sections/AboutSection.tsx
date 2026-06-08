'use client'

import { motion } from 'framer-motion'
import { Coffee, Globe, Music, Wine } from 'lucide-react'
import FadeIn from '@/components/ui/FadeIn'
import SectionLabel from '@/components/ui/SectionLabel'

const features = [
  {
    icon: Coffee,
    title: 'Specialty Coffee',
    description: 'Single-origin beans, precision-brewed by our certified baristas',
  },
  {
    icon: Globe,
    title: 'Global Cuisine',
    description: 'A curated menu spanning continents, reimagined for the Delhi palate',
  },
  {
    icon: Music,
    title: 'Live Music',
    description: 'Intimate evening performances every Friday and Saturday',
  },
  {
    icon: Wine,
    title: 'Handcrafted Cocktails',
    description: 'Award-winning mixology using house-made infusions and seasonal botanicals',
  },
]

export default function AboutSection() {
  return (
    <section id="about" className="section-pad bg-warm-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Images */}
          <FadeIn direction="left">
            <div className="relative">
              {/* Main image */}
              <div className="relative rounded-3xl overflow-hidden aspect-[4/5] shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1445116572660-236099ec97a0?w=800&q=85"
                  alt="Olea Café Interior"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent" />
              </div>

              {/* Floating card */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-8 -right-6 lg:-right-12 bg-white rounded-2xl shadow-2xl p-5 max-w-[200px] border border-cream-dark"
              >
                <div className="flex items-center gap-2 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-3 h-3 text-gold fill-gold" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-navy text-sm font-semibold" style={{ fontFamily: 'Playfair Display, serif' }}>
                  4.8 Rating
                </p>
                <p className="text-navy/50 text-xs">50,000+ happy guests</p>
              </motion.div>

              {/* Accent circle */}
              <div className="absolute -top-6 -left-6 w-24 h-24 rounded-full border-2 border-gold/30 opacity-60" />
            </div>
          </FadeIn>

          {/* Right: Content */}
          <FadeIn direction="right">
            <div>
              <SectionLabel label="Our Story" className="mb-6" />

              <h2
                className="text-4xl lg:text-5xl xl:text-6xl font-bold text-navy leading-tight mb-6"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                A Café Born from{' '}
                <span
                  style={{
                    background: 'linear-gradient(135deg, #B8955A 0%, #C1714F 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  Passion
                </span>
              </h2>

              <p className="text-navy/60 text-base leading-relaxed mb-4 font-light">
                Olea was born in 2016 from a simple conviction — that the finest food, honest hospitality and beautiful spaces have the power to create lasting memories. Nestled in the heart of Delhi, we set out to build a place where every visit feels like the first.
              </p>
              <p className="text-navy/60 text-base leading-relaxed mb-10 font-light">
                Eight years on, that conviction only deepens. From our morning regulars who arrive for the first cortado to the families who celebrate milestones in our private dining room — Olea belongs to everyone who walks through our doors.
              </p>

              {/* Features grid */}
              <div className="grid grid-cols-2 gap-4">
                {features.map((feature, i) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 + 0.2 }}
                    whileHover={{ y: -4, transition: { duration: 0.3 } }}
                    className="p-4 rounded-2xl bg-cream border border-cream-dark hover:border-gold/40 hover:shadow-lg transition-all duration-300 group cursor-default"
                  >
                    <div className="w-9 h-9 rounded-xl bg-gold/10 flex items-center justify-center mb-3 group-hover:bg-gold/20 transition-colors">
                      <feature.icon size={18} className="text-gold" />
                    </div>
                    <h4 className="text-navy font-semibold text-sm mb-1">{feature.title}</h4>
                    <p className="text-navy/50 text-xs leading-relaxed font-light">{feature.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
