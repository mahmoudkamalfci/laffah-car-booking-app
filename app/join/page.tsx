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
    <div className="min-h-screen bg-[#F8FAFC]">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="py-8">
          <h1 className="text-3xl md:text-4xl font-bold text-primary mb-2">
            انضم لفريق لفه
          </h1>
          <p className="text-gray-500 text-lg md:text-xl">
            كن جزءاً من أكبر شبكة لتأجير السيارات مع السائقين في مصر
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7">
            <Card className="w-full bg-white shadow-sm border border-border p-6 gap-4">
              <CardHeader className="px-0 pt-0">
                <CardTitle className="text-2xl font-bold text-primary ">
                  البيانات الشخصية
                </CardTitle>
                <CardDescription className="text-gray-500  text-base">
                  كن جزءاً من أكبر شبكة لتأجير السيارات مع السائقين في مصر
                </CardDescription>
              </CardHeader>
              <CardContent className="px-0 space-y-4">
                <div className="space-y-2">
                  <label
                    htmlFor="fullName"
                    className="block text-base font-medium text-primary"
                  >
                    الاسم بالكامل
                  </label>
                  <Input
                    id="fullName"
                    placeholder="ادخل اسمك"
                    className="bg-[#F8FAFC] border border-border h-10 rounded-md"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="phone"
                    className="block text-base font-medium text-primary"
                  >
                    رقم الهاتف
                  </label>
                  <Input
                    id="phone"
                    placeholder="ادخل رقم الهاتف"
                    className="bg-[#F8FAFC] border border-border h-10 rounded-md"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="block text-base font-medium text-primary"
                  >
                    البريد الإلكتروني
                  </label>
                  <Input
                    id="email"
                    placeholder="ادخل البريد الإلكتروني"
                    className="bg-[#F8FAFC] border border-border h-10 rounded-md"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-base font-medium text-primary">
                    المدينة
                  </label>
                  <Select dir="rtl">
                    <SelectTrigger className="w-full bg-[#F8FAFC] border border-border h-10 rounded-md">
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
                    className="block text-base font-medium text-primary"
                  >
                    رقم البطاقة الشخصية
                  </label>
                  <Input
                    id="idNumber"
                    placeholder="ادخل رقم البطاقة"
                    className="bg-[#F8FAFC] border border-border h-10 rounded-md"
                  />
                </div>
                <div className="flex justify-end">
                  <Button className="min-w-[160px] h-12 text-base bg-[#CBD5E1] hover:bg-[#BFCAD1] text-white mt-4">
                    التالي
                  </Button>
                </div>
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
