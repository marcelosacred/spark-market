import { User } from "@/types/user"

const BASE_URL = 'https://fakestoreapi.com'

export const userApi = {
  // Получить пользователя по ID
  async getById(id: number): Promise<User> {
    const response = await fetch(`${BASE_URL}/users/${id}`)
    if (!response.ok) {
      throw new Error('Ошибка при получении пользователя')
    }
    return response.json()
  },

  // Получить всех пользователей
  async getAll(): Promise<User[]> {
    const response = await fetch(`${BASE_URL}/users`)
    if (!response.ok) {
      throw new Error('Ошибка при получении пользователей')
    }
    return response.json()
  },

  // Получить текущего пользователя по токену
  async getCurrentUser(): Promise<User | null> {
    const token = localStorage.getItem('token')
    if (!token) return null

    try {
      // В FakeStoreAPI нет эндпоинта для получения текущего пользователя,
      // поэтому пока используем заглушку с ID = 1
      const response = await fetch(`${BASE_URL}/users/1`)
      if (!response.ok) {
        throw new Error('Ошибка при получении пользователя')
      }
      return response.json()
    } catch (error) {
      console.error('Ошибка при получении текущего пользователя:', error)
      return null
    }
  }
} 