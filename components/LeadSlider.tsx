"use client";

import { useState, type CSSProperties } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight, User } from "lucide-react";

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
      name: "Prabhanwita Satpathy",
      position: "President",
      image: "/leads/PS.png",
      bio: "CSE student leading with innovation, fostering collaborative growth.",
      icon: User,
    },
    {
      name: "Anshuman Banerjee",
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
  "2026": [
    {
      name: "Kushagra Bhatnagar",
      position: "President",
      image: "/Leads - 2026/Kushagra Bhatnagar - President .jpeg",
      bio: "Guiding the chapter with a focus on collaboration, execution, and student-led cybersecurity impact.",
      icon: User,
    },
    {
      name: "Devyansh Dhody",
      position: "Vice President",
      image: "/Leads - 2026/Devyansh Dhody - Vice President.jpeg",
      bio: "Supporting cross-team coordination and helping keep the chapter's technical and management work aligned.",
      icon: User,
    },
    {
      name: "Debayan Samal",
      position: "Domain Lead",
      domain: "Web Development",
      image: "/Leads - 2026/Debayan Samal - Web Development .jpeg",
      bio: "Building polished, reliable web experiences for the chapter's digital presence.",
      icon: User,
      alternates: [
        {
          name: "K Kushang",
          position: "Domain Lead",
          domain: "Web Development",
          image: "/Leads - 2026/K Kushang - Web Devlopment .jpeg",
          bio: "Contributing to web development with a focus on clean interfaces and practical delivery.",
        },
      ],
    },
    {
      name: "Debansh",
      position: "Domain Lead",
      domain: "Cybersecurity & Digital Forensics",
      image: "/Leads - 2026/Debansh - Cybersecurity X Digital Forensic .jpeg",
      bio: "Driving hands-on security learning, investigation skills, and practical cyber defense work.",
      icon: User,
      alternates: [
        {
          name: "Oishika",
          position: "Domain Lead",
          domain: "Cybersecurity & Digital Forensics",
          image: "/Leads - 2026/Oishika - Cybersecurity X Digital Forensics .jpeg",
          bio: "Strengthening the chapter's security and forensics initiatives through focused teamwork.",
        },
      ],
    },
    {
      name: "Vikram",
      position: "Domain Lead",
      domain: "Artificial Intelligence & Machine Learning",
      image: "/Leads - 2026/Vikram - Artificial Intelligence & Machine Learning .jpeg",
      bio: "Exploring intelligent systems and AI-driven ideas for modern cybersecurity challenges.",
      icon: User,
    },
    {
      name: "Arunabh",
      position: "Domain Lead",
      domain: "Cloud Computing",
      image: "/Leads - 2026/Arunabh - Cloud Computing Lead .jpeg",
      bio: "Leading cloud-focused learning around scalable systems, deployment, and secure infrastructure.",
      icon: User,
    },
    {
      name: "Aditya",
      position: "Domain Lead",
      domain: "Research & Development",
      image: "/Leads - 2026/Aditya - Research & Devlopment .jpeg",
      bio: "Pushing research ideas forward and helping turn experiments into usable chapter projects.",
      icon: User,
      alternates: [
        {
          name: "Kashvi",
          position: "Domain Lead",
          domain: "Research & Development",
          image: "/Leads - 2026/Kashvi - Research & Devlopment .jpeg",
          bio: "Supporting innovation, documentation, and exploratory technical work across the chapter.",
        },
      ],
    },
    {
      name: "B Saikiran",
      position: "Domain Lead",
      domain: "Graphic Design",
      image: "/Leads - 2026/B Saikiran - Graphic Designing .jpeg",
      bio: "Creating visual systems and design assets that make the chapter's work feel sharp and recognizable.",
      icon: User,
      alternates: [
        {
          name: "Swagat",
          position: "Domain Lead",
          domain: "Graphic Design",
          image: "/Leads - 2026/Swagat - Graphic Designing .jpeg",
          bio: "Designing creative visuals that support events, campaigns, and chapter storytelling.",
        },
      ],
    },
    {
      name: "Amulya",
      position: "Domain Lead",
      domain: "Event Management & Marketing",
      image: "/Leads - 2026/Amulya - Event Management X Marketing .jpeg",
      bio: "Planning outreach and events that connect students with meaningful cybersecurity opportunities.",
      icon: User,
      alternates: [
        {
          name: "Archisman",
          position: "Domain Lead",
          domain: "Event Management & Marketing",
          image: "/Leads - 2026/Archisman - Event Management X Marketing .jpeg",
          bio: "Coordinating campaigns and event execution to keep chapter programs active and visible.",
        },
      ],
    },
    {
      name: "Sanniva",
      position: "Domain Lead",
      domain: "Social Media",
      image: "/Leads - 2026/Sanniva - Social Media .jpeg",
      bio: "Sharing the chapter's work online through clear, timely, and engaging communication.",
      icon: User,
    },
    {
      name: "Satyajit",
      position: "Domain Lead",
      domain: "Human Resources",
      image: "/Leads - 2026/Satyajit - Human Resources.jpeg",
      bio: "Supporting people, coordination, and team operations so the chapter can work smoothly.",
      icon: User,
    },
  ],
};

