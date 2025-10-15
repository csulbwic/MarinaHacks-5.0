import { useState } from "react";
import { questions } from "@/Data/questions";
import { FaChevronDown } from "react-icons/fa";
import Image from 'next/image';
import style from "@/styles/faq.module.css"

type FaqItem = {
  question: string;
  answer: string;
};

export const Faq = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleActive = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section id="faq" className="py-20 bg-gradient-to-b from-blue-50 to-purple-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 opacity-10 animate-bounce" style={{animationDuration: '6s'}}>
          <Image src="/images/bubble.png" alt="bubble" width={60} height={60} />
        </div>
        <div className="absolute top-40 right-20 opacity-15 animate-pulse" style={{animationDelay: '2s'}}>
          <Image src="/images/shell.png" alt="shell" width={50} height={50} />
        </div>
        <div className="absolute bottom-40 left-20 opacity-10 animate-bounce" style={{animationDelay: '4s', animationDuration: '5s'}}>
          <Image src="/images/flower.png" alt="flower" width={55} height={55} />
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-4 relative z-10">
        {/* Header */}
        <header className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-gradient-to-r from-blue-200 to-purple-200 text-blue-900 text-sm font-semibold mb-4">
            ❓ Got Questions?
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about MarinaHacks 5.0. Can't find what you're looking for? Contact us!
          </p>
        </header>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {questions.map((item, index) => (
            <div
              key={index}
              className={`bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/50 overflow-hidden transition-all duration-300 ${
                activeIndex === index ? 'shadow-xl scale-[1.02]' : 'hover:shadow-md'
              }`}
            >
              <button
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all duration-300"
                onClick={() => toggleActive(index)}
              >
                <span className="text-xl md:text-2xl font-bold text-gray-800 pr-4">
                  {item.question}
                </span>
                <div className={`flex-shrink-0 p-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 transition-all duration-300 ${
                  activeIndex === index ? 'rotate-180 bg-gradient-to-r from-blue-200 to-purple-200' : ''
                }`}>
                  <FaChevronDown
                    className="h-5 w-5 text-blue-600 transition-transform duration-300"
                  />
                </div>
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  activeIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-8 pb-6">
                  <div className="h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent mb-4"></div>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom call-to-action */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl px-8 py-4 shadow-lg">
            <span className="text-2xl">💬</span>
            <span className="text-lg font-semibold text-gray-700">Still have questions?</span>
            <a href="#contact" className="text-blue-600 hover:text-blue-700 font-semibold underline">
              Contact us!
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
