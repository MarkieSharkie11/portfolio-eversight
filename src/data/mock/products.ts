export interface Product {
  id: string
  name: string
  brand: string
  category: string
  upc: string
  imageUrl?: string
}

export const products: Product[] = [
  // Example:
  // {
  //   id: "prod-001",
  //   name: "Coca-Cola Classic 12pk",
  //   brand: "Coca-Cola",
  //   category: "Carbonated Soft Drinks",
  //   upc: "049000042566",
  // },
]
