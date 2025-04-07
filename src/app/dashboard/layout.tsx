import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Admin | PlantNursery",
  description: "Admin dashboard for PlantNursery",
}

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <div className="min-h-screen bg-gray-100">{children}</div>
}

