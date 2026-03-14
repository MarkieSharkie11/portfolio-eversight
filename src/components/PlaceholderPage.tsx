export function PlaceholderPage({ name }: { name: string }) {
  return (
    <div className="flex-1 flex items-center justify-center">
      <span className="text-4xl text-gray-400">{name}</span>
    </div>
  )
}
