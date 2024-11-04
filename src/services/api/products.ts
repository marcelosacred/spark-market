import { Product } from "@/types/product";

const BASE_URL = 'https://fakestoreapi.com';

export const productApi = {
  async getAll(): Promise<Product[]> {
    const response = await fetch(`${BASE_URL}/products`);
    if (!response.ok) throw new Error('Failed to fetch products');
    return response.json();
  },

  async getCategories(): Promise<string[]> {
    const response = await fetch(`${BASE_URL}/products/categories`);
    if (!response.ok) throw new Error('Failed to fetch categories');
    return response.json();
  },

  async getByCategory(category: string): Promise<Product[]> {
    const response = await fetch(`${BASE_URL}/products/category/${category}`);
    if (!response.ok) throw new Error('Failed to fetch products by category');
    return response.json();
  },

  async getById(id: number): Promise<Product> {
    const response = await fetch(`${BASE_URL}/products/${id}`);
    if (!response.ok) throw new Error('Failed to fetch product');
    return response.json();
  },
}; 