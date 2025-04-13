import Title from "../_components/Title"
import CategoriesTable from "./_components/CategoriesTable"
import { AddCategoryButton } from "./_components/AddCategoryButton"
import AuthWrapper from "@/lib/AuthWrapper"

export default function CategoriesPage() {
  return (
    <AuthWrapper allowedRoles={["admin"]}>
        <main className="p-6">
            <div className="flex justify-between items-center mb-6">
                <Title pageName="Categories Management" description="Manage plant categories for your inventory." />
                <AddCategoryButton />
            </div>

            <CategoriesTable />
        </main>
    </AuthWrapper>
  )
}