const timelineOrder: LeadTimeline[] = ["Founding Leads", "2025", "2026"];

const LeadSlider = () => {
  const [selectedYear, setSelectedYear] = useState<LeadTimeline>("2026");
  const [manualOffset, setManualOffset] = useState(0);
  const leads = leadTimelines[selectedYear];
  const shouldSlide = leads.length > 1;
  const slideStep = 340;
  const scrollDistance = leads.length * slideStep;
  const sliderStyle = {
    "--manual-offset": `${manualOffset}px`,
  } as CSSProperties;

  const selectTimeline = (year: LeadTimeline) => {
    setSelectedYear(year);
    setManualOffset(0);
  };

  const moveSlider = (direction: "previous" | "next") => {
    setManualOffset((current) =>
      direction === "previous" ? current + slideStep : current - slideStep
    );
  };

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
                    onClick={() => selectTimeline(year)}
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
        {shouldSlide && (
          <>
            <button
              type="button"
              onClick={() => moveSlider("previous")}
              className="absolute left-3 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-black/70 text-white shadow-[0_0_25px_rgba(168,85,247,0.2)] backdrop-blur-xl transition hover:border-purple-300/70 hover:bg-purple-400 hover:text-black sm:left-6"
              aria-label="Show previous leads"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              type="button"
              onClick={() => moveSlider("next")}
              className="absolute right-3 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-black/70 text-white shadow-[0_0_25px_rgba(168,85,247,0.2)] backdrop-blur-xl transition hover:border-purple-300/70 hover:bg-purple-400 hover:text-black sm:right-6"
              aria-label="Show next leads"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </>
        )}
        <div
          key={selectedYear}
          style={sliderStyle}
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
            transform: translateX(calc(var(--manual-offset, 0px) - ${scrollDistance}px));
          }
          100% {
            transform: translateX(var(--manual-offset, 0px));
          }
        }

        .animate-scroll-reverse {
          animation: scroll-reverse 50s linear infinite;
          width: ${scrollDistance * 2}px;
        }

        .animate-scroll-reverse:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

const LeadCard = ({ name, position, domain, image, bio, status, alternates }: Lead) => {
  const profiles: LeadProfile[] = [
    { name, position, domain, image, bio, status },
    ...(alternates ?? []),
  ];
  const hasAlternates = profiles.length > 1;
  const lead = profiles[0];
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

  if (hasAlternates) {
    return (
      <motion.div
        whileHover={{ y: -10 }}
        className={`group relative h-[420px] w-80 flex-shrink-0 overflow-hidden rounded-3xl border ${cardBorder} glass-card p-5 mr-8 transition-all duration-500 hover:w-[560px]`}
      >
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-slate-950 to-black opacity-60" />
        </div>

        <div className="relative z-10 flex h-full flex-col">
          <div className="mb-4 flex justify-center">
            <div className="text-center">
              <span className={`inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide border ${badgeStyle} shadow-lg`}>
                {lead.position}
              </span>
              {lead.domain && (
                <p className="mt-2 text-sm font-semibold text-cyan-300">{lead.domain}</p>
              )}
            </div>
          </div>

          <div className="grid flex-1 grid-cols-2 gap-3">
            {profiles.map((profile) => (
              <div
                key={`${profile.name}-${profile.image}`}
                className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/40 p-3 transition-all duration-500 group-hover:border-cyan-300/40 group-hover:bg-white/[0.04]"
              >
                <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-cyan-400/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="relative mx-auto mb-3 h-24 w-24 rounded-full bg-gradient-to-br from-purple-400 to-blue-500 p-1 transition-transform duration-500 group-hover:scale-105">
                  <div className="h-full w-full overflow-hidden rounded-full border-2 border-black bg-black">
                    <Image
                      src={profile.image}
                      alt={profile.name}
                      width={240}
                      height={240}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                </div>
                <div className="relative text-center">
                  <h3 className="bruno-ace-regular text-base font-bold leading-tight text-white transition-colors duration-300 group-hover:text-cyan-100">
                    {profile.name}
                  </h3>
                  <p className="mt-3 border-t border-white/10 pt-3 text-xs leading-relaxed text-gray-400 line-clamp-4 transition-colors duration-500 group-hover:text-gray-200">
                    {profile.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none shadow-[inset_0_0_60px_rgba(34,211,238,0.16)]" />
      </motion.div>
    );
  }

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
