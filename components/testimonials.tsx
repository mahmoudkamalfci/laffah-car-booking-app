import React from "react";
import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const testimonials = [
  {
    id: 1,
    name: "خالد البلوشي",
    country: "عمان",
    flag: "🇴🇲",
    rating: 5,
    text: "أفضل خدمة تأجير سيارات جربتها في مصر! الحجز كان سهل جداً والأسعار معقولة. السائق أحمد كان ممتاز ودليل سياحي رائع. شكراً لكم!",
    initials: "خ",
  },
  {
    id: 2,
    name: "سارة الدوسري",
    country: "السعودية",
    flag: "🇸🇦",
    rating: 5,
    text: "خدمة احترافية من البداية للنهاية. السائق كان يعرف كل الأماكن السياحية ووفر علينا كثير من الوقت. السيارة حديثة وفخمة. تستاهل كل نجمة!",
    initials: "س",
  },
  {
    id: 3,
    name: "عبدالله المنصوري",
    country: "الإمارات",
    flag: "🇦🇪",
    rating: 5,
    text: "تجربة رائعة جداً! السائق كان محترف ومؤدب والسيارة نظيفة ومريحة. استخدمت الخدمة طوال إقامتي في مصر وكانت ممتازة. أنصح بها بشدة!",
    initials: "ع",
  },
  {
    id: 4,
    name: "نورة الشامسي",
    country: "الإمارات",
    flag: "🇦🇪",
    rating: 5,
    text: "تجربة ممتازة من كل النواحي! السيارة حديثة موديل 2023 والسائق كان محترف جداً. زرنا شرم الشيخ والغردقة وكانت رحلة لا تنسى. شكراً لفريق القمة!",
    initials: "ن",
  },
  {
    id: 5,
    name: "خالد البلوشي",
    country: "السعودية",
    flag: "🇸🇦",
    rating: 5,
    text: "صراحة ما توقعت الخدمة تكون بهالجودة! كل شي منظم والتعامل راقي. السائق كان عنده خبرة وأمين. الأسعار كويسة مقارنة بالجودة. الله يوفقهم!",
    initials: "خ",
  },
  {
    id: 6,
    name: "خالد البلوشي",
    country: "الإمارات",
    flag: "🇦🇪",
    rating: 5,
    text: "استقبلونا من المطار وكانت الخدمة فوق الممتازة. السيارة واسعة ونظيفة جداً، مناسبة للعائلة. السائق محترم وملتزم بالمواعيد. بنحجز معاهم مرة ثانية أكيد!",
    initials: "خ",
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 bg-white" dir="rtl">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 relative">
          <div className="inline-block relative">
            <h2>آراء عملائنا</h2>
          </div>
          <p className="text-gray-500 text-base">
            اختر من مجموعة واسعة من السيارات المتاحة
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.id}
              className={`rounded-md shadow-(--primary-shadow) transition-shadow duration-300 hover:shadow-lg`}
            >
              <CardContent className="p-6">
                {/* Card Header */}
                <div className="flex justify-start items-center gap-3 mb-4">
                  <Avatar className="w-12 h-12">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>{testimonial.initials}</AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col items-start gap-1">
                    <h3 className="font-medium text-primary text-base ">
                      {testimonial.name}
                    </h3>
                    <div className="flex items-center gap-2 text-xs text-primary">
                      <span>{testimonial.country}</span>
                      <span className="text-lg">{testimonial.flag}</span>
                    </div>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="size-5 fill-rating text-rating" />
                  ))}
                </div>

                {/* Text */}
                <p className="text-gray-500 leading-relaxed text-base">
                  {testimonial.text}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
