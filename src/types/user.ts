export interface User {
  id: number
  email: string
  username: string
  password: string
  name: {
    firstname: string
    lastname: string
  }
  address: {
    city: string
    street: string
    number: number
    zipcode: string
    geolocation: {
      lat: string
      long: string
    }
  }
  phone: string
}

// Тип для создания нового пользователя (регистрация)
export interface CreateUserDTO {
  email: string
  username: string
  password: string
  firstname: string
  lastname: string
  city: string
  street: string
  number: string
  zipcode: string
  phone: string
}

// Тип для авторизации
export interface LoginDTO {
  username: string
  password: string
}

// Тип для ответа при авторизации
export interface AuthResponse {
  token: string
} 