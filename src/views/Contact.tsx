import style from '../styles/contact.module.css';
import landing from '../styles/landing.module.css';

import Image from 'next/image';
import Link from 'next/link';
import { FaInstagram, FaLinkedin, FaEnvelope } from "react-icons/fa";

export const Contact = () => {
  return (
    <div id="contacts" className={`flex flex-col justify-center items-center ${style.contactContainer}`}>
      <h1 className="text-6xl text-center font-extrabold text-[#FBACCC] mb-5 mt-1 font-nunito [text-shadow:0px_4px_3px_rgba(0,0,0,0.25)]">
        CONTACT US
      </h1>
      <p className="text-1xl text-[#625F5F] font-semibold font-nunito">CSULB Women in Computing</p>

      <div className={style.stage}>
        {<div className={`m-1 rounded-2xl bg-gradient-to-r from-mhpurple-200 to-mhpurple-400 ${style.sharkAnimation} ${style.centerGraphic}`}>
          <Image
            src={"/images/logos_5.0/main_logo.svg"}
            alt="MarinaHacks_5.0_logo"
            layout="responsive"
            width={0}
            height={0}
            className="max-w-full h-auto" // Ensures the image scales down on smaller screens
          />
        </div>}
        
      {/* Instagram */}
      <Link
        href="https://www.instagram.com/csulbwic/?hl=en"
        target="_blank"
        aria-label="Open Instagram in a new tab"
        className={`${style.bubble} ${style.instagram}`}
        style={{'--size': '150px'} as React.CSSProperties}
      >
        <Image
          src={"images/Instagram_white.svg"}
          alt="Instagram"
          layout="responsive"
          width={0}
          height={0}
          className={style.icon}
          style={{ transform: 'scale(0.5)' }}
          />
      </Link>

      {/* LinkedIn */}
      <Link
        href="https://www.linkedin.com/company/csulbwic/"
        target="_blank"
        aria-label="Open LinkedIn in a new tab"
        className={`${style.bubble} ${style.linkedin}`}
        style={{'--size': '110px'} as React.CSSProperties}
      >
        <Image
          src={"images/LinkedIN_white.svg"}
          alt="Instagram"
          layout="responsive"
          width={0}
          height={0}
          className={style.icon}
          style={{ transform: 'scale(0.5)' }}
          />
      </Link>

      {/* Email */}
      <Link
        href="mailto:csulbwic@gmail.com"
        target="_blank"
        aria-label="Send us an email"
        className={`${style.bubble} ${style.mail}`}
        style={{'--size': '100px'} as React.CSSProperties}
      >
        <Image
          src={"images/Mail_ru_white.svg"}
          alt="Instagram"
          layout="responsive"
          width={0}
          height={0}
          className={style.icon}
          style={{ transform: 'scale(0.5)' }}
          />
      </Link>
      </div>
    </div>  
  );
};
