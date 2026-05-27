"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { User } from "lucide-react";

type LeadTimeline = "Founding Leads" | "2025" | "2026";

type Lead = {
  name: string;
  position: string;
  domain?: string;
  image: string;
  bio: string;
  status?: "active" | "upcoming";
  icon: typeof User;
  alternates?: LeadProfile[];
};

type LeadProfile = {
  name: string;
  position: string;
  domain?: string;
  image: string;
  bio: string;
  status?: "active" | "upcoming";
};

const leadTemplate = (year: string): Lead[] => [
  {
    name: "President",
    position: "President",
    image: "/logo.png",
    bio: `Add the ${year} president's photo and details here.`,
    icon: User,
  },
  {
    name: "Vice President",
    position: "Vice President",
    image: "/logo.png",
    bio: `Add the ${year} vice president's photo and details here.`,
    icon: User,
  },
  {
    name: "Cybersecurity Lead",
    position: "Domain Lead",
    domain: "Cybersecurity",
    image: "/logo.png",
    bio: `Add the ${year} cybersecurity lead's photo and details here.`,
    icon: User,
  },
  {
    name: "Web Dev Lead",
    position: "Domain Lead",
    domain: "Web Dev",
    image: "/logo.png",
    bio: `Add the ${year} web development lead's photo and details here.`,
    icon: User,
  },
  {
    name: "AI/ML Lead",
    position: "Domain Lead",
    domain: "AI/ML",
    image: "/logo.png",
    bio: `Add the ${year} AI/ML lead's photo and details here.`,
    icon: User,
  },
  {
    name: "Graphic Design Lead",
    position: "Domain Lead",
    domain: "Graphic Design",
    image: "/logo.png",
    bio: `Add the ${year} graphic design lead's photo and details here.`,
    icon: User,
  },
  {
    name: "Event Management Lead",
    position: "Domain Lead",
    domain: "Event Management",
    image: "/logo.png",
    bio: `Add the ${year} event management lead's photo and details here.`,
    icon: User,
    alternates: [
      {
        name: "Event Management Co-Lead",
        position: "Domain Lead",
        domain: "Event Management",
        image: "/logo.png",
        bio: `Add the ${year} second event management lead's photo and details here.`,
      },
    ],
  },
  {
    name: "Digital Forensics Lead",
    position: "Domain Lead",
    domain: "Digital Forensics",
    image: "/logo.png",
    bio: `Add the ${year} digital forensics lead's photo and details here.`,
    icon: User,
  },
  {
    name: "R&D Lead",
    position: "Domain Lead",
    domain: "R&D",
    image: "/logo.png",
    bio: `Add the ${year} R&D lead's photo and details here.`,
    icon: User,
  },
];

