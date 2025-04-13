"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import { AddCategoryDialog } from "./AddCategoryDialog"

export function AddCategoryButton() {
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  return (
    <>
      <Button onClick={() => setIsDialogOpen(true)} className="bg-green-600 hover:bg-green-700">
        <Plus className="mr-2 h-4 w-4" />
        Add Category
      </Button>

      <AddCategoryDialog isOpen={isDialogOpen} onClose={() => setIsDialogOpen(false)} />
    </>
  )
}
