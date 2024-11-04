"use client"

import Image from "next/image"
import { useState } from "react"
import { cn } from "@/lib/utils"

interface ProductGalleryProps {
  images: string[]
}

export function ProductGallery({ images }: ProductGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(0)

  return (
    <div className="sticky top-20 flex flex-col gap-4">
      {/* Основное изображение */}
      <div className="aspect-square overflow-hidden rounded-xl bg-white">
        <div className="h-full w-full flex items-center justify-center p-8">
          <Image
            src={images[selectedImage]}
            alt="Product image"
            width={500}
            height={500}
            className="w-auto h-auto max-w-full max-h-full object-contain"
          />
        </div>
      </div>

      {/* Миниатюры (если больше одного изображения) */}
      {images.length > 1 && (
        <div className="flex gap-4">
          {images.map((image, index) => (
            <button
              key={image}
              onClick={() => setSelectedImage(index)}
              className={cn(
                "relative aspect-square w-20 rounded-lg border-2 overflow-hidden",
                selectedImage === index 
                  ? "border-primary" 
                  : "border-transparent"
              )}
            >
              <Image
                src={image}
                alt={`Product thumbnail ${index + 1}`}
                fill
                className="object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  )
} 