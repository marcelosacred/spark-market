"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { useState } from "react"

const registerSchema = z.object({
  firstname: z.string().min(2, "Имя должно содержать минимум 2 символа"),
  lastname: z.string().min(2, "Фамилия должна содержать минимум 2 символа"),
  username: z.string().min(3, "Имя пользователя должно содержать минимум 3 символа"),
  email: z.string().email("Некорректный email"),
  password: z.string().min(6, "Минимальная длина пароля - 6 символов"),
  confirmPassword: z.string(),
  phone: z.string().min(5, "Введите корректный номер телефона"),
  city: z.string().min(2, "Введите название города"),
  street: z.string().min(2, "Введите название улицы"),
  number: z.string().min(1, "Введите номер дома"),
  zipcode: z.string().min(5, "Введите почтовый индекс")
}).refine((data) => data.password === data.confirmPassword, {
  message: "Пароли не совпадают",
  path: ["confirmPassword"]
})

type RegisterFormValues = z.infer<typeof registerSchema>

export default function RegisterPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [registerError, setRegisterError] = useState("")
  const router = useRouter()
  
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema)
  })

  const onSubmit = async (data: RegisterFormValues) => {
    try {
      setIsLoading(true)
      setRegisterError("")

      const response = await fetch('https://fakestoreapi.com/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: data.email,
          username: data.username,
          password: data.password,
          name: {
            firstname: data.firstname,
            lastname: data.lastname
          },
          address: {
            city: data.city,
            street: data.street,
            number: parseInt(data.number),
            zipcode: data.zipcode,
            geolocation: {
              lat: '0',
              long: '0'
            }
          },
          phone: data.phone
        })
      })

      if (!response.ok) {
        throw new Error('Ошибка при регистрации')
      }

      // После успешной регистрации перенаправляем на страницу входа
      router.push('/login')
      
    } catch (error) {
      setRegisterError(error instanceof Error ? error.message : 'Произошла ошибка при регистрации')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {registerError && (
        <div className="p-3 text-sm text-red-500 bg-red-50 rounded-md">
          {registerError}
        </div>
      )}
      
      <div className="space-y-2">
        <div className="grid grid-cols-2 gap-2">
          <div>
            <Input
              type="text"
              placeholder="Имя"
              disabled={isLoading}
              {...register("firstname")}
            />
            {errors.firstname && (
              <p className="text-sm text-red-500">{errors.firstname.message}</p>
            )}
          </div>
          
          <div>
            <Input
              type="text"
              placeholder="Фамилия"
              disabled={isLoading}
              {...register("lastname")}
            />
            {errors.lastname && (
              <p className="text-sm text-red-500">{errors.lastname.message}</p>
            )}
          </div>
        </div>

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
          type="email"
          placeholder="Email"
          disabled={isLoading}
          {...register("email")}
        />
        {errors.email && (
          <p className="text-sm text-red-500">{errors.email.message}</p>
        )}

        <Input
          type="tel"
          placeholder="Телефон"
          disabled={isLoading}
          {...register("phone")}
        />
        {errors.phone && (
          <p className="text-sm text-red-500">{errors.phone.message}</p>
        )}

        <div className="grid grid-cols-2 gap-2">
          <div>
            <Input
              type="text"
              placeholder="Город"
              disabled={isLoading}
              {...register("city")}
            />
            {errors.city && (
              <p className="text-sm text-red-500">{errors.city.message}</p>
            )}
          </div>
          
          <div>
            <Input
              type="text"
              placeholder="Улица"
              disabled={isLoading}
              {...register("street")}
            />
            {errors.street && (
              <p className="text-sm text-red-500">{errors.street.message}</p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <div>
            <Input
              type="text"
              placeholder="Номер дома"
              disabled={isLoading}
              {...register("number")}
            />
            {errors.number && (
              <p className="text-sm text-red-500">{errors.number.message}</p>
            )}
          </div>
          
          <div>
            <Input
              type="text"
              placeholder="Почтовый индекс"
              disabled={isLoading}
              {...register("zipcode")}
            />
            {errors.zipcode && (
              <p className="text-sm text-red-500">{errors.zipcode.message}</p>
            )}
          </div>
        </div>
        
        <Input
          type="password"
          placeholder="Пароль"
          disabled={isLoading}
          {...register("password")}
        />
        {errors.password && (
          <p className="text-sm text-red-500">{errors.password.message}</p>
        )}

        <Input
          type="password"
          placeholder="Подтвердите пароль"
          disabled={isLoading}
          {...register("confirmPassword")}
        />
        {errors.confirmPassword && (
          <p className="text-sm text-red-500">{errors.confirmPassword.message}</p>
        )}
      </div>
      
      <Button 
        type="submit" 
        className="w-full"
        disabled={isLoading}
      >
        {isLoading ? "Загрузка..." : "Зарегистрироваться"}
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
    </form>
  )
}