import Image from "next/image";
import { CountdownTimer } from "@/components/CountdownTimer";

export default function Landing() {
  return (
    <section
      className="
      relative grid place-items-center min-h-[80vh]
      pt-[14vw] md:pt-[10vw] lg:pt-[3vw]   /* leave space for the Navbar */
      overflow-hidden                      /* clip anything past the bottom */
      pb-[14vw] md:pb-[10vw] lg:pb-[8vw]   /* leave space for the wave depth */
      bg-gradient-to-b from-[#FCE4D8] to-[#DFF9FF]
    "
    >
      <div id="home" aria-hidden className="absolute inset-0 z-0 pointer-events-none">
        <div
          className="
            absolute left-0 right-0
            top-[36%] bottom-0                /* keep waves inside the section */
            md:top-[34%]
            bg-no-repeat bg-cover
            bg-[url('/images/Both_waves.svg')]
            bg-[center_44%]
            waves-sway 
        "
        />
      </div>

      {/* Decorations (under logo/timer) */}
      <Image
        src="/images/star_fish_1.svg"
        alt="Starfish"
        width={0}
        height={0}
        className="
          absolute left-[5%] top-[28%]
          w-[120px] md:w-[140px]
          -rotate-[10deg] z-[1] select-none pointer-events-none
          max-sm:hidden
          sway-more-rev sway-origin-bottom [animation-delay:600ms]
        "
      />
      <Image
        src="/images/star_fish_2.svg"
        alt="Starfish"
        // Filler sizes to make Next.js happy, actual size controlled by CSS
        width={0}
        height={0}
        className="
          absolute left-[12%] top-[45%]
          w-[110px] md:w-[130px]
          z-[1] select-none pointer-events-none
          max-sm:hidden
          sway-more-rev sway-origin-bottom [animation-delay:500ms]
        "
      />
      <Image
        src="/images/blue_shell.svg"
        alt="Shell"
        // Filler sizes to make Next.js happy, actual size controlled by CSS
        width={0}
        height={0}
        className="
          absolute right-[12%] top-[14%]
          w-[200px] md:w-[180px]
          z-[1] select-none pointer-events-none
          max-sm:hidden
          sway-more-slow sway-origin-top [animation-delay:350ms]
        "
      />

      {/* Logo + countdown (still above waves/decors, but below any navbar wrapper) */}
      <div className="z-[2] text-center grid place-items-center gap-0">
        <div className="relative w-[520px] h-[520px] drop-shadow-[0_10px_16px_rgba(251,172,204,0.25)] max-lg:w-[420px] max-lg:h-[420px] max-sm:w-[300px] max-sm:h-[300px]">
          <Image
            src="/images/logos_4.0/main_logo.svg"
            alt="MarinaHacks 5.0 logo"
            fill
            sizes="(max-width: 640px) 300px, (max-width: 1024px) 420px, 520px"
            className="sway-more-slow"
            priority
          />
        </div>

        {/* Timer slightly above logo for overlap, but still low overall */}
        <div className="z-[3] md:-mt-16">
          <CountdownTimer targetDate="2025-10-25T10:00:00" />
        </div>
      </div>
    </section>
  );
}
