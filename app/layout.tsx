import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-serif' })

export const metadata: Metadata = {
  title: 'GuaruToxic | Exames Toxicológicos Premium em Guarulhos',
  description: 'Excelência e precisão em exames toxicológicos para CNH, CLT e Concursos Públicos em Guarulhos.',
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased selection:bg-foreground selection:text-background`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
