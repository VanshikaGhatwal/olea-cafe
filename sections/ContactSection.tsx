'use client'

import { MapPin, Phone, Clock, Instagram, Facebook, Twitter } from 'lucide-react'
import FadeIn from '@/components/ui/FadeIn'
import SectionLabel from '@/components/ui/SectionLabel'

const hours = [
  { day: 'Monday – Friday', time: '8:00 AM – 11:00 PM' },
  { day: 'Saturday – Sunday', time: '9:00 AM – 11:30 PM' },
  { day: 'Public Holidays', time: '10:00 AM – 10:00 PM' },
]

export default function ContactSection() {
  return (
    <section id="contact" className="section-pad bg-warm-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <FadeIn direction="up" className="text-center mb-12">
          <SectionLabel label="Find Us" className="justify-center mb-4" />
          <h2
            className="text-4xl lg:text-5xl font-bold text-navy"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Visit Olea
          </h2>
        </FadeIn>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Left: Info (2/5) */}
          <FadeIn direction="left" className="lg:col-span-2">
            <div className="space-y-8">
              {/* Address */}
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-xl bg-gold/10 flex items-center justify-center">
                    <MapPin size={16} className="text-gold" />
                  </div>
                  <h4 className="text-navy font-semibold tracking-wide">Address</h4>
                </div>
                <p className="text-navy/60 font-light text-sm leading-relaxed pl-12">
                  23 Lodhi Road, Khan Market Area<br />
                  New Delhi, Delhi 110003<br />
                  India
                </p>
              </div>

              {/* Phone */}
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-xl bg-gold/10 flex items-center justify-center">
                    <Phone size={16} className="text-gold" />
                  </div>
                  <h4 className="text-navy font-semibold tracking-wide">Phone</h4>
                </div>
                <div className="pl-12 space-y-1">
                  <a href="tel:+911141234567" className="block text-navy/60 font-light text-sm hover:text-gold transition-colors">
                    +91 11 4123 4567
                  </a>
                  <a href="tel:+919812345678" className="block text-navy/60 font-light text-sm hover:text-gold transition-colors">
                    +91 98123 45678 (WhatsApp)
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-xl bg-gold/10 flex items-center justify-center">
                    <Clock size={16} className="text-gold" />
                  </div>
                  <h4 className="text-navy font-semibold tracking-wide">Opening Hours</h4>
                </div>
                <div className="pl-12 space-y-2">
                  {hours.map((h) => (
                    <div key={h.day} className="flex justify-between items-center gap-4 text-sm border-b border-cream-dark pb-2">
                      <span className="text-navy/70 font-light">{h.day}</span>
                      <span className="text-navy font-medium whitespace-nowrap">{h.time}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Socials */}
              <div className="pl-0">
                <p className="text-xs tracking-widest uppercase text-navy/50 font-medium mb-4">Follow Our Journey</p>
                <div className="flex gap-3">
                  {[
                    { icon: Instagram, label: 'Instagram', href: '#' },
                    { icon: Facebook, label: 'Facebook', href: '#' },
                    { icon: Twitter, label: 'Twitter', href: '#' },
                  ].map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      aria-label={social.label}
                      className="w-10 h-10 rounded-full border border-navy/15 flex items-center justify-center hover:border-gold hover:text-gold text-navy/50 transition-all duration-300"
                    >
                      <social.icon size={16} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Right: Map (3/5) */}
          <FadeIn direction="right" className="lg:col-span-3">
            <div className="rounded-3xl overflow-hidden shadow-xl border border-cream-dark h-[420px] lg:h-full min-h-[380px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.2567219547705!2d77.2195!3d28.5934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce26d903f3b27%3A0x7c3f3f4c9f3c5c1a!2sLodhi%20Road%2C%20New%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '380px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Olea Location — Lodhi Road, New Delhi"
              />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
