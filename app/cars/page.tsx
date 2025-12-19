"use client";

import { FiltersSidebar } from "@/components/filters-sidebar";
import { FleetCard, CarListing } from "@/components/fleet-card";

const DEMO_CARS: CarListing[] = [
  {
    id: 1,
    images: ["/car.png", "/car.png", "/car.png"],
    carName: "مرسيدس بنز C-Class",
    year: 2023,
    city: "القاهرة",
    availability: "متاح فوراً",
    trips: 12,
    pricePerDay: 4500,
    pricePerHour: 400,
    ownerName: "أحمد محمد",
    ownerAvatar: "https://github.com/shadcn.png",
    ownerRating: 4.8,
    ownerReviews: 24,
    tags: ["فاخرة", "أتوماتيك", "تكييف"],
    featured: true,
  },
  {
    id: 2,
    images: ["/car.png", "/car.png"],
    carName: "تويوتا كورولا",
    year: 2022,
    city: "الجيزة",
    availability: "خلال ساعة",
    trips: 45,
    pricePerDay: 1200,
    pricePerHour: 150,
    ownerName: "سارة علي",
    ownerAvatar: "https://github.com/shadcn.png",
    ownerRating: 4.9,
    ownerReviews: 56,
    tags: ["اقتصادية", "عائلية"],
  },
  {
    id: 3,
    images: ["/car.png"],
    carName: "هيونداي توسان",
    year: 2024,
    city: "الإسكندرية",
    availability: "متاح فوراً",
    trips: 8,
    pricePerDay: 2500,
    pricePerHour: 250,
    ownerName: "محمود حسن",
    ownerAvatar: "https://github.com/shadcn.png",
    ownerRating: 4.7,
    ownerReviews: 12,
    tags: ["دفع رباعي", "سفر"],
  },
  {
    id: 4,
    images: ["/car.png", "/car.png"],
    carName: "كيا سبورتاج",
    year: 2023,
    city: "القاهرة",
    availability: "غداً",
    trips: 30,
    pricePerDay: 2200,
    pricePerHour: 220,
    ownerName: "خالد جمال",
    ownerAvatar: "https://github.com/shadcn.png",
    ownerRating: 4.6,
    ownerReviews: 18,
  },
];

export default function CarsPage() {
  return (
    <div className="min-h-screen bg-gray-50 pb-16">
      {/* Header Section */}
      <div className="py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl md:text-3xl font-bold text-primary mb-2">
            اختر سيارتك المفضلة
          </h1>
          <p className="text-xl text-gray-500">2 سيارة متاحة </p>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <aside className="w-full lg:w-1/4">
            <FiltersSidebar />
          </aside>

          {/* Main Content */}
          <main className="w-full lg:w-3/4">
            <div className="flex items-center justify-between mb-6">
              <p className="text-gray-500">
                تم العثور على
                <span className="font-bold text-primary">
                  {DEMO_CARS.length}
                </span>
                سيارة
              </p>
            </div>

            <div className="space-y-6">
              {DEMO_CARS.map((car) => (
                <FleetCard key={car.id} car={car} />
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
