"use client"
import Navbar from "@/app/_components/Navbar"
import Footer from "@/app/_components/Footer"
import PageHeader from "./_components/Header"
import PlantCard from "./_components/Card"
import type { Plant } from "./types/plants"
import { JSX } from "react"

export default function PlantsPage(): JSX.Element {
  const plants: Plant[] = [
    {
      id: 1,
      name: "Aromatic Basil",
      slug: "aromatic-basil",
      price: 8.99,
      category: "Aromatic Plants",
      description: "Perfect for Mediterranean cuisine",
      image: "https://t4.ftcdn.net/jpg/11/25/96/23/360_F_1125962371_D8BU9ZpTBMTihboBGctD9Y6ChtWUNXy1.jpg",
    },
    {
      id: 2,
      name: "Monstera Deliciosa",
      slug: "monstera-deliciosa",
      price: 24.99,
      category: "Indoor Plants",
      description: "Tropical plant with split leaves",
      image: "https://t4.ftcdn.net/jpg/11/25/96/23/360_F_1125962371_D8BU9ZpTBMTihboBGctD9Y6ChtWUNXy1.jpg",
    },
    {
      id: 3,
      name: "French Lavender",
      slug: "french-lavender",
      price: 12.5,
      category: "Aromatic Plants",
      description: "Ideal for fragrance and garden decoration",
      image: "https://t4.ftcdn.net/jpg/11/25/96/23/360_F_1125962371_D8BU9ZpTBMTihboBGctD9Y6ChtWUNXy1.jpg",
    },
    {
      id: 4,
      name: "Euphorbia Cactus",
      slug: "euphorbia-cactus",
      price: 18.99,
      category: "Cacti & Succulents",
      description: "Resistant and easy to maintain plant",
      image: "https://t4.ftcdn.net/jpg/11/25/96/23/360_F_1125962371_D8BU9ZpTBMTihboBGctD9Y6ChtWUNXy1.jpg",
    },
    {
      id: 5,
      name: "Peace Lily",
      slug: "peace-lily",
      price: 15.99,
      category: "Indoor Plants",
      description: "Elegant white flowers and air-purifying qualities",
      image: "https://t4.ftcdn.net/jpg/11/25/96/23/360_F_1125962371_D8BU9ZpTBMTihboBGctD9Y6ChtWUNXy1.jpg",
    },
    {
      id: 6,
      name: "Snake Plant",
      slug: "snake-plant",
      price: 19.99,
      category: "Indoor Plants",
      description: "Nearly indestructible with striking vertical leaves",
      image: "https://t4.ftcdn.net/jpg/11/25/96/23/360_F_1125962371_D8BU9ZpTBMTihboBGctD9Y6ChtWUNXy1.jpg",
    },
    {
      id: 7,
      name: "Aloe Vera",
      slug: "aloe-vera",
      price: 9.99,
      category: "Cacti & Succulents",
      description: "Medicinal plant with soothing gel inside leaves",
      image: "https://t4.ftcdn.net/jpg/11/25/96/23/360_F_1125962371_D8BU9ZpTBMTihboBGctD9Y6ChtWUNXy1.jpg",
    },
    {
      id: 8,
      name: "Echeveria",
      slug: "echeveria",
      price: 7.99,
      category: "Cacti & Succulents",
      description: "Rosette-forming succulent with beautiful colors",
      image: "https://t4.ftcdn.net/jpg/11/25/96/23/360_F_1125962371_D8BU9ZpTBMTihboBGctD9Y6ChtWUNXy1.jpg",
    },
    {
      id: 9,
      name: "Mint",
      slug: "mint",
      price: 6.99,
      category: "Aromatic Plants",
      description: "Refreshing herb perfect for teas and cocktails",
      image: "https://t4.ftcdn.net/jpg/11/25/96/23/360_F_1125962371_D8BU9ZpTBMTihboBGctD9Y6ChtWUNXy1.jpg",
    },
    {
      id: 10,
      name: "Rosemary",
      slug: "rosemary",
      price: 8.5,
      category: "Aromatic Plants",
      description: "Fragrant herb ideal for cooking",
      image: "https://t4.ftcdn.net/jpg/11/25/96/23/360_F_1125962371_D8BU9ZpTBMTihboBGctD9Y6ChtWUNXy1.jpg",
    },
    {
      id: 11,
      name: "Fiddle Leaf Fig",
      slug: "fiddle-leaf-fig",
      price: 34.99,
      category: "Indoor Plants",
      description: "Trendy plant with large violin-shaped leaves",
      image: "https://t4.ftcdn.net/jpg/11/25/96/23/360_F_1125962371_D8BU9ZpTBMTihboBGctD9Y6ChtWUNXy1.jpg",
    },
    {
      id: 12,
      name: "Pothos",
      slug: "pothos",
      price: 12.99,
      category: "Indoor Plants",
      description: "Trailing vine with variegated heart-shaped leaves",
      image: "https://t4.ftcdn.net/jpg/11/25/96/23/360_F_1125962371_D8BU9ZpTBMTihboBGctD9Y6ChtWUNXy1.jpg",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <PageHeader />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Plants Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {plants.map((plant) => (
            <PlantCard key={plant.id} plant={plant} />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  )
}

