import { Container } from "@/components/ui/container"
import { ProductCard } from "@/components/shop/product-card"
import { productApi } from "@/services/api/products"

export default async function Home() {
  const products = await productApi.getAll()

  return (
    <div className="pt-16">
      {/* Баннер распродажи */}
      <div className="w-full">
        <Container className="py-4">
          <div className="w-full h-[120px] rounded-xl bg-gradient-to-r from-[#d35f01] to-[#e97d11] flex items-center justify-between overflow-hidden relative">
            {/* Декоративные элементы */}
            <div className="absolute inset-0">
              <div className="absolute top-0 left-0 w-32 h-32 bg-white/10 rounded-full -translate-x-16 -translate-y-16" />
              <div className="absolute bottom-0 right-0 w-24 h-24 bg-white/10 rounded-full translate-x-12 translate-y-12" />
            </div>
            
            {/* Левая часть с текстом */}
            <div className="pl-8 z-10">
              <h1 className="text-4xl font-bold text-white mb-2">
                РАСПРОДАЖА ГОДА
              </h1>
              <p className="text-white/80 text-lg">
                Скидки до 70%
              </p>
            </div>
            
            {/* Правая часть с таймером */}
            <div className="pr-8 z-10">
              <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg">
                <p className="text-white text-sm mb-1">До конца акции:</p>
                <p className="text-white font-mono font-bold">48:00:00</p>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Сетка товаров */}
      <Container>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </Container>
    </div>
  )
}
