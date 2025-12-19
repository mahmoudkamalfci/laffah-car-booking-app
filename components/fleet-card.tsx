"use client";

import Image from "next/image";
import { Phone, Calendar, Star, Car, MapPin, Clock, Route } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export interface CarListing {
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

function CarCard({ car }: { car: CarListing }) {
  return (
    <div className="p-6">
      <Carousel
        opts={{
          align: "center",
          loop: true,
          direction: "rtl",
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
                  className="w-full h-[250px] object-cover rounded-2xl"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="translate-y-0 bg-white border-gray-200 hover:bg-gray-100 absolute top-1/2 right-4 left-auto" />
        <CarouselNext className="translate-y-0 bg-white border-gray-200 hover:bg-gray-100 absolute top-1/2 left-4 right-auto" />
      </Carousel>
      <div className="flex items-center gap-3">
        <Avatar className="w-12 h-12">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div>
          <p className="text-base mb-2 text-primary font-semibold">
            {car.carName}
          </p>
          <p className="text-xs flex items-center gap-1">
            <Star className="h-4 w-4 fill-rating text-rating" />
            <span className="text-primary">{car.ownerRating}</span>
            <span className="text-primary">({car.ownerReviews} تقييم)</span>
          </p>
        </div>
      </div>
    </div>
  );
}

function CardInfo({ car }: { car: CarListing }) {
  return (
    <Card className="shadow-none rounded-none px-4 lg:px-10 border-none w-full lg:w-auto">
      <CardContent className="p-0">
        {/* Top Stats Box */}
        <div className="bg-stats-bg rounded-2xl p-4 flex items-center justify-between mb-4">
          <div className="bg-stats-icon-bg p-2 rounded-[14px] text-primary">
            <Route className="w-5 h-5" />
          </div>
          <div className="flex flex-col">
            <span className="text-primary font-bold text-base">
              {car.trips.toLocaleString()} رحلة
            </span>
            <span className="text-gray-500 text-xs">رحلات مكتملة بنجاح</span>
          </div>
        </div>

        {/* Details List */}
        <div className="space-y-4 mb-4">
          {/* Car Type */}
          <div className="flex items-center gap-4">
            <div className="bg-white p-2 rounded-full shadow-sm">
              <Car className="w-5 h-5 text-primary" />
            </div>
            <div className="text-right">
              <p className="text-gray-500 text-xs mb-1">نوع السيارة</p>
              <p className="text-primary font-bold text-sm">
                {car.carName} {car.year}
              </p>
            </div>
          </div>

          {/* City */}
          <div className="flex items-center gap-4">
            <div className="bg-white p-2 rounded-full shadow-sm">
              <MapPin className="w-5 h-5 text-primary" />
            </div>
            <div className="text-right">
              <p className="text-gray-500 text-xs mb-1">المدينة</p>
              <p className="text-primary font-bold text-sm">{car.city}</p>
            </div>
          </div>

          {/* Response Time */}
          <div className="flex items-center gap-4">
            <div className="bg-white p-2 rounded-full shadow-sm">
              <Clock className="w-5 h-5 text-primary" />
            </div>
            <div className="text-right">
              <p className="text-gray-500 text-xs mb-1">وقت الاستجابة</p>
              <p className="text-primary font-bold text-sm">
                {car.availability}
              </p>
            </div>
          </div>
        </div>

        {/* Separator */}
        <div className="border-t border-gray-200 my-4" />

        {/* Specialties */}
        <div className="text-right">
          <p className="text-gray-500 text-xs mb-3">التخصصات</p>
          <div className="flex flex-wrap gap-2">
            {car.tags?.map((tag) => (
              <span
                key={tag}
                className="bg-tag-bg text-primary px-4 py-2 rounded-full text-sm font-medium shadow-sm"
              >
                {tag}
              </span>
            )) || (
              <>
                <span className="bg-tag-bg text-primary px-4 py-2 rounded-full text-sm font-medium shadow-sm">
                  رحلات سياحية
                </span>
                <span className="bg-tag-bg text-primary px-4 py-2 rounded-full text-sm font-medium shadow-sm">
                  مطار
                </span>
              </>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function PriceCard({ car }: { car: CarListing }) {
  return (
    <div className="h-full bg-card-custom-background p-6 w-full lg:w-auto">
      <Card className=" border border-border card-custom-shadow rounded-[14px] py-0 overflow-hidden mb-6">
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
    </div>
  );
}

export function FleetCard({ car }: { car: CarListing }) {
  return (
    <div className="flex flex-col lg:flex-row gap-4 shadow-(--shadow-navbar)">
      <div className="flex-1 w-full lg:w-auto">
        <CarCard car={car} />
      </div>
      <CardInfo car={car} />
      <div className="w-full lg:w-auto">
        <PriceCard car={car} />
      </div>
    </div>
  );
}
