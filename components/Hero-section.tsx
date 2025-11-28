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
import { Calendar, Check } from "lucide-react";

export function HeroSection() {
  const [activeTab, setActiveTab] = useState<"search" | "contact">("search");

  const features = [
    { text: "حجز سهل ومُريح" },
    { text: "سيارات لكل مكان" },
    { text: "أفضل الأسعار" },
    { text: "تقييمات حقيقية" },
    { text: "عربيات نظالة ممتازة" },
    { text: "موثوق وآمن" },
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

      <div className="container mx-auto px-16 py-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 justify-space-between">
          {/* Hero Content */}
          <div className="text-white text-right flex flex-col gap-12">
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              احجز سيارتك في مصر
              <br />
              بسهولة وأمان
            </h1>
            <p className="text-xl text-white leading-relaxed">
              مع لَفَّة هتتلق أفضل العربيات بأسرع طريقة وأفضل سعر منصتنا بتسهّل
              عليك عملية الحجز بالكامل—سواء هتدور بنفسك أو تسيب فريقنا
              يساعدك—وهتضمن لك عربية نظيفة، آمنة، وجاهزة فوراً بدون أي تعقيد.
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
          <div className="justify-self-end bg-white rounded-2xl shadow-2xl p-6 max-w-md">
            {/* Tabs */}
            <div className="flex mb-6 bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => setActiveTab("search")}
                className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-colors ${
                  activeTab === "search"
                    ? "bg-white text-blue-600 shadow"
                    : "text-gray-600"
                }`}
              >
                ابحث عن سيارتك
              </button>
              <button
                onClick={() => setActiveTab("contact")}
                className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-colors ${
                  activeTab === "contact"
                    ? "bg-white text-blue-600 shadow"
                    : "text-gray-600"
                }`}
              >
                تواصل معنا
              </button>
            </div>

            <div className="mb-4">
              <h3 className="text-lg font-bold text-gray-800 mb-2">
                ذوق على العربية المناسبة ليك بسرعة.
              </h3>
              <p className="text-sm text-gray-500">
                اختر المدة والمكان ومتطلباتك كل العربيات المتاحة بأسعارها
                وتقييماتها أمامك مباشر في لوان بدون أي تعقيد.
              </p>
            </div>

            {/* Form Fields */}
            <div className="space-y-4">
              <div>
                <label className="text-sm text-gray-600 mb-1 block">
                  اختار مكان الاستلام
                </label>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="محل القاهرة" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="cairo">القاهرة</SelectItem>
                    <SelectItem value="giza">الجيزة</SelectItem>
                    <SelectItem value="alex">الإسكندرية</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-sm text-gray-600 mb-1 block">
                  نوع العربية
                </label>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="اختر نوع السيارة" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="sedan">سيدان</SelectItem>
                    <SelectItem value="suv">SUV</SelectItem>
                    <SelectItem value="luxury">فاخرة</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm text-gray-600 mb-1 block">
                    تاريخ البدء
                  </label>
                  <div className="relative">
                    <Input
                      type="text"
                      placeholder="اختر التاريخ"
                      className="pr-10"
                    />
                    <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                  </div>
                </div>
                <div>
                  <label className="text-sm text-gray-600 mb-1 block">
                    عدد الأيام
                  </label>
                  <Input type="number" placeholder="1" defaultValue={1} />
                </div>
              </div>

              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-lg py-3">
                احجز الآن
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
