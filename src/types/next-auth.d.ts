import "next-auth"

declare module "next-auth" {
  interface Session {
    user: {
      id?: string
      email?: string
      name?: string
      address?: {
        city: string
        street: string
        number: number
        zipcode: string
      }
    }
  }
} 