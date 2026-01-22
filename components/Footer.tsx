"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Instagram, Linkedin, Github, Mail, MapPin } from "lucide-react"

const Footer = () => {
  // UPDATED SOCIAL LINKS
  const socialLinks = [
    { name: "Instagram", icon: Instagram, link: "https://www.instagram.com/cpc_kiit/" },
    { name: "LinkedIn", icon: Linkedin, link: "https://www.linkedin.com/company/cpc-kiit/posts/?feedView=all" },
    { name: "GitHub", icon: Github, link: "https://github.com/CPC-KIIT-WEB" }, // ✅ Updated GitHub Link
    // Twitter link removed as requested
  ]

  const quickLinks = [
    { name: "Home", link: "#home" },
    { name: "About Us", link: "#aboutus" },
    { name: "Events", link: "#events" },
    { name: "Our Leads", link: "#ourleads" },
  ]

  return (
    <footer className="relative mt-20 bg-black">
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50"></div>
      
      {/* Main Footer */}
      <div className="glass-dark border-t border-cyan-500/20">
        <div className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

            {/* Logo */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="lg:col-span-1">
              <div className="flex items-center mb-6">
                <Image src="/logo.png" alt="Cyber Peace Corps Logo" width={60} height={60} className="object-contain mr-4" />
                <div>
                  <h3 className="text-2xl font-bold text-white bruno-ace-regular">CyberPeace Corps</h3>
                  <p className="text-cyan-400">KIIT Chapter</p>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed mb-6">
                Safeguarding digital identities and promoting cybersecurity awareness through education, research, and community engagement.
              </p>
            </motion.div>

            {/* Quick Links */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
              <h4 className="text-xl font-bold text-white mb-6 bruno-ace-regular">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <motion.a 
                      href={link.link} 
                      whileHover={{ x: 5 }} 
                      className="text-gray-400 hover:text-cyan-300 transition-colors duration-300 flex items-center relative group"
                    >
                      <span className="w-0 group-hover:w-2 transition-all duration-300 h-[2px] bg-cyan-400 mr-0 group-hover:mr-2"></span>
                      {link.name}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact & Social */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
              <h4 className="text-xl font-bold text-white mb-6 bruno-ace-regular">Connect With Us</h4>
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-gray-400 text-sm hover:text-white transition-colors">
                  <Mail className="w-4 h-4 mr-3 text-cyan-500" />
                  <span>cyberpeace@kiit.ac.in</span>
                </div>
                <div className="flex items-center text-gray-400 text-sm hover:text-white transition-colors">
                  <MapPin className="w-4 h-4 mr-3 text-cyan-500" />
                  <span>KIIT University, Bhubaneswar</span>
                </div>
              </div>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a 
                    key={index} 
                    href={social.link} 
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }} 
                    whileTap={{ scale: 0.9 }} 
                    className="w-10 h-10 glass-card rounded-full flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:border-cyan-400/50 hover:bg-cyan-500/10 transition-all duration-300 border border-white/5" 
                    title={social.name}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Join Us (Email Form REMOVED) */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }}>
              <h4 className="text-xl font-bold text-white mb-4 bruno-ace-regular">Want to Join Us?</h4>
              <p className="text-gray-400 text-sm mb-4">Collaborate, work with us, or join our cybersecurity community!</p>
              {/* The email subscription form component has been removed from here */}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="glass-dark border-t border-cyan-500/10 bg-black/80">
        <div className="container mx-auto px-6 py-6">
          <div className="text-center">
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-sm text-gray-500">
              ©2026 Cyber Peace Corps : KIIT Chapter. All Rights Reserved.
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer