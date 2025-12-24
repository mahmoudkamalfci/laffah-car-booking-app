import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  MapPin,
  Mail,
  Phone,
} from "lucide-react";
import Link from "next/link";

const contactInfo = [
  {
    icon: MapPin,
    title: "العنوان",
    description: "القاهرة، مدينة نصر",
  },
  {
    icon: Mail,
    title: "البريد الإلكتروني",
    description: "info@laffah.com",
  },
  {
    icon: Phone,
    title: "رقم الهاتف",
    description: "+01154 2854 18",
  },
];

const Footer = () => {
  return (
    <div className="container-fluid mx-auto px-4 pb-1">
      <footer className="bg-footer-bg text-white py-10 rounded-3xl">
        <div className="flex flex-col items-center gap-8">
          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="bg-white/10 rounded p-6 shadow-(--primary-shadow) flex items-center gap-4"
              >
                <div className="size-12 bg-secondary rounded-lg flex items-center justify-center text-white">
                  <div className="p-1 border-2 border-secondary border-dashed">
                    <info.icon className="size-6" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">
                    {info.title}
                  </h3>
                  <p className="text-white text-base">{info.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Description */}
          <p className="text-center text-xl font-medium text-white leading-relaxed">
            خدمة تأجير سيارات وسائقين موثوقة ومريحة
            <br />
            للزوار من الخليج إلى مصر
          </p>

          {/* Social Icons */}
          <div className="flex gap-4">
            <Link
              href="#"
              className="p-2.5 bg-white/10 rounded-full hover:bg-white/10 transition-colors text-white"
            >
              <Youtube className="size-5" />
            </Link>
            <Link
              href="#"
              className="p-2.5 bg-white/10 rounded-full hover:bg-white/10 transition-colors text-white"
            >
              <Twitter className="size-5" />
            </Link>
            <Link
              href="#"
              className="p-2.5 bg-white/10 rounded-full hover:bg-white/10 transition-colors text-white"
            >
              <Instagram className="size-5" />
            </Link>
            <Link
              href="#"
              className="p-2.5 bg-white/10 rounded-full hover:bg-white/10 transition-colors text-white"
            >
              <Facebook className="size-5" />
            </Link>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-white">
            <Link href="/contact">تواصل معنا</Link>
            <Link href="/join">انضم معنا</Link>
            <Link href="/drivers">السائقين</Link>
            <Link href="/cars">السيارات</Link>
            <Link href="/">الرئيسية</Link>
          </nav>

          {/* Divider */}
          <div className="w-full h-px bg-white/5 max-w-4xl"></div>

          {/* Copyright */}
          <div className="text-sm text-gray-400">
            © 2026 لفه - جميع الحقوق محفوظة
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
