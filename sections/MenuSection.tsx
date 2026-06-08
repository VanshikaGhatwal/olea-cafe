'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { menuItems, menuCategories, type MenuCategory } from '@/data'
import FadeIn from '@/components/ui/FadeIn'
import SectionLabel from '@/components/ui/SectionLabel'

function MenuCard({ item, index }: { item: (typeof menuItems)[number]; index: number }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      whileHover={{ y: -6, transition: { duration: 0.3 } }}
      className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 border border-cream-dark hover:border-gold/20"
    >
      {/* Image */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/30 to-transparent" />

        {/* Popular badge */}
        {item.popular && (
          <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-terracotta text-white text-xs font-semibold tracking-widest uppercase">
            Popular
          </div>
        )}

        {/* Tags */}
        {item.tags?.map((tag) => (
          <div
            key={tag}
            className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-navy/70 text-cream/90 text-xs font-medium backdrop-blur-sm"
          >
            {tag}
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-start justify-between gap-3 mb-2">
          <h3
            className="text-navy font-bold text-lg leading-tight"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            {item.name}
          </h3>
          <span
            className="text-gold font-bold text-lg whitespace-nowrap"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            ₹{item.price}
          </span>
        </div>
        <p className="text-navy/55 text-sm leading-relaxed font-light">{item.description}</p>
      </div>
    </motion.div>
  )
}

export default function MenuSection() {
  const [activeCategory, setActiveCategory] = useState<MenuCategory>('Coffee')

  const filtered = menuItems.filter((item) => item.category === activeCategory)

  return (
    <section id="menu" className="section-pad bg-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <FadeIn direction="up" className="text-center mb-12">
          <SectionLabel label="Our Menu" className="justify-center mb-4" />
          <h2
            className="text-4xl lg:text-5xl font-bold text-navy mb-4"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Crafted with Intention
          </h2>
          <p className="text-navy/55 max-w-xl mx-auto font-light leading-relaxed">
            Every item on our menu is a considered choice — sourced with care, prepared with skill and served with warmth.
          </p>
        </FadeIn>

        {/* Category Tabs */}
        <FadeIn direction="up" delay={0.1} className="flex flex-wrap justify-center gap-2 mb-12">
          {menuCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`relative px-6 py-2.5 rounded-full text-sm font-medium tracking-widest uppercase transition-all duration-300 ${
                activeCategory === cat
                  ? 'text-navy'
                  : 'text-navy/50 hover:text-navy/80 hover:bg-cream-dark'
              }`}
            >
              {activeCategory === cat && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-gold rounded-full"
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10">{cat}</span>
            </button>
          ))}
        </FadeIn>

        {/* Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {filtered.map((item, i) => (
              <MenuCard key={item.id} item={item} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* CTA */}
        <FadeIn direction="up" delay={0.2} className="text-center mt-14">
          <p className="text-navy/50 text-sm mb-4 tracking-wide">
            Explore our complete menu with seasonal specials
          </p>
          <motion.a
            href="#reservation"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full border-2 border-navy text-navy font-semibold text-sm tracking-widest uppercase hover:bg-navy hover:text-cream transition-all duration-300"
          >
            Reserve & Dine
          </motion.a>
        </FadeIn>
      </div>
    </section>
  )
}
