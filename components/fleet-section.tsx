// components/FleetSection.tsx
"use client";

import Image from "next/image";
import { Phone, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import { AvatarFallback } from "./ui/avatar";

interface CarListing {
  id: number;
  images: string[];
  carName: string;
  year: number;
  city: string;
  availability: string;
  trips: number;
  pricePerDay: number;
  pricePerHour: number;
  ownerName: string;
  ownerAvatar: string;
  ownerRating: number;
  ownerReviews: number;
  tags?: string[];
  featured?: boolean;
}

const carListings: CarListing[] = [
  {
    id: 1,
    images: ["/car-2.png", "/car-3.png", "/car-2.png", "/car-3.png"],
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
    images: ["/car-2.png", "/car-3.png", "/car-2.png", "/car-3.png"],
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
    images: ["/car-2.png", "/car-3.png", "/car-2.png", "/car-3.png"],
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

function CarCard({ car }: { car: CarListing }) {
  return (
    <Card className="bg-white border border-border card-custom-shadow rounded-[14px] py-0 overflow-hidden mb-6">
      <CardContent className="p-4">
        <div>
          <Carousel
            dir="ltr"
            opts={{
              align: "center",
              loop: true,
            }}
            className="w-full relative mb-6"
          >
            <CarouselContent>
              {car.images.map((image, index) => (
                <CarouselItem key={index} className="basis-full">
                  <div className="p-1 h-[250px]">
                    <Image
                      src={image}
                      alt={car.carName}
                      width={500}
                      height={250}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="translate-y-0 bg-white border-gray-200 hover:bg-gray-100 absolute top-1/2 left-0" />
            <CarouselNext className="translate-y-0 bg-white border-gray-200 hover:bg-gray-100 absolute top-1/2 right-0" />
          </Carousel>
          <div>
            <p className="text-base">{car.carName}</p>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function PriceCard({ car }: { car: CarListing }) {
  return (
    <>
      <Card className="bg-white border border-border card-custom-shadow rounded-[14px] py-0 overflow-hidden mb-6">
        <CardContent className="p-4">
          <div className="text-center">
            <p className="text-4xl font-bold">
              {car.pricePerDay.toLocaleString("ar-EG")}
            </p>
            <p className="text-sm text-gray-600">جنيه / اليوم</p>
          </div>
          <div className="border-t border-border my-4" />
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">سعر الساعة</span>
            <span className="font-medium text-gray-600">
              {car.pricePerHour.toLocaleString("ar-EG")} ج
            </span>
          </div>
        </CardContent>
      </Card>
      <Button className="bg-secondary rounded-md w-full text-white mb-3">
        <Calendar className="w-4 h-4" />
        احجز الآن
      </Button>
      <Button variant="outline" className="w-full">
        <Phone className="w-4 h-4" />
        اتصال
      </Button>
    </>
  );
}

export default function FleetSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-4">
            أسطول لَفّة في انتظارك
          </h2>
          <p className="text-gray-600">
            اختر من مجموعة واسعة من السيارات المتاحة
          </p>
        </div>

        {/* الـ Carousel الرئيسي - نفس الحل */}
        <div dir="ltr">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {carListings.map((car) => (
                <CarouselItem key={car.id} className="pl-4 md:basis-1/2">
                  {/* إعادة dir="rtl" للمحتوى الداخلي */}
                  <div className="flex gap-4 pb-8" dir="rtl">
                    <div className="w-[30%] flex-shrink-0">
                      <PriceCard car={car} />
                    </div>
                    <div className="flex-1">
                      <CarCard car={car} />
                    </div>
                  </div>
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
