import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function ProfilePage() {
  return (
    <div className="bg-secondary-bg">
      <div className="container mx-auto py-8 flex flex-col items-center min-h-[calc(100vh-88px)] gap-8">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold text-primary">الملف الشخصي</h1>
          <p className="text-muted-foreground text-xl">
            إدارة معلوماتك الشخصية وحجوزاتك
          </p>
        </div>

        <Card className="p-6 md:p-12 gap-4 shadow-(--primary-shadow) w-full max-w-2xl bg-white rounded-2xl">
          <CardHeader className="px-0 pt-0 text-center">
            <CardTitle className="text-3xl font-bold text-primary text-center">
              بياناتك
            </CardTitle>
          </CardHeader>
          <CardContent className="px-0 space-y-4">
            <div className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="fullName">الإسم</label>
                <Input
                  id="fullName"
                  placeholder="ادخل اسمك"
                  defaultValue="إبراهيم المري"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="phone">
                  رقم الهاتف <span className="text-destructive">*</span>
                </label>
                <Input
                  id="phone"
                  placeholder="ادخل رقم الهاتف"
                  defaultValue="050123456"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email">
                  البريد الإلكترونى <span className="text-destructive">*</span>
                </label>
                <Input
                  id="email"
                  placeholder="ادخل البريد الإلكتروني"
                  defaultValue="ibrahim@gmail.com"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="country">البلد</label>
                <Select dir="rtl" defaultValue="saudi">
                  <SelectTrigger>
                    <SelectValue placeholder="اختر البلد" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="egypt">مصر</SelectItem>
                    <SelectItem value="saudi">
                      المملكة العربية السعودية
                    </SelectItem>
                    <SelectItem value="uae">الإمارات</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label htmlFor="city">المحافظة</label>
                <Select dir="rtl" defaultValue="twaiq">
                  <SelectTrigger>
                    <SelectValue placeholder="اختر المحافظة" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="cairo">القاهرة</SelectItem>
                    <SelectItem value="twaiq">التوقية</SelectItem>
                    <SelectItem value="alex">الإسكندرية</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="pt-6">
              <Button size="lg" disabled className="w-full">
                حفظ التغييرات
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
