"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronDown, ChevronUp, Package } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import type { Plant } from "@/app/plants/types/plants"


// Order interface
interface Order {
  id: string
  date: string
  status: string
  plants: Plant[]
}

// Sample order data
const orders: Order[] = [
  {
    id: "ORD-2023-1001",
    date: "2023-11-15",
    status: "Delivered",
    plants: [
      {
        id: 1,
        name: "Aromatic Basil",
        slug: "aromatic-basil",
        category: "Aromatic Plants",
        description: "Perfect for Mediterranean cuisine",
        image: "/placeholder.svg?height=500&width=400",
      },
      {
        id: 3,
        name: "French Lavender",
        slug: "french-lavender",
        category: "Aromatic Plants",
        description: "Ideal for fragrance and garden decoration",
        image: "/placeholder.svg?height=500&width=400",
      },
      {
        id: 5,
        name: "Peace Lily",
        slug: "peace-lily",
        category: "Indoor Plants",
        description: "Elegant white flowers and air-purifying qualities",
        image: "/placeholder.svg?height=500&width=400",
      },
    ],
  },
  {
    id: "ORD-2023-0892",
    date: "2023-10-28",
    status: "Delivered",
    plants: [
      {
        id: 2,
        name: "Monstera Deliciosa",
        slug: "monstera-deliciosa",
        category: "Indoor Plants",
        description: "Tropical plant with split leaves",
        image: "/placeholder.svg?height=500&width=400",
      },
      {
        id: 7,
        name: "Aloe Vera",
        slug: "aloe-vera",
        category: "Cacti & Succulents",
        description: "Medicinal plant with soothing gel inside leaves",
        image: "/placeholder.svg?height=500&width=400",
      },
      {
        id: 9,
        name: "Mint",
        slug: "mint",
        category: "Aromatic Plants",
        description: "Refreshing herb perfect for teas and cocktails",
        image: "/placeholder.svg?height=500&width=400",
      },
    ],
  },
  {
    id: "ORD-2023-0754",
    date: "2023-09-15",
    status: "Delivered",
    plants: [
      {
        id: 4,
        name: "Euphorbia Cactus",
        slug: "euphorbia-cactus",
        category: "Cacti & Succulents",
        description: "Resistant and easy to maintain plant",
        image: "/placeholder.svg?height=500&width=400",
      },
      {
        id: 6,
        name: "Snake Plant",
        slug: "snake-plant",
        category: "Indoor Plants",
        description: "Nearly indestructible with striking vertical leaves",
        image: "/placeholder.svg?height=500&width=400",
      },
    ],
  },
  {
    id: "ORD-2023-0621",
    date: "2023-08-02",
    status: "Cancelled",
    plants: [
      {
        id: 11,
        name: "Fiddle Leaf Fig",
        slug: "fiddle-leaf-fig",
        category: "Indoor Plants",
        description: "Trendy plant with large violin-shaped leaves",
        image: "/placeholder.svg?height=500&width=400",
      },
    ],
  },
  {
    id: "ORD-2023-0498",
    date: "2023-07-10",
    status: "Processing",
    plants: [
      {
        id: 8,
        name: "Echeveria",
        slug: "echeveria",
        category: "Cacti & Succulents",
        description: "Rosette-forming succulent with beautiful colors",
        image: "/placeholder.svg?height=500&width=400",
      },
      {
        id: 10,
        name: "Rosemary",
        slug: "rosemary",
        category: "Aromatic Plants",
        description: "Fragrant herb ideal for cooking",
        image: "/placeholder.svg?height=500&width=400",
      },
      {
        id: 12,
        name: "Pothos",
        slug: "pothos",
        category: "Indoor Plants",
        description: "Trailing vine with variegated heart-shaped leaves",
        image: "/placeholder.svg?height=500&width=400",
      },
    ],
  },
]

export default function OrdersList() {
  const [expandedOrders, setExpandedOrders] = useState<Record<string, boolean>>({})

  const toggleOrderExpansion = (orderId: string) => {
    setExpandedOrders((prev) => ({
      ...prev,
      [orderId]: !prev[orderId],
    }))
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Delivered":
        return "bg-green-100 text-green-800"
      case "Processing":
        return "bg-blue-100 text-blue-800"
      case "Shipped":
        return "bg-purple-100 text-purple-800"
      case "Cancelled":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: "numeric", month: "long", day: "numeric" }
    return new Date(dateString).toLocaleDateString("en-US", options)
  }

  if (orders.length === 0) {
    return (
      <div className="text-center py-12">
        <Package className="mx-auto h-12 w-12 text-gray-400" />
        <h3 className="mt-2 text-lg font-medium text-gray-900">No orders yet</h3>
        <p className="mt-1 text-gray-500">You haven't placed any orders yet.</p>
        <div className="mt-6">
          <Button asChild className="bg-green-600 hover:bg-green-700">
            <Link href="/plants">Start Shopping</Link>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {orders.map((order) => (
        <Card key={order.id} className="overflow-hidden">
          <CardHeader className="bg-gray-50 border-b border-gray-200">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <div>
                <CardTitle className="text-lg">Order #{order.id}</CardTitle>
                <CardDescription>Placed on {formatDate(order.date)}</CardDescription>
              </div>
              <div className="mt-2 sm:mt-0 flex items-center">
                <Badge variant="outline" className={`${getStatusColor(order.status)}`}>
                  {order.status}
                </Badge>
              </div>
            </div>
          </CardHeader>
          <CardContent className="pt-4">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm text-gray-500">
                  {order.plants.length} {order.plants.length === 1 ? "item" : "items"}
                </p>
                <div className="mt-1">
                  {!expandedOrders[order.id] && (
                    <p className="text-gray-700">
                      {order.plants
                        .slice(0, 2)
                        .map((plant) => plant.name)
                        .join(", ")}
                      {order.plants.length > 2 && ", ..."}
                    </p>
                  )}
                </div>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => toggleOrderExpansion(order.id)}
                className="flex items-center text-gray-500 hover:text-gray-700"
              >
                {expandedOrders[order.id] ? (
                  <>
                    <span className="mr-1">Show less</span>
                    <ChevronUp className="h-4 w-4" />
                  </>
                ) : (
                  <>
                    <span className="mr-1">Show details</span>
                    <ChevronDown className="h-4 w-4" />
                  </>
                )}
              </Button>
            </div>

            {expandedOrders[order.id] && (
              <div className="mt-4 border-t pt-4">
                <ul className="divide-y divide-gray-200">
                  {order.plants.map((plant) => (
                    <li key={plant.id} className="py-4 flex">
                      <div className="flex-shrink-0 w-16 h-16 overflow-hidden rounded-md border border-gray-200">
                        <Image
                          src={plant.image || "/placeholder.svg"}
                          alt={plant.name}
                          width={64}
                          height={64}
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="ml-4 flex-1 flex flex-col">
                        <div>
                          <div className="flex justify-between text-base font-medium text-gray-900">
                            <h3>
                              <Link href={`/plants/${plant.slug}`} className="hover:text-green-600">
                                {plant.name}
                              </Link>
                            </h3>
                          </div>
                          <p className="mt-1 text-sm text-gray-500">{plant.category}</p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </CardContent>
          <CardFooter className="bg-gray-50 border-t border-gray-200 flex justify-between">
            <Button variant="outline" asChild>
              <Link href={`/plants`}>Buy Again</Link>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
