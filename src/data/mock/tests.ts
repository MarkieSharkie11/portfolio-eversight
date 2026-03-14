export interface Test {
  id: string
  name: string
  promotionId: string
  status: "pending" | "running" | "completed"
  startDate: string
  endDate?: string
  incrementalRevenue?: number
  liftPercent?: number
}

export const tests: Test[] = [
  // Example:
  // {
  //   id: "test-001",
  //   name: "Coca-Cola Summer BOGO vs $1 Off",
  //   promotionId: "promo-001",
  //   status: "completed",
  //   startDate: "2026-06-01",
  //   endDate: "2026-06-30",
  //   incrementalRevenue: 142000,
  //   liftPercent: 12.4,
  // },
]
