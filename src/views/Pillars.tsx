import styles from "../styles/pillars.module.css"
import React from 'react';
import Image from 'next/image';

export const Pillars = () => {
  const pillars = [
    {
      title: "Hacker's Favorite",
      description: "Most memorable and favorite project!",
      icon: "🏆",
      gradient: "from-yellow-400 to-orange-500"
    },
    {
      title: "Best Social Goods",
      description: "To the project that focuses on addressing social issues such as climate change, renewable energy, waste reduction, and sustainable practices!",
      icon: "🌱",
      gradient: "from-green-400 to-emerald-500"
    },
    {
      title: "Best Entertainment",
      description: "To the project with the best entertainment product (music, gaming, art, food, culture, outdoor activities, physical activities, fashion, and beauty)!",
      icon: "🎮",
      gradient: "from-purple-400 to-pink-500"
    },
    {
      title: "Best UI/UX",
      description: "Best project with the most intuitive, user-friendly, and beautiful interface design!",
      icon: "🎨",
      gradient: "from-blue-400 to-indigo-500"
    },
    {
      title: "Best Technical",
      description: "Best project for the most advanced, challenging, and difficult implementation!",
      icon: "⚡",
      gradient: "from-red-400 to-pink-500"
    }
  ];

  return (
    <section id="pillars" className="py-20 bg-gradient-to-b from-purple-50 to-pink-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 opacity-10 animate-pulse">
          <Image src="/images/bubble.png" alt="bubble" width={80} height={80} />
        </div>
        <div className="absolute top-40 right-20 opacity-10 animate-bounce" style={{animationDuration: '5s'}}>
          <Image src="/images/flower.png" alt="flower" width={60} height={60} />
        </div>
        <div className="absolute bottom-40 left-20 opacity-10 animate-pulse" style={{animationDelay: '3s'}}>
          <Image src="/images/mermaid.png" alt="mermaid" width={70} height={70} />
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 relative z-10">
        {/* Header */}
        <header className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-gradient-to-r from-purple-200 to-pink-200 text-purple-900 text-sm font-semibold mb-4">
            🏅 Award Categories
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent mb-4">
            Competition Pillars
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Showcase your innovation across different categories and compete for amazing prizes in each pillar!
          </p>
        </header>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <div 
              key={index} 
              className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-white/50"
            >
              {/* Gradient background overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${pillar.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}></div>
              
              {/* Content */}
              <div className="relative z-10 text-center">
                <div className="text-6xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {pillar.icon}
                </div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-gray-900 transition-colors duration-300">
                  {pillar.title}
                </h2>
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  {pillar.description}
                </p>
              </div>

              {/* Decorative corner element */}
              <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-pink-200 to-purple-200 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* Bottom call-to-action */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl px-8 py-4 shadow-lg">
            <span className="text-2xl">🌟</span>
            <span className="text-lg font-semibold text-gray-700">Choose your pillar and start building!</span>
            <span className="text-2xl">🚀</span>
          </div>
        </div>
      </div>
    </section>
  );
};
