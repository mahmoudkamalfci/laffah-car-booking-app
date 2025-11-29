"use client";

import { FeatureCard } from "@/components/feature-card";

const features = [
  {
    icon: "/icons/price-competitive.png",
    title: "أسعار تنافسية",
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
    icon: "/icons/security.png",
    title: "أمان وثقة",
    description: "سيارات حديثة ونظيفة مع أفضل السائقين",
    iconBg: "bg-blue-50",
  },
  {
    icon: "/icons/24-hours.png",
    title: "خدمة 24 ساعة",
    description: "سيارات حديثة ونظيفة مع أفضل السائقين",
    iconBg: "bg-blue-50",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-16 bg-[#F8FAFC]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4">
            ليه تختار لفّه؟
          </h2>
          <p className="text-gray-500 text-base">
            اختر من مجموعة واسعة من السيارات المتاحة
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.reverse().map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              iconBg={feature.iconBg}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
