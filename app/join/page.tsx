import { FeatureCard } from "@/components/feature-card";
import { PersonalInfoCard } from "@/components/join/personal-info-card";

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
    <div className="min-h-screen bg-secondary-bg">
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
            <PersonalInfoCard />
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

        <div className="py-8">
          <p className="text-center text-primary text-base max-w-[600px] mx-auto">
            سيتم مراجعة طلبك من قبل فريقنا خلال 24-48 ساعة. في حالة القبول،
            سنتواصل معك لإكمال إجراءات التسجيل وتفعيل حسابك على المنصة.
          </p>
        </div>
      </div>
    </div>
  );
}
