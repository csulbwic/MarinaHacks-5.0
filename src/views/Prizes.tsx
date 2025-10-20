import Image from "next/image";
import { Prize } from "@/Data/prize";
//import { PrizeBubbleComponent } from "../components/PrizeBubbleComponent";
import layout from "@/styles/prizesLayout.module.css";

function splitName(name: string) {
  const parts = name.split("|");
  if (parts.length >= 2) {
    return {
      category: parts[0].trim(),     // e.g., "BEST UI/UX"
      item: parts.slice(1).join("|").trim(), // the rest after the first |
    };
  }
  return { category: name, item: "" };
}

// Reusable slot that shows the image in the circle + caption below
function PrizeSlot({ name, img, className }: { name: string; img: string; className?: string }) {
  const { category, item } = splitName(name);

  return (
    <div className={`${layout.slot} ${className ?? ""}`}>
      <div className={layout.circle}>
        <div className={layout.imgBox}>
          <Image
            src={img}
            alt={name}
            fill
            className={layout.imgFill}
            sizes="(max-width: 640px) 180px, (max-width: 1024px) 220px, 260px"
            priority
          />
        </div>
      </div>

      <div className={layout.caption}>
        {item ? (
          <>
            <div className={layout.captionTop}>{category}</div>
            <div className={layout.captionSub}>{item}</div>
          </>
        ) : (
          <div className={layout.captionTop}>{category}</div>
        )}
      </div>
    </div>
  );
}
export const Prizes = () => {
  // Use the first 4 entries for the four slots
  const items = Prize.slice(0, 4);

  return (
    <section id="prizes" className="relative pt-6 pb-0 flex flex-col items-center">
      <h1 className="text-6xl leading-none tracking-tight text-center font-extrabold text-[#FBACCC] mb-0 font-nunito [text-shadow:0px_4px_3px_rgba(0,0,0,0.25)]">
        Prizes
      </h1>{/* Center swaying logo */}

      <div className={`${layout.orbitWrap} -mt-8 sm:-mt-10 lg:-mt-12 mb-0`}>
        <div className={`${layout.center} w-[200px] sm:w-[330px] md:w-[300px] aspect-square`}>
          <Image
            src="/images/logos_4.0/main_logo.svg"
            alt="MarinaHacks 5.0 logo"
            fill
            className="sway-more-slow object-contain"
            priority
          />
        </div>

        <Image
          src="/images/faqStar.png"
          alt="Shell"
          width={180}
          height={180}
          className="
          absolute left-[1%] top-[40%]      /* was right-[16%] top-[20%] */
          w-[150px] md:w-[170px]
          rotate-[6deg] opacity-90
          z-0 select-none pointer-events-none
          max-sm:hidden
          sway-more-slow sway-origin-top [animation-delay:350ms]
        "
          aria-hidden
          priority
        />

        <Image
          src="/images/faqStar.png"
          alt="Starfish"
          width={100}
          height={100}
          className="
          absolute right-[2%] bottom-[30%]   /* was right-[4%] bottom-[9%] */
          w-[120px] md:w-[140px]
          rotate-[8deg] opacity-90
          z-0 select-none pointer-events-none
          max-sm:hidden
          sway-more-rev sway-origin-bottom [animation-delay:650ms]
        "
          aria-hidden
          priority
        />

        {/* Top-left */}
        <div className={layout.q1}>
          <PrizeSlot
            name={items[0]?.name ?? "Prize Name"}
            img={items[0]?.PrizeImg ?? "/images/prizeImg/Camera.png"}
            className={`${layout.float} ${layout.d1}`}   // <-- sway
          />
        </div>

        {/* Top-right */}
        <div className={layout.q2}>
          <PrizeSlot
            name={items[1]?.name ?? "Prize Name"}
            img={items[1]?.PrizeImg ?? "/images/prizeImg/Headphone.png"}
            className={`${layout.float} ${layout.d2}`}
          />
        </div>

        {/* Bottom-left */}
        <div className={layout.q3}>
          <PrizeSlot
            name={items[2]?.name ?? "Prize Name"}
            img={items[2]?.PrizeImg ?? "/images/prizeImg/Owala.png"}
            className={`${layout.float} ${layout.d3}`}
          />
        </div>

        {/* Bottom-right */}
        <div className={layout.q4}>
          <PrizeSlot
            name={items[3]?.name ?? "Prize Name"}
            img={items[3]?.PrizeImg ?? "/images/prizeImg/AmazonEchoDot.png"}
            className={`${layout.float} ${layout.d4}`}
          />
        </div>
      </div>
    </section>
  );
};