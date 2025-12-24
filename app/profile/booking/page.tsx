import { TripCard, TripInfo } from "@/components/trip-card";

const tripsData: TripInfo[] = [
  {
    id: 1,
    bookingCode: "LAFAH258",
    carName: "نيسان",
    carType: "نيسان صنى 2024",
    carImage: "/car-3.png",
    pickupLocation: "مطار القاهرة الدولي",
    pickupDate: "الأحد 22 يناير 2025 , 20:00 AM",
    duration: "7 أيام",
    totalPrice: 2400,
    status: "upcoming",
    driver: {
      name: "محمود سمير العدوى",
      avatar: "https://github.com/shadcn.png",
      rating: 5,
      reviewCount: 156,
    },
  },
  {
    id: 2,
    bookingCode: "LAFAH259",
    carName: "تويوتا",
    carType: "كورولا 2023",
    carImage: "/car-3.png",
    pickupLocation: "ميدان رمسيس",
    pickupDate: "الإثنين 15 فبراير 2025 , 10:00 AM",
    duration: "3 أيام",
    totalPrice: 1500,
    status: "completed",
    driver: {
      name: "أحمد محمد",
      avatar: "https://github.com/shadcn.png",
      rating: 4.8,
      reviewCount: 98,
    },
  },
];

export default function ProfilePage() {
  return (
    <div className="bg-secondary-bg">
      <div className="container mx-auto py-8 flex flex-col items-center min-h-[calc(100vh-88px)] gap-8">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold text-primary">حجوزاتى</h1>
          <p className="text-muted-foreground text-xl">
            إدارة معلوماتك الشخصية وحجوزاتك
          </p>
        </div>

        {/* Trip Cards */}
        <div className="w-full px-4 lg:px-0 lg:max-w-[80%] space-y-6">
          {tripsData.map((trip) => (
            <TripCard key={trip.id} trip={trip} />
          ))}
        </div>
      </div>
    </div>
  );
}
