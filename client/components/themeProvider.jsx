"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import Layout from "./splash/splash"

export function ThemeProvider({ children, ...props }) {
  return <NextThemesProvider {...props}>
            <Layout>
                {children}
            </Layout>
        </NextThemesProvider>
}
