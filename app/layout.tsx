import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: 'Inkra | Consultoría en IA y Automatización de Procesos',
  description: 'Impulsamos tu empresa con Inteligencia Artificial y Automatización Inteligente. Consultoría estratégica en IA, Machine Learning y automatización de procesos empresariales.',
  generator: 'Inkra',
  openGraph: {
    title: 'Inkra | Consultoría en IA y Automatización de Procesos',
    description: 'Impulsamos tu empresa con Inteligencia Artificial y Automatización Inteligente.',
    type: 'website',
    locale: 'es_ES',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport = {
  themeColor: '#0A1F44',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
