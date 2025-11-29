import Image from "next/image";
import { FeatureCard } from "@/components/feature-card";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const features = [
  {
    icon: "/icons/24-hours.png",
    title: "خدمة 24 ساعة",
    description: "سيارات حديثة ونظيفة مع أفضل السائقين",
    iconBg: "bg-blue-50",
  },
  {
    icon: "/icons/security.png",
    title: "أمان وثقة",
    description: "سيارات حديثة ونظيفة مع أفضل السائقين",
    iconBg: "bg-blue-50",
  },
  {
    icon: "/icons/quality.png",
    title: "جودة عالية",
    description: "سيارات حديثة ونظيفة مع أفضل السائقين",
    iconBg: "bg-blue-50",
    badge: "1",
  },
  {
    icon: "/icons/price-competitive.png",
    title: "أسعار تنافسية",
    description: "سيارات حديثة ونظيفة مع أفضل السائقين",
    iconBg: "bg-blue-50",
  },
];

export default function JoinPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] py-12 px-4 md:px-8" dir="rtl">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            انضم لفريق لفه
          </h1>
          <p className="text-gray-500 text-lg md:text-xl">
            كن جزءاً من أكبر شبكة لتأجير السيارات مع السائقين في مصر
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Form Section - Right Side (First in RTL) */}
          <div className="lg:col-span-7">
            <Card className="w-full bg-white shadow-sm border-none p-6">
              <CardHeader className="px-0 pt-0">
                <CardTitle className="text-2xl font-bold text-primary text-right">
                  البيانات الشخصية
                </CardTitle>
                <CardDescription className="text-gray-500 text-right text-base">
                  كن جزءاً من أكبر شبكة لتأجير السيارات مع السائقين في مصر
                </CardDescription>
              </CardHeader>
              <CardContent className="px-0 space-y-6">
                <div className="space-y-2">
                  <label
                    htmlFor="fullName"
                    className="text-sm font-medium text-primary block text-right"
                  >
                    الاسم بالكامل
                  </label>
                  <Input
                    id="fullName"
                    placeholder="ادخل اسمك"
                    className="text-right bg-gray-50 border-gray-100 h-12"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="phone"
                    className="text-sm font-medium text-primary block text-right"
                  >
                    رقم الهاتف
                  </label>
                  <Input
                    id="phone"
                    placeholder="ادخل رقم الهاتف"
                    className="text-right bg-gray-50 border-gray-100 h-12"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-primary block text-right"
                  >
                    البريد الإلكتروني
                  </label>
                  <Input
                    id="email"
                    placeholder="ادخل البريد الإلكتروني"
                    className="text-right bg-gray-50 border-gray-100 h-12"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-primary block text-right">
                    المدينة
                  </label>
                  <Select dir="rtl">
                    <SelectTrigger className="w-full text-right bg-gray-50 border-gray-100 h-12">
                      <SelectValue placeholder="القاهرة" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="cairo">القاهرة</SelectItem>
                      <SelectItem value="giza">الجيزة</SelectItem>
                      <SelectItem value="alex">الإسكندرية</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="idNumber"
                    className="text-sm font-medium text-primary block text-right"
                  >
                    رقم البطاقة الشخصية
                  </label>
                  <Input
                    id="idNumber"
                    placeholder="ادخل رقم البطاقة"
                    className="text-right bg-gray-50 border-gray-100 h-12"
                  />
                </div>

                <Button className="w-full h-12 text-lg bg-[#CFD9E0] hover:bg-[#BFCAD1] text-white mt-4">
                  التالي
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Feature Cards Section - Left Side (Second in RTL) */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                iconBg={feature.iconBg}
                className="bg-white"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
