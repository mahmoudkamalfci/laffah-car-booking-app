import Image from "next/image";
import { FeatureCard } from "@/components/feature-card";
import { Mail, MapPin, Phone, Car, Users, Building2, Star } from "lucide-react";

const stats = [
  {
    icon: Car,
    title: "+500",
    description: "سيارات متاحة",
  },
  {
    icon: Users,
    title: "+800",
    description: "سائق محترف",
  },
  {
    icon: Building2,
    title: "+15",
    description: "مدينة مصرية",
  },
  {
    icon: Star,
    title: "5",
    description: "تقييم العملاء",
  },
];

const contactInfo = [
  {
    icon: MapPin,
    title: "العنوان",
    description: "القاهرة، مدينة نصر",
  },
  {
    icon: Mail,
    title: "البريد الإلكتروني",
    description: "info@laffah.com",
  },
  {
    icon: Phone,
    title: "رقم الهاتف",
    description: "+01154 2854 18",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-secondary-bg pt-6 pb-16">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="w-full bg-primary  flex justify-center items-center rounded-xl min-h-[200px] md:min-h-[340px]">
          <Image
            src="/Laffah-Logo-white.png"
            alt="Laffah Logo"
            width={265}
            height={116}
            className="object-contain"
          />
        </div>

        {/* Intro Text */}
        <div className="text-center py-6">
          <h2 className="mb-3">عن لفّة</h2>
          <p className="text-muted-foreground  mx-auto text-lg md:text-xl leading-relaxed">
            منصة رائدة في مجال تأجير السيارات مع سائقين محترفين، نربط زوار دول
            الخليج
            <br className="hidden md:block" />
            بأفضل خدمات النقل والتنقل في مصر.
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {contactInfo.map((info, index) => (
            <div
              key={index}
              className="bg-white rounded p-6 shadow-(--primary-shadow) flex items-center gap-4"
            >
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-secondary">
                <div className="p-1 border-2 border-secondary border-dashed">
                  <info.icon className="size-6" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-primary mb-1">
                  {info.title}
                </h3>
                <p className="text-muted-foreground text-base">
                  {info.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Story Section */}
        <div className="rounded-xl p-8 md:p-16 shadow-(--primary-shadow) mb-16 text-center relative bg-white">
          <Image
            src="/target.png"
            alt="Story Target Icon"
            width={180}
            height={180}
            className="absolute top-4 left-4 w-24 md:w-[180px] md:top-8 md:left-8 z-0 opacity-50 md:opacity-100"
          />
          <div className="text-center md:text-center relative z-10">
            <h2 className="mb-6">قصتنا</h2>
            <div className="space-y-4 text-muted-foreground leading-loose text-lg md:text-xl">
              <p>
                انطلقت فكرة &quot;لفّة&quot; من حاجة حقيقية لاحظناها لدى زوار
                دول الخليج القادمين إلى مصر - البحث عن وسيلة نقل آمنة، مريحة،
                وبأسعار عادلة مع سائقين يتحدثون بلهجتهم ويفهمون احتياجاتهم.
              </p>
              <p>
                نحن نؤمن بأن التنقل يجب أن يكون تجربة سلسة وممتعة، وليس مجرد
                الانتقال من نقطة إلى أخرى. لذلك قمنا بتطوير منصة
                &quot;لفّة&quot; لتكون الجسر الذي يربط بين زوار الخليج الكرام
                وأفضل السائقين والسيارات في مصر.
              </p>
              <p>
                نحن ملتزمون بتوفير خدمة عالية الجودة، مع التركيز على الراحة
                والأمان والشفافية في الأسعار. فريقنا يعمل على مدار الساعة لضمان
                رضاك التام عن كل رحلة.
              </p>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 text-center">
          {stats.map((stat, index) => (
            <FeatureCard
              key={index}
              icon={stat.icon}
              title={stat.title}
              description={stat.description}
            />
          ))}
        </div>

        {/* Vision Section */}
        <div className="rounded-xl p-8 md:p-16 shadow-(--primary-shadow) text-center relative bg-white">
          <Image
            src="/vision.png"
            alt="Vision Eye Icon"
            width={180}
            height={180}
            className="absolute top-4 left-4 w-24 md:w-[180px] md:top-8 md:left-8 z-0 opacity-50 md:opacity-100"
          />
          <div className="text-center md:text-center relative z-10">
            <h2 className="mb-6">رؤيتنا</h2>
            <div className="space-y-4 text-muted-foreground leading-loose text-lg md:text-xl">
              <p>
                نطمح لأن نكون الخيار الأول لكل زائر خليجي يبحث عن خدمة نقل
                متميزة في مصر، ونسعى لتوسيع خدماتنا لتشمل المزيد من الدول
                العربية، مع الحفاظ على نفس المستوى العالي من الجودة والاحترافية.
              </p>
              <p>
                نؤمن بأن كل رحلة هي فرصة لخلق ذكرى جميلة، ونلتزم بجعل كل تجربة
                مع &quot;لفّة&quot; تجربة لا تُنسى.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
