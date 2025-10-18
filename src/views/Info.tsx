import styles from '../styles/info.module.css';
import landing from '../styles/landing.module.css';
import Image from 'next/image';

export const Info = () => {
  return (
    <div id="about" className={`${styles.infoContainer} text-center`}>
      {/*Starfish decoration*/}
      <Image
        src="/images/star_fish_1.svg"
        alt="Starfish"
        width={180}
        height={180}
        className={`${styles.starfish} ${styles.leftStar} sway-more-rev sway-origin-bottom [animation-delay:600ms]`}
      />
      <Image
        src="/images/star_fish_2.svg"
        alt="Starfish"
        width={100}
        height={100}
        className={`${styles.starfish} ${styles.rightStar} sway-more-rev sway-origin-bottom [animation-delay:500ms]`}
      />

      <div className= {styles.infoBox}>
  
      <h1 className="text-6xl text-center font-extrabold text-[#FBACCC] mb-20 mt-10 font-nunito [text-shadow:0px_4px_2px_rgba(0,0,0,0.25)]">
        About MarinaHacks
      </h1>

      <p className="text-2xl mt-10 font-nunito">
        {"Women in Computing is hosting MarinaHacks: California State University Long Beach's annual women-centric hackathon! This free event is dedicated to bringing together women to hone their skills, develop confidence and fill the gender gap within the competitive tech industry."}
      </p>
      <br />
      <br />
      <p className="text-2xl font-nunito">
        {"\nThis semester's MarinaHacks 5.0 will take place on October 25th–26th. You will be able to win prizes, network with other students, attend workshops in order to build your resume, and most importantly — have fun!"}
      </p>

      </div>
    </div>
  )
}