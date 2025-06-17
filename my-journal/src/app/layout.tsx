import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Trading Journal - Track, Analyze, Improve',
  description: 'Professional trading journal application built with Next.js, React, and Tailwind CSS. Track your trades, analyze performance, and improve your trading strategy.',
  keywords: 'trading journal, trade tracking, trading analytics, investment tracking, financial journal',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}