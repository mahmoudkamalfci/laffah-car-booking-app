"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { useCallback, useEffect } from "react";
import { useDebouncedCallback } from "use-debounce";

const LOCATION_OPTIONS = [
  { id: "cairo_airport", label: "مطار القاهرة الدولي" },
  { id: "alex_airport", label: "مطار برج العرب" },
  { id: "downtown", label: "وسط البلد" },
  { id: "nasr_city", label: "مدينة نصر" },
];

const BRAND_OPTIONS = [
  { id: "kia", label: "كيا" },
  { id: "hyundai", label: "هيونداي" },
  { id: "toyota", label: "تويوتا" },
  { id: "mercedes", label: "مرسيدس" },
  { id: "nissan", label: "نيسان" },
];

const BODY_SHAPE_OPTIONS = [
  { id: "sedan", label: "سيدان" },
  { id: "suv", label: "دفع رباعي (SUV)" },
  { id: "hatchback", label: "هاتشباك" },
  { id: "coupe", label: "كوبيه" },
];

const SORT_OPTIONS = [
  { id: "rating_desc", label: "الأعلي تقييماً" },
  { id: "price_asc", label: "الأقل سعراً" },
  { id: "price_desc", label: "الأعلي سعراً" },
  { id: "newest", label: "الأحدث" },
];

export function FiltersSidebar() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Create a query string generator
  const createQueryString = useCallback(
    (name: string, value: string | null) => {
      const params = new URLSearchParams(searchParams.toString());
      if (value === null) {
        params.delete(name);
      } else {
        params.set(name, value);
      }
      return params.toString();
    },
    [searchParams]
  );

  const handleSearch = useDebouncedCallback((term: string) => {
    if (term) {
      router.replace(`${pathname}?${createQueryString("search", term)}`, {
        scroll: false,
      });
    } else if (searchParams.has("search")) {
      router.replace(`${pathname}?${createQueryString("search", null)}`, {
        scroll: false,
      });
    }
  }, 500);

  // Handle Checkbox Changes (Multi-select)
  const handleCheckboxChange = (
    category: string,
    value: string,
    checked: boolean
  ) => {
    const currentValues = searchParams.get(category)?.split(",") || [];
    let newValues: string[];

    if (checked) {
      newValues = [...currentValues, value];
    } else {
      newValues = currentValues.filter((v) => v !== value);
    }

    const newValueString = newValues.length > 0 ? newValues.join(",") : null;
    router.replace(
      `${pathname}?${createQueryString(category, newValueString)}`,
      { scroll: false }
    );
  };

  // Handle Single Select (Sort)
  const handleSortChange = (value: string) => {
    console.log(value);
    router.replace(`${pathname}?${createQueryString("sort", value)}`, {
      scroll: false,
    });
  };

  // Simulate API Call
  useEffect(() => {
    const paramsObject: Record<string, string> = {};
    searchParams.forEach((value, key) => {
      paramsObject[key] = value;
    });

    console.log("API calling with filters:", paramsObject);
  }, [searchParams]);

  const clearAllFilters = () => {
    router.replace(pathname, { scroll: false });
  };

  return (
    <Card className="sticky top-4 py-8 gap-4 shadow-(--primary-shadow)">
      <CardHeader className="px-8">
        <div className="flex items-center justify-between">
          <CardTitle className="text-2xl font-medium text-primary">
            الفلاتر
          </CardTitle>
          <Button
            variant="ghost"
            size="sm"
            className="text-red-500 hover:text-red-600 hover:bg-red-50 px-2"
            onClick={clearAllFilters}
          >
            مسح الكل
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-6 px-8">
        {/* Search */}
        <div className="space-y-2">
          <label className="text-base text-primary font-medium">بحث</label>
          <Input
            placeholder="ابحث عن سيارة...."
            defaultValue={searchParams.get("search") || ""}
            onChange={(e) => {
              handleSearch(e.target.value);
            }}
          />
        </div>

        {/* Pickup Location */}
        <div className="space-y-3">
          <label className="text-base text-primary font-medium">
            مكان الاستلام
          </label>
          <div className="space-y-2">
            {LOCATION_OPTIONS.map((option) => {
              const isChecked = (
                searchParams.get("location")?.split(",") || []
              ).includes(option.id);
              return (
                <div key={option.id} className="flex items-center gap-2">
                  <Checkbox
                    id={option.id}
                    checked={isChecked}
                    onCheckedChange={(checked) =>
                      handleCheckboxChange(
                        "location",
                        option.id,
                        checked as boolean
                      )
                    }
                  />
                  <label
                    htmlFor={option.id}
                    className="text-gray-500 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {option.label}
                  </label>
                </div>
              );
            })}
          </div>
        </div>

        {/* Car Brand (Type) */}
        <div className="space-y-3">
          <label className="text-base text-primary font-medium">
            نوع العربية
          </label>
          <div className="space-y-2">
            {BRAND_OPTIONS.map((option) => {
              const isChecked = (
                searchParams.get("brand")?.split(",") || []
              ).includes(option.id);
              return (
                <div key={option.id} className="flex items-center gap-2">
                  <Checkbox
                    id={option.id}
                    checked={isChecked}
                    onCheckedChange={(checked) =>
                      handleCheckboxChange(
                        "brand",
                        option.id,
                        checked as boolean
                      )
                    }
                  />
                  <label
                    htmlFor={option.id}
                    className="text-gray-500 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {option.label}
                  </label>
                </div>
              );
            })}
          </div>
        </div>

        {/* Car Body Shape */}
        <div className="space-y-3">
          <label className="text-base text-primary font-medium">
            شكل العربية
          </label>
          <div className="space-y-2">
            {BODY_SHAPE_OPTIONS.map((option) => {
              const isChecked = (
                searchParams.get("body_shape")?.split(",") || []
              ).includes(option.id);
              return (
                <div key={option.id} className="flex items-center gap-2">
                  <Checkbox
                    id={option.id}
                    checked={isChecked}
                    onCheckedChange={(checked) =>
                      handleCheckboxChange(
                        "body_shape",
                        option.id,
                        checked as boolean
                      )
                    }
                  />
                  <label
                    htmlFor={option.id}
                    className="text-gray-500 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {option.label}
                  </label>
                </div>
              );
            })}
          </div>
        </div>

        {/* Sort By */}
        <div className="space-y-3">
          <label className="text-base text-primary font-medium">
            ترتيب حسب
          </label>
          <div className="space-y-2">
            <Select
              value={searchParams.get("sort") || ""}
              onValueChange={(value) => handleSortChange(value)}
            >
              <SelectTrigger className="w-full text-right" dir="rtl">
                <SelectValue placeholder="اختر الترتيب" />
              </SelectTrigger>
              <SelectContent>
                {SORT_OPTIONS.map((option) => (
                  <SelectItem
                    key={option.id}
                    value={option.id}
                    className="text-right flex-row-reverse"
                  >
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
