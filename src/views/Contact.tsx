import style from "../styles/contact.module.css";
import landing from "../styles/landing.module.css";

import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaLinkedin, FaEnvelope } from "react-icons/fa";

export const Contact = () => {
  return (
    <div
      id="contacts"
      className={` w-full flex flex-col justify-center items-center px-[10%] pt-[8%] pb-[10%] text-center bg-gradient-to-b from-waveBottom to-[#BBF2FF]`}
    >
      <h1 className="text-6xl text-center font-extrabold text-brandPink mb-5 mt-1 font-nunito [text-shadow:0px_4px_3px_rgba(0,0,0,0.25)]">
        CONTACT US
      </h1>
      <p className="text-1xl text-[#625F5F] font-semibold font-nunito">
        CSULB Women in Computing
      </p>

      <div className="relative pb-[20vh] lg:pb-0">
        <div className="flex justify-center">
          {
            <div className={`m-1 rounded-2xl w-full ${style.sharkAnimation}`}>
              <Image
                src={"/images/logos_5.0/main_logo.svg"}
                alt="MarinaHacks_5.0_logo"
                layout="responsive"
                width={0}
                height={0}
                className="max-w-full h-auto bg-transparent md:scale-75 lg:scale-100" // Ensures the image scales down on smaller screens
              />
            </div>
          }
        </div>

        {/* Instagram */}
        <Link
          href="https://www.instagram.com/csulbwic/?hl=en"
          target="_blank"
          aria-label="Open Instagram in a new tab"
          className={`${style.bubble} right-0 left-0 mx-auto md:mx-0 md:top-[1%] md:left-[10%] lg:left-[-10%]`}
          style={{ "--size": "150px" } as React.CSSProperties}
        >
          <Image
            src={"images/Instagram_white.svg"}
            alt="Instagram"
            layout="responsive"
            width={0}
            height={0}
            className={style.icon}
            style={{ transform: "scale(0.5)" }}
          />
        </Link>

        {/* LinkedIn */}
        <Link
          href="https://www.linkedin.com/company/csulbwic/"
          target="_blank"
          aria-label="Open LinkedIn in a new tab"
          className={`${style.bubble} bottom-[15%] right-[70%] md:top-[1%] md:right-[10%] lg:right-[-10%]`}
          style={{ "--size": "110px" } as React.CSSProperties}
        >
          <Image
            src={"images/LinkedIN_white.svg"}
            alt="LinkedIn"
            layout="responsive"
            width={0}
            height={0}
            className={style.icon + " scale-50"}
            //style={{ transform: "scale(0.5)" }}
          />
        </Link>

        {/* Email */}
        <Link
          href="mailto:csulbwic@gmail.com"
          target="_blank"
          aria-label="Send us an email"
          className={`${style.bubble} bottom-[15%] left-[70%] translate-x-[-50%] lg:left-[80%] lg:bottom-0`}
          style={{ "--size": "100px" } as React.CSSProperties}
        >
          <Image
            src={"images/Mail_ru_white.svg"}
            alt="Instagram"
            layout="responsive"
            width={0}
            height={0}
            className={style.icon}
            style={{ transform: "scale(0.5)" }}
          />
        </Link>
      </div>
    </div>
  );
};
