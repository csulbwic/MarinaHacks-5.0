import styles from '../styles/info.module.css';
import landing from '../styles/landing.module.css';
import Image from 'next/image';

export const Info = () => {
  return (
    <div id="about" className={`${styles.infoContainer} text-center flex flex-col items-center`}>
      {/*Starfish decoration*/}
      <Image
        src="/images/star_fish_1.svg"
        alt="Starfish"
        width={150}
        height={150}
        className={`${styles.starfish} ${styles.leftStar} sway-more-rev sway-origin-bottom [animation-delay:600ms]`}
      />
      <Image
        src="/images/star_fish_2.svg"
        alt="Starfish"
        width={90}
        height={90}
        className={`${styles.starfish} ${styles.rightStar} sway-more-rev sway-origin-bottom [animation-delay:500ms]`}
      />

      <div className= {styles.infoBox}>
  
      <h1 className="text-6xl text-center font-extrabold text-[#FBACCC] mb-20 mt-10 font-nunito [text-shadow:0px_4px_2px_rgba(0,0,0,0.25)]">
        About MarinaHacks
      </h1>

      <p className="text-lg font-nunito">
        {"Women in Computing is hosting MarinaHacks: California State University Long Beach's annual women-centric hackathon! This 24-hour event is dedicated to bringing together women, non-binary and gender-diverse individuals to hone their skills, build confidence and help close the gender gap in the competitive tech industry."}
      </p>
      <br />
      <p className="text-lg font-nunito">
        {"This semester's MarinaHacks 5.0 will take place on October 25th–26th. You will be able to build a project under 24 hours, win prizes, network with other students and most importantly — have fun!"}
      </p>
      <br />
      <p className="text-lg font-nunito">
        {"📍Location: CSULB Pyramid, The Point Conference Center (Also Noted on Dev Post)"}
      </p>
      <br />
      <p className="text-lg font-nunito">
        {"🕘 Time: From 10:00 AM on Saturday, October 25th 2025 to 10:00 AM on Sunday October 26th, 2025."}
      </p>

      </div>

      {/* SCHEDULE - BACKGROUND */}
      <section
        id="schedule"
        className="flex flex-col items-center justify-center mt-20 mb-10 w-full"
      >
        {/* IMAGE */}
        <div className="flex justify-center w-full px-4 md:px-0">
          <Image
            src="/images/Marina Hacks Schedule.png"
            alt="Event Schedule"
            width={900}
            height={600}
            className="rounded-3xl shadow-lg w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] xl:max-w-[700px] h-auto"
          />
        </div>
      </section>

    </div>
  )
}