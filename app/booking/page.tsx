"use client";

import Image from "next/image";
import {
  Calendar,
  MapPin,
  Users,
  Star,
  Fuel,
  BadgeCheck,
  ArrowRight,
  CarFront,
  Armchair,
  SquareStar,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { FeatureItem } from "@/components/feature-item";

export default function BookingPage() {
  // Demo data
  const carImages = [
    "/car-2.jpeg",
    "/car-2.jpeg",
    "/car-2.jpeg",
    "/car-2.jpeg",
    "/car-2.jpeg",
  ];

  const specifications = [
    { icon: CarFront, label: "الرحلات", value: "4.9" },
    { icon: Armchair, label: "المقاعد", value: "5" },
    { icon: SquareStar, label: "التقييم", value: "4.9" },
    { icon: Fuel, label: "الوقود", value: "بنزين" },
  ];

  const features = [
    "نظام ملاحة GPS",
    "كاميرا خلفية",
    "نظام وقوف ABS",
    "وقوف تلقائي",
    "بلوتوث ووايفاي",
    "مقاعد جلدية",
    "نظام ترفيه متقدم",
    "فتحة سقف",
  ];

  const reviews = [
    {
      id: 1,
      name: "سارة الجهيمي",
      avatar: "https://github.com/shadcn.png",
      rating: 5,
      date: "منذ اسبوع",
      comment:
        "تجربة احترافية من البداية وحتى النهاية. السيارة نظيفة ومريحة جداً، والسائق محترف ولطيف. أنصح الجميع بالتعامل معهم. الوقت، السعر، والخدمة كلها استثنائية بكل معنى الكلمة.",
      verified: true,
    },
    {
      id: 2,
      name: "سارة الجهيمي",
      avatar: "https://github.com/shadcn.png",
      rating: 5,
      date: "منذ اسبوع",
      comment:
        "تجربة احترافية من البداية وحتى النهاية. السيارة نظيفة ومريحة جداً، والسائق محترف ولطيف. أنصح الجميع بالتعامل معهم. الوقت، السعر، والخدمة كلها استثنائية بكل معنى الكلمة.",
      verified: true,
    },
  ];

  return (
    <div className="bg-secondary-bg py-8">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-[1fr_450px] gap-8">
          {/* Right Section - Car Details */}
          <main className="space-y-6">
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => window.history.back()}
                className="cursor-pointer"
              >
                <ArrowRight className="size-8 text-secondary" />
              </Button>

              <h2 className="text-2xl md:text-4xl font-bold text-primary">
                تويوتا كامري 2023
              </h2>
            </div>
            {/* Car Image Carousel */}
            <Carousel
              opts={{
                align: "center",
                loop: true,
                direction: "rtl",
              }}
              className="w-full mt-6"
            >
              <CarouselContent>
                {carImages.map((image, index) => (
                  <CarouselItem
                    key={index}
                    className="md:basis-1/2 lg:basis-1/3 pl-6"
                  >
                    <div className="relative h-[200px] w-full">
                      <Image
                        src={image}
                        alt={`Car image ${index + 1}`}
                        fill
                        className="object-cover rounded-2xl"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="translate-y-0 opacity-60 bg-white border-gray-200 hover:opacity-100 absolute top-1/2 right-4 left-auto" />
              <CarouselNext className="translate-y-0 opacity-60 bg-white border-gray-200 hover:opacity-100 absolute top-1/2 left-4 right-auto" />
            </Carousel>

            {/* driver info */}
            <div className="flex items-center gap-3">
              <Avatar className="w-12 h-12">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-base mb-2 text-primary font-semibold">
                  محمود سمير العدوى
                </p>
                <p className="text-xs flex items-center gap-1">
                  <Star className="h-4 w-4 fill-rating text-rating" />
                  <span className="text-primary">5</span>
                  <span className="text-primary">(5 تقييم)</span>
                </p>
              </div>
            </div>

            {/* Car Specifications */}
            <Card className="py-0 shadow-(--primary-shadow)">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-primary mb-8">
                  مواصفات السيارة
                </h3>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {specifications.map((spec, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center justify-center p-4 bg-secondary-bg rounded-2xl"
                    >
                      <spec.icon className="size-8 text-[#1E40AF] mb-2" />
                      <p className="text-sm text-gray-500 mb-1">{spec.label}</p>
                      <p className="text-base font-bold text-primary">
                        {spec.value}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Features */}
            <Card className="py-0 shadow-(--primary-shadow)">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-primary mb-8">
                  المميزات
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {features.map((feature, index) => (
                    <FeatureItem key={index} text={feature} />
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Reviews */}
            <Card className="py-0 shadow-(--primary-shadow)">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-primary mb-8">
                  التقييمات (40)
                </h3>

                <div className="space-y-6">
                  {reviews.map((review) => (
                    <div
                      key={review.id}
                      className="border-b last:border-b-0 pb-6 last:pb-0"
                    >
                      <div className="flex items-start gap-4">
                        <Avatar className="w-12 h-12">
                          <AvatarImage src={review.avatar} />
                          <AvatarFallback>سج</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <p className="font-bold text-base text-primary">
                              {review.name}
                            </p>
                          </div>

                          <div className="flex items-center justify-between gap-2">
                            <span className="text-xs text-primary font-semibold">
                              السعوديه
                            </span>
                            <span className="text-sm text-gray-500 font-semibold">
                              {review.date}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="flex  gap-0.5 my-4">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="size-4 fill-rating text-rating"
                          />
                        ))}
                      </div>

                      <p className="text-base text-gray-700 leading-relaxed">
                        {review.comment}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </main>
          {/* Left Sidebar - Booking Form */}
          <Card className="sticky top-4 p-10 shadow-(--primary-shadow)">
            <CardContent className="p-0">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-3">
                احجز الآن
              </h2>
              <p className="text-sm md:text-base text-gray-500 mb-4">
                يُفضل التسجيل في المنصة لسهولة متابعة حالة رحلتك ومعرفة جميع
                تفاصيل الحجز.
              </p>

              <form className="space-y-4">
                {/* From Where */}
                <div className="space-y-2">
                  <label>
                    مكان الإستلام<span className="text-red-500">*</span>
                  </label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="cairo">القاهرة</SelectItem>
                      <SelectItem value="giza">الجيزة</SelectItem>
                      <SelectItem value="alex">الإسكندرية</SelectItem>
                      <SelectItem value="cairo-airport">
                        مطار القاهرة
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Pickup Location */}
                <div className="space-y-2">
                  <label>
                    رقم الهاتف<span className="text-red-500">*</span>
                  </label>
                  <Input type="number" placeholder="" />
                </div>

                {/* Phone Number */}
                <div className="space-y-2">
                  <label>
                    رقم الهاتف <span className="text-red-500">*</span>
                  </label>
                  <Input type="number" placeholder="ادخل رقم الهاتف" />
                </div>

                {/* Start Date */}
                <div className="space-y-2">
                  <label>
                    تاريخ البدء <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Input type="text" placeholder="اختر التاريخ" />
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
                  </div>
                </div>

                {/* Number of Days */}
                <div className="space-y-2">
                  <label>
                    عدد الأيام <span className="text-red-500">*</span>
                  </label>
                  <Input type="number" defaultValue="1" min="1" />
                </div>

                {/* Submit Button */}
                <Button size="lg" className="w-full" disabled>
                  احجز الآن
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
