import { Container } from "@/components/ui/container"
import Link from "next/link"
import Image from "next/image"

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Container className="flex min-h-screen flex-col items-center justify-center py-12">
      <div className="w-full max-w-[350px] space-y-6">
        {/* Логотип */}
        <div className="flex flex-col items-center space-y-2">
          <Link href="/">
            <Image 
              src="/logo.svg" 
              alt="Logo Spark" 
              width={48} 
              height={48} 
              className="h-12 w-12"
            />
          </Link>
          <h1 className="text-2xl font-semibold tracking-tight">
            Добро пожаловать
          </h1>
        </div>

        {children}
      </div>
    </Container>
  )
} 