import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Авторизация",
  description: "Авторизация на Spark",
}

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 