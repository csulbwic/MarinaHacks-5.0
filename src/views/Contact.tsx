import style from '../styles/contact.module.css';
import Image from 'next/image';
import { FaFacebook, FaInstagram, FaLinkedin, FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";

export const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-purple-50 to-pink-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 opacity-15 animate-pulse">
          <Image src="/images/mermaid.png" alt="mermaid" width={80} height={80} />
        </div>
        <div className="absolute top-40 right-20 opacity-10 animate-bounce" style={{animationDuration: '5s'}}>
          <Image src="/images/turtle_with_heart.png" alt="turtle" width={60} height={60} />
        </div>
        <div className="absolute bottom-40 left-20 opacity-15 animate-pulse" style={{animationDelay: '3s'}}>
          <Image src="/images/shell.png" alt="shell" width={70} height={70} />
        </div>
        <div className="absolute bottom-20 right-10 opacity-10 animate-bounce" style={{animationDelay: '2s', animationDuration: '4s'}}>
          <Image src="/images/flower.png" alt="flower" width={55} height={55} />
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 relative z-10">
        {/* Header */}
        <header className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-gradient-to-r from-pink-200 to-purple-200 text-pink-900 text-sm font-semibold mb-4">
            📞 Get in Touch
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 bg-clip-text text-transparent mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Have questions about MarinaHacks 5.0? We'd love to hear from you!
          </p>
        </header>

        {/* Main Contact Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Logo and Info */}
          <div className="flex flex-col items-center space-y-8">
            <div className="relative group">
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/50">
                <Image
                  src="/images/logos_4.0/MarinaHacks_4.0_Logo.png"
                  alt="MarinaHacks 5.0 Logo"
                  width={400}
                  height={100}
                  className="max-w-full h-auto"
                />
              </div>
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-pink-400/20 via-purple-400/20 to-blue-400/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>

            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold text-gray-800">Women in Computing at CSULB</h2>
              <p className="text-lg text-gray-600 max-w-md">
                Empowering women in technology through community, mentorship, and amazing hackathons!
              </p>
            </div>
          </div>

          {/* Right Side - Contact Information */}
          <div className="space-y-8">
            {/* Contact Methods */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-gradient-to-r from-pink-100 to-purple-100 rounded-full">
                    <FaMapMarkerAlt className="h-6 w-6 text-pink-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">Location</h3>
                </div>
                <p className="text-gray-600">California State University, Long Beach</p>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full">
                    <FaEnvelope className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">Email</h3>
                </div>
                <a href="mailto:csulbwic@gmail.com" className="text-gray-600 hover:text-blue-600 transition-colors">
                  csulbwic@gmail.com
                </a>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/50">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Follow Us</h3>
              <div className="flex justify-center gap-6">
                <a 
                  href="https://www.instagram.com/csulbwic/?hl=en" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group p-4 bg-gradient-to-r from-pink-100 to-purple-100 rounded-full hover:from-pink-200 hover:to-purple-200 transition-all duration-300 transform hover:scale-110"
                >
                  <FaInstagram className="h-8 w-8 text-pink-600 group-hover:text-pink-700 transition-colors" />
                </a>
                <a 
                  href="mailto:csulbwic@gmail.com" 
                  className="group p-4 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full hover:from-blue-200 hover:to-purple-200 transition-all duration-300 transform hover:scale-110"
                >
                  <FaEnvelope className="h-8 w-8 text-blue-600 group-hover:text-blue-700 transition-colors" />
                </a>
                <a 
                  href="https://www.linkedin.com/company/csulbwic/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group p-4 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full hover:from-blue-200 hover:to-indigo-200 transition-all duration-300 transform hover:scale-110"
                >
                  <FaLinkedin className="h-8 w-8 text-blue-600 group-hover:text-blue-700 transition-colors" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-20 pt-8 border-t border-white/50">
          <div className="text-center space-y-4">
            <div className="flex justify-center items-center gap-4 mb-4">
              <Image 
                src="/images/WiC-logo-black.png" 
                alt="WiC Logo" 
                width={40} 
                height={40} 
                className="opacity-70"
              />
              <span className="text-gray-600 font-semibold">Women in Computing</span>
            </div>
            <p className="text-gray-500 text-sm">
              © 2024 Women in Computing at CSULB. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm">
              MarinaHacks 5.0 - Dive into Innovation
            </p>
          </div>
        </footer>
      </div>
    </section>
  );
};
