export interface Guideline {
  id: string
  retailer: string
  category: string
  maxDiscountPercent: number
  allowedMechanics: string[]
  notes?: string
}

export const guidelines: Guideline[] = [
  // Example:
  // {
  //   id: "guide-001",
  //   retailer: "Kroger",
  //   category: "Carbonated Soft Drinks",
  //   maxDiscountPercent: 25,
  //   allowedMechanics: ["BOGO", "$ Off", "% Off"],
  //   notes: "No stacking with loyalty card discounts",
  // },
]
