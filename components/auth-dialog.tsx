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
      <DialogContent className="sm:max-w-[425px] p-0 gap-0 bg-white">
        {/* Custom Close Button */}
        <button
          onClick={handleClose}
          className="absolute left-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground z-10"
        >
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </button>

        <div className="p-8 pt-12">
          {/* Step 1: Phone Number */}
          {step === 1 && (
            <div className="space-y-6">
              <DialogHeader className="space-y-3 text-center">
                <DialogTitle className="text-2xl font-bold text-primary">
                  مرحباً بك في لفّة
                </DialogTitle>
                <p className="text-sm text-muted-foreground">
                  يرجى تسجيل الدخول أو إنشاء حساب أدناه.
                </p>
              </DialogHeader>

              <div className="space-y-4">
                <div className="space-y-2">
                  <label
                    htmlFor="phone"
                    className="text-sm font-medium text-right block text-destructive"
                  >
                    رقم الرقم <span className="text-destructive">*</span>
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="ادخل رقم الرقم"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="text-right h-12 bg-[#F8FAFC] border-border"
                    dir="rtl"
                  />
                </div>

                <Button
                  onClick={handlePhoneSubmit}
                  className="w-full h-12 bg-[#C5D3E0] hover:bg-[#B5C3D0] text-primary font-medium rounded-lg"
                >
                  المتابعة باستخدام الرقم
                </Button>

                <p className="text-xs text-center text-muted-foreground leading-relaxed">
                  بتسجيل الدخول، أنت توافق على{" "}
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
              <DialogHeader className="space-y-3 text-center">
                <DialogTitle className="text-2xl font-bold text-primary">
                  أدخل كود التحقق
                </DialogTitle>
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">
                    أرسلنا رمزاً إلى الرقم 011 54285418 عبر
                  </p>
                  <p className="text-sm text-muted-foreground">
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
                  <label
                    htmlFor="otp"
                    className="text-sm font-medium text-right block"
                  >
                    كود التحقق
                  </label>
                  <Input
                    id="otp"
                    type="text"
                    placeholder="ادخل كود التحقق"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    className="text-right h-12 bg-[#F8FAFC] border-border"
                    dir="rtl"
                    maxLength={6}
                  />
                </div>

                <Button
                  onClick={handleOtpSubmit}
                  className="w-full h-12 bg-[#C5D3E0] hover:bg-[#B5C3D0] text-primary font-medium rounded-lg"
                >
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
              <DialogHeader className="space-y-3 text-center">
                <DialogTitle className="text-2xl font-bold text-primary">
                  أكمل ملفك الشخصي
                </DialogTitle>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  لقد تم التحقق من رقم هاتفك، يرجى اختيار بريد
                  <br />
                  إلكتروني لربطه بحسابك.
                </p>
              </DialogHeader>

              <div className="space-y-4">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium text-right block"
                  >
                    الاسم بالكامل <span className="text-destructive">*</span>
                  </label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="مثال : إبراهيم المري"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="text-right h-12 bg-[#F8FAFC] border-border"
                    dir="rtl"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-right block"
                  >
                    البريد الإلكتروني
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="text-right h-12 bg-[#F8FAFC] border-border"
                    dir="ltr"
                  />
                </div>

                <Button
                  onClick={handleProfileSubmit}
                  className="w-full h-12 bg-[#C5D3E0] hover:bg-[#B5C3D0] text-primary font-medium rounded-lg"
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
