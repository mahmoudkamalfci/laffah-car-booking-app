// components/FleetSection.tsx
"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { FleetCard, CarListing } from "./fleet-card";

const carListings: CarListing[] = [
  {
    id: 1,
    images: ["/car-2.jpeg", "/car-3.png", "/car-2.jpeg", "/car-3.png"],
    carName: "سيارة فاخرة",
    year: 2023,
    city: "القاهرة",
    availability: "5 دقائق",
    trips: 1350,
    pricePerDay: 800,
    pricePerHour: 100,
    ownerName: "أسطول لفّة",
    ownerAvatar: "/avatars/fleet.jpg",
    ownerRating: 5,
    ownerReviews: 356,
    featured: true,
  },
  {
    id: 2,
    images: ["/car-2.jpeg", "/car-3.png", "/car-2.jpeg", "/car-3.png"],
    carName: "تويوتا كامري",
    year: 2023,
    city: "القاهرة",
    availability: "5 دقائق",
    trips: 1350,
    pricePerDay: 1350,
    pricePerHour: 100,
    ownerName: "أسامة أبو الخير",
    ownerAvatar: "/avatars/owner-1.jpg",
    ownerRating: 5,
    ownerReviews: 356,
    tags: ["رحلات سياحية", "مطار"],
  },
  {
    id: 3,
    images: ["/car-2.jpeg", "/car-3.png", "/car-2.jpeg", "/car-3.png"],
    carName: "سيارة رياضية",
    year: 2023,
    city: "القاهرة",
    availability: "5 دقائق",
    trips: 1200,
    pricePerDay: 1200,
    pricePerHour: 100,
    ownerName: "محمد أحمد",
    ownerAvatar: "/avatars/owner-2.jpg",
    ownerRating: 5,
    ownerReviews: 280,
  },
];

export default function FleetSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-4xl font-bold text-primary mb-4">
            أسطول لَفّة في انتظارك
          </h2>
          <p className="text-gray-500">
            اختر من مجموعة واسعة من السيارات المتاحة
          </p>
        </div>

        {/* الـ Carousel الرئيسي - نفس الحل */}
        <div>
          <Carousel
            opts={{
              align: "start",
              loop: true,
              direction: "rtl",
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {carListings.map((car) => (
                <CarouselItem
                  key={car.id}
                  className="pl-0 me-4 basis-11/12 md:basis-4/5 lg:basis-7/10 border border-border rounded-2xl overflow-hidden"
                >
                  <FleetCard car={car} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-2 mt-8">
              <CarouselPrevious className="static translate-y-0 bg-white border-gray-200" />
              <CarouselNext className="static translate-y-0 bg-white border-gray-200" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
