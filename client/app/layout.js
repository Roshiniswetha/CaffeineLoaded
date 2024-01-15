import { Playfair_Display, Cinzel_Decorative } from 'next/font/google'
import { ThemeProvider } from "@/components/themeProvider"
import Providers from '@/store/reducers'

import './globals.css'

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  weight: '400',
  variable: '--font-playfair-display'
 })
const cinzel = Cinzel_Decorative({ 
  subsets: ['latin'],
  weight: '400',
  variable: '--font-cinzel-decorative'
 })

export const metadata = {
  title: 'Caffeine Loaded',
  description: 'A Coffee machine app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={cinzel.variable}>
      <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
          <Providers>
              {children}
          </Providers>
          </ThemeProvider>
      </body>
    </html>
  )
}
