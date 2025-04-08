"use client"

import { useState } from "react"
import { AdminSidebar } from "./_components/Sidebar"
import { DashboardHeader } from "./_components/Header"
import { DashboardCards } from "./_components/Cards"
import { SalesChart } from "./_components/SalesChart"
import { CategoryDistribution } from "./_components/CategoryDistribution"

export default function AdminDashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)

  return (
    <div className="flex h-screen bg-gray-100">
      <AdminSidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

      <div className="flex-1 overflow-auto">
        <DashboardHeader isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />

        <main className="p-6">
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
            <p className="text-gray-500">Welcome back, Admin! Here's what's happening with your plant store today.</p>
          </div>

          <DashboardCards />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
            <SalesChart />
            <CategoryDistribution />
          </div>
        </main>
      </div>
    </div>
  )
}

