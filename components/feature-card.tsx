import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  iconBg?: string;
  className?: string;
}

export function FeatureCard({
  icon,
  title,
  description,
  iconBg = "bg-blue-50",
  className,
}: FeatureCardProps) {
  return (
    <Card
      className={`border-none shadow-(--shadow-navbar) hover:shadow-lg transition-shadow duration-300 ${className}`}
    >
      <CardContent className="flex flex-col items-center text-center p-6">
        <div
          className={`w-16 h-16 rounded-2xl ${iconBg} flex items-center justify-center mb-4 relative`}
        >
          <Image
            src={icon}
            alt={title}
            width={64}
            height={64}
            className="w-16 h-16"
          />
        </div>
        <h3 className="text-2xl font-bold text-primary mb-3">{title}</h3>
        <p className="text-gray-500 text-base leading-relaxed">{description}</p>
      </CardContent>
    </Card>
  );
}
