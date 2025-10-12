import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

export const NavBar = () => {
  const navLogoSize = 200;
  const navLogoSizeMobile = 150;
  const hamburgerMaxHeight = 250;
  const hamburgerMaxWidth = 200;

  const [hamburgerHeight, setHamburgerHeight] = useState(50);
  const [hamburgerWidth, setHamburgerWidth] = useState(50);
  const [showMenu, setShowMenu] = useState(false);

  const navButtons = [
    { label: "About", href: "/#about" },
    { label: "Teams", href: "/#teams" },
    { label: "FAQ", href: "/#faq" },
    { label: "Contacts", href: "/#contacts" }
  ]

  const handleHamburger = () => {
    setHamburgerHeight(hamburgerHeight === 50 ? hamburgerMaxHeight : 50);
    setHamburgerWidth(hamburgerWidth === 50 ? hamburgerMaxWidth : 50);
    setShowMenu(!showMenu);
  }

  return (
    <div className="w-full h-auto fixed top-0 z-10">

      {/* full size navbar */}
      <div className="hidden md:flex w-full h-full justify-between items-center">
        <Image
          src="/images/navlogo.png"
          alt='MarinaHacks 4.0 Logo'
          width={navLogoSize}
          height={navLogoSize}
        />

        {/* adjust height of navbar on this parent div. you can change it to see how it affects the size of the buttons, etc. to fine tune it if you want */}
        <div className="flex-1 px-5 h-[50px]">
          <nav className="font-bold shadow-md bg-gradient-to-r from-navtransition1 via-navtransition2 to-navtransition3 rounded-full p-2 justify-center items-center flex h-full">
            <ul className="flex items-center justify-between gap-6 w-full h-full">
              {navButtons.map((button, index) => (
                <li key={index} className="flex-1 text-white h-full select-none">
                  <Link className="bg-navbtn w-full rounded-full h-full flex justify-center items-center" href={button.href}>{button.label}</Link>
                </li>
              ))}
            </ul>

          </nav>
        </div>
      </div>

      {/* hamburger navbar */}
      <div className="md:hidden flex border border-red-500 flex-row justify-between">
        <div style={{ height: `${hamburgerHeight}px`, width: `${hamburgerWidth}px`, borderRadius: showMenu ? '25px' : '100%' }} className="ml-[10px] mt-[10px] px-5 border border-blue-500 bg-gradient-to-b from-navtransition1 via-navtransition2 to-navtransition3 transition-all duration-300 ease-in-out overflow-hidden flex flex-col">
          <button className='absolute left-[10px] top-[22.5px] w-[50px] border border-black z-10' onClick={handleHamburger}>Button</button>

          <ul className="flex flex-col justify-around flex-1 border border-red-400">
            {navButtons.map((button, index) => (
              <li key={index} style={{ opacity: showMenu ? 1 : 0 }} className="transition-all duration-[200ms] ease-in-out delay-[100ms] text-white select-none flex-none">
                <Link className="bg-navbtn w-full rounded-full w-full flex justify-center items-center" href={button.href}>{button.label}</Link>
              </li>
            ))}
          </ul>

        </div>

        <div className="border border-green-500 flex-none">
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
