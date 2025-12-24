import Image from "next/image";
import { Button } from "@/components/ui/button";
import { DriverInfo } from "@/components/driver-info";

export interface TripInfo {
  id: number;
  bookingCode: string;
  carName: string;
  carImage: string;
  carType: string;
  pickupLocation: string;
  pickupDate: string;
  duration: string;
  totalPrice: number;
  status: "upcoming" | "completed" | "cancelled";
  driver: {
    name: string;
    avatar: string;
    rating: number;
    reviewCount: number;
  };
}

export function TripCard({ trip }: { trip: TripInfo }) {
  const getStatusColor = (status: TripInfo["status"]) => {
    switch (status) {
      case "upcoming":
        return "bg-success text-white";
      case "completed":
        return "bg-secondary text-white";
      case "cancelled":
        return "bg-destructive text-white";
      default:
        return "bg-gray-100 text-gray-500";
    }
  };

  const getStatusText = (status: TripInfo["status"]) => {
    switch (status) {
      case "upcoming":
        return "الحجز مؤكد";
      case "completed":
        return "مكتملة";
      case "cancelled":
        return "ملغاة";
      default:
        return "";
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-(--primary-shadow) p-5 lg:p-10 w-full">
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
        {/* Car Image */}
        <div className="w-full lg:w-[280px] h-[200px] relative shrink-0 order-1 lg:order-1">
          <Image
            src={trip.carImage}
            alt={trip.carName}
            fill
            className="object-cover rounded-2xl"
          />
        </div>

        {/* Content Section */}
        <div className="flex-1 flex flex-col justify-between order-2 lg:order-2 gap-6">
          <div className="flex justify-between items-start">
            <DriverInfo
              name={trip.driver.name}
              avatar={trip.driver.avatar}
              rating={trip.driver.rating}
              reviewCount={trip.driver.reviewCount}
            />

            <span
              className={`px-4 py-2 rounded-full text-sm font-bold ${getStatusColor(
                trip.status
              )}`}
            >
              {getStatusText(trip.status)}
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 bg-secondary-bg p-4 lg:p-6 rounded-xl">
            <div className="space-y-1 text-center">
              <p className="text-primary font-bold text-base">كود الحجز</p>
              <p className="text-muted-foreground text-sm font-medium">
                {trip.bookingCode}
              </p>
            </div>

            <div className="space-y-1 text-center">
              <p className="text-primary font-bold text-base">نوع السيارة</p>
              <p className="text-muted-foreground text-sm font-medium">
                {trip.carType}
              </p>
            </div>

            <div className="space-y-1 text-center">
              <p className="text-primary font-bold text-base">مكان الإستلام</p>
              <p
                className="text-muted-foreground text-sm font-medium truncate max-w-[120px]"
                title={trip.pickupLocation}
              >
                {trip.pickupLocation}
              </p>
            </div>

            <div className="space-y-1 text-center">
              <p className="text-primary font-bold text-base">
                تاريخ استلام السيارة
              </p>
              <p className="text-muted-foreground text-sm font-medium">
                {trip.pickupDate}
              </p>
            </div>
            <div className="space-y-1 text-center">
              <p className="text-primary font-bold text-base">المدة </p>
              <p className="text-muted-foreground text-sm font-medium">
                {trip.duration}
              </p>
            </div>
            <div className="space-y-1 text-center">
              <p className="text-primary font-bold text-base">إجمالى السعر </p>
              <p className="text-muted-foreground text-sm font-medium">
                {trip.totalPrice}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6 lg:mt-8">
        <Button variant="default" size="lg" className="w-full sm:w-auto">
          انهي الرحلة
        </Button>
        <Button variant="destructive" size="lg" className="w-full sm:w-auto">
          إلغاء الحجز
        </Button>
      </div>
    </div>
  );
}
