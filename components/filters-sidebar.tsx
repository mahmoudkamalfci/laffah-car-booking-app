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
    <Card className="sticky top-4 py-8 gap-4 shadow-(--primary-shadow)">
      <CardHeader className="px-8">
        <div className="flex items-center justify-between">
          <CardTitle className="text-2xl font-medium text-primary">
            الفلاتر
          </CardTitle>
          <Button
            variant="ghost"
            size="sm"
            className="text-red-500 hover:text-red-600 hover:bg-red-50 px-2"
          >
            مسح الكل
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-4 px-8">
        {/* Search */}
        <div className="space-y-2">
          <label>بحث</label>
          <Input placeholder="ابحث عن سيارة...." />
        </div>

        {/* Pickup Location */}
        <div className="space-y-2">
          <label>مكان الاستلام</label>
          <Select>
            <SelectTrigger dir="rtl">
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
        <div className="space-y-2">
          <label>نوع العربية</label>
          <Select>
            <SelectTrigger dir="rtl">
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
        <div className="space-y-2">
          <label>شكل العربية</label>
          <Select>
            <SelectTrigger dir="rtl">
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
        <div className="space-y-2">
          <label>ترتيب حسب</label>
          <Select>
            <SelectTrigger dir="rtl">
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
