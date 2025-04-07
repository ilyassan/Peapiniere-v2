"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <h1 className="text-2xl font-bold text-green-600">PlantNursery</h1>
            </div>
          </div>

          <div className="hidden md:flex md:items-center md:space-x-8">
            <Link href="#" className="text-gray-700 hover:text-green-600 px-3 py-2 font-medium">
              Home
            </Link>
            <Link href="#" className="text-gray-700 hover:text-green-600 px-3 py-2 font-medium">
              Shop
            </Link>
            <Link href="#" className="text-gray-700 hover:text-green-600 px-3 py-2 font-medium">
              Categories
            </Link>
            <Link href="#" className="text-gray-700 hover:text-green-600 px-3 py-2 font-medium">
              About
            </Link>
            <Link href="#" className="text-gray-700 hover:text-green-600 px-3 py-2 font-medium">
              Contact
            </Link>
          </div>

          <div className="flex items-center">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <button className="md:hidden text-gray-700 hover:text-green-600">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[250px] sm:w-[300px]">
                <SheetTitle aria-description="Links"></SheetTitle>
                <div className="flex flex-col gap-6 mt-6">
                  <Link
                    href="#"
                    className="text-gray-700 hover:text-green-600 px-3 py-2 font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    Home
                  </Link>
                  <Link
                    href="#"
                    className="text-gray-700 hover:text-green-600 px-3 py-2 font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    Shop
                  </Link>
                  <Link
                    href="#"
                    className="text-gray-700 hover:text-green-600 px-3 py-2 font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    Categories
                  </Link>
                  <Link
                    href="#"
                    className="text-gray-700 hover:text-green-600 px-3 py-2 font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    About
                  </Link>
                  <Link
                    href="#"
                    className="text-gray-700 hover:text-green-600 px-3 py-2 font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    Contact
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}

