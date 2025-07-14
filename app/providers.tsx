// client component
'use client'
import { ThemeProvider } from './theme-providers';
import { toast } from "sonner"

function Providers({children}: {children:React.ReactNode}) {
    // We want to disable the transition on change
    // The children is the prop
  return (
    <>
      <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
      >
          {children}
      </ThemeProvider>
    </>
  )
}

export default Providers
