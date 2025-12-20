import { Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";

export function BookingForm() {
  return (
    <Card className="sticky top-4 p-10 shadow-(--primary-shadow)">
      <CardContent className="p-0">
        <h2 className="text-2xl md:text-3xl font-bold text-primary mb-3">
          احجز الآن
        </h2>
        <p className="text-sm md:text-base text-gray-500 mb-4">
          يُفضل التسجيل في المنصة لسهولة متابعة حالة رحلتك ومعرفة جميع تفاصيل
          الحجز.
        </p>

        <form className="space-y-4">
          {/* From Where */}
          <div className="space-y-2">
            <label>
              مكان الإستلام<span className="text-red-500">*</span>
            </label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="cairo">القاهرة</SelectItem>
                <SelectItem value="giza">الجيزة</SelectItem>
                <SelectItem value="alex">الإسكندرية</SelectItem>
                <SelectItem value="cairo-airport">مطار القاهرة</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Pickup Location */}
          <div className="space-y-2">
            <label>
              رقم الهاتف<span className="text-red-500">*</span>
            </label>
            <Input type="number" placeholder="" />
          </div>

          {/* Phone Number */}
          <div className="space-y-2">
            <label>
              رقم الهاتف <span className="text-red-500">*</span>
            </label>
            <Input type="number" placeholder="ادخل رقم الهاتف" />
          </div>

          {/* Start Date */}
          <div className="space-y-2">
            <label>
              تاريخ البدء <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <Input type="text" placeholder="اختر التاريخ" />
              <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
            </div>
          </div>

          {/* Number of Days */}
          <div className="space-y-2">
            <label>
              عدد الأيام <span className="text-red-500">*</span>
            </label>
            <Input type="number" defaultValue="1" min="1" />
          </div>

          {/* Submit Button */}
          <Button size="lg" className="w-full" disabled>
            احجز الآن
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
