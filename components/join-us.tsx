import Image from "next/image";
import { Button } from "@/components/ui/button";

const JoinUs = () => {
  return (
    <section className="w-full py-16 bg-[#F8FAFC] overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Text Section */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-right space-y-10">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary leading-tight">
              انضم إلى سائقين لّفة وابدأ
              <br className="hidden lg:block" />
              كسب دخلك اليوم
            </h2>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl leading-relaxed">
              سجّل عربيتك على لّفة ووصل لعشرات العملاء يوميًا. خطوات بسيطة —
              أرباح سريعة — بدون أي تعقيد.
            </p>
            <Button
              size="lg"
              className="bg-secondary hover:bg-secondary/90 text-white px-8 py-6 text-base rounded-sm"
            >
              سجّل كسائق
            </Button>
          </div>
          {/* Image Section */}
          <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] flex justify-center lg:justify-center">
            <div className="relative w-full h-full max-w-[600px]">
              <Image
                src="/car.png"
                alt="Laffa Car"
                fill
                className="object-contain object-center lg:object-left"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinUs;
