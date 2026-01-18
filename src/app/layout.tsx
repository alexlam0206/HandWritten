import type { Metadata } from 'next'
import { Providers } from '@/components/Providers'
import './globals.css'

export const metadata: Metadata = {
  title: 'HandWritten',
  description: 'Your Hack Club journey, on paper.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
