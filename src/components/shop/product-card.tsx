import { Product } from "@/types/product"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import Link from "next/link"

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/product/${product.id}`}>
      <Card className="group h-full overflow-hidden border hover:shadow-lg transition-shadow">
        <div className="relative aspect-[3/4] w-full bg-white">
          <div className="absolute inset-0 flex items-center justify-center p-4">
            <Image
              src={product.image}
              alt={product.title}
              width={200}
              height={200}
              className="w-auto h-auto max-w-full max-h-full object-contain transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
            />
          </div>
        </div>
        <div className="p-4">
          <div className="mb-2">
            <p className="text-2xl font-bold">
              ${product.price}
            </p>
            <p className="text-sm text-muted-foreground line-through">
              ${(product.price * 1.2).toFixed(2)}
            </p>
          </div>
          <p className="text-sm text-muted-foreground line-clamp-2">
            {product.title}
          </p>
          <div className="mt-2 flex items-center text-sm text-muted-foreground">
            <span className="text-yellow-500">★</span>
            <span className="ml-1">{product.rating.rate}</span>
            <span className="mx-1">•</span>
            <span>{product.rating.count} отзывов</span>
          </div>
        </div>
      </Card>
    </Link>
  )
}
