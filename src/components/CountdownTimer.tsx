import React, { useState, useEffect } from "react";
import style from "../styles/contact.module.css";

interface CountdownTimerProps {
  targetDate: string;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const CountdownTimer = ({ targetDate }: CountdownTimerProps) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const calculateTimeLeft = (): TimeLeft => {
    const targetDateObj = new Date(targetDate);
    const difference = targetDateObj.getTime() - new Date().getTime();

    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      };
    } else {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
  };

  useEffect(() => {
    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const isCountdownOver =
    timeLeft.days === 0 &&
    timeLeft.hours === 0 &&
    timeLeft.minutes === 0 &&
    timeLeft.seconds === 0;

  if (isCountdownOver) {
    return (
      <div className="justify-center mt-10 mb-10">
        <div className="flex items-center justify-center px-10 md:px-16 py-6 md:h-[140px] bg-white/80 backdrop-blur-m rounded-full shadow-[0_0_25px_rgba(180, 220, 235, 0.6)]">
          <p className="text-4xl md:text-5xl font-extrabold text-[#FBACCC] font-nunito text-center whitespace-nowrap">
            MarinaHacks Happens Now!
          </p>
        </div>

        <a
          href="https://devpost.com"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 flex items-center justify-center px-6 py-3 md:px-10 md:py-4 bg-white/80 backdrop-blur-m rounded-full shadow-[0_0_25px_rgba(180, 220, 235, 0.35)] hover:shadow-[0_0_35px_rgba(251,172,204,0.5)] hover:scale-105 transition-all duration-300 ease-in-out"
        >
          <p className="text-lg md:text-2xl font-extrabold text-[#FBACCC] font-nunito text-center whitespace-nowrap">
            DevPost
          </p>
        </a>

        <a
          href="https://docs.google.com/document/d/1kP8YUct2d7iaGLmMwALtOXxFjrcB5Hv_jwIteBdNCIY/edit?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 flex items-center justify-center px-6 py-3 md:px-10 md:py-4 bg-white/80 backdrop-blur-m rounded-full shadow-[0_0_25px_rgba(180, 220, 235, 0.35)] hover:shadow-[0_0_35px_rgba(251,172,204,0.5)] hover:scale-105 transition-all duration-300 ease-in-out"
        >
          <p className="text-lg md:text-2xl font-extrabold text-[#FBACCC] font-nunito text-center whitespace-nowrap">
            Project Submission Requirements
          </p>
        </a>
      </div>
    );
  }

  return (
    // Each time unit in its own box with pink border and white background
    // Styling repeats between boxes, thus using flexbox and grid for layout

    <div className="grid grid-cols-2 sm:grid-cols-4 items-center gap-20 md:gap-24 lg:gap-28">
      {/* Days */}
      <div className="flex justify-center p-1">
        <div
          className={`${style.bubble} w-[110px] h-[110px] md:w-[130px] md:h-[130px] bg-white text-foreground`}
        >
          <div className="">
            <p className="font-bold text-[1.5rem]">{timeLeft.days}</p>
            <p className="text-[0.75rem] md:text-[1rem] self-center">Days</p>
          </div>
        </div>
      </div>

      {/* Hours */}
      <div className="flex justify-center p-1">
        <div
          className={`${style.bubble} flex flex-col justify-center w-[110px] h-[110px] md:w-[130px] md:h-[130px] p-[10px] bg-white text-foreground`}
        >
          <div>
            <p className="font-bold text-[1.5rem]">{timeLeft.hours}</p>
            <p className="text-[0.75rem] md:text-[1rem] self-center">Hours</p>
          </div>
        </div>
      </div>

      {/* Minutes */}
      <div className="flex justify-center p-1">
        <div
          className={`${style.bubble} flex flex-col justify-center w-[110px] h-[110px] md:w-[130px] md:h-[130px] p-[10px] bg-white text-foreground`}
        >
          <div>
            <p className="font-bold text-[1.5rem]">{timeLeft.minutes}</p>
            <p className="text-[0.75rem] md:text-[1rem] self-center">Minutes</p>
          </div>
        </div>
      </div>

      {/* Seconds */}
      <div className="flex justify-center p-1">
        <div
          className={`${style.bubble} flex flex-col justify-center w-[110px] h-[110px] md:w-[130px] md:h-[130px] p-[10px] bg-white text-foreground`}
        >
          <div>
            <p className="font-bold text-[1.5rem]">{timeLeft.seconds}</p>
            <p className="text-[0.75rem] md:text-[1rem] self-center">Seconds</p>
          </div>
        </div>
      </div>
    </div>
  );
};
