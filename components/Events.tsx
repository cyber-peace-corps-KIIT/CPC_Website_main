"use client"
import { motion } from "framer-motion"
import { useState } from "react"
import { Calendar, MapPin, ArrowRight } from "lucide-react"

const Events = () => {
  const [activeTab, setActiveTab] = useState("upcoming")

  const upcomingEvents = [
    {
      title: "CPC Recruitment",
      date: "Early 2026",
      location: "Campus 25, KIIT",
      description: "Join the elite force of Cyber Peace Corps. We are scouting for passionate individuals ready to defend the digital frontier.",
      type: "Recruitment",
      status: "Registration Open",
      link: "https://docs.google.com/forms/d/e/1FAIpQLSdq8TLd_YpfS6joVh3AP27r7e7RllTv_JTQeOpMSjBKvklTbA/viewform"
    },
    {
      title: "Offline Workshop",
      date: "Mid 2026",
      location: "Campus 25, KIIT",
      description: "An intensive hands-on session covering the latest in penetration testing and network defense strategies.",
      type: "Workshop",
      status: "Coming Soon",
      // No link
    },
    {
      title: "Online Cybersecurity Webinar",
      date: "Mid 2026",
      location: "Online",
      description: "An expert-led session diving deep into modern cybersecurity trends, threats, and career pathways.",
      type: "Webinar",
      status: "Coming Soon",
      // No link
    },
  ]

  const pastEvents = [
    {
      title: "CyberPeace Hackathon",
      date: "2026",
      location: "Campus 25, KIIT",
      description: "A 24-hour hackathon challenging participants to solve complex security puzzles.",
      type: "Hackathon",
      status: "Completed",
    },
    {
      title: "MoU Signing & CCOE Establishment",
      date: "2026",
      location: "KIIT University",
      description: "Official establishment of the Common Criteria of Excellence (CCOE) at KIIT.",
      type: "Ceremony",
      status: "Completed",
    },
    {
      title: "Dark Route",
      date: "Early 2026",
      location: "All Campus",
      description: "A campus-wide treasure hunt decoding cryptographic clues.",
      type: "CTF Event",
      status: "Completed",
    },
    {
      title: "Cyberhunt",
      date: "Late 2025",
      location: "Campus 25, KIIT",
      description: "Competitive cybersecurity scavenger hunt testing logical deduction.",
      type: "Competition",
      status: "Completed",
    },
    {
      title: "Innovare 1.0",
      date: "Mid 2025",
      location: "Online",
      description: "A virtual innovation challenge fostering creative cyber solutions.",
      type: "Online Event",
      status: "Completed",
    },
    {
      title: "CyberFlare",
      date: "Mid 2025",
      location: "Online",
      description: "Interactive online sessions on digital safety and awareness.",
      type: "Web Event",
      status: "Completed",
    },
    {
      title: "Cyber Awareness Webinars",
      date: "Mid 2025",
      location: "Virtually",
      description: "Series of expert talks on the evolving threat landscape.",
      type: "Webinar",
      status: "Completed",
    },
  ]

  const events = activeTab === "upcoming" ? upcomingEvents : pastEvents

  return (
    <section id="events" className="py-20 bg-black relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-cyan-900/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="bruno-ace-regular text-4xl md:text-6xl text-white mb-4">
            OUR <span className="text-cyan-400 text-glow">EVENTS</span>
          </h2>
          <p className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto">
            Stay updated with our latest workshops, hackathons, and recruitment drives.
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex justify-center mb-12"
        >
          <div className="glass-card rounded-full p-1.5 flex border border-white/10">
            {["upcoming", "past"].map((tab) => (
              <motion.button
                key={tab}
                onClick={() => setActiveTab(tab)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-8 py-3 rounded-full transition-all duration-300 bruno-ace-regular text-sm tracking-wide ${
                  activeTab === tab 
                  ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25" 
                  : "text-gray-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)} Events
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Events Grid */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
        >
          {events.map((event, index) => (
            <EventCard key={index} event={event} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

const EventCard = ({ event, index }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case "Registration Open":
        return "bg-green-500/20 text-green-300 border-green-500/50"
      case "Coming Soon":
        return "bg-cyan-500/20 text-cyan-300 border-cyan-500/50"
      case "Completed":
        return "bg-slate-700/30 text-slate-400 border-slate-600/50"
      default:
        return "bg-blue-500/20 text-blue-300 border-blue-500/50"
    }
  }

  const isCompleted = event.status === "Completed"
  const isComingSoon = event.status === "Coming Soon"

  // Determine button styles based on status
  let buttonStyles = "bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-lg hover:shadow-cyan-500/20"
  let buttonText = "Register Now"

  if (isCompleted) {
    buttonStyles = "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white"
    buttonText = "View Recap"
  } else if (isComingSoon) {
    buttonStyles = "bg-cyan-900/20 text-cyan-400 border border-cyan-500/30 cursor-not-allowed"
    buttonText = "Coming Soon"
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className={`group relative overflow-hidden rounded-3xl p-6 h-full flex flex-col border transition-all duration-300 ${
        isCompleted 
        ? "glass-card border-white/5 grayscale-[0.5] hover:grayscale-0" 
        : "glass-card border-cyan-500/30 shadow-[0_0_20px_rgba(6,182,212,0.15)] hover:border-cyan-400"
      }`}
    >
      {/* Background Gradient on Hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Header: Type & Status */}
      <div className="relative z-10 flex justify-between items-start mb-6">
        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/5 border border-white/10 text-gray-300 backdrop-blur-md">
          {event.type}
        </span>
        <span className={`px-3 py-1 rounded-full text-xs font-bold border backdrop-blur-md ${getStatusColor(event.status)}`}>
          {event.status}
        </span>
      </div>

      {/* Content */}
      <div className="relative z-10 flex-1">
        <h3 className={`text-xl font-bold mb-3 bruno-ace-regular leading-tight ${isCompleted ? "text-gray-200" : "text-white group-hover:text-cyan-300"} transition-colors`}>
          {event.title}
        </h3>

        <div className="space-y-3 mb-6">
          <div className="flex items-center text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
            <Calendar className="w-4 h-4 mr-2 text-cyan-500" />
            {event.date}
          </div>
          <div className="flex items-center text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
            <MapPin className="w-4 h-4 mr-2 text-blue-500" />
            {event.location}
          </div>
        </div>

        <p className="text-gray-400 text-sm leading-relaxed mb-6 border-t border-white/10 pt-4">
          {event.description}
        </p>
      </div>

      {/* CTA Button */}
      <motion.button
        whileHover={{ scale: isComingSoon ? 1 : 1.02 }}
        whileTap={{ scale: isComingSoon ? 1 : 0.98 }}
        onClick={() => !isComingSoon && event.link && window.open(event.link, '_blank')}
        disabled={isComingSoon}
        className={`relative z-10 w-full py-3 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 transition-all duration-300 ${buttonStyles}`}
      >
        {buttonText}
        {!isCompleted && !isComingSoon && <ArrowRight className="w-4 h-4" />}
      </motion.button>

    </motion.div>
  )
}

export default Events