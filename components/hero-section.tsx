"use client";

import { useState } from "react";
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

import { Calendar, Check, MapPin } from "lucide-react";

export function HeroSection() {
  const [activeTab, setActiveTab] = useState<"search" | "contact">("search");

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
      className="relative min-h-[600px]
     bg-[linear-gradient(127deg,rgba(3,35,80,0.15)_18.28%,rgba(0,93,215,0.50)_49.83%)]
      bg-blue-900 overflow-hidden
      rounded-3xl mx-6
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

      <div className="container mx-auto py-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 justify-space-between">
          {/* Hero Content */}
          <div className="text-white text-right flex flex-col gap-12">
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              احجز سيارتك في مصر <br />
              بسهولة وأمان
            </h1>
            <p className="text-xl text-white leading-relaxed">
              مع لَفّة هتلاقي أفضل العربيات بأسرع طريقة وبأفضل سعر. منصتنا
              بتسهّل عليك عملية الحجز بالكامل—سواء هتدور بنفسك أو تسيب فريقنا
              يساعدك—وهنضمن لك عربية نظيفة، آمنة، وجاهزة فورًا بدون أي تعقيد.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <span className="w-[24px] h-[24px] flex items-center justify-center bg-green-600 rounded-full">
                    <Check className="h-4 w-4 text-white" />
                  </span>
                  <span className="text-sm">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Booking Form */}
          <div className="justify-self-end bg-white rounded-2xl shadow-2xl overflow-hidden max-w-md">
            <Tabs defaultValue="search" className="w-full" dir="rtl">
              {/* Tabs Header */}
              <TabsList className="w-full h-auto p-0 bg-transparent rounded-none border-b">
                <TabsTrigger
                  value="search"
                  className="flex-1 py-3 px-4 rounded-none data-[state=active]:bg-white data-[state=active]:text-blue-600 data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-blue-600 text-gray-500 font-medium"
                >
                  ابحث عن سيارتك
                </TabsTrigger>
                <TabsTrigger
                  value="contact"
                  className="flex-1 py-3 px-4 rounded-none data-[state=active]:bg-white data-[state=active]:text-blue-600 data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-blue-600 text-gray-500 font-medium"
                >
                  تواصل معنا
                </TabsTrigger>
              </TabsList>

              {/* Search Tab Content */}
              <TabsContent value="search" className="p-6 mt-0">
                <div className="mb-4">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">
                    دَوّر على العربية المناسبة ليك بسرعة.
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    اختار المدة والمكان وهتظهرلك كل العربيات المتاحة بأسعارها
                    وتقييماتها.ابدأ الحجز في ثواني بدون أي تعقيد.
                  </p>
                </div>

                {/* Form Fields */}
                <div className="space-y-4">
                  <div>
                    <label className="text-sm text-gray-600 mb-2 block">
                      اختار مكان الاستلام
                    </label>
                    <div className="relative">
                      <Select>
                        <SelectTrigger className="w-full pr-10 border-gray-200 rounded-lg h-11">
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
                      <MapPin className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm text-gray-600 mb-2 block">
                      نوع العربية
                    </label>
                    <Select>
                      <SelectTrigger className="w-full border-gray-200 rounded-lg h-11">
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

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm text-gray-600 mb-2 block">
                        تاريخ البدء
                      </label>
                      <div className="relative">
                        <Input
                          type="text"
                          placeholder="اختر التاريخ"
                          className="pr-10 border-gray-200 rounded-lg h-11"
                        />
                        <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                      </div>
                    </div>
                    <div>
                      <label className="text-sm text-gray-600 mb-2 block">
                        عدد الأيام
                      </label>
                      <Input
                        type="number"
                        placeholder="1"
                        defaultValue={1}
                        min={1}
                        className="border-gray-200 rounded-lg h-11"
                      />
                    </div>
                  </div>

                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-lg h-11 font-medium">
                    احجز الآن
                  </Button>
                </div>
              </TabsContent>

              {/* Contact Tab Content */}
              <TabsContent value="contact" className="p-6 mt-0">
                <div className="mb-4">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">
                    تواصل معنا
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    لديك استفسار؟ فريقنا جاهز لمساعدتك في أي وقت.
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="text-sm text-gray-600 mb-2 block">
                      الاسم
                    </label>
                    <Input
                      type="text"
                      placeholder="ادخل اسمك"
                      className="border-gray-200 rounded-lg h-11"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-gray-600 mb-2 block">
                      رقم الهاتف
                    </label>
                    <Input
                      type="tel"
                      placeholder="ادخل رقم هاتفك"
                      className="border-gray-200 rounded-lg h-11"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-gray-600 mb-2 block">
                      رسالتك
                    </label>
                    <textarea
                      placeholder="اكتب رسالتك هنا..."
                      className="w-full border border-gray-200 rounded-lg p-3 text-sm resize-none h-24 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-lg h-11 font-medium">
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
