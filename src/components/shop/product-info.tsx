"use client"

import { Product } from "@/types/product"
import { Button } from "@/components/ui/button"
import { ShoppingCart } from "lucide-react"

interface ProductInfoProps {
  product: Product
}

export function ProductInfo({ product }: ProductInfoProps) {
  return (
    <div className="flex flex-col gap-6">
      {/* Заголовок и рейтинг */}
      <div>
        <h1 className="text-2xl font-bold">{product.title}</h1>
        <div className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
          <span className="text-yellow-500">★</span>
          <span>{product.rating.rate}</span>
          <span>•</span>
          <span>{product.rating.count} отзывов</span>
        </div>
      </div>

      {/* Цена */}
      <div className="flex items-baseline gap-2">
        <span className="text-3xl font-bold">
          ${product.price}
        </span>
        <span className="text-lg text-muted-foreground line-through">
          ${(product.price * 1.2).toFixed(2)}
        </span>
      </div>

      {/* Описание */}
      <p className="text-muted-foreground">
        {product.description}
      </p>

      {/* Категория */}
      <div className="flex items-center gap-2 text-sm">
        <span className="text-muted-foreground">Категория:</span>
        <span className="capitalize">{product.category}</span>
      </div>

      {/* Кнопка добавления в корзину */}
      <Button size="lg" className="w-full md:w-auto">
        <ShoppingCart className="mr-2 h-5 w-5" />
        Добавить в корзину
      </Button>
    </div>
  )
} 