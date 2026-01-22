"use client"
import { motion } from "framer-motion"
import { 
  Shield, Monitor, Calendar, FlaskConical, Bot, 
  Cloud, Search, Users, Palette, Share2, TrendingUp 
} from "lucide-react"

const DomainSlider = () => {
  // --- TECH DOMAINS (Row 1) ---
  const techDomains = [
    { title: "Web Development", tag: "Full Stack", icon: Monitor },
    { title: "AI / ML", tag: "Intelligence", icon: Bot },
    { title: "Cybersecurity", tag: "Defense", icon: Shield },
    { title: "Digital Forensics", tag: "Investigation", icon: Search },
    { title: "Cloud Computing", tag: "Infrastructure", icon: Cloud },
    { title: "R & D", tag: "Innovation", icon: FlaskConical },
  ]

  // --- NON-TECH DOMAINS (Row 2) ---
  const nonTechDomains = [
    { title: "Human Resources", tag: "Management", icon: Users },
    { title: "Graphic Design", tag: "Creativity", icon: Palette },
    { title: "Social Media", tag: "Outreach", icon: Share2 },
    { title: "Marketing", tag: "Growth", icon: TrendingUp },
    { title: "Event Management", tag: "Organization", icon: Calendar },
  ]

  return (
    <section id="domains" className="py-20 overflow-hidden bg-black relative">
      
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 mb-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="bruno-ace-regular text-4xl md:text-6xl text-white mb-4">
            OUR <span className="text-cyan-400 text-glow">DOMAINS</span>
          </h2>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">
            Explore our diverse areas of expertise across Technology and Management
          </p>
        </motion.div>
      </div>

      {/* --- ROW 1: TECH DOMAINS (Scrolls Left) --- */}
      <div className="relative mb-8">
        <div className="flex animate-scroll-left gap-8 pl-8">
          {[...techDomains, ...techDomains].map((domain, index) => (
            <DomainCard key={`tech-${index}`} {...domain} type="tech" />
          ))}
        </div>
      </div>

      {/* --- ROW 2: NON-TECH DOMAINS (Scrolls Right) --- */}
      <div className="relative">
        <div className="flex animate-scroll-right gap-8 pl-8">
          {[...nonTechDomains, ...nonTechDomains, ...nonTechDomains].map((domain, index) => (
            <DomainCard key={`nontech-${index}`} {...domain} type="non-tech" />
          ))}
        </div>
      </div>

      {/* --- ANIMATION STYLES --- */}
      <style jsx>{`
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scroll-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        
        .animate-scroll-left {
          animation: scroll-left 40s linear infinite;
          width: max-content;
        }
        .animate-scroll-right {
          animation: scroll-right 45s linear infinite;
          width: max-content;
        }

        /* Pause on Hover for better UX */
        .animate-scroll-left:hover, 
        .animate-scroll-right:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}

const DomainCard = ({ title, tag, icon: Icon, type }) => {
  // Determine colors based on type
  const isTech = type === "tech"
  const gradientIcon = isTech ? "from-cyan-500 to-blue-600" : "from-purple-500 to-pink-600"
  const borderHover = isTech ? "border-cyan-400" : "border-pink-400"
  const textGlow = isTech ? "text-cyan-200" : "text-pink-200"
  const tagBorder = isTech ? "border-cyan-500/30 text-cyan-300" : "border-pink-500/30 text-pink-300"

  return (
    <motion.div
      whileHover={{ y: -10 }}
      className={`group relative overflow-hidden rounded-3xl glass-card p-6 h-64 w-64 flex flex-col items-center justify-center text-center border border-white/5 transition-all duration-300 hover:${borderHover}`}
    >
      {/* Subtle Background Gradient */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500">
        <div className={`absolute inset-0 bg-gradient-to-br ${isTech ? "from-cyan-500/10 to-blue-600/10" : "from-purple-500/10 to-pink-600/10"}`} />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center">
        {/* Icon */}
        <div className="mb-5 relative">
          <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${gradientIcon} p-4 shadow-lg mx-auto transform group-hover:scale-110 transition-transform duration-300`}>
            <Icon className="w-full h-full text-white" />
          </div>
          {/* Icon Glow */}
          <div className={`absolute inset-0 blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-300 bg-gradient-to-br ${gradientIcon}`} />
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-white mb-3 bruno-ace-regular tracking-wide group-hover:text-white transition-colors">
          {title}
        </h3>

        {/* Tag */}
        <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border bg-black/30 ${tagBorder}`}>
          {tag}
        </span>
      </div>
    </motion.div>
  )
}

export default DomainSlider