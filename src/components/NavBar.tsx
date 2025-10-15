import Image from 'next/image';
import Link from 'next/link';
import styles from '@/styles/nav.module.css';
import { useState, useEffect } from 'react';
import React from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../firebase';
import UserPanel from './UserPanel';

/* Component for nav responsive */
import { IoMenu } from "react-icons/io5";
import { BiMenuAltRight } from "react-icons/bi";

export const NavBar = ({ showOverlay, setShowOverlay }: any) => {

  const [toggleMenu, setToggleMenu] = React.useState(false);
  const [user, setUser] = React.useState<any>(null); // State for storing user info

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-lg border-b border-white/20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <Link href="/" className="flex items-center space-x-2 group">
              <Image
                src="/images/logos_4.0/short_logo_4.0.png"
                alt='MarinaHacks 5.0 Logo'
                width={40}
                height={40}
                className="group-hover:scale-110 transition-transform duration-300"
              />
              <span className="text-xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                MarinaHacks 5.0
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <Link 
              href="/portallogin" 
              className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-pink-600 hover:bg-pink-50 rounded-lg transition-all duration-200"
            >
              Portal
            </Link>
            <Link 
              href="/#info" 
              className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-pink-600 hover:bg-pink-50 rounded-lg transition-all duration-200"
            >
              Info
            </Link>
            <Link 
              href="/#application" 
              className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-pink-600 hover:bg-pink-50 rounded-lg transition-all duration-200"
            >
              Application
            </Link>
            <Link 
              href="/#team" 
              className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-pink-600 hover:bg-pink-50 rounded-lg transition-all duration-200"
            >
              Team
            </Link>
            <Link 
              href="/#pillars" 
              className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-pink-600 hover:bg-pink-50 rounded-lg transition-all duration-200"
            >
              Pillars
            </Link>
            <Link 
              href="/#prizes" 
              className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-pink-600 hover:bg-pink-50 rounded-lg transition-all duration-200"
            >
              Prizes
            </Link>
            <Link 
              href="/#ideagen" 
              className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-pink-600 hover:bg-pink-50 rounded-lg transition-all duration-200"
            >
              Ideas
            </Link>
            <Link 
              href="/#faq" 
              className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-pink-600 hover:bg-pink-50 rounded-lg transition-all duration-200"
            >
              FAQ
            </Link>
            <Link 
              href="/#contact" 
              className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-pink-600 hover:bg-pink-50 rounded-lg transition-all duration-200"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setToggleMenu(!toggleMenu)}
              className="p-2 rounded-lg text-gray-700 hover:text-pink-600 hover:bg-pink-50 transition-all duration-200"
            >
              <IoMenu className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {toggleMenu && (
          <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-white/20 shadow-lg">
            <div className="px-4 py-2 space-y-1">
              <Link 
                href="/portallogin" 
                className="block px-4 py-3 text-sm font-medium text-gray-700 hover:text-pink-600 hover:bg-pink-50 rounded-lg transition-all duration-200"
                onClick={() => setToggleMenu(false)}
              >
                Portal
              </Link>
              <Link 
                href="/#info" 
                className="block px-4 py-3 text-sm font-medium text-gray-700 hover:text-pink-600 hover:bg-pink-50 rounded-lg transition-all duration-200"
                onClick={() => setToggleMenu(false)}
              >
                Info
              </Link>
              <Link 
                href="/#application" 
                className="block px-4 py-3 text-sm font-medium text-gray-700 hover:text-pink-600 hover:bg-pink-50 rounded-lg transition-all duration-200"
                onClick={() => setToggleMenu(false)}
              >
                Application
              </Link>
              <Link 
                href="/#team" 
                className="block px-4 py-3 text-sm font-medium text-gray-700 hover:text-pink-600 hover:bg-pink-50 rounded-lg transition-all duration-200"
                onClick={() => setToggleMenu(false)}
              >
                Team
              </Link>
              <Link 
                href="/#pillars" 
                className="block px-4 py-3 text-sm font-medium text-gray-700 hover:text-pink-600 hover:bg-pink-50 rounded-lg transition-all duration-200"
                onClick={() => setToggleMenu(false)}
              >
                Pillars
              </Link>
              <Link 
                href="/#prizes" 
                className="block px-4 py-3 text-sm font-medium text-gray-700 hover:text-pink-600 hover:bg-pink-50 rounded-lg transition-all duration-200"
                onClick={() => setToggleMenu(false)}
              >
                Prizes
              </Link>
              <Link 
                href="/#ideagen" 
                className="block px-4 py-3 text-sm font-medium text-gray-700 hover:text-pink-600 hover:bg-pink-50 rounded-lg transition-all duration-200"
                onClick={() => setToggleMenu(false)}
              >
                Ideas
              </Link>
              <Link 
                href="/#faq" 
                className="block px-4 py-3 text-sm font-medium text-gray-700 hover:text-pink-600 hover:bg-pink-50 rounded-lg transition-all duration-200"
                onClick={() => setToggleMenu(false)}
              >
                FAQ
              </Link>
              <Link 
                href="/#contact" 
                className="block px-4 py-3 text-sm font-medium text-gray-700 hover:text-pink-600 hover:bg-pink-50 rounded-lg transition-all duration-200"
                onClick={() => setToggleMenu(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* Side User Panel */}
      {user && (
        <div className="fixed top-4 right-4 z-50">
          <UserPanel user={user} />
        </div>
      )}
    </nav>
  );
};
