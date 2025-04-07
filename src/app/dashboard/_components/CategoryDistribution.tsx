"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts"

const data = [
  { name: "Indoor Plants", value: 40 },
  { name: "Aromatic Plants", value: 25 },
  { name: "Cacti & Succulents", value: 20 },
  { name: "Outdoor Plants", value: 15 },
]

const COLORS = ["#22c55e", "#3b82f6", "#f97316", "#8b5cf6"]

export function CategoryDistribution() {
  return (
    <Card className="col-span-1">
      <CardHeader>
        <CardTitle>Category Distribution</CardTitle>
        <CardDescription>Plant distribution across categories</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}

