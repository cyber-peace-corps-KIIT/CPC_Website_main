"use client"
import { motion } from "framer-motion"
import { Shield, Monitor, Calendar, FlaskConical, Smartphone, Bot, Link, Wifi } from "lucide-react"

const DomainSlider = () => {
  const domains = [
    { title: "Cyber Security", tag: "Core Protection", icon: Shield },
    { title: "Web Development", tag: "Digital Solutions", icon: Monitor },
    { title: "Event Management", tag: "Community Building", icon: Calendar },
    { title: "Research & Development", tag: "Innovation Hub", icon: FlaskConical },
    { title: "Digital Marketing", tag: "Awareness Campaigns", icon: Smartphone },
  ]

  return (
    <section id="domains" className="py-20 overflow-hidden bg-black">
      <div className="container mx-auto px-6 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="bruno-ace-regular text-4xl md:text-6xl text-yellow-400 text-glow mb-4">OUR DOMAINS</h2>
          <p className="text-gray-300 text-xl max-w-2xl mx-auto">
            Explore our diverse areas of expertise in cybersecurity and technology
          </p>
        </motion.div>
      </div>

      {/* Infinite Sliding Container - Left to Right (opposite of leads) */}
      <div className="relative">
        <div className="flex animate-scroll-left">
          {/* First set */}
          {domains.map((domain, index) => (
            <DomainCard key={`first-${index}`} {...domain} />
          ))}
          {/* Second set for seamless loop */}
          {domains.map((domain, index) => (
            <DomainCard key={`second-${index}`} {...domain} />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(-${domains.length * 280}px);
          }
          100% {
            transform: translateX(0);
          }
        }
        
        .animate-scroll-left {
          animation: scroll-left 50s linear infinite;
          width: ${domains.length * 280 * 2}px;
        }
      `}</style>
    </section>
  )
}

const DomainCard = ({ title, tag, icon: Icon }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.03, rotateY: 5, z: 50 }}
      className="group relative overflow-hidden rounded-3xl glass-card p-6 h-64 flex-shrink-0 w-64 mr-8 flex flex-col items-center justify-center text-center"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-pink-600 opacity-20" />
        <div className="absolute inset-0 cyber-grid" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center">
        {/* Icon */}
        <motion.div whileHover={{ scale: 1.2, rotate: 10 }} className="mb-6">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 p-4 shadow-lg mx-auto">
            <Icon className="w-full h-full text-white" />
          </div>
        </motion.div>

        {/* Title */}
        <motion.h3 whileHover={{ scale: 1.05 }} className="text-xl font-bold text-white mb-3 bruno-ace-regular">
          {title}
        </motion.h3>

        {/* Tag */}
        <span className="inline-block px-3 py-1 rounded-full glass text-sm font-medium text-purple-200 border border-purple-400">
          {tag}
        </span>
      </div>

      {/* Hover Glow Effect */}
      <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 glow" />

      {/* Border Animation */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        whileHover={{ scale: 1, opacity: 1 }}
        className="absolute inset-0 rounded-3xl border-2 border-gradient-to-r from-purple-400 to-pink-400"
      />
    </motion.div>
  )
}

export default DomainSlider
