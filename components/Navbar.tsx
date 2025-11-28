// components/Navbar.tsx
"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

const navLinks = [
  { href: "/", label: "الرئيسية" },
  { href: "/about", label: "عن لفّة" },
  { href: "/rent", label: "احجز سيارتك" },
  { href: "/join", label: "انضم معنا" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-transparent shadow-(--shadow-navbar)">
      <div className="container mx-auto px-4 py-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-12">
            {/* Logo */}
            <Link href="/" className="text-primary text-4xl font-bold">
              لَفّة
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-primary hover:bg-secondary hover:text-white transition-colors text-[16px] py-2 px-4 rounded-md"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Auth Button - Desktop */}
          <div className="hidden md:block">
            <Button className="border-primary text-white bg-primary hover:bg-primary/80 hover:text-white rounded py-2 px-6">
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
              <SheetContent side="right" className="w-[300px]">
                <SheetHeader>
                  <SheetTitle className="text-right text-2xl font-bold">
                    لَفّة
                  </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-4 mt-8">
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
                  <Button className="mt-4 rounded-full border-primary text-primary bg-transparent hover:bg-primary hover:text-white">
                    تسجيل الدخول / إنشاء حساب
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
