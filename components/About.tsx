"use client"
import { motion } from "framer-motion"
import Image from "next/image"

const About = () => {
  return (
    <section id="aboutus" className="py-16 sm:py-20 relative bg-black">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center order-2 lg:order-1"
          >
            <div className="relative inline-block">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                className="absolute inset-0 rounded-full border-2 border-purple-400/30 -m-4"
              />
              <div className="glass-card rounded-3xl p-6 sm:p-8 inline-block">
                <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                  <Image
                    src="/image.png"
                    alt="Cyber Security Illustration"
                    width={400}
                    height={400}
                    className="rounded-2xl floating w-full max-w-sm sm:max-w-md"
                  />
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 sm:space-y-8 order-1 lg:order-2"
          >
            <div className="glass-card rounded-2xl p-6 sm:p-8">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 bruno-ace-regular text-glow"
              >
                ABOUT US
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="text-gray-300 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8"
              >
                Cyber Peace Corps is a pioneering initiative dedicated to creating a safer digital world. We are a
                community of cybersecurity enthusiasts, researchers, and professionals working together to combat cyber
                threats and promote digital literacy. Our mission extends beyond traditional cybersecurity to encompass
                digital peace, ethical hacking, and responsible technology use.
              </motion.p>

              {/* Divider */}
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mb-6 sm:mb-8"
              />

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 bruno-ace-regular text-glow"
              >
                OUR VISION
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 }}
                className="text-gray-300 text-base sm:text-lg leading-relaxed"
              >
                To build a digitally secure and peaceful world where technology serves humanity without compromising
                privacy, security, or ethical values. We envision a future where every individual is equipped with the
                knowledge and tools necessary to navigate the digital landscape safely and responsibly.
              </motion.p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
