import Link from 'next/link'
import Image from 'next/image'
import styles from "@/styles/prizes.module.css";
import {PrizeBubbleComponent} from "../components/PrizeBubbleComponent"
import { Prize } from "@/Data/prize"

export const Prizes = () => {
  return (
    <section id="prizes" className="py-20 bg-gradient-to-b from-pink-50 to-purple-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating sea creatures */}
        <div className="absolute top-20 left-10 opacity-20 animate-pulse">
          <Image src="/images/mermaid.png" alt="mermaid" width={60} height={60} />
        </div>
        <div className="absolute top-40 right-20 opacity-15 animate-bounce" style={{animationDuration: '4s'}}>
          <Image src="/images/shell.png" alt="shell" width={40} height={40} />
        </div>
        <div className="absolute bottom-40 left-20 opacity-20 animate-pulse" style={{animationDelay: '2s'}}>
          <Image src="/images/turtle_with_heart.png" alt="turtle" width={50} height={50} />
        </div>
        <div className="absolute bottom-20 right-10 opacity-15 animate-bounce" style={{animationDelay: '1s', animationDuration: '3s'}}>
          <Image src="/images/flower.png" alt="flower" width={45} height={45} />
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 relative z-10">
        {/* Header */}
        <header className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-gradient-to-r from-pink-200 to-purple-200 text-pink-900 text-sm font-semibold mb-4">
            🏆 Amazing Prizes
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 bg-clip-text text-transparent mb-4">
            Prizes & Rewards
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Dive deep and win amazing prizes! Our sponsors have provided incredible rewards for the most innovative projects.
          </p>
        </header>

        {/* Category Prizes Grid */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">Category Prizes</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center">
            {Prize.map((item, index) => (
              <div key={index} className="transform hover:scale-105 transition-transform duration-300">
                <PrizeBubbleComponent
                  name={item.name}
                  img={item.PrizeImg} 
                />
              </div>
            ))}
          </div>
        </div>

        {/* Raffle Prizes Section */}
        <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-center text-gray-800 mb-6">🎟️ Raffle Prizes</h3>
          <p className="text-center text-gray-600 mb-6">
            Enter our raffle for a chance to win additional prizes! More details coming soon.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-gradient-to-r from-pink-100 to-purple-100 rounded-2xl p-6 text-center">
              <div className="text-4xl mb-3">🎁</div>
              <h4 className="font-bold text-lg text-gray-800">Mystery Prize #1</h4>
              <p className="text-sm text-gray-600">To be announced!</p>
            </div>
            <div className="bg-gradient-to-r from-blue-100 to-cyan-100 rounded-2xl p-6 text-center">
              <div className="text-4xl mb-3">🎁</div>
              <h4 className="font-bold text-lg text-gray-800">Mystery Prize #2</h4>
              <p className="text-sm text-gray-600">To be announced!</p>
            </div>
          </div>
        </div>

        {/* Bottom decorative section */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 bg-white/60 backdrop-blur-sm rounded-2xl px-8 py-4 shadow-lg">
            <Image src="/images/prizeImg/Camera.png" alt="camera" width={40} height={40} className="animate-pulse" />
            <span className="text-lg font-semibold text-gray-700">More prizes to be announced!</span>
            <Image src="/images/prizeImg/Headphone.png" alt="headphone" width={40} height={40} className="animate-pulse" style={{animationDelay: '1s'}} />
          </div>
        </div>
      </div>
    </section>
  )
}