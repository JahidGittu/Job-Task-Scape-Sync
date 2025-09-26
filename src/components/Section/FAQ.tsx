"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Is the app free to use?",
    answer:
      "Yes! You can start using the app with our free plan. Premium features are available on paid plans.",
  },
  {
    question: "Can I use the app for my small team?",
    answer:
      "Absolutely! The app is designed for businesses of all sizes — from freelancers to enterprises.",
  },
  {
    question: "Does the app work offline?",
    answer:
      "Yes, you can use the app offline and it will sync your data when you're back online.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="pb-24">
      <div className="container-custom">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-5xl font-bold">Frequently Asked Questions</h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to know about our app
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4 container-custom ">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-xl border bg-card shadow-sm"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between px-6 py-4 text-left font-semibold"
              >
                {faq.question}
                <ChevronDown
                  className={`h-5 w-5 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4 text-muted-foreground">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
