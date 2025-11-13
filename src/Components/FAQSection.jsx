import React from "react";

const FAQSection = () => {
  const faqs = [
    {
      q: "Is Study Partner free to use?",
      a: "Yes! Finding and connecting with a study partner is 100% free. Premium features like video calls may come later.",
    },
    {
      q: "Can I study offline with my partner?",
      a: "Absolutely! Choose 'In-Person' study mode and meet at libraries, cafes, or homes.",
    },
    {
      q: "How do I contact my study partner?",
      a: "You can message them directly via our built-in chat or use their provided email/phone number.",
    },
    {
      q: "Is my personal information safe?",
      a: "Yes! We never share your contact details without permission. Only approved partners can see your info.",
    },
    {
      q: "Can I change my availability or subject later?",
      a: "Yes! Go to 'My Profile' → 'Edit Profile' and update anytime.",
    },
  ];

  return (
    <section className="py-20 dark:bg-gray-900">
      <div className="max-w-4xl px-4 mx-auto">
        <h2 className="mb-12 text-4xl font-bold text-center dark:text dark:text-white">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="overflow-hidden transition-all duration-300 bg-white shadow-md group dark:bg-gray-800 rounded-xl hover:shadow-xl"
            >
              <summary className="flex justify-between items-center p-5 cursor-pointer font-semibold text-lg text-[#001F46] dark:text-white group-open:bg-yellow-50 dark:group-open:bg-gray-700">
                <span>{faq.q}</span>
                <span className="text-xl transition-transform group-open:rotate-180">
                  ▼
                </span>
              </summary>
              <div className="px-5 pt-2 pb-5">
                <p className="leading-relaxed text-gray-600 dark:text-gray-300">
                  {faq.a}
                </p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
