"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { useState } from "react"

const loginSchema = z.object({
  email: z.string().email("Некорректный email"),
  password: z.string().min(6, "Минимальная длина пароля - 6 символов")
})

type LoginFormValues = z.infer<typeof loginSchema>

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [authError, setAuthError] = useState("")
  const router = useRouter()
  
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema)
  })

  const onSubmit = async (data: LoginFormValues) => {
    try {
      setIsLoading(true)
      setAuthError("") // Сбрасываем ошибку при новой попытке

      const response = await fetch('https://fakestoreapi.com/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: data.email,
          password: data.password
        })
      })

      if (!response.ok) {
        throw new Error('Неверный email или пароль')
      }

      const responseData = await response.json()
      
      // Здесь можно сохранить токен в localStorage или cookies
      localStorage.setItem('token', responseData.token)
      
      // Перенаправляем на главную
      router.push('/')
      
    } catch (error) {
      setAuthError(error instanceof Error ? error.message : 'Произошла ошибка при входе')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {authError && (
        <div className="p-3 text-sm text-red-500 bg-red-50 rounded-md">
          {authError}
        </div>
      )}
      
      <div className="space-y-2">
        <Input
          type="email"
          placeholder="Email"
          disabled={isLoading}
          {...register("email")}
        />
        {errors.email && (
          <p className="text-sm text-red-500">{errors.email.message}</p>
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
