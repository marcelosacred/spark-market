"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { useState } from "react"
import { signIn } from "next-auth/react"

const loginSchema = z.object({
  username: z.string().min(3, "Введите имя пользователя"),
  password: z.string().min(6, "Минимальная длина пароля - 6 символов")
})

type LoginFormValues = z.infer<typeof loginSchema>

export default function LoginPage() {
  const router = useRouter()
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema)
  })

  const onSubmit = async (data: LoginFormValues) => {
    try {
      setIsLoading(true)
      setError("")
      
      const result = await signIn("credentials", {
        username: data.username,
        password: data.password,
        redirect: false,
      })

      if (result?.error) {
        setError("Неверное имя пользователя или пароль")
        return
      }

      router.push("/")
      router.refresh()
    } catch (error) {
      setError("Произошла ошибка при входе")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {error && (
        <div className="p-3 text-sm text-red-500 bg-red-50 rounded-md">
          {error}
        </div>
      )}
      
      <div className="space-y-2">
        <Input
          type="text"
          placeholder="Имя пользователя"
          disabled={isLoading}
          {...register("username")}
        />
        {errors.username && (
          <p className="text-sm text-red-500">{errors.username.message}</p>
        )}
        
        <Input
          type="password"
          placeholder="Пароль"
          disabled={isLoading}
          {...register("password")}
        />
        {errors.password && (
          <p className="text-sm text-red-500">{errors.password.message}</p>
        )}
      </div>
      
      <Button 
        type="submit" 
        className="w-full"
        disabled={isLoading}
      >
        {isLoading ? "Загрузка..." : "Войти"}
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
    </form>
  )
}
