import { ThemeProvider } from "@/components/providers/theme-provider"
import { cn } from "@/lib/utils"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { LayoutClient } from "@/components/layout/layout-client"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Spark | Online Shop",
  description: "Online Shop for all your needs",
  icons: {
    icon: '/logo.svg',
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(
        "min-h-screen bg-background font-sans antialiased",
        inter.className
      )}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          storageKey="spark-theme"
        >
          <LayoutClient>
            {children}
          </LayoutClient>
        </ThemeProvider>
      </body>
    </html>
  )
}
