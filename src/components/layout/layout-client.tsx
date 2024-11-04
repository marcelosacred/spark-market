'use client'

import { Container } from "@/components/ui/container"
import { Navbar } from "./navbar"
import { usePathname } from "next/navigation"

export function LayoutClient({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  
  return (
    <>
      <Container className={pathname === "/" ? "fixed top-0 left-0 right-0 z-50" : ""}>
        <Navbar />
      </Container>
      {children}
    </>
  )
} 