"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useState } from "react"
import { Button } from "@/components/ui/stateful-button"
import { Instagram, Linkedin, Github, Twitter, Mail, MapPin, CheckCircle, XCircle } from "lucide-react"

const Footer = () => {
  const [email, setEmail] = useState("")
  const [isPending, setIsPending] = useState(false)
  const [response, setResponse] = useState<{ success: boolean; message: string } | null>(null)

  const socialLinks = [
    { name: "Instagram", icon: Instagram, link: "#" },
    { name: "LinkedIn", icon: Linkedin, link: "#" },
    { name: "GitHub", icon: Github, link: "#" },
    { name: "Twitter", icon: Twitter, link: "#" },
  ]

  const quickLinks = [
    { name: "Home", link: "#home" },
    { name: "About Us", link: "#aboutus" },
    { name: "Events", link: "#events" },
    { name: "Our Leads", link: "#ourleads" },
  ]

 const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault()
  if (!email.trim()) return
  setIsPending(true)
  setResponse(null)

  try {
    const res = await fetch("/api/register", {   // ✅ FIXED URL
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    })

    const data = await res.json()
    setResponse({
      success: res.ok,
      message: data.message || (res.ok ? "Successfully registered!" : "Something went wrong."),
    })

    if (res.ok) setEmail("")
  } catch (error) {
    setResponse({ success: false, message: "Network error. Try again later." })
  } finally {
    setIsPending(false)
  }
}


  return (
    <footer className="relative mt-20 bg-black">
      {/* Main Footer */}
      <div className="glass-dark border-t border-purple-400/30">
        <div className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

            {/* Logo */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="lg:col-span-1">
              <div className="flex items-center mb-6">
                <Image src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-AWYX9VTxmCuhGajfNyczpRWRFNb32O.png" alt="Cyber Peace Corps Logo" width={60} height={60} className="object-contain mr-4" />
                <div>
                  <h3 className="text-2xl font-bold text-white bruno-ace-regular">CyberPeace Corps</h3>
                  <p className="text-purple-300">KIIT Chapter</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed mb-6">
                Safeguarding digital identities and promoting cybersecurity awareness through education, research, and community engagement.
              </p>
            </motion.div>

            {/* Quick Links */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
              <h4 className="text-xl font-bold text-white mb-6 bruno-ace-regular">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <motion.a href={link.link} whileHover={{ x: 5 }} className="text-gray-300 hover:text-purple-300 transition-colors duration-300 flex items-center after:block after:content-[''] after:absolute after:left-0 after:w-full after:h-[2px] after:bg-transparent after:scale-x-0 after:transition-transform after:duration-300 after:origin-left hover:after:scale-x-100 relative">
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
                <div className="flex items-center text-white/70 text-sm">
                  <Mail className="w-4 h-4 mr-3 text-purple-400" />
                  <span>cyberpeace@kiit.ac.in</span>
                </div>
                <div className="flex items-center text-white/70 text-sm">
                  <MapPin className="w-4 h-4 mr-3 text-purple-400" />
                  <span>KIIT University, Bhubaneswar</span>
                </div>
              </div>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a key={index} href={social.link} whileHover={{ scale: 1.1, y: -2 }} whileTap={{ scale: 0.9 }} className="w-10 h-10 glass-card rounded-full flex items-center justify-center text-white/70 hover:text-purple-400 hover:border-purple-400/30 transition-colors duration-300" title={social.name}>
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Join Us */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }}>
              <h4 className="text-xl font-bold text-white mb-4 bruno-ace-regular">Want to Join Us?</h4>
              <p className="text-gray-300 text-sm mb-4">Collaborate, work with us, or join our cybersecurity community!</p>

              <div className="glass-card rounded-lg p-4">
                <form onSubmit={handleSubmit} className="space-y-3">
                  <input type="email" name="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-purple-400/50 text-sm" required />
                  <Button type="submit" className="w-full text-sm" disabled={isPending || !email.trim()}>
                    {isPending ? "Sending..." : "Send Message"}
                  </Button>
                </form>

                {response && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className={`mt-4 flex items-center gap-2 text-sm ${response.success ? "text-green-400" : "text-red-400"}`}>
                    {response.success ? <CheckCircle className="w-4 h-4" /> : <XCircle className="w-4 h-4" />}
                    {response.message}
                  </motion.div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="glass-dark border-t border-purple-400/20">
        <div className="container mx-auto px-6 py-6">
          <div className="text-center">
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="animate-pulse text-sm text-gray-400">
              ©2025 Cyber Peace Corps : KIIT Chapter. All Rights Reserved.
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
