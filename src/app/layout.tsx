import { Navbar } from "@/components/layout/navbar"
import { ThemeProvider } from "@/components/providers/theme-provider"
import { cn } from "@/lib/utils"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Container } from "@/components/ui/container"

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
          <Container className="fixed top-0 left-0 right-0 z-50">
            <Navbar />
          </Container>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
