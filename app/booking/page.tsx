"use client";

import Image from "next/image";
import {
  Calendar,
  MapPin,
  Users,
  Star,
  Fuel,
  MessageCircle,
  Phone,
  Check,
  BadgeCheck,
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

export default function BookingPage() {
  // Demo data
  const carImages = [
    "/car.png",
    "/car-2.jpeg",
    "/car-3.png",
    "/car.png",
    "/car-2.jpeg",
    "/car-3.png",
  ];

  const specifications = [
    { icon: Fuel, label: "بنزين", value: "بنزين" },
    { icon: Star, label: "التقييم", value: "4.9" },
    { icon: Users, label: "المقاعد", value: "5 لمقاعد" },
    { icon: MapPin, label: "السعر", value: "400 ريال" },
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
    <div className="bg-[#F8FAFC] py-8">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-[1fr_450px] gap-8">
          {/* Right Section - Car Details */}
          <main className="space-y-6">
            <h1>تفاصيل السيارة</h1>
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
              <CarouselPrevious className="translate-y-0 bg-white border-gray-200 hover:bg-gray-100 absolute top-1/2 right-4 left-auto" />
              <CarouselNext className="translate-y-0 bg-white border-gray-200 hover:bg-gray-100 absolute top-1/2 left-4 right-auto" />
            </Carousel>

            {/* Car Specifications */}
            <Card className="py-0">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-primary mb-4">
                  مواصفات السيارة
                </h3>
                <p className="text-lg font-semibold text-primary mb-6">
                  تويوتا كامري 2023
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {specifications.map((spec, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center justify-center p-4 bg-card-custom-background rounded-lg"
                    >
                      <div className="w-12 h-12 flex items-center justify-center bg-white rounded-full mb-2 shadow-sm">
                        <spec.icon className="w-6 h-6 text-primary" />
                      </div>
                      <p className="text-sm text-gray-600 mb-1">{spec.label}</p>
                      <p className="text-base font-bold text-primary flex items-center gap-1">
                        {spec.label === "التقييم" && (
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        )}
                        {spec.value}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Features */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-primary mb-4">
                  المميزات
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-5 h-5 flex items-center justify-center bg-green-500 rounded-full shrink-0">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Driver Information */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-primary mb-4">
                  معلومات السائق
                </h3>

                <div className="flex items-center gap-4 mb-4">
                  <Avatar className="w-16 h-16">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>سج</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <p className="text-lg font-semibold text-primary">
                        سارة الجهيمي
                      </p>
                      <Badge
                        variant="secondary"
                        className="bg-blue-100 text-secondary border-none"
                      >
                        <BadgeCheck className="w-3 h-3" />
                        موثوق
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-600">سائق محترف</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    className="flex-1 border-gray-300 rounded-lg"
                  >
                    <MessageCircle className="w-4 h-4" />
                    اسأل سؤال
                  </Button>
                  <Button className="flex-1 bg-secondary hover:bg-secondary/90 text-white rounded-lg">
                    <Phone className="w-4 h-4" />
                    اتصل بالسائق
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Reviews */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-primary mb-4">
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
                            <p className="font-semibold text-primary">
                              {review.name}
                            </p>
                            {review.verified && (
                              <Badge
                                variant="secondary"
                                className="bg-blue-100 text-secondary border-none"
                              >
                                <BadgeCheck className="w-3 h-3" />
                                موثوق
                              </Badge>
                            )}
                          </div>

                          <div className="flex items-center gap-2 mb-2">
                            <div className="flex gap-0.5">
                              {[...Array(review.rating)].map((_, i) => (
                                <Star
                                  key={i}
                                  className="w-4 h-4 fill-yellow-400 text-yellow-400"
                                />
                              ))}
                            </div>
                            <span className="text-xs text-gray-500">
                              {review.date}
                            </span>
                          </div>

                          <p className="text-sm text-gray-700 leading-relaxed">
                            {review.comment}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </main>
          {/* Left Sidebar - Booking Form */}
          <Card className="sticky top-4 p-10">
            <CardContent className="p-0">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-3">
                احجز الآن
              </h2>
              <p className="text-sm md:text-base text-gray-500 mb-4">
                سيارات احترافية متاحة للإيجار 24/7 وبأسعار تنافسية
                <br />
                لتجربة سفر مميزة
              </p>

              <form className="space-y-4">
                {/* From Where */}
                <div className="space-y-2">
                  <label>
                    من أين <span className="text-red-500">*</span>
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
                    سيتم الاستلام <span className="text-red-500">*</span>
                  </label>
                  <Input type="text" placeholder="" />
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

                {/* End Date */}
                <div className="space-y-2">
                  <label>
                    تاريخ النهاية <span className="text-red-500">*</span>
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
