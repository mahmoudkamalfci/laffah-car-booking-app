import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

interface FeatureCardProps {
  image?: string;
  icon?: React.ElementType;
  title: string;
  description: string;
  iconBg?: string;
  className?: string;
}

export function FeatureCard({
  image,
  icon: Icon,
  title,
  description,
  iconBg = "bg-blue-50",
  className,
}: FeatureCardProps) {
  return (
    <Card
      className={`bg-white border-none shadow-(--primary-shadow) hover:shadow-lg rounded-md transition-shadow duration-300 ${className}`}
    >
      <CardContent className="flex flex-col items-center text-center p-6">
        <div
          className={`size-16 rounded-2xl ${iconBg} flex items-center justify-center mb-4 relative`}
        >
          {image ? (
            <Image
              src={image}
              alt={title}
              width={64}
              height={64}
              className="size-16"
            />
          ) : Icon ? (
            <div className="p-1 border-2 border-secondary border-dashed">
              <Icon className="size-8 text-secondary" />
            </div>
          ) : null}
        </div>
        <h3 className="text-2xl font-bold text-primary mb-3">{title}</h3>
        <p className="text-gray-500 text-base leading-relaxed">{description}</p>
      </CardContent>
    </Card>
  );
}