const leadTimelines: Record<LeadTimeline, Lead[]> = {
  "Founding Leads": [
    {
      name: "Harsh Saran",
      position: "President",
      image: "/Founding Leads/Harsh Saran - President .jpeg",
      bio: "Founding president who helped shape the chapter's direction and leadership culture.",
      icon: User,
    },
    {
      name: "Saurabh Kumar",
      position: "Vice President",
      image: "/Founding Leads/Saurabh Kumar - Vice President .jpeg",
      bio: "Founding vice president supporting operations, coordination, and team growth.",
      icon: User,
    },
    {
      name: "Rishita Kundu",
      position: "Head",
      domain: "Cyber Security",
      image: "/Founding Leads/Rishita Kundu - Head of Cyber Security.jpeg",
      bio: "Led the founding cybersecurity efforts with focus on awareness and practical defense.",
      icon: User,
    },
    {
      name: "Rajeev Kumar",
      position: "Head",
      domain: "Web Dev",
      image: "/Founding Leads/Rajeev Kumar - Head of Web Dev.jpeg",
      bio: "Built and guided the chapter's early web presence and development work.",
      icon: User,
    },
    {
      name: "Adarsh Mishra",
      position: "Head",
      domain: "Marketing & Event Management",
      image: "/Founding Leads/Adarsh Mishra - Head of Marketing and Event Management.jpeg",
      bio: "Drove founding outreach and event coordination for the chapter's early programs.",
      icon: User,
    },
  ],
  "2025": [
    {
      name: "Kushagra Bhatnagar",
      position: "President",
      image: "/leads/PS.png",
      bio: "CSE student leading with innovation, fostering collaborative growth.",
      icon: User,
    },
    {
      name: "Devyansh Dhody",
      position: "Vice President",
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
      image: "/leads/aiml.jpeg",
      bio: "CSE student leveraging AI and ML algorithms to revolutionize cybersecurity landscapes.",
      icon: User,
    },
    {
      name: "Sanidhya Kamthan",
      position: "Domain Lead",
      domain: "R&D",
      image: "/leads/rnd.jpeg",
      bio: "CSE student driving innovation through dedicated research and development in emerging tech frontiers.",
      icon: User,
    },
    {
      name: "Swarnim Kumar",
      position: "Domain Lead",
      domain: "Digital Forensics",
      image: "/leads/DF.jpeg",
      bio: "CSCE student investigating digital footprints and analyzing complex forensic evidence.",
      icon: User,
    },
    {
      name: "Ojasvi Goyal",
      position: "Domain Lead",
      domain: "Event Management",
      image: "/leads/RKM.jpg",
      bio: "Computer Science enthusiast coordinating tech fests and cyber awareness programs.",
      icon: User,
      alternates: [
        {
          name: "Ritesh Kumar Mohanty",
          position: "Domain Lead",
          domain: "Event Management",
          image: "/leads/Event2.jpeg",
          bio: "Computer Science enthusiast coordinating tech fests and cyber awareness programs.",
        },
      ],
    },
  ],
  "2026": leadTemplate("2026"),
};

const timelineOrder: LeadTimeline[] = ["Founding Leads", "2025", "2026"];

