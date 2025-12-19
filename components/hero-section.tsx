"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { Calendar, Check } from "lucide-react";
import { Textarea } from "./ui/textarea";

export function HeroSection() {
  const features = [
    { text: "حجز سهل وواضح" },
    { text: "خيارات في كل مكان" },
    { text: "عربيات بحالة ممتازة" },
    { text: "أفضل الأسعار" },
    { text: "موثوق وآمن" },
    { text: "تقييمات حقيقية" },
  ];

  return (
    <section
      className="relative min-h-[500px] sm:min-h-[600px]
     bg-[--image-hero-gradient]
      overflow-hidden
      rounded-2xl sm:rounded-3xl mx-4 
      "
    >
      {/* Background Image Overlay */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url('/hero-img.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-10 md:py-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
          {/* Hero Content */}
          <div className="text-white flex flex-col gap-6 sm:gap-8 md:gap-10 lg:gap-12">
            <h1 className="hero-title">
              احجز سيارتك في مصر <br />
              بسهولة وأمان
            </h1>
            <p className="hero-text">
              مع لَفّة هتلاقي أفضل العربيات بأسرع طريقة وبأفضل سعر. منصتنا
              بتسهّل عليك عملية الحجز بالكامل—سواء هتدور بنفسك أو تسيب فريقنا
              يساعدك—وهنضمن لك عربية نظيفة، آمنة، وجاهزة فورًا بدون أي تعقيد.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <span className="size-6 shrink-0 flex items-center justify-center bg-success rounded-full">
                    <Check className="h-4 w-4 text-white" />
                  </span>
                  <span className="text-sm font-semibold">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Booking Form */}
          <div className="w-full lg:justify-self-end lg:max-w-md bg-transparent rounded-2xl shadow-2xl overflow-hidden">
            <Tabs defaultValue="search" className="w-full gap-0" dir="rtl">
              {/* Tabs Header */}
              <TabsList className="w-full sm:w-3/4 h-auto p-0 bg-transparent">
                <TabsTrigger
                  value="search"
                  className="py-2.5 sm:py-3 px-3 sm:px-4 rounded-tr-md text-sm sm:text-base"
                >
                  ابحث عن سيارتك
                </TabsTrigger>
                <TabsTrigger
                  value="contact"
                  className="py-2.5 sm:py-3 px-3 sm:px-4 rounded-tl-md text-sm sm:text-base"
                >
                  تواصل معنا
                </TabsTrigger>
              </TabsList>

              {/* Search Tab Content */}
              <TabsContent
                value="search"
                className="p-4 sm:p-5 md:p-6 mt-0 bg-white sm:rounded-tl-2xl"
              >
                <div className="mb-4 sm:mb-5">
                  <h3 className="text-sm sm:text-base font-bold text-primary mb-2">
                    دَوّر على العربية المناسبة ليك بسرعة.
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                    اختار المدة والمكان وهتظهرلك كل العربيات المتاحة بأسعارها
                    وتقييماتها.ابدأ الحجز في ثواني بدون أي تعقيد.
                  </p>
                </div>

                {/* Form Fields */}
                <div className="space-y-3 sm:space-y-4">
                  <div className="space-y-2">
                    <label>اختار مكان الاستلام</label>
                    <div className="relative">
                      <Select dir="rtl">
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="مطار القاهرة" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="cairo-airport">
                            مطار القاهرة
                          </SelectItem>
                          <SelectItem value="cairo">القاهرة</SelectItem>
                          <SelectItem value="giza">الجيزة</SelectItem>
                          <SelectItem value="alex">الإسكندرية</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label>نوع العربية</label>
                    <Select dir="rtl">
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="اختر نوع السيارة" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="sedan">سيدان</SelectItem>
                        <SelectItem value="suv">SUV</SelectItem>
                        <SelectItem value="luxury">فاخرة</SelectItem>
                        <SelectItem value="economy">اقتصادية</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div className="space-y-2">
                      <label>تاريخ البدء</label>
                      <div className="relative">
                        <Input
                          type="text"
                          placeholder="اختر التاريخ"
                          className="ps-10"
                        />
                        <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label>عدد الأيام</label>
                      <Input
                        type="number"
                        placeholder="1"
                        defaultValue={1}
                        min={1}
                      />
                    </div>
                  </div>

                  <Button
                    size="lg"
                    className="w-full"
                    variant="secondary"
                    disabled
                  >
                    احجز الآن
                  </Button>
                </div>
              </TabsContent>

              {/* Contact Tab Content */}
              <TabsContent
                value="contact"
                className="p-4 sm:p-5 md:p-6 mt-0 bg-white sm:rounded-tl-2xl"
              >
                <div className="mb-4 sm:mb-5">
                  <h3 className="text-sm sm:text-base font-bold text-primary mb-2">
                    تواصل معنا
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                    لديك استفسار؟ فريقنا جاهز لمساعدتك في أي وقت.
                  </p>
                </div>

                <div className="space-y-3 sm:space-y-4">
                  <div className="space-y-2">
                    <label>الاسم</label>
                    <Input type="text" placeholder="ادخل اسمك" />
                  </div>
                  <div className="space-y-2">
                    <label>رقم الهاتف</label>
                    <Input type="tel" placeholder="ادخل رقم هاتفك" />
                  </div>
                  <div className="space-y-2">
                    <label>رسالتك</label>
                    <Textarea placeholder="اكتب رسالتك هنا..." />
                  </div>
                  <Button
                    size="lg"
                    className="w-full"
                    variant="secondary"
                    disabled
                  >
                    إرسال
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
}
