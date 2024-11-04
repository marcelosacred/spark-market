import { productApi } from "@/services/api/products"
import { Container } from "@/components/ui/container"
import { ProductGallery } from "@/components/shop/product-gallery"
import { ProductInfo } from "@/components/shop/product-info"
import { notFound } from "next/navigation"

interface ProductPageProps {
  params: {
    id: string
  }
}

export default async function ProductPage({ params }: ProductPageProps) {
  try {
    const product = await productApi.getById(parseInt(params.id))
    
    if (!product) {
      return notFound()
    }

    return (
      <div className="pt-16">
        <Container>
          <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
            {/* Галерея изображений */}
            <ProductGallery images={[product.image]} />
            
            {/* Информация о продукте */}
            <ProductInfo product={product} />
          </div>
        </Container>
      </div>
    )
  } catch (error) {
    return notFound()
  }
} 