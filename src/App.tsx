import { Routes, Route, Navigate } from "react-router-dom"
import { Layout } from "@/components/Layout"
import { PlaceholderPage } from "@/components/PlaceholderPage"

export function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Navigate to="/dashboard" replace />} />
        <Route path="dashboard" element={<PlaceholderPage name="Dashboard" />} />
        <Route path="guidance/recommendations" element={<PlaceholderPage name="Recommendations" />} />
        <Route path="guidance/guidelines" element={<PlaceholderPage name="Guidelines" />} />
        <Route path="test/opportunities" element={<PlaceholderPage name="Opportunities" />} />
        <Route path="test/campaign/:id" element={<PlaceholderPage name="Campaign" />} />
        <Route path="track/performance" element={<PlaceholderPage name="Performance" />} />
        <Route path="track/performance/products" element={<PlaceholderPage name="Products" />} />
        <Route path="track/compliance" element={<PlaceholderPage name="Compliance" />} />
        <Route path="settings" element={<PlaceholderPage name="Settings" />} />
        <Route path="help" element={<PlaceholderPage name="Help" />} />
      </Route>
    </Routes>
  )
}

export default App
