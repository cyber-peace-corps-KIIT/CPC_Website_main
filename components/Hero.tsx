"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

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
  }, [taglines.length]); // Added dependency to useEffect

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
            "0 0 0px rgba(255,255,255,0)",
            "0 0 10px rgba(255,255,255,0.5)",
            "0 0 0px rgba(255,255,255,0)",
          ],
        }}
        exit={{ opacity: 0, y: -20, scale: 0.8 }} // Symmetrical exit animation
        transition={{
          duration: 0.8,
          textShadow: {
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          },
        }}
        className="inline-block"
      >
        {taglines[currentIndex].split("").map((char, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: index * 0.05,
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

const Hero = () => {
  const words = ["Security", "Innovation", "Excellence", "Protection"];

  return (
    <section
      id="home"
      className="min-h-[90vh] md:min-h-screen font-mono flex items-center justify-center relative overflow-hidden" // Responsive height
      style={{
        background:
          "linear-gradient(135deg, #1a0033 0%, #2d1b69 25%, #8f1db4 50%, #2d1b69 75%, #1a0033 100%)",
      }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Particles */}
        {[...Array(15)].map((_, i) => {
          const positions = [
            { left: 10, top: 20 }, { left: 85, top: 15 },
            { left: 30, top: 80 }, { left: 70, top: 60 },
            { left: 45, top: 30 }, { left: 15, top: 70 },
            { left: 90, top: 40 }, { left: 25, top: 90 },
            { left: 60, top: 10 }, { left: 80, top: 85 },
            { left: 5, top: 50 },  { left: 95, top: 25 },
            { left: 40, top: 75 }, { left: 75, top: 35 },
            { left: 55, top: 65 },
          ];
          const position = positions[i] || { left: 50, top: 50 };
          return (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white/20 rounded-full"
              style={{
                left: `${position.left}%`,
                top: `${position.top}%`,
              }}
              animate={{
                y: [-20, 20, -20],
                opacity: [0.2, 0.8, 0.2],
              }}
              transition={{
                duration: 3 + (i % 3),
                repeat: Number.POSITIVE_INFINITY,
                delay: i * 0.2,
              }}
            />
          );
        })}
      </div>

      {/* Decorative Stars */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Top Left Star */}
        <motion.div
          initial={{ opacity: 0, scale: 0, rotate: 0 }}
          animate={{ opacity: 1, scale: 1, rotate: 360 }}
          transition={{
            delay: 0.5,
            duration: 2,
            rotate: {
              duration: 20,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            },
          }}
          className="absolute top-20 left-8 md:top-32 md:left-32" // Responsive position
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 2L13.09 8.26L19 7L14.74 11.26L21 12L14.74 12.74L19 17L13.09 15.74L12 22L10.91 15.74L5 17L9.26 12.74L3 12L9.26 11.26L5 7L10.91 8.26L12 2Z"
              fill="rgba(255, 255, 255, 0.6)"
            />
          </svg>
        </motion.div>

        {/* Top Right Small Star */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="absolute top-16 right-8 md:top-24 md:right-40" // Responsive position
        >
          <motion.svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            animate={{ rotate: -360 }}
            transition={{
              duration: 15,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          >
            <path
              d="M12 2L13.09 8.26L19 7L14.74 11.26L21 12L14.74 12.74L19 17L13.09 15.74L12 22L10.91 15.74L5 17L9.26 12.74L3 12L9.26 11.26L5 7L10.91 8.26L12 2Z"
              fill="rgba(255, 255, 255, 0.4)"
            />
          </motion.svg>
        </motion.div>
      </div>
      
      {/* Code Brackets - Hidden on mobile */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="absolute top-32 right-1/3 text-4xl text-white/30 font-mono hidden lg:block" // Hidden on mobile/tablet
      >
        <motion.span
          animate={{ opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        >
          {"</>"}
        </motion.span>
      </motion.div>

      {/* Browser Window Outline - Hidden on mobile */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 1 }}
        className="absolute inset-0 items-center justify-center hidden md:flex" // Hidden on mobile
      >
        <motion.div
          className="relative w-96 h-64 border border-white/20 rounded-lg"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          {/* Browser Header */}
          <div className="absolute top-0 left-0 right-0 h-8 border-b border-white/20 rounded-t-lg flex items-center px-4">
            <div className="flex gap-2">
              <motion.div className="w-3 h-3 rounded-full bg-red-400/60" whileHover={{ scale: 1.2 }} />
              <motion.div className="w-3 h-3 rounded-full bg-yellow-400/60" whileHover={{ scale: 1.2 }} />
              <motion.div className="w-3 h-3 rounded-full bg-green-400/60" whileHover={{ scale: 1.2 }} />
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* HERO CONTENT */}
      <div className="container mx-auto px-6 pt-12 sm:px-8 text-center relative z-10 max-w-6xl">
        <div className="flex flex-col items-center justify-center">
          {/* Main Hero Content Wrapper */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-center max-w-4xl mx-auto space-y-6" // Use space-y for consistent spacing
          >
            {/* Main Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white bruno-ace-regular leading-tight"
            >
              CYBER PEACE
              <br />
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400 bg-clip-text text-transparent">
                CORPS
              </span>
            </motion.h1>

            {/* Dynamic Tagline - MOVED HERE */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="text-white/80 text-sm sm:text-base tracking-wider h-16 flex items-center justify-center" // Increased height to prevent clipping
            >
              <ChangingTagline />
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(143, 29, 180, 0.4)",
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  window.scrollTo({
                    top: document.body.scrollHeight,
                    behavior: "smooth",
                  });
                }}
                className="group relative px-8 py-4 sm:px-10 sm:py-5 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full text-lg sm:text-xl font-semibold bruno-ace-regular overflow-hidden shadow-2xl"
              >
                <span className="relative z-10">JOIN OUR MISSION</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-pink-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            className="w-1 h-3 bg-white/50 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/50 to-transparent pointer-events-none"></div>
    </section>
  );
};

export default Hero;
