import { Star } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface DriverInfoProps {
  name: string;
  avatar?: string;
  rating: number;
  reviewCount: number;
}

export function DriverInfo({
  name,
  avatar,
  rating,
  reviewCount,
}: DriverInfoProps) {
  return (
    <div className="flex items-center gap-3">
      <Avatar className="w-12 h-12">
        <AvatarImage src={avatar} />
        <AvatarFallback>{name.charAt(0)}</AvatarFallback>
      </Avatar>
      <div>
        <p className="text-base mb-2 text-primary font-semibold">{name}</p>
        <p className="text-xs flex items-center gap-1">
          <Star className="h-4 w-4 fill-rating text-rating" />
          <span className="text-primary">{rating}</span>
          <span className="text-primary">({reviewCount} تقييم)</span>
        </p>
      </div>
    </div>
  );
}
