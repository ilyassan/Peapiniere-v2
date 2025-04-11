"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts"

const data = [
  { name: "Jan", sales: 4000, orders: 240 },
  { name: "Feb", sales: 3000, orders: 198 },
  { name: "Mar", sales: 5000, orders: 320 },
  { name: "Apr", sales: 2780, orders: 190 },
  { name: "May", sales: 1890, orders: 140 },
  { name: "Jun", sales: 2390, orders: 160 },
  { name: "Jul", sales: 3490, orders: 220 },
  { name: "Aug", sales: 4000, orders: 240 },
  { name: "Sep", sales: 2780, orders: 190 },
  { name: "Oct", sales: 1890, orders: 140 },
  { name: "Nov", sales: 2390, orders: 160 },
  { name: "Dec", sales: 3490, orders: 220 },
]

export function SalesChart() {
  const [activeTab, setActiveTab] = useState("yearly")

  return (
    <Card className="col-span-1">
      <CardHeader>
        <CardTitle>Sales Overview</CardTitle>
        <CardDescription>View your sales and orders over time</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={data}
              margin={{
                top: 5,
                right: 10,
                left: 10,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis yAxisId="left" />
              <YAxis yAxisId="right" orientation="right" />
              <Tooltip />
              <Legend />
              <Line yAxisId="left" type="monotone" dataKey="sales" stroke="#22c55e" activeDot={{ r: 8 }} />
              <Line yAxisId="right" type="monotone" dataKey="orders" stroke="#3b82f6" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}

