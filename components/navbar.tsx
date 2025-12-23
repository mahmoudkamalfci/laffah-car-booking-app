// components/Navbar.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import AuthDialog from "@/components/auth-dialog";
import clsx from "clsx";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "الرئيسية" },
  { href: "/about", label: "عن لفّة" },
  { href: "/cars", label: "احجز سيارتك" },
  { href: "/join", label: "انضم معنا" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isAuthDialogOpen, setIsAuthDialogOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Show navbar when at the top
      if (currentScrollY < 10) {
        setIsVisible(true);
      }
      // Hide when scrolling down, show when scrolling up
      else if (currentScrollY > lastScrollY.current) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`w-full bg-white shadow-(--primary-shadow) fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ease-in-out ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container mx-auto px-4 py-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-12">
            {/* Logo */}
            <Link href="/">
              <Image
                src="/Laffah-Logo.png"
                alt="Logo"
                width={103}
                height={45}
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={clsx(
                    {
                      "text-secondary": pathname === link.href,
                    },
                    "text-primary hover:text-secondary transition-colors text-[16px] py-2 px-4 rounded-md font-medium"
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Auth Button - Desktop */}
          <div className="hidden md:block">
            <Button
              variant="default"
              size="lg"
              onClick={() => setIsAuthDialogOpen(true)}
            >
              تسجيل الدخول / إنشاء حساب
            </Button>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-primary">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] p-10">
                <SheetHeader className="mt-6 p-0">
                  <SheetTitle className="text-2xl text-primary font-bold">
                    لَفّة
                  </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-4">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="text-primary hover:text-primary/80 transition-colors text-lg font-medium py-2 border-b border-border"
                    >
                      {link.label}
                    </Link>
                  ))}
                  <Button
                    onClick={() => {
                      setIsOpen(false);
                      setIsAuthDialogOpen(true);
                    }}
                  >
                    تسجيل الدخول / إنشاء حساب
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>

      {/* Auth Dialog */}
      <AuthDialog open={isAuthDialogOpen} onOpenChange={setIsAuthDialogOpen} />
    </nav>
  );
}
