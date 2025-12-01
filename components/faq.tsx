"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "ما هو موقع لّفة وكيف يعمل؟",
    answer:
      "لّفة هو موقع بسيط لحجز السيارات مع سائق للزوار القادمين إلى مصر، خصوصًا من دول الخليج. كل ما عليك هو اختيار السائق، وتحديد مدة الحجز، ومكان الاستلام، ثم إرسال طلب الحجز. فريق لّفة يتأكد من توافر السائق ويؤكد لك الحجز فورًا.",
  },
  {
    question: "ليش أختار لّفة بدل باقي المواقع؟",
    answer: "نقدم خدمة متميزة مع سائقين محترفين وسيارات حديثة بأسعار تنافسية.",
  },
  {
    question: "هل السائقون على لّفة موثوقون؟",
    answer:
      "نعم، جميع السائقين لدينا تم التحقق من هويتهم وخبرتهم لضمان أمانك وراحتك.",
  },
  {
    question: "كيف تتم عملية الدفع؟",
    answer: "يمكنك الدفع نقدًا للسائق أو عبر وسائل الدفع الإلكترونية المتاحة.",
  },
  {
    question: "كيف أعرف أن السيارة ستصل في الميعاد؟",
    answer: "نحن نتابع الرحلات بدقة ونضمن وصول السائق في الموعد المحدد.",
  },
  {
    question: "هل يمكن إلغاء الحجز؟",
    answer:
      "نعم، يمكنك إلغاء الحجز وفقًا لسياسة الإلغاء الموضحة قبل تأكيد الطلب.",
  },
  {
    question: "هل أحتاج لإنشاء حساب؟",
    answer: "لا، يمكنك الحجز كضيف، لكن إنشاء حساب يسهل عليك إدارة حجوزاتك.",
  },
  {
    question: "هل في إمكانية اختيار نوع السيارة؟",
    answer:
      "نعم، يمكنك تصفح السيارات المتاحة واختيار النوع الذي يناسب احتياجاتك.",
  },
  {
    question: "هل يوجد دعم لو حصلت أي مشكلة؟",
    answer:
      "بالتأكيد، فريق الدعم لدينا متاح على مدار الساعة لمساعدتك في أي وقت.",
  },
];

export function FAQ() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2>الأسئلة الشائعة</h2>
          <p className="text-gray-500 text-base">
            اختر من مجموعة واسعة من السيارات المتاحة
          </p>
        </div>

        {/* FAQ List */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-b border-gray-100 last:border-none"
              >
                <AccordionTrigger className="text-xl font-medium text-primary hover:no-underline text-right">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-500 text-sm leading-relaxed text-right">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
