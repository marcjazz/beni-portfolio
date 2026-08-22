import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://beni-portfolio-vert.vercel.app'),
  title: 'FEUKOUO Schamma Beni | Biostatistique clinique',
  description: 'Portfolio de FEUKOUO Schamma Beni, médecin bucco-dentaire et biostatisticien clinique.',
  generator: 'v0.app',
  icons: {
    icon: [
      { url: '/images/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/images/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [{ url: '/apple-icon.png', sizes: '180x180', type: 'image/png' }],
  },
  openGraph: {
    title: 'FEUKOUO Schamma Beni | Biostatistique clinique',
    description: 'Portfolio de FEUKOUO Schamma Beni, médecin bucco-dentaire et biostatisticien clinique.',
    images: [{ url: '/images/og-image.jpg', width: 1200, height: 630 }],
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FEUKOUO Schamma Beni | Biostatistique clinique',
    description: 'Portfolio de FEUKOUO Schamma Beni, médecin bucco-dentaire et biostatisticien clinique.',
    images: ['/images/og-image.jpg'],
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#0f172a',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="fr" className="scroll-smooth bg-white"><body className="antialiased">{children}{process.env.NODE_ENV === 'production' && <Analytics />}</body></html>
}
