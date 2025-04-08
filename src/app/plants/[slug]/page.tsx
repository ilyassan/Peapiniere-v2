import { notFound } from "next/navigation"
import PlantDetails from "./_components/PlantDetails"

async function getPlantBySlug(slug: string) {
  await new Promise((resolve) => setTimeout(resolve, 1000))

  const plants = [
    {
      id: 1,
      name: "Aromatic Basil",
      slug: "aromatic-basil",
      category: "Aromatic Plants",
      images: [
        "https://hips.hearstapps.com/hmg-prod/images/a-set-of-colorful-potted-plants-on-a-patterned-area-royalty-free-image-1716493110.jpg?crop=0.668xw:1.00xh;0.210xw,0&resize=640:*",
        "https://wovenwood.co.uk/cdn/shop/files/grey-plant-pots-cube-plant-pot-cube-planter-woven-wood_9a860573-2e57-4758-b474-403c46e8dc60-100184-741627.webp?crop=center&height=1000&v=1718922771&width=1000",
        "https://gardenerspath.com/wp-content/uploads/2019/03/Lance-Leaf-Coreospis-Seeds.jpg",
      ],
    },
    {
      id: 2,
      name: "Monstera Deliciosa",
      slug: "monstera-deliciosa",
      category: "Indoor Plants",
      images: [
        "/placeholder.svg?height=500&width=400",
        "/placeholder.svg?height=500&width=400",
        "/placeholder.svg?height=500&width=400",
      ],
    },
    {
      id: 3,
      name: "French Lavender",
      slug: "french-lavender",
      category: "Aromatic Plants",
      images: [
        "/placeholder.svg?height=500&width=400",
        "/placeholder.svg?height=500&width=400",
        "/placeholder.svg?height=500&width=400",
      ],
    },
    {
      id: 4,
      name: "Euphorbia Cactus",
      slug: "euphorbia-cactus",
      category: "Cacti & Succulents",
      images: [
        "/placeholder.svg?height=500&width=400",
        "/placeholder.svg?height=500&width=400",
        "/placeholder.svg?height=500&width=400",
      ],
    },
    {
      id: 5,
      name: "Peace Lily",
      slug: "peace-lily",
      category: "Indoor Plants",
      images: [
        "/placeholder.svg?height=500&width=400",
        "/placeholder.svg?height=500&width=400",
        "/placeholder.svg?height=500&width=400",
      ],
    },
  ]

  const plant = plants.find((p) => p.slug === slug)
  return plant || null
}

type Props = {
  params: { slug: string }
}

export default async function Page({ params }: Props) {
  const plant = await getPlantBySlug((await params).slug)

  if (!plant) {
    notFound()
  }

  return <PlantDetails plant={plant} />
}