const LeadSlider = () => {
  const [selectedYear, setSelectedYear] = useState<LeadTimeline>("2025");
  const leads = leadTimelines[selectedYear];
  const shouldSlide = leads.length > 1;

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

          <div className="mt-10 flex justify-center">
            <div className="relative grid w-full max-w-2xl grid-cols-1 gap-3 rounded-[28px] border border-white/10 bg-white/[0.03] p-2 backdrop-blur-xl sm:grid-cols-3 sm:rounded-full">
              <div className="absolute left-8 right-8 top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-purple-400/40 to-transparent" />
              {timelineOrder.map((year) => {
                const isSelected = selectedYear === year;
                const isFounding = year === "Founding Leads";
                const selectedStyle = isFounding
                  ? "border-yellow-300 bg-yellow-400 text-black shadow-[0_0_25px_rgba(250,204,21,0.45)]"
                  : "border-purple-300 bg-purple-400 text-black shadow-[0_0_25px_rgba(192,132,252,0.45)]";
                const idleStyle = isFounding
                  ? "border-white/10 bg-black/70 text-gray-300 hover:border-yellow-300/70 hover:text-yellow-100 hover:shadow-[0_0_20px_rgba(250,204,21,0.25)]"
                  : "border-white/10 bg-black/70 text-gray-300 hover:border-purple-300/50 hover:text-white";

                return (
                  <button
                    key={year}
                    type="button"
                    onClick={() => setSelectedYear(year)}
                    aria-pressed={isSelected}
                    className={`relative z-10 flex min-h-12 items-center justify-center gap-2 rounded-full border px-4 text-sm font-bold transition-all duration-300 sm:text-base ${
                      isSelected ? selectedStyle : idleStyle
                    }`}
                  >
                    <span
                      className={`h-2.5 w-2.5 rounded-full ${
                        isSelected ? "bg-black" : isFounding ? "bg-yellow-300" : "bg-purple-300"
                      }`}
                    />
                    {year}
                  </button>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Infinite Sliding Container */}
      <div className="relative z-10">
        <div
          key={selectedYear}
          className={`flex ${shouldSlide ? "animate-scroll-reverse" : "justify-center"}`}
        >
          {leads.map((lead, index) => (
            <LeadCard key={`first-${index}`} {...lead} />
          ))}
          {shouldSlide &&
            leads.map((lead, index) => (
              <LeadCard key={`second-${index}`} {...lead} />
            ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-reverse {
          0% {
            transform: translateX(-${leads.length * 300}px);
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-scroll-reverse {
          animation: scroll-reverse 50s linear infinite;
          width: ${leads.length * 300 * 2}px;
        }

        .animate-scroll-reverse:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

const LeadCard = ({ name, position, domain, image, bio, status, alternates }: Lead) => {
  const [activeProfile, setActiveProfile] = useState(0);
  const profiles: LeadProfile[] = [
    { name, position, domain, image, bio, status },
    ...(alternates ?? []),
  ];
  const lead = profiles[activeProfile];
  const hasAlternates = profiles.length > 1;
  const nextProfile = () => setActiveProfile((current) => (current + 1) % profiles.length);
  const isTopLead = lead.position === "President" || lead.position === "Vice President";
  const isUpcoming = lead.status === "upcoming";

  const cardBorder = isUpcoming
    ? "border-cyan-500/40"
    : isTopLead
      ? "border-yellow-500/50"
      : "border-purple-500/20";
  const badgeStyle = isUpcoming
    ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-black border-cyan-200"
    : isTopLead
      ? "bg-gradient-to-r from-yellow-600 to-amber-600 text-white border-yellow-400"
      : "glass text-purple-200 border-purple-400";

  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -10 }}
      className={`group relative overflow-hidden rounded-3xl glass-card p-6 h-[420px] flex-shrink-0 w-72 mr-8 border ${cardBorder} transition-all duration-300`}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div
          className={`absolute inset-0 bg-gradient-to-br ${
            isUpcoming
              ? "from-cyan-900 via-blue-900 to-black"
              : isTopLead
                ? "from-yellow-900 via-amber-900 to-black"
                : "from-purple-900 to-black"
          } opacity-40`}
        />
      </div>

      {/* Profile Image */}
      <div className="relative z-10 flex justify-center mb-6">
        <div
          className={`relative w-28 h-28 rounded-full p-1 bg-gradient-to-br ${
            isUpcoming
              ? "from-cyan-300 via-blue-500 to-purple-600"
              : isTopLead
                ? "from-yellow-300 via-amber-500 to-yellow-600"
                : "from-purple-400 to-blue-500"
          }`}
        >
          <div className="w-full h-full rounded-full overflow-hidden border-2 border-black bg-black">
            <Image
              key={lead.image}
              src={lead.image}
              alt={lead.name}
              width={300}
              height={300}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center space-y-3">
        <h3
          className={`text-xl font-bold ${
            isUpcoming ? "text-cyan-100" : isTopLead ? "text-yellow-100" : "text-white"
          } bruno-ace-regular`}
        >
          {lead.name}
        </h3>

        <div className="flex flex-col items-center gap-2">
          <span
            className={`inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide border ${badgeStyle} shadow-lg`}
          >
            {lead.position}
          </span>
          {lead.domain && (
            <span
              className={`text-xs font-semibold ${
                isTopLead ? "text-amber-300" : "text-cyan-300"
              }`}
            >
              {lead.domain}
            </span>
          )}
        </div>

        <p className="text-gray-400 text-sm leading-relaxed line-clamp-3 group-hover:text-gray-200 transition-colors duration-300 pt-2 border-t border-white/10">
          {lead.bio}
        </p>

        {hasAlternates && (
          <button
            type="button"
            onClick={nextProfile}
            className="mx-auto mt-2 flex items-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-300/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-cyan-200 transition hover:border-cyan-200 hover:bg-cyan-300/20 hover:text-white"
            aria-label={`Show next ${lead.domain ?? lead.position} lead`}
          >
            <span>{activeProfile + 1}/{profiles.length}</span>
          </button>
        )}
      </div>

      {/* Hover Glow Effect */}
      <div
        className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none ${
          isUpcoming
            ? "shadow-[inset_0_0_50px_rgba(34,211,238,0.2)]"
            : isTopLead
              ? "shadow-[inset_0_0_50px_rgba(234,179,8,0.2)]"
              : "shadow-[inset_0_0_50px_rgba(168,85,247,0.2)]"
        }`}
      />

      {/* Animated Border Gradient for Top Leads */}
      {isTopLead && (
        <div className="absolute inset-0 border-2 border-transparent rounded-3xl bg-gradient-to-r from-yellow-500/0 via-yellow-500/30 to-yellow-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
      )}
    </motion.div>
  );
};

export default LeadSlider;
