'use client'

import { useEffect, useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { testimonials } from '@/data'
import FadeIn from '@/components/ui/FadeIn'
import SectionLabel from '@/components/ui/SectionLabel'

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className={`w-4 h-4 ${i < rating ? 'text-gold fill-gold' : 'text-navy/20'}`} viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(1)

  const next = useCallback(() => {
    setDirection(1)
    setCurrent((c) => (c + 1) % testimonials.length)
  }, [])

  const prev = useCallback(() => {
    setDirection(-1)
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length)
  }, [])

  useEffect(() => {
    const interval = setInterval(next, 5500)
    return () => clearInterval(interval)
  }, [next])

  const testimonial = testimonials[current]

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? 80 : -80, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -80 : 80, opacity: 0 }),
  }

  return (
    <section id="testimonials" className="section-pad bg-cream overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <FadeIn direction="up" className="text-center mb-16">
          <SectionLabel label="Testimonials" className="justify-center mb-4" />
          <h2
            className="text-4xl lg:text-5xl font-bold text-navy"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            What Our Guests Say
          </h2>
        </FadeIn>

        {/* Large quote */}
        <div className="relative">
          {/* Quote mark */}
          <div
            className="absolute -top-8 left-0 text-gold/15 select-none pointer-events-none leading-none"
            style={{ fontFamily: 'Playfair Display, serif', fontSize: '12rem' }}
          >
            "
          </div>

          <div className="relative z-10 text-center">
            {/* Avatar */}
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={`avatar-${current}`}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col items-center"
              >
                <div className="relative mb-6">
                  <div className="w-20 h-20 rounded-full overflow-hidden border-3 border-gold/40 shadow-lg">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-gold flex items-center justify-center">
                    <svg className="w-3 h-3 text-white fill-white" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                </div>

                <StarRating rating={testimonial.rating} />

                <blockquote
                  className="text-navy/75 text-lg lg:text-xl leading-relaxed italic max-w-2xl mx-auto mt-6 mb-6 font-light"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  {testimonial.text}
                </blockquote>

                <div>
                  <p className="text-navy font-semibold text-base">{testimonial.name}</p>
                  <p className="text-gold text-sm tracking-widest uppercase font-medium mt-0.5">
                    {testimonial.role} · {testimonial.date}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-6 mt-12">
          <button
            onClick={prev}
            className="w-11 h-11 rounded-full border border-navy/20 flex items-center justify-center hover:border-gold hover:text-gold transition-all duration-300"
          >
            <ChevronLeft size={18} />
          </button>

          {/* Dots */}
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i) }}
                className="transition-all duration-300"
              >
                <div className={`h-1.5 rounded-full transition-all duration-400 ${
                  i === current ? 'w-8 bg-gold' : 'w-1.5 bg-navy/20 hover:bg-navy/40'
                }`} />
              </button>
            ))}
          </div>

          <button
            onClick={next}
            className="w-11 h-11 rounded-full border border-navy/20 flex items-center justify-center hover:border-gold hover:text-gold transition-all duration-300"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  )
}
