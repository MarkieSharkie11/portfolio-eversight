export interface Promotion {
  id: string
  name: string
  productIds: string[]
  retailer: string
  startDate: string
  endDate: string
  mechanic: string          // e.g. "BOGO", "$ Off", "% Off"
  discountValue: number
  status: "draft" | "active" | "completed"
}

export const promotions: Promotion[] = [
  // Example:
  // {
  //   id: "promo-001",
  //   name: "Summer BOGO Coca-Cola",
  //   productIds: ["prod-001"],
  //   retailer: "Kroger",
  //   startDate: "2026-06-01",
  //   endDate: "2026-06-30",
  //   mechanic: "BOGO",
  //   discountValue: 0,
  //   status: "draft",
  // },
]
