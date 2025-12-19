import { Check } from "lucide-react";

interface FeatureItemProps {
  text: string;
}

export function FeatureItem({ text }: FeatureItemProps) {
  return (
    <div className="flex items-center gap-2">
      <span className="size-6 shrink-0 flex items-center justify-center bg-success rounded-full">
        <Check className="h-4 w-4 text-white" />
      </span>
      <span className="text-sm font-semibold">{text}</span>
    </div>
  );
}
