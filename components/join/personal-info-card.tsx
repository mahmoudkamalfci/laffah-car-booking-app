"use client";

import { useState } from "react";
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
import { Checkbox } from "@/components/ui/checkbox";

export function PersonalInfoCard() {
  const [step, setStep] = useState(1);

  return (
    <Card className="p-4 md:p-10 gap-4 shadow-(--primary-shadow)">
      <CardHeader className="px-0 pt-0">
        <CardTitle className="text-2xl font-bold text-primary ">
          البيانات الشخصية
        </CardTitle>
      </CardHeader>
      <CardContent className="px-0 space-y-4">
        {step === 1 && (
          <>
            <div className="space-y-2">
              <label htmlFor="fullName">الاسم بالكامل</label>
              <Input id="fullName" placeholder="ادخل اسمك" />
            </div>

            <div className="space-y-2">
              <label htmlFor="phone">رقم الهاتف</label>
              <Input id="phone" placeholder="ادخل رقم الهاتف" />
            </div>

            <div className="space-y-2">
              <label htmlFor="email">البريد الإلكتروني</label>
              <Input id="email" placeholder="ادخل البريد الإلكتروني" />
            </div>

            <div className="space-y-2">
              <label htmlFor="city">المدينة</label>
              <Select dir="rtl">
                <SelectTrigger>
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
              <label htmlFor="idNumber">رقم البطاقة الشخصية</label>
              <Input id="idNumber" placeholder="ادخل رقم البطاقة" />
            </div>
            <div className="flex justify-end">
              <Button
                className="w-full md:w-auto min-w-[160px]"
                size="lg"
                onClick={() => setStep(2)}
              >
                التالي
              </Button>
            </div>
          </>
        )}

        {step === 2 && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="model">
                  الموديل <span className="text-red-500">*</span>
                </label>
                <Select dir="rtl">
                  <SelectTrigger>
                    <SelectValue placeholder="نيسان" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="nissan">نيسان</SelectItem>
                    <SelectItem value="toyota">تويوتا</SelectItem>
                    <SelectItem value="hyundai">هيونداي</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label htmlFor="year">السنة</label>
                <Select dir="rtl">
                  <SelectTrigger>
                    <SelectValue placeholder="2023" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="2023">2023</SelectItem>
                    <SelectItem value="2022">2022</SelectItem>
                    <SelectItem value="2021">2021</SelectItem>
                    <SelectItem value="2020">2020</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label htmlFor="carShape">
                  شكل العربية <span className="text-red-500">*</span>
                </label>
                <Select dir="rtl">
                  <SelectTrigger>
                    <SelectValue placeholder="سيدان" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="sedan">سيدان</SelectItem>
                    <SelectItem value="suv">SUV</SelectItem>
                    <SelectItem value="hatchback">هاتشباك</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label htmlFor="color">اللون</label>
                <Select dir="rtl">
                  <SelectTrigger>
                    <SelectValue placeholder="أبيض" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="white">أبيض</SelectItem>
                    <SelectItem value="black">أسود</SelectItem>
                    <SelectItem value="silver">فضي</SelectItem>
                    <SelectItem value="red">أحمر</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label htmlFor="seats">
                  عدد المقاعد <span className="text-red-500">*</span>
                </label>
                <Input type="number" id="seats" placeholder="4" />
              </div>

              <div className="space-y-2">
                <label htmlFor="plateNumber">رقم اللوحة</label>
                <Input id="plateNumber" placeholder="أ ب ج 123" />
              </div>
            </div>

            <div className="flex items-center pt-2 gap-2">
              <Checkbox id="terms" />
              <label htmlFor="terms">
                أوافق على{" "}
                <a href="#" className="text-secondary">
                  الشروط والقوانين
                </a>{" "}
                و{" "}
                <a href="#" className="text-secondary">
                  سياسة الخصوصية
                </a>{" "}
                الخاصة بمنصة لفه.
              </label>
            </div>

            <div className="flex justify-between pt-4">
              <Button variant="secondary" size="lg" disabled onClick={() => {}}>
                إرسال الطلب
              </Button>
              <Button variant="default" size="lg" onClick={() => setStep(1)}>
                السابق
              </Button>
            </div>
          </>
        )}
      </CardContent>
    </Card>
  );
}
