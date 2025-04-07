import { ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Categories() {
  // Sample data for categories
  const categories = [
    { name: "Indoor Plants", image: "/placeholder.svg?height=200&width=300" },
    { name: "Aromatic Plants", image: "/placeholder.svg?height=200&width=300" },
    { name: "Cacti & Succulents", image: "/placeholder.svg?height=200&width=300" },
    { name: "Outdoor Plants", image: "/placeholder.svg?height=200&width=300" },
  ]

  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">Our Categories</h2>
          <p className="mt-4 text-lg text-gray-500">Explore our plant collection by category</p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg shadow-md">
              <Image
                src={category.image || "/placeholder.svg"}
                alt={category.name}
                width={300}
                height={200}
                className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-xl font-bold text-white">{category.name}</h3>
                <Link href="#" className="mt-2 text-sm text-green-200 flex items-center">
                  Discover
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

