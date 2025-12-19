import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="container-fluid mx-auto px-4 pb-4">
      <footer className="bg-footer-bg text-white py-10 rounded-3xl">
        <div className="flex flex-col items-center text-center gap-8 px-4">
          {/* Description */}
          <div className="max-w-md">
            <p className="text-lg font-medium text-gray-300 leading-relaxed">
              خدمة تأجير سيارات وسائقين موثوقة ومريحة
              <br />
              للزوار من الخليج إلى مصر
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4">
            <Link
              href="#"
              className="p-2.5 bg-white/5 rounded-full hover:bg-white/10 transition-colors text-white"
            >
              <Youtube className="w-5 h-5" />
            </Link>
            <Link
              href="#"
              className="p-2.5 bg-white/5 rounded-full hover:bg-white/10 transition-colors text-white"
            >
              <Twitter className="w-5 h-5" />
            </Link>
            <Link
              href="#"
              className="p-2.5 bg-white/5 rounded-full hover:bg-white/10 transition-colors text-white"
            >
              <Instagram className="w-5 h-5" />
            </Link>
            <Link
              href="#"
              className="p-2.5 bg-white/5 rounded-full hover:bg-white/10 transition-colors text-white"
            >
              <Facebook className="w-5 h-5" />
            </Link>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-gray-300">
            <Link
              href="/contact"
              className="hover:text-white transition-colors"
            >
              تواصل معنا
            </Link>
            <Link href="/join" className="hover:text-white transition-colors">
              انضم معنا
            </Link>
            <Link
              href="/drivers"
              className="hover:text-white transition-colors"
            >
              السائقين
            </Link>
            <Link href="/cars" className="hover:text-white transition-colors">
              السيارات
            </Link>
            <Link href="/" className="hover:text-white transition-colors">
              الرئيسية
            </Link>
          </nav>

          {/* Divider */}
          <div className="w-full h-px bg-white/5 max-w-4xl"></div>

          {/* Copyright */}
          <div className="text-sm text-gray-400">
            © 2025 لفه - جميع الحقوق محفوظة
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
