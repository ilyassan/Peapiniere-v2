import { DashboardCards } from "./_components/Cards"
import { SalesChart } from "./_components/SalesChart"
import { CategoryDistribution } from "./_components/CategoryDistribution"
import Title from "../_components/Title"

export default function AdminDashboard() {

  return (
    <main className="p-6">
      <Title pageName="Dashboard" description="Welcome back, Admin! Here's what's happening with your plant store today." />

      <DashboardCards />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
        <SalesChart />
        <CategoryDistribution />
      </div>
    </main>
  )
}

