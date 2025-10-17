import React, { useState, useEffect } from "react";

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

  return (
    // Each time unit in its own box with pink border and white background
    // Styling repeats between boxes, thus using flexbox and grid for layout
    <div className="grid grid-cols-4 gap-[2vw] md:gap-[15px] lg:gap-[20px] justify-center align-middle">
      <div className="flex justify-center align-middle bg-brandPink p-[6px] rounded-[15px] box-border">
        <div className="flex flex-col w-full h-full justify-center align-middle p-[20px] bg-white text-foreground rounded-[15px] box-border">
          <p className="font-bold text-[1.5rem]">{timeLeft.days}</p>
          <p className="text-[0.75rem] md:text-[1rem] self-center">Days</p>
        </div>
      </div>
      <div className="flex justify-center align-middle bg-brandPink p-[6px] rounded-[15px] box-border">
        <div className="flex flex-col w-full h-full justify-center align-middle p-[20px] bg-white text-foreground rounded-[15px] box-border">
          <p className="font-bold text-[1.5rem]">{timeLeft.hours}</p>
          <p className="text-[0.75rem] md:text-[1rem] self-center">Hours</p>
        </div>
      </div>
      <div className="flex justify-center align-middle bg-brandPink p-[6px] rounded-[15px] box-border">
        <div className="flex flex-col w-full h-full justify-center align-middle p-[20px] bg-white text-foreground rounded-[15px] box-border">
          <p className="font-bold text-[1.5rem]">{timeLeft.minutes}</p>
          <p className="text-[0.75rem] md:text-[1rem] self-center">Minutes</p>
        </div>
      </div>
      <div className="flex justify-center align-middle bg-brandPink p-[6px] rounded-[15px] box-border">
        <div className="flex flex-col w-full justify-center align-middle p-[20px] bg-white text-foreground rounded-[15px] box-border">
          <p className="font-bold text-[1.5rem]">{timeLeft.seconds}</p>
          <p className="text-[0.75rem] md:text-[1rem] self-center">Seconds</p>
        </div>
      </div>
    </div>
  );
};
