"use client"

import Link from "next/link"
import { Search } from "./search"
import { Menu, MapPin, User, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Container } from "@/components/ui/container"

export function Navbar() {
  return (
    <div className="w-full border backdrop-blur-xl
      dark:bg-[#161616]/80 dark:text-white
      bg-white/70 text-gray-800">
      <Container>
        <div className="h-16 flex items-center justify-between gap-4">
          {/* Левая часть */}
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" 
              className="dark:text-white text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800">
              <Menu className="h-6 w-6" />
            </Button>
            <Link href="/" className="flex-shrink-0">
              <Image 
                src="/logo.svg" 
                alt="Logo Spark" 
                width={40} 
                height={40}
                className="w-auto h-8"
              />
            </Link>
          </div>

          {/* Поисковая строка */}
          <div className="flex-1 max-w-2xl">
            <Search />
          </div>

          {/* Правая часть */}
          <div className="flex items-center gap-4">
            <Link href="/address">
                <Button variant="ghost" size="sm" 
                className="dark:text-white text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800">
                <MapPin className="h-5 w-5 mr-2" />
                <span className="hidden sm:inline">Адрес</span>
                </Button>
            </Link>
            
            <Link href="/login">
            <Button variant="ghost" size="sm" 
                className="dark:text-white text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800">
              <User className="h-5 w-5 mr-2" />
              <span className="hidden sm:inline">Войти</span>
            </Button>
            </Link>

            <Link href="/cart">
              <Button variant="ghost" size="sm" 
                className="dark:text-white text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800">
              <ShoppingCart className="h-5 w-5 mr-2" />
              <span className="hidden sm:inline">Корзина</span>
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  )
} 