"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function FiltersSidebar() {
  return (
    <Card className="w-full h-fit sticky top-4 border-gray-100 shadow-sm">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <Button
            variant="ghost"
            size="sm"
            className="text-red-500 hover:text-red-600 hover:bg-red-50 px-0"
          >
            مسح الكل
          </Button>
          <CardTitle className="text-xl font-bold text-[#1e3a5f]">
            الفلاتر
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Search */}
        <div className="space-y-2 text-right">
          <label className="text-sm font-bold text-[#1e3a5f]">بحث</label>
          <Input
            placeholder="ابحث عن سيارة...."
            className="text-right bg-[#F8FAFC] border-none h-12 rounded-xl"
          />
        </div>

        {/* Pickup Location */}
        <div className="space-y-2 text-right">
          <label className="text-sm font-bold text-[#1e3a5f]">
            مكان الاستلام
          </label>
          <Select>
            <SelectTrigger
              className="w-full text-right bg-[#F8FAFC] border-none h-12 rounded-xl flex-row-reverse"
              dir="rtl"
            >
              <SelectValue placeholder="مطار القاهرة الدولي" />
            </SelectTrigger>
            <SelectContent dir="rtl">
              <SelectItem value="cairo_airport">مطار القاهرة الدولي</SelectItem>
              <SelectItem value="alex_airport">مطار برج العرب</SelectItem>
              <SelectItem value="downtown">وسط البلد</SelectItem>
              <SelectItem value="nasr_city">مدينة نصر</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Car Brand (Type) */}
        <div className="space-y-2 text-right">
          <label className="text-sm font-bold text-[#1e3a5f]">
            نوع العربية
          </label>
          <Select>
            <SelectTrigger
              className="w-full text-right bg-[#F8FAFC] border-none h-12 rounded-xl flex-row-reverse"
              dir="rtl"
            >
              <SelectValue placeholder="كيا سبورتاج" />
            </SelectTrigger>
            <SelectContent dir="rtl">
              <SelectItem value="kia">كيا</SelectItem>
              <SelectItem value="hyundai">هيونداي</SelectItem>
              <SelectItem value="toyota">تويوتا</SelectItem>
              <SelectItem value="mercedes">مرسيدس</SelectItem>
              <SelectItem value="nissan">نيسان</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Car Body Shape */}
        <div className="space-y-2 text-right">
          <label className="text-sm font-bold text-[#1e3a5f]">
            شكل العربية
          </label>
          <Select>
            <SelectTrigger
              className="w-full text-right bg-[#F8FAFC] border-none h-12 rounded-xl flex-row-reverse"
              dir="rtl"
            >
              <SelectValue placeholder="سيدان" />
            </SelectTrigger>
            <SelectContent dir="rtl">
              <SelectItem value="sedan">سيدان</SelectItem>
              <SelectItem value="suv">دفع رباعي (SUV)</SelectItem>
              <SelectItem value="hatchback">هاتشباك</SelectItem>
              <SelectItem value="coupe">كوبيه</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Sort By */}
        <div className="space-y-2 text-right">
          <label className="text-sm font-bold text-[#1e3a5f]">ترتيب حسب</label>
          <Select>
            <SelectTrigger
              className="w-full text-right bg-[#F8FAFC] border-none h-12 rounded-xl flex-row-reverse"
              dir="rtl"
            >
              <SelectValue placeholder="الأعلي تقييماً" />
            </SelectTrigger>
            <SelectContent dir="rtl">
              <SelectItem value="rating_desc">الأعلي تقييماً</SelectItem>
              <SelectItem value="price_asc">الأقل سعراً</SelectItem>
              <SelectItem value="price_desc">الأعلي سعراً</SelectItem>
              <SelectItem value="newest">الأحدث</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardContent>
    </Card>
  );
}
