"use client"

import Title from "../_components/Title"
import OrdersTable from "./_components/OrdersTable"
import { useOrders } from "@/app/_hooks/useOrders"

export default function OrdersPage() {
  const { orders, updateOrder, isLoading, error } = useOrders()

  return (
    <main className="p-6">
      <div className="mb-6">
        <Title
          pageName="Orders Management"
          description="Track and manage customer orders, update status, and view order details."
        />
      </div>

      <OrdersTable orders={orders} updateOrder={updateOrder} isLoading={isLoading} error={error} />
    </main>
  )
}
