import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Авторизация",
  description: "Авторизация на Spark",
}

export default function LoginPage() {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Input
          type="email"
          placeholder="Email"
        />
        <Input
          type="password"
          placeholder="Пароль"
        />
      </div>
      
      <Button className="w-full">
        Войти
      </Button>
      
      <div className="text-center text-sm text-muted-foreground">
        Нет аккаунта?{" "}
        <Link 
          href="/register" 
          className="text-primary underline-offset-4 hover:underline"
        >
          Зарегистрироваться
        </Link>
      </div>
    </div>
  )
}
