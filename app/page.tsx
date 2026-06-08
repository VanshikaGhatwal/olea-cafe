import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import HeroSection from '@/sections/HeroSection'
import StatsSection from '@/sections/StatsSection'
import AboutSection from '@/sections/AboutSection'
import MenuSection from '@/sections/MenuSection'
import GallerySection from '@/sections/GallerySection'
import TestimonialsSection from '@/sections/TestimonialsSection'
import ExperienceSection from '@/sections/ExperienceSection'
import ReservationSection from '@/sections/ReservationSection'
import ContactSection from '@/sections/ContactSection'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <StatsSection />
        <AboutSection />
        <MenuSection />
        <GallerySection />
        <TestimonialsSection />
        <ExperienceSection />
        <ReservationSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
