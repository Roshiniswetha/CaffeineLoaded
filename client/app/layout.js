import { Inter } from 'next/font/google'
import { ThemeProvider } from "@/components/themeProvider"
import Providers from '@/store/reducers'

import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Caffiene Loaded',
  description: 'A Coffee machine app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
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
