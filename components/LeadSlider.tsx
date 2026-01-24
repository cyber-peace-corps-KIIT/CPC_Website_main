"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { User } from "lucide-react";

const LeadSlider = () => {
  const leads = [
    {
      name: "Kushagra Bhatnagar",
      position: "President",
      domain: "Overall",
      image: "/leads/PS.png",
      bio: "CSE student leading with innovation, fostering collaborative growth.",
      icon: User,
    },
    {
      name: "Devyansh Dhody",
      position: "Vice President",
      domain: "Overall",
      image: "/leads/AB.png",
      bio: "CSE student contributing across domains, ensuring the synergy of tech, design, and management.",
      icon: User,
    },
    {
      name: "Anoop Kumar",
      position: "Domain Lead",
      domain: "Web Dev",
      image: "/leads/me.jpg",
      bio: "CSE student diving deep into penetration testing and security protocol development.",
      icon: User,
    },
    {
      name: "Nikita Mohapatra",
      position: "Domain Lead",
      domain: "Graphic Design",
      image: "/leads/NM.jpg",
      bio: "CSE undergraduate with a passion for crafting visually appealing and user-friendly designs.",
      icon: User,
    },
    {
      name: "Shreejeeta Sahay",
      position: "Domain Lead",
      domain: "Cybersecurity",
      image: "/leads/SD.png",
      bio: "CSE student diving deep into penetration testing and security protocol development.",
      icon: User,
    },
    {
      name: "Aditya Chowdhury",
      position: "Domain Lead",
      domain: "Cybersecurity",
      image: "/leads/AC.jpg",
      bio: "B.Tech CSSE student researching secure network architectures and cloud security enhancements.",
      icon: User,
    },
    {
      name: "Vikram Kumar Sahu",
      position: "Domain Lead",
      domain: "AI/ML",
      image: "/leads/aiml.jpeg", // ✅ Added AI/ML Lead
      bio: "CSE student leveraging AI and ML algorithms to revolutionize cybersecurity landscapes.",
      icon: User,
    },
    {
      name: "Sanidhya Kamthan",
      position: "Domain Lead",
      domain: "R&D",
      image: "/leads/rnd.jpeg", // ✅ Added R&D Lead
      bio: "CSE student driving innovation through dedicated research and development in emerging tech frontiers.",
      icon: User,
    },
    {
      name: "Ritesh Kumar Mohanty",
      position: "Domain Lead",
      domain: "Event Management",
      image: "/leads/RKM.jpg",
      bio: "Electronics and Computer Science enthusiast coordinating tech fests and cyber awareness programs.",
      icon: User,
    },
  ];

  return (
    <section id="ourleads" className="py-20 overflow-hidden bg-black relative">
        
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-900/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 mb-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="bruno-ace-regular text-4xl md:text-6xl text-white mb-4">
            OUR <span className="text-purple-400 text-glow">LEADS</span>
          </h2>
          <p className="text-gray-300 text-xl max-w-2xl mx-auto">
            Meet the dedicated leaders driving our cybersecurity mission forward
          </p>
        </motion.div>
      </div>

      {/* Infinite Sliding Container */}
      <div className="relative z-10">
        <div className="flex animate-scroll-reverse">
          {/* First set */}
          {leads.map((lead, index) => (
            <LeadCard key={`first-${index}`} {...lead} />
          ))}
          {/* Second set for seamless loop */}
          {leads.map((lead, index) => (
            <LeadCard key={`second-${index}`} {...lead} />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-reverse {
          0% {
            transform: translateX(-${leads.length * 300}px); /* Adjusted for wider cards */
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-scroll-reverse {
          animation: scroll-reverse 50s linear infinite;
          width: ${leads.length * 300 * 2}px;
        }
        
        /* Pause on hover */
        .animate-scroll-reverse:hover {
            animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

const LeadCard = ({ name, position, domain, image, bio, icon: Icon }) => {
  // Check if lead is President or VP
  const isTopLead = position === "President" || position === "Vice President";
  
  // Dynamic Styles
  const cardBorder = isTopLead ? "border-yellow-500/50" : "border-purple-500/20";
  const badgeStyle = isTopLead 
    ? "bg-gradient-to-r from-yellow-600 to-amber-600 text-white border-yellow-400" 
    : "glass text-purple-200 border-purple-400";
    
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -10 }}
      className={`group relative overflow-hidden rounded-3xl glass-card p-6 h-[420px] flex-shrink-0 w-72 mr-8 border ${cardBorder} transition-all duration-300`}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className={`absolute inset-0 bg-gradient-to-br ${isTopLead ? "from-yellow-900 via-amber-900 to-black" : "from-purple-900 to-black"} opacity-40`} />
        {isTopLead && <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay" />} 
      </div>

      {/* Profile Image */}
      <div className="relative z-10 flex justify-center mb-6">
        <div className={`relative w-28 h-28 rounded-full p-1 bg-gradient-to-br ${isTopLead ? "from-yellow-300 via-amber-500 to-yellow-600" : "from-purple-400 to-blue-500"}`}>
            <div className="w-full h-full rounded-full overflow-hidden border-2 border-black bg-black">
                <Image
                src={image || "/placeholder.svg"}
                alt={name}
                width={300}
                height={300}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
            </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center space-y-3">
        <h3 className={`text-xl font-bold ${isTopLead ? "text-yellow-100" : "text-white"} bruno-ace-regular`}>
          {name}
        </h3>

        <div className="flex flex-col items-center gap-2">
          <span className={`inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide border ${badgeStyle} shadow-lg`}>
            {position}
          </span>
          <span className={`text-xs font-semibold ${isTopLead ? "text-amber-300" : "text-cyan-300"}`}>
             {domain}
          </span>
        </div>

        <p className="text-gray-400 text-sm leading-relaxed line-clamp-3 group-hover:text-gray-200 transition-colors duration-300 pt-2 border-t border-white/10">
          {bio}
        </p>
      </div>

      {/* Hover Glow Effect */}
      <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none ${isTopLead ? "shadow-[inset_0_0_50px_rgba(234,179,8,0.2)]" : "shadow-[inset_0_0_50px_rgba(168,85,247,0.2)]"}`} />
      
      {/* Animated Border Gradient for Top Leads */}
      {isTopLead && (
         <div className="absolute inset-0 border-2 border-transparent rounded-3xl bg-gradient-to-r from-yellow-500/0 via-yellow-500/30 to-yellow-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
      )}

    </motion.div>
  );
};

export default LeadSlider;