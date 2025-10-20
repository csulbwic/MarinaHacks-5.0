import { useState } from "react";
import { questions } from "@/Data/questions";
import { FaChevronDown } from "react-icons/fa";
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
    <div id="faq" className= {`flex flex-col justify-center items-center ${style.faqContainer}`}>
      
      {/* Headline */}
      <h1 className="text-6xl text-center font-extrabold text-[#FBACCC] mb-5 mt-20 font-nunito [text-shadow:0px_4px_3px_rgba(0,0,0,0.25)]">
        Frequently Asked Questions
      </h1>


      <div className={` ${style.fagWrapper}`}>
        <div className={`  grid gap-4`}>
          {/*Component for FAQ*/}
          {questions.map((item, index) => (
            <div
              className={`${style.questionBox} ${
                activeIndex === index ? ` ${style.questionBoxActive} text-[#5A4157]` : ""
              }`}
              key={index}
            >
              <button
                className="flex items-center w-full justify-between "
                onClick={() => toggleActive(index)}
              >
                <span className="text-2xl font-extrabold text-[#FCE4D8] text-left pl-10 font-nunito pt-4 [text-shadow:0px_3px_6px_rgba(0,0,0,0.25)]">
                  {item.question}
                </span>
                <img src="/images/faqStar.png" alt="Faq star"
                  className={`${style.faqStar} transition-transform transform ${
                    activeIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={` ${style.answerBox} overflow-hidden transition-max-height ${
                  activeIndex === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <p className="px-12 pt-6 text-xl font-bold text-[#FCE4D8] font-nunito [text-shadow:0px_2px_8px_rgba(0,0,0,0.25)]">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>


    </div>
  );
};