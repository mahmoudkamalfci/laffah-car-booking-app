"use client";

import { useState } from "react";
import { X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

interface AuthDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function AuthDialog({ open, onOpenChange }: AuthDialogProps) {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [resendTimer, setResendTimer] = useState(5);

  const handleClose = () => {
    onOpenChange(false);
    // Reset to step 1 after dialog closes
    setTimeout(() => {
      setStep(1);
      setPhoneNumber("");
      setOtp("");
      setName("");
      setEmail("");
      setResendTimer(5);
    }, 300);
  };

  const handlePhoneSubmit = () => {
    setStep(2);
    // Start resend timer
    setResendTimer(5);
  };

  const handleOtpSubmit = () => {
    setStep(3);
  };

  const handleProfileSubmit = () => {
    // Handle final submission
    handleClose();
  };

  const handleChangeNumber = () => {
    setStep(1);
    setOtp("");
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[450px] gap-0 bg-white p-10 rounded-3xl">
        <div>
          {/* Step 1: Phone Number */}
          {step === 1 && (
            <div className="space-y-4">
              <DialogHeader className="space-y-0">
                <DialogTitle>مرحباً بك في لفّة</DialogTitle>
                <p className="text-sm sm:text-base text-muted-foreground">
                  يرجى تسجيل الدخول أو إنشاء حساب أدناه.
                </p>
              </DialogHeader>

              <div className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="phone">
                    رقم الرقم <span className="text-destructive">*</span>
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="ادخل رقم الرقم"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    dir="rtl"
                  />
                </div>

                <Button
                  onClick={handlePhoneSubmit}
                  className="w-full"
                  size="lg"
                >
                  المتابعة باستخدام الرقم
                </Button>

                <p className="text-sm text-center text-muted-foreground leading-relaxed">
                  بتسجيل الدخول، أنت توافق على
                  <br />
                  <Link
                    href="/terms"
                    className="text-secondary hover:underline"
                  >
                    الشروط والأحكام
                  </Link>{" "}
                  و{" "}
                  <Link
                    href="/privacy"
                    className="text-secondary hover:underline"
                  >
                    سياسة الخصوصية
                  </Link>
                  .
                </p>
              </div>
            </div>
          )}

          {/* Step 2: OTP Verification */}
          {step === 2 && (
            <div className="space-y-6">
              <DialogHeader className="space-y-0 text-center">
                <DialogTitle>أدخل كود التحقق</DialogTitle>
                <div className="space-y-1">
                  <p className="text-sm sm:text-base text-muted-foreground">
                    أرسلنا رمزاً إلى الرقم 011 54285418 عبر <br />
                    واتساب، يرجى إدخاله أدناه.
                  </p>
                  <button
                    onClick={handleChangeNumber}
                    className="text-sm text-secondary hover:underline"
                  >
                    تغيير رقم الرقم
                  </button>
                </div>
              </DialogHeader>

              <div className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="otp">كود التحقق</label>
                  <Input
                    id="otp"
                    type="text"
                    placeholder="ادخل كود التحقق"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    dir="rtl"
                    maxLength={6}
                  />
                </div>

                <Button onClick={handleOtpSubmit} className="w-full" size="lg">
                  تحقق
                </Button>

                <div className="text-center text-sm">
                  {resendTimer > 0 ? (
                    <p className="text-muted-foreground">
                      إعادة إرسال الرمز بعد {resendTimer} ثوانٍ
                    </p>
                  ) : (
                    <button
                      onClick={() => setResendTimer(5)}
                      className="text-secondary hover:underline"
                    >
                      إعادة إرسال الرمز
                    </button>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Profile Completion */}
          {step === 3 && (
            <div className="space-y-6">
              <DialogHeader className="space-y-0 text-center">
                <DialogTitle>أكمل ملفك الشخصي</DialogTitle>
                <p className="text-sm sm:text-base text-muted-foreground">
                  لقد تم التحقق من رقم هاتفك، يرجى اختيار بريد إلكتروني لربطه
                  بحسابك.
                </p>
              </DialogHeader>

              <div className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="name">
                    الاسم بالكامل <span className="text-destructive">*</span>
                  </label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="مثال : إبراهيم المري"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    dir="rtl"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email">البريد الإلكتروني</label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    dir="rtl"
                  />
                </div>

                <Button
                  onClick={handleProfileSubmit}
                  className="w-full"
                  size="lg"
                >
                  أكمل حسابك
                </Button>

                <div className="text-center">
                  <button
                    onClick={handleClose}
                    className="text-sm text-secondary hover:underline"
                  >
                    تخطي
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
