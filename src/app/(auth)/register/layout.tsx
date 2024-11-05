import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Регистрация",
  description: "Регистрация на Spark",
}

export default function RegisterLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 