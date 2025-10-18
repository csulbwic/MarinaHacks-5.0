import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

export const NavBar = () => {
  const navLogoSize = 200;
  const navLogoSizeMobile = 150;
  const hamburgerMaxHeight = 250;
  const hamburgerMaxWidth = 200;

  const [hamburgerHeight, setHamburgerHeight] = useState(50);
  const [hamburgerWidth, setHamburgerWidth] = useState(50);
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const navButtons = [
    { label: "Home", href:"/#home"},
    { label: "About", href: "/#about" },
    { label: "Teams", href: "/#teams" },
    { label: "Pillars", href: "/#pillars" },
    { label: "Prizes", href: "/#prizes" },
    { label: "FAQ", href: "/#faq" },
    { label: "Contacts", href: "/#contacts" },
  ];

  const openHamburger = () => {
    setHamburgerHeight(hamburgerHeight === 50 ? hamburgerMaxHeight : 50);
    setHamburgerWidth(hamburgerWidth === 50 ? hamburgerMaxWidth : 50);
    setShowMenu(!showMenu);
  };

  const resetHamburger = () => {
    setHamburgerHeight(50);
    setHamburgerWidth(50);
    setShowMenu(false);
  };

  useEffect(() => {
    if (!showMenu) return;
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        resetHamburger();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showMenu]);

  return (
    <div className="w-full h-auto fixed top-0 z-10">
      {/* full size navbar */}
      <div className="hidden md:flex w-full h-full justify-between items-center">
        <Image
          src="/images/navlogo.png"
          alt="MarinaHacks 4.0 Logo"
          width={navLogoSize}
          height={navLogoSize}
        />

        {/* adjust height of navbar on this parent div. you can change it to see how it affects the size of the buttons, etc. to fine tune it if you want */}
        <div className="flex-1 px-5 h-[55px]">
          <nav className="font-bold shadow-md bg-gradient-to-r from-navtransition1 via-navtransition2 to-navtransition3 rounded-full p-2 justify-center items-center flex h-full">
            <ul className="flex items-center justify-between gap-6 w-full h-full">
              {navButtons.map((button, index) => (
                <li
                  key={index}
                  className="rounded-full flex-1 text-navtext h-full select-none shadow-md"
                >
                  <Link
                    className="bg-navbtn w-full rounded-full h-full flex justify-center items-center"
                    href={button.href}
                  >
                    {button.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      {/* hamburger navbar */}
      <div className="md:hidden flex flex-row justify-between">
        <div
          ref={menuRef}
          style={{
            height: `${hamburgerHeight}px`,
            width: `${hamburgerWidth}px`,
            borderRadius: showMenu ? "25px" : "100%",
          }}
          className="shadow-md relative ml-[10px] mt-[10px] px-5 bg-gradient-to-b from-navtransition1 via-navtransition2 to-navtransition3 transition-all duration-300 ease-in-out overflow-hidden flex flex-col"
        >
          <button
            style={{
              opacity: showMenu ? 0 : 1,
              pointerEvents: showMenu ? "none" : "auto",
            }}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center w-[50px] h-[50px] z-10 transition-all duration-[150ms] delay-[0ms] ease-in-out"
            onClick={openHamburger}
          >
            <GiHamburgerMenu size={30} color="#FBACCC" />
          </button>

          <ul className="flex flex-col justify-around flex-1">
            {navButtons.map((button, index) => (
              <li
                key={index}
                style={{ opacity: showMenu ? 1 : 0 }}
                className="rounded-full transition-all duration-[200ms] ease-in-out delay-[50ms] font-bold text-navtext select-none flex-none shadow-md"
              >
                <Link
                  onClick={resetHamburger}
                  className="rounded-full bg-navbtn w-full flex justify-center items-center"
                  href={button.href}
                >
                  {button.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex-none">
          <Image
            src="/images/navlogo.png"
            alt="MarinaHacks 4.0 Logo"
            width={navLogoSizeMobile}
            height={navLogoSizeMobile}
          />
        </div>
      </div>
    </div>
  );
};
