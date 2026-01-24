"use client"
import { Timeline } from "@/components/ui/timeline"
import { Trophy, Calendar, Target, Users, BookOpen, Globe, ShieldCheck, Rocket } from "lucide-react"

const TimelineSection = () => {
  const data = [
    {
      title: "2024",
      content: (
        <div className="relative pl-2">
          {/* Header */}
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/30 shadow-[0_0_15px_rgba(6,182,212,0.2)]">
              <ShieldCheck className="w-8 h-8 text-cyan-400" />
            </div>
            <h3 className="text-2xl font-bold text-white bruno-ace-regular tracking-wide">
              Chapter <span className="text-cyan-400 text-glow">Foundation</span>
            </h3>
          </div>

          <p className="mb-8 text-gray-300 text-base leading-relaxed border-l-2 border-cyan-500/20 pl-4">
            Cyber Peace Corps KIIT Chapter was officially established with a mission to promote cybersecurity awareness
            and digital literacy across the university campus and beyond.
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            <div className="group glass-card rounded-xl p-5 text-center border border-white/5 hover:border-cyan-500/30 transition-all duration-300">
              <Users className="w-8 h-8 text-blue-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <div className="text-3xl font-bold text-white mb-1">500+</div>
              <div className="text-gray-400 text-sm font-medium">Members Joined</div>
            </div>
            <div className="group glass-card rounded-xl p-5 text-center border border-white/5 hover:border-cyan-500/30 transition-all duration-300">
              <Calendar className="w-8 h-8 text-cyan-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <div className="text-3xl font-bold text-white mb-1">25+</div>
              <div className="text-gray-400 text-sm font-medium">Events Organized</div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Mid 2024",
      content: (
        <div className="relative pl-2">
          {/* Header */}
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 rounded-xl bg-blue-600/10 border border-blue-500/30 shadow-[0_0_15px_rgba(37,99,235,0.2)]">
              <Trophy className="w-8 h-8 text-blue-400" />
            </div>
            <h3 className="text-2xl font-bold text-white bruno-ace-regular tracking-wide">
              Early <span className="text-blue-400 text-glow">Milestones</span>
            </h3>
          </div>

          <p className="mb-8 text-gray-300 text-base leading-relaxed border-l-2 border-blue-500/20 pl-4">
            Initial growth phase with first events and member recruitment drives, establishing our presence on campus.
          </p>

          {/* List with Animated Dots */}
          <div className="space-y-4 mb-8">
            {[
              "First cybersecurity workshop organized",
              "Core team formation and structure",
              "Partnership discussions initiated",
              "Campus awareness campaigns launched"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 text-sm text-gray-300 group">
                <div className={`w-2 h-2 rounded-full ${i % 2 === 0 ? "bg-cyan-400" : "bg-blue-400"} group-hover:animate-ping`} />
                <span className="group-hover:text-white transition-colors">{item}</span>
              </div>
            ))}
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            <div className="group glass-card rounded-xl p-5 text-center border border-white/5 hover:border-blue-500/30 transition-all duration-300">
              <Target className="w-8 h-8 text-cyan-300 mx-auto mb-3 group-hover:rotate-12 transition-transform" />
              <div className="text-3xl font-bold text-white mb-1">10+</div>
              <div className="text-gray-400 text-sm font-medium">Awards Won</div>
            </div>
            <div className="group glass-card rounded-xl p-5 text-center border border-white/5 hover:border-blue-500/30 transition-all duration-300">
              <BookOpen className="w-8 h-8 text-blue-300 mx-auto mb-3 group-hover:rotate-12 transition-transform" />
              <div className="text-3xl font-bold text-white mb-1">5+</div>
              <div className="text-gray-400 text-sm font-medium">Research Papers</div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Late 2024",
      content: (
        <div className="relative pl-2">
          {/* Header */}
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/30 shadow-[0_0_15px_rgba(168,85,247,0.2)]">
              <Rocket className="w-8 h-8 text-purple-400" />
            </div>
            <h3 className="text-2xl font-bold text-white bruno-ace-regular tracking-wide">
              Growth <span className="text-purple-400 text-glow">Phase</span>
            </h3>
          </div>

          <p className="mb-8 text-gray-300 text-base leading-relaxed border-l-2 border-purple-500/20 pl-4">
            Expanding our reach through community outreach programs and digital literacy initiatives to build a safer internet for everyone.
          </p>

          {/* List with Animated Dots */}
          <div className="space-y-4 mb-8">
            {[
              "Digital literacy program for 1000+ rural students",
              "Cybersecurity awareness workshops in schools",
              "Industry mentorship program launch",
              "Open source cybersecurity tools development"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 text-sm text-gray-300 group">
                <div className="w-2 h-2 rounded-full bg-purple-400 group-hover:animate-ping" />
                <span className="group-hover:text-white transition-colors">{item}</span>
              </div>
            ))}
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            <div className="group glass-card rounded-xl p-5 text-center border border-white/5 hover:border-purple-500/30 transition-all duration-300">
              <Users className="w-8 h-8 text-purple-300 mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <div className="text-3xl font-bold text-white mb-1">1000+</div>
              <div className="text-gray-400 text-sm font-medium">Students Reached</div>
            </div>
            <div className="group glass-card rounded-xl p-5 text-center border border-white/5 hover:border-purple-500/30 transition-all duration-300">
              <Globe className="w-8 h-8 text-indigo-300 mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <div className="text-3xl font-bold text-white mb-1">50+</div>
              <div className="text-gray-400 text-sm font-medium">Schools Visited</div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2025",
      content: (
        <div className="relative pl-2">
          {/* Header */}
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/30 shadow-[0_0_15px_rgba(6,182,212,0.2)]">
              <ShieldCheck className="w-8 h-8 text-cyan-400" />
            </div>
            <h3 className="text-2xl font-bold text-white bruno-ace-regular tracking-wide">
              New <span className="text-cyan-400 text-glow">Chapter Begins</span>
            </h3>
          </div>

          <p className="mb-8 text-gray-300 text-base leading-relaxed border-l-2 border-cyan-500/20 pl-4">
            Cyber Peace Corps KIIT Chapter was officially established with a mission to promote cybersecurity awareness
            and digital literacy across the university campus and beyond.
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            <div className="group glass-card rounded-xl p-5 text-center border border-white/5 hover:border-cyan-500/30 transition-all duration-300">
              <Users className="w-8 h-8 text-blue-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <div className="text-3xl font-bold text-white mb-1">300+</div>
              <div className="text-gray-400 text-sm font-medium">Members Joined</div>
            </div>
            <div className="group glass-card rounded-xl p-5 text-center border border-white/5 hover:border-cyan-500/30 transition-all duration-300">
              <Calendar className="w-8 h-8 text-cyan-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <div className="text-3xl font-bold text-white mb-1">20+</div>
              <div className="text-gray-400 text-sm font-medium">Events Organized</div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Mid 2025",
      content: (
        <div className="relative pl-2">
          {/* Header */}
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 rounded-xl bg-blue-600/10 border border-blue-500/30 shadow-[0_0_15px_rgba(37,99,235,0.2)]">
              <Trophy className="w-8 h-8 text-blue-400" />
            </div>
            <h3 className="text-2xl font-bold text-white bruno-ace-regular tracking-wide">
              Major <span className="text-blue-400 text-glow">Achievements</span>
            </h3>
          </div>

          <p className="mb-8 text-gray-300 text-base leading-relaxed border-l-2 border-blue-500/20 pl-4">
            Our chapter achieved significant milestones including winning national competitions, establishing industry
            partnerships, and launching innovative cybersecurity programs.
          </p>

          {/* List with Animated Dots */}
          <div className="space-y-4 mb-8">
            {[
              "First place in National Cybersecurity Hackathon",
              "Partnership with leading cybersecurity firms",
              "Launch of ethical hacking certification program",
              "Research publication on AI-driven threat detection"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 text-sm text-gray-300 group">
                <div className={`w-2 h-2 rounded-full ${i % 2 === 0 ? "bg-cyan-400" : "bg-blue-400"} group-hover:animate-ping`} />
                <span className="group-hover:text-white transition-colors">{item}</span>
              </div>
            ))}
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            <div className="group glass-card rounded-xl p-5 text-center border border-white/5 hover:border-blue-500/30 transition-all duration-300">
              <Target className="w-8 h-8 text-cyan-300 mx-auto mb-3 group-hover:rotate-12 transition-transform" />
              <div className="text-3xl font-bold text-white mb-1">20+</div>
              <div className="text-gray-400 text-sm font-medium">Awards Won</div>
            </div>
            <div className="group glass-card rounded-xl p-5 text-center border border-white/5 hover:border-blue-500/30 transition-all duration-300">
              <BookOpen className="w-8 h-8 text-blue-300 mx-auto mb-3 group-hover:rotate-12 transition-transform" />
              <div className="text-3xl font-bold text-white mb-1">10+</div>
              <div className="text-gray-400 text-sm font-medium">Research Papers</div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2026",
      content: (
        <div className="relative pl-2">
           {/* Header */}
           <div className="flex items-center gap-4 mb-6">
            <div className="p-3 rounded-xl bg-indigo-500/10 border border-indigo-500/30 shadow-[0_0_15px_rgba(99,102,241,0.2)]">
              <Rocket className="w-8 h-8 text-indigo-400" />
            </div>
            <h3 className="text-2xl font-bold text-white bruno-ace-regular tracking-wide">
              Future <span className="text-indigo-400 text-glow">Vision</span>
            </h3>
          </div>

          <p className="mb-8 text-gray-300 text-base leading-relaxed border-l-2 border-indigo-500/20 pl-4">
            Expanding our reach through community outreach programs and digital literacy initiatives to build a safer internet for everyone.
          </p>

          {/* List with Animated Dots */}
          <div className="space-y-4 mb-8">
            {[
              "Digital literacy program for 1000+ rural students",
              "Cybersecurity awareness workshops in schools",
              "Industry mentorship program launch",
              "Open source cybersecurity tools development"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 text-sm text-gray-300 group">
                <div className="w-2 h-2 rounded-full bg-indigo-400 group-hover:animate-ping" />
                <span className="group-hover:text-white transition-colors">{item}</span>
              </div>
            ))}
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            <div className="group glass-card rounded-xl p-5 text-center border border-white/5 hover:border-indigo-500/30 transition-all duration-300">
              <Users className="w-8 h-8 text-indigo-300 mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <div className="text-3xl font-bold text-white mb-1">2000+</div>
              <div className="text-gray-400 text-sm font-medium">Students Contributing</div>
            </div>
            <div className="group glass-card rounded-xl p-5 text-center border border-white/5 hover:border-indigo-500/30 transition-all duration-300">
              <Globe className="w-8 h-8 text-purple-300 mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <div className="text-3xl font-bold text-white mb-1">50+</div>
              <div className="text-gray-400 text-sm font-medium">Events Organizing</div>
            </div>
          </div>
        </div>
      ),
    },
  ]

  return (
    <section id="timeline" className="bg-black py-10 relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black via-slate-950 to-black pointer-events-none" />
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-cyan-900/10 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="relative z-10">
            {/* --- ADDED HIGHLIGHTED TEXT --- */}
            <div className="flex justify-center mb-8">
                <div className="px-6 py-2 rounded-full border border-cyan-500/50 bg-cyan-500/10 shadow-[0_0_30px_rgba(6,182,212,0.25)] backdrop-blur-md">
                    <span className="text-lg md:text-xl font-bold text-cyan-300 tracking-widest uppercase drop-shadow-[0_0_10px_rgba(6,182,212,0.8)]">
                        CCOE established - Lab B103
                    </span>
                </div>
            </div>

            <Timeline data={data} />
        </div>
    </section>
  )
}

export default TimelineSection