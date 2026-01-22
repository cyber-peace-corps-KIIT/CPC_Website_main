"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

// --- RESTORED ANIMATION COMPONENT ---
const ChangingTagline = () => {
  const taglines = [
    "Safeguarding Your Digital Identity",
    "Protecting Digital Frontiers",
    "Securing Tomorrow's Technology",
    "Defending Cyber Boundaries",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % taglines.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [taglines.length]);

  return (
    <AnimatePresence mode="wait">
      <motion.span
        key={currentIndex}
        initial={{ opacity: 0, y: 20, scale: 0.8 }}
        animate={{
          opacity: 1,
          y: 0,
          scale: 1,
          textShadow: [
            "0 0 0px rgba(56, 189, 248, 0)",
            "0 0 10px rgba(56, 189, 248, 0.5)",
            "0 0 0px rgba(56, 189, 248, 0)",
          ],
        }}
        exit={{ opacity: 0, y: -20, scale: 0.8 }}
        transition={{
          duration: 0.8,
          textShadow: {
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
        className="inline-block text-cyan-200 font-mono text-sm sm:text-base md:text-lg tracking-wider"
      >
        {taglines[currentIndex].split("").map((char, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: index * 0.03,
              duration: 0.3,
            }}
            className="inline-block"
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </motion.span>
    </AnimatePresence>
  );
};

// --- MAIN HERO COMPONENT ---
const Hero = () => {
  const RECRUITMENT_LINK = "https://docs.google.com/forms/d/e/1FAIpQLSdq8TLd_YpfS6joVh3AP27r7e7RllTv_JTQeOpMSjBKvklTbA/viewform";

  // FIX: Store particles in state so they are only generated on the client
  const [particles, setParticles] = useState<Array<{ top: string; left: string; delay: number; duration: number }>>([]);

  useEffect(() => {
    // Generate particles ONLY after component mounts (Client-side only)
    const newParticles = [...Array(20)].map(() => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      delay: Math.random() * 2,
      duration: 3 + Math.random() * 3,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <section
      id="home"
      className="min-h-[90vh] md:min-h-screen font-mono flex items-center justify-center relative overflow-hidden"
    >
      {/* =========================================
          1. FULL SCREEN VIDEO BACKGROUND
         ========================================= */}
      <div className="absolute inset-0 w-full h-full z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/hero-loop.mp4" type="video/mp4" />
        </video>
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-slate-950/80 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/50" />
      </div>

      {/* --- PARTICLES ON TOP (Hydration Fixed) --- */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {particles.map((p, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400/40 rounded-full"
            style={{ 
              left: p.left, 
              top: p.top 
            }}
            animate={{ 
              y: [-20, 20, -20], 
              opacity: [0.2, 0.8, 0.2] 
            }}
            transition={{ 
              duration: p.duration, 
              repeat: Infinity,
              delay: p.delay 
            }}
          />
        ))}
      </div>

      {/* =========================================
          2. MAIN CONTENT
         ========================================= */}
      <div className="container mx-auto px-6 pt-20 relative z-10 max-w-5xl text-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="space-y-8 flex flex-col items-center"
        >
          {/* Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white bruno-ace-regular leading-tight drop-shadow-2xl">
            CYBER PEACE
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent filter drop-shadow-[0_0_20px_rgba(56,189,248,0.5)]">
              CORPS
            </span>
          </h1>

          {/* RESTORED ANIMATION TAGLINE */}
          <div className="h-16 flex items-center justify-center">
            <ChangingTagline />
          </div>

          {/* CTA Button */}
          <div className="pt-6">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(56, 189, 248, 0.6)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open(RECRUITMENT_LINK, '_blank')}
              className="group relative px-10 py-5 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full text-xl font-bold overflow-hidden shadow-2xl border border-cyan-400/30"
            >
              <span className="relative z-10 tracking-widest">RECRUITMENT FORM</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-cyan-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Bottom Fade Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black via-black/60 to-transparent pointer-events-none z-10"></div>
    </section>
  );
};

export default Hero;