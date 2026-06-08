'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ZoomIn } from 'lucide-react'
import { galleryImages } from '@/data'
import FadeIn from '@/components/ui/FadeIn'
import SectionLabel from '@/components/ui/SectionLabel'

export default function GallerySection() {
  const [lightbox, setLightbox] = useState<string | null>(null)

  // Split into 3 columns for masonry
  const col1 = galleryImages.filter((_, i) => i % 3 === 0)
  const col2 = galleryImages.filter((_, i) => i % 3 === 1)
  const col3 = galleryImages.filter((_, i) => i % 3 === 2)

  const GalleryItem = ({ img, delay }: { img: (typeof galleryImages)[number]; delay: number }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.6 }}
      whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
      onClick={() => setLightbox(img.src)}
      className="relative rounded-2xl overflow-hidden cursor-pointer group mb-4 shadow-md hover:shadow-xl transition-all duration-500"
    >
      <img
        src={img.src}
        alt={img.alt}
        className="w-full object-cover group-hover:scale-110 transition-transform duration-700"
        style={{ height: img.height === 'tall' ? '320px' : '200px' }}
      />
      <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/40 transition-all duration-400 flex items-center justify-center">
        <ZoomIn
          size={28}
          className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        />
      </div>
    </motion.div>
  )

  return (
    <section id="gallery" className="section-pad bg-warm-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <FadeIn direction="up" className="text-center mb-12">
          <SectionLabel label="Gallery" className="justify-center mb-4" />
          <h2
            className="text-4xl lg:text-5xl font-bold text-navy mb-4"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Life at Olea
          </h2>
          <p className="text-navy/55 max-w-md mx-auto font-light">
            Every corner, every cup, every evening — captured in moments.
          </p>
        </FadeIn>

        {/* Masonry Grid — desktop */}
        <div className="hidden md:grid grid-cols-3 gap-4">
          <div>{col1.map((img, i) => <GalleryItem key={img.id} img={img} delay={i * 0.08} />)}</div>
          <div>{col2.map((img, i) => <GalleryItem key={img.id} img={img} delay={i * 0.08 + 0.1} />)}</div>
          <div>{col3.map((img, i) => <GalleryItem key={img.id} img={img} delay={i * 0.08 + 0.2} />)}</div>
        </div>

        {/* Mobile — 2 columns */}
        <div className="md:hidden grid grid-cols-2 gap-3">
          {galleryImages.map((img, i) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              onClick={() => setLightbox(img.src)}
              className="relative rounded-xl overflow-hidden cursor-pointer aspect-square"
            >
              <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
            className="fixed inset-0 z-50 bg-navy/95 backdrop-blur-xl flex items-center justify-center p-4"
          >
            <motion.button
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              className="absolute top-6 right-6 w-10 h-10 rounded-full border border-cream/30 flex items-center justify-center text-cream hover:bg-cream/10 transition-colors"
              onClick={() => setLightbox(null)}
            >
              <X size={18} />
            </motion.button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              src={lightbox}
              alt="Gallery preview"
              onClick={(e) => e.stopPropagation()}
              className="max-w-full max-h-[85vh] object-contain rounded-2xl shadow-2xl"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
