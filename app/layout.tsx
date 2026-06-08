import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Olea — Where Food, Coffee & Memories Come Together',
  description: 'A luxury café and restaurant in Delhi, India. Experience specialty coffee, global cuisine, live music and handcrafted cocktails at Olea.',
  keywords: 'luxury cafe, restaurant Delhi, specialty coffee, fine dining, Olea',
  openGraph: {
    title: 'Olea — Luxury Café & Restaurant',
    description: 'Where Food, Coffee & Memories Come Together',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,600&family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-inter antialiased bg-warm-white text-navy overflow-x-hidden">
        {children}
      </body>
    </html>
  )
}
