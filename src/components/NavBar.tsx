import Image from 'next/image';
import Link from 'next/link';
import React from 'react';



export const NavBar = ({ showOverlay, setShowOverlay }: any) => {
  const navLogoSize = 200;

  const navButtons = [
    { label: "About", href: "/#about" },
    { label: "Teams", href: "/#teams" },
    { label: "FAQ", href: "/#faq" },
    { label: "Contacts", href: "/#contacts" }
  ]

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
      <div className="md:hidden flex">
        <div>Hamburger</div>
      </div>

    </div>
  );
};
