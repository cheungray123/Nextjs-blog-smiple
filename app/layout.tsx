import { SITE } from '@/site.config'
import './globals.css'

import type { Metadata } from 'next'
import Header from '@/components/header/header'

export const metadata: Metadata = {
  title: SITE.TITLE,
  description: SITE.DESCRIPTION
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='bg-body bg-gradient bg-neutral-50'>
        <Header />
        <main className="w-full mx-auto my-2 lg:max-w-6xl lg:my-6">
          {children}
        </main>
      </body>
    </html>
  )
}
