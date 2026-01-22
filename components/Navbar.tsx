"use client"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Link to your Google Form
  const REGISTER_LINK = "https://docs.google.com/forms/d/e/1FAIpQLSdq8TLd_YpfS6joVh3AP27r7e7RllTv_JTQeOpMSjBKvklTbA/viewform"

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const menuItems = ["Home", "About Us", "Events", "Domains", "Timeline"]

  return (
    <>
      <motion.nav
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-6 left-1/2 z-50 transform -translate-x-1/2 
        w-[95%] max-w-6xl rounded-full border border-white/10 
        bg-black/60 backdrop-blur-xl shadow-[0_8px_32px_0_rgba(0,0,0,0.36)] 
        transition-all duration-500 ${
          isScrolled ? "py-2 bg-black/80" : "py-3 bg-black/40"
        }`}
      >
        <div className="px-6 md:px-8">
          <div className="flex items-center justify-between h-full">
            
            {/* Logo Section */}
            <motion.div 
              className="cursor-pointer flex items-center flex-shrink-0"
              whileHover={{ scale: 1.05 }}
            >
              <Image
                src="/bannercpc.png"
                alt="Cyber Peace Corps Logo"
                width={180} 
                height={50}
                className="object-contain h-10 w-auto"
              />
            </motion.div>

            {/* Desktop Menu - Centered */}
            <ul className="hidden lg:flex gap-x-8 items-center justify-center absolute left-1/2 -translate-x-1/2">
              {menuItems.map((item, index) => (
                <motion.li
                  key={index}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative group"
                >
                  <a
                    href={`#${item.toLowerCase().replace(" ", "")}`}
                    className="text-gray-300 text-sm font-medium hover:text-white transition-colors duration-300 tracking-wide"
                  >
                    {item}
                    <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 group-hover:w-full group-hover:left-0 transition-all duration-300 ease-out"></span>
                  </a>
                </motion.li>
              ))}
            </ul>

            {/* Right Side: Join Button + Mobile Toggle */}
            <div className="flex items-center gap-4">
              
              {/* Join Button (Visible on Desktop) */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="hidden lg:block bg-white text-black px-6 py-2 rounded-full text-sm font-bold hover:bg-gray-200 transition-colors shadow-[0_0_15px_rgba(255,255,255,0.3)]"
                onClick={() => window.open(REGISTER_LINK, '_blank')}
              >
                Join Now
              </motion.button>

              {/* Mobile Menu Button */}
              <motion.button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden text-white p-2 rounded-full hover:bg-white/10 transition-colors"
                whileTap={{ scale: 0.9 }}
              >
                <div className="w-6 h-5 flex flex-col justify-between items-center">
                  <motion.span
                    animate={{ rotate: isMobileMenuOpen ? 45 : 0, y: isMobileMenuOpen ? 9 : 0 }}
                    className="block w-full h-0.5 bg-white transition-all duration-300 rounded-full"
                  />
                  <motion.span
                    animate={{ opacity: isMobileMenuOpen ? 0 : 1 }}
                    className="block w-full h-0.5 bg-white transition-all duration-300 rounded-full"
                  />
                  <motion.span
                    animate={{ rotate: isMobileMenuOpen ? -45 : 0, y: isMobileMenuOpen ? -9 : 0 }}
                    className="block w-full h-0.5 bg-white transition-all duration-300 rounded-full"
                  />
                </div>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-24 left-1/2 -translate-x-1/2 w-[90%] max-w-sm z-40 bg-black/90 backdrop-blur-xl border border-white/10 rounded-2xl p-6 lg:hidden shadow-2xl"
          >
            <ul className="flex flex-col space-y-4 text-center">
              {menuItems.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <a
                    href={`#${item.toLowerCase().replace(" ", "")}`}
                    className="block text-white text-lg font-medium hover:text-purple-400 py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item}
                  </a>
                </motion.li>
              ))}
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="w-full bg-white text-black py-3 rounded-xl font-bold mt-4"
                onClick={() => window.open(REGISTER_LINK, '_blank')}
              >
                Join Now
              </motion.button>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar