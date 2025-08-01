"use client"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const menuItems = ["Home", "About Us", "Events", "Domains", "Timeline"]

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-purple-400/20 py-2 px-2 transition-all duration-500 w-screen overflow-x-hidden ${
        isScrolled ? "shadow-lg" : ""
      }`}
    >
      <div className="mx-auto px-4 sm:px-6 w-full max-w-full overflow-x-hidden">
        <div className="flex items-center justify-between w-full min-w-0">
          {/* Logo */}
          <motion.div className="cursor-pointer flex items-center flex-shrink-0 ">
            <Image
              src="/bannercpc.png"
              alt="Cyber Peace Corps Logo"
              width={280}
              height={280}
              className="object-contain transition-all duration-300  h-auto"
            />
          </motion.div>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex gap-x-6 xl:gap-x-8 items-center bruno-ace-regular flex-wrap min-w-0">
            {menuItems.map((item, index) => (
              <motion.li
                key={index}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="relative min-w-0"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.3 }}
              >
                <a
                  href={`#${item.toLowerCase().replace(" ", "")}`}
                  className="text-white font-medium hover:text-purple-300 transition-all duration-300 relative group text-base"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 group-hover:w-full transition-all duration-300"></span>
                </a>
              </motion.li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-white p-2 flex-shrink-0"
            whileTap={{ scale: 0.9 }}
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <motion.span
                animate={{
                  rotate: isMobileMenuOpen ? 45 : 0,
                  y: isMobileMenuOpen ? 6 : 0,
                }}
                className="block w-full h-0.5 bg-white transition-all duration-300"
              />
              <motion.span
                animate={{
                  opacity: isMobileMenuOpen ? 0 : 1,
                }}
                className="block w-full h-0.5 bg-white mt-1 transition-all duration-300"
              />
              <motion.span
                animate={{
                  rotate: isMobileMenuOpen ? -45 : 0,
                  y: isMobileMenuOpen ? -6 : 0,
                }}
                className="block w-full h-0.5 bg-white mt-1 transition-all duration-300"
              />
            </div>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: isMobileMenuOpen ? 1 : 0,
            height: isMobileMenuOpen ? "auto" : 0,
          }}
          transition={{ duration: 0.3 }}
          className="lg:hidden overflow-hidden w-full"
        >
          <ul className="pt-4 pb-2 space-y-2 bruno-ace-regular">
            {menuItems.map((item, index) => (
              <motion.li
                key={index}
                initial={{ x: -50, opacity: 0 }}
                animate={{
                  x: isMobileMenuOpen ? 0 : -50,
                  opacity: isMobileMenuOpen ? 1 : 0,
                }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
              >
                <a
                  href={`#${item.toLowerCase().replace(" ", "")}`}
                  className="block text-white text-lg font-medium hover:text-purple-300 transition-colors duration-300 py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item}
                </a>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </motion.nav>
  )
}

export default Navbar
