"use client"
import { motion } from "framer-motion"
import { useState } from "react"

const Events = () => {
  const [activeTab, setActiveTab] = useState("upcoming")

  const upcomingEvents = [
    {
      title: "CyberSec Summit 2025",
      date: "March 15, 2025",
      time: "10:00 AM - 6:00 PM",
      location: "KIIT Auditorium",
      description: "Annual cybersecurity summit featuring industry experts and hands-on workshops.",
      type: "Conference",
      status: "Registration Open",
    },
    {
      title: "Ethical Hacking Workshop",
      date: "February 20, 2025",
      time: "2:00 PM - 5:00 PM",
      location: "Computer Lab 1",
      description: "Learn the fundamentals of ethical hacking and penetration testing.",
      type: "Workshop",
      status: "Coming Soon",
    },
    {
      title: "Digital Forensics Bootcamp",
      date: "April 10, 2025",
      time: "9:00 AM - 4:00 PM",
      location: "Tech Center",
      description: "Intensive bootcamp on digital forensics and incident response.",
      type: "Bootcamp",
      status: "Early Bird",
    },
  ]

  const pastEvents = [
    {
      title: "Cyber Awareness Week",
      date: "October 15-20, 2024",
      time: "All Day",
      location: "Campus Wide",
      description: "Week-long awareness campaign about cybersecurity best practices.",
      type: "Campaign",
      status: "Completed",
    },
    {
      title: "Bug Bounty Challenge",
      date: "September 5, 2024",
      time: "24 Hours",
      location: "Online",
      description: "24-hour bug bounty challenge with real-world scenarios.",
      type: "Competition",
      status: "Completed",
    },
  ]

  const events = activeTab === "upcoming" ? upcomingEvents : pastEvents

  return (
    <section id="events" className="py-16 sm:py-20 bg-black">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="bruno-ace-regular text-3xl sm:text-4xl md:text-6xl text-yellow-400 text-glow mb-4">EVENTS</h2>
          <p className="text-gray-300 text-lg sm:text-xl max-w-2xl mx-auto">
            Join us in our cybersecurity events and workshops
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex justify-center mb-8 sm:mb-12"
        >
          <div className="glass-card rounded-full p-2 flex">
            {["upcoming", "past"].map((tab) => (
              <motion.button
                key={tab}
                onClick={() => setActiveTab(tab)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full transition-all duration-300 bruno-ace-regular text-sm sm:text-base ${
                  activeTab === tab ? "gradient-bg text-white" : "text-gray-300 hover:text-white"
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto"
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
        return "bg-green-500/80"
      case "Coming Soon":
        return "bg-blue-500/80"
      case "Early Bird":
        return "bg-purple-500/80"
      case "Completed":
        return "bg-gray-500/80"
      default:
        return "bg-gray-500/80"
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ scale: 1.03, y: -5 }}
      className="group glass-card rounded-2xl p-4 sm:p-6 h-full flex flex-col relative overflow-hidden cursor-pointer"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 gradient-bg opacity-10 group-hover:opacity-20 transition-opacity duration-500" />

      {/* Header */}
      <div className="relative z-10 flex justify-between items-start mb-4 flex-wrap gap-2">
        <span className="px-3 py-1 rounded-full glass text-xs sm:text-sm font-medium text-purple-200 border border-purple-400">
          {event.type}
        </span>
        <span className={`px-3 py-1 rounded-full text-xs font-medium text-white ${getStatusColor(event.status)}`}>
          {event.status}
        </span>
      </div>

      {/* Content */}
      <div className="relative z-10 flex-1">
        <h3 className="text-lg sm:text-xl font-bold text-white mb-3 bruno-ace-regular group-hover:text-purple-300 transition-colors">
          {event.title}
        </h3>

        <div className="space-y-2 mb-4 text-xs sm:text-sm text-purple-300">
          <div className="flex items-center">
            <span className="mr-2">📅</span>
            {event.date}
          </div>
          <div className="flex items-center">
            <span className="mr-2">⏰</span>
            {event.time}
          </div>
          <div className="flex items-center">
            <span className="mr-2">📍</span>
            {event.location}
          </div>
        </div>

        <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-6">{event.description}</p>
      </div>

      {/* CTA Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="relative z-10 w-full py-2 sm:py-3 gradient-bg text-white font-semibold rounded-lg hover:glow transition-all duration-300 text-sm sm:text-base"
      >
        {event.status === "Completed" ? "View Details" : "Learn More"}
      </motion.button>

      {/* Hover Glow Effect */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 glow" />
    </motion.div>
  )
}

export default Events
