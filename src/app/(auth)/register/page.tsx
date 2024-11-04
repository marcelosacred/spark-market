import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Регистрация",
  description: "Регистрация на Spark",
}

export default function RegisterPage() {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Input
          type="text"
          placeholder="Имя"
        />
        <Input
          type="email"
          placeholder="Email"
        />
        <Input
          type="password"
          placeholder="Пароль"
        />
        <Input
          type="password"
          placeholder="Подтвердите пароль"
        />
      </div>
      
      <Button className="w-full">
        Зарегистрироваться
      </Button>
      
      <div className="text-center text-sm text-muted-foreground">
        Уже есть аккаунт?{" "}
        <Link 
          href="/login" 
          className="text-primary underline-offset-4 hover:underline"
        >
          Войти
        </Link>
      </div>
    </div>
  )
}