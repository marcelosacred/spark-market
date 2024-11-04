import { Container } from "@/components/ui/container"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function ProductNotFound() {
  return (
    <Container className="flex flex-col items-center justify-center min-h-[70vh] gap-4">
      <h1 className="text-2xl font-bold">Страница не найдена</h1>
      <p className="text-muted-foreground">
        К сожалению, запрашиваямая страница не существует или была удалена
      </p>
      <Button asChild>
        <Link href="/">
          Вернуться на главную
        </Link>
      </Button>
    </Container>
  )
} 