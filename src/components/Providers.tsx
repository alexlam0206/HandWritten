'use client'

import { ThemeProvider } from 'theme-ui'
import theme from '@/theme'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={theme as any}>
      {children}
    </ThemeProvider>
  )
}
