"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import {User} from "lucide-react";

const LeadSlider = () => {
  const leads = [
    {
      name: "Prabhanwita Satpathy",
      position: "President",
      domain: "Overall",
      image: "/leads/PS.png",
      bio: "CSE student leading with innovation, fostering collaborative growth.",
      icon: User,
    },
    {
      name: "Anshuman Banerjee",
      position: "Vice President",
      domain: "Overall",
      image: "/leads/AB.jpg",
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
      name: "Swapnil Dey",
      position: "Domain Lead",
      domain: "Cybersecurity",
      image: "/leads/SD.png",
      bio: "IT student diving deep into penetration testing and security protocol development.",
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
      name: "Ritesh Kumar Mohanty",
      position: "Domain Lead",
      domain: "Event Management",
      image: "/leads/RKM.jpg",
      bio: "Electronics and Computer Science enthusiast coordinating tech fests and cyber awareness programs.",
      icon: User,
    },
  ];

  return (
    <section id="ourleads" className="py-20 overflow-hidden bg-black">
      <div className="container mx-auto px-6 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="bruno-ace-regular text-4xl md:text-6xl text-yellow-400 text-glow mb-4">
            OUR LEADS
          </h2>
          <p className="text-gray-300 text-xl max-w-2xl mx-auto">
            Meet the dedicated leaders driving our cybersecurity mission forward
          </p>
        </motion.div>
      </div>

      {/* Infinite Sliding Container */}
      <div className="relative">
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
            transform: translateX(
              -${leads.length * 280}px
            ); /* Adjust based on card width + margin */
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-scroll-reverse {
          animation: scroll-reverse 60s linear infinite; /* Slower speed */
          width: ${leads.length *
          280 *
          2}px; /* Adjust based on card width + margin */
        }
      `}</style>
    </section>
  );
};

const LeadCard = ({ name, position, domain, image, bio, icon: Icon }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.03, rotateY: 5, z: 50 }}
      className="group relative overflow-hidden rounded-3xl glass-card p-6 h-96 flex-shrink-0 w-64 mr-8" /* Adjusted width and margin */
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-pink-600 opacity-20" />
        <div className="absolute inset-0 cyber-grid" />
      </div>

      {/* Profile Image */}
      <motion.div
        whileHover={{ scale: 1.1 }}
        className="relative z-10 w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden glass border-2 border-purple-400"
      >
        <Image
          src={image || "/placeholder.svg"}
          alt={name}
          width={300}
          height={300}
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 text-center">
        <motion.h3
          whileHover={{ scale: 1.05 }}
          className="text-xl font-bold text-white mb-2 bruno-ace-regular"
        >
          {name}
        </motion.h3>

        <div className="mb-3">
          <span className="inline-block px-3 py-1 rounded-full glass text-sm font-medium text-purple-200 border border-purple-400 mb-2">
            {position}
          </span>
          <p className="text-yellow-400 text-sm font-semibold">{domain}</p>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-gray-300 text-sm leading-relaxed"
        >
          {bio}
        </motion.p>
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
  );
};

export default LeadSlider;
