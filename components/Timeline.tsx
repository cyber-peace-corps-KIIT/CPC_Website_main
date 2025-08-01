"use client"
import { Timeline } from "@/components/ui/timeline"
import { Trophy, Calendar, Target, Users, BookOpen, Globe } from "lucide-react"

const TimelineSection = () => {
  const data = [
    {
      title: "2024",
      content: (
        <div>
          <div className="flex items-center gap-3 mb-4">
            <Trophy className="w-6 h-6 text-yellow-400" />
            <h3 className="text-xl font-bold text-white bruno-ace-regular">Chapter Foundation</h3>
          </div>
          <p className="mb-8 text-sm font-normal text-gray-300 md:text-base">
            Cyber Peace Corps KIIT Chapter was officially established with a mission to promote cybersecurity awareness
            and digital literacy across the university campus and beyond.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="glass-card rounded-lg p-4 text-center">
              <Users className="w-8 h-8 text-purple-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">500+</div>
              <div className="text-gray-400 text-sm">Members Joined</div>
            </div>
            <div className="glass-card rounded-lg p-4 text-center">
              <Calendar className="w-8 h-8 text-blue-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">25+</div>
              <div className="text-gray-400 text-sm">Events Organized</div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Mid 2024",
      content: (
        <div>
          <div className="flex items-center gap-3 mb-4">
            <Target className="w-6 h-6 text-green-400" />
            <h3 className="text-xl font-bold text-white bruno-ace-regular">Major Achievements</h3>
          </div>
          <p className="mb-8 text-sm font-normal text-gray-300 md:text-base">
            Our chapter achieved significant milestones including winning national competitions, establishing industry
            partnerships, and launching innovative cybersecurity programs.
          </p>
          <div className="space-y-3 mb-6">
            <div className="flex items-center gap-3 text-sm text-gray-300">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              First place in National Cybersecurity Hackathon
            </div>
            <div className="flex items-center gap-3 text-sm text-gray-300">
              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              Partnership with leading cybersecurity firms
            </div>
            <div className="flex items-center gap-3 text-sm text-gray-300">
              <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
              Launch of ethical hacking certification program
            </div>
            <div className="flex items-center gap-3 text-sm text-gray-300">
              <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
              Research publication on AI-driven threat detection
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="glass-card rounded-lg p-4 text-center">
              <Trophy className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">10+</div>
              <div className="text-gray-400 text-sm">Awards Won</div>
            </div>
            <div className="glass-card rounded-lg p-4 text-center">
              <BookOpen className="w-8 h-8 text-pink-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">5+</div>
              <div className="text-gray-400 text-sm">Research Papers</div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Late 2024",
      content: (
        <div>
          <div className="flex items-center gap-3 mb-4">
            <Globe className="w-6 h-6 text-blue-400" />
            <h3 className="text-xl font-bold text-white bruno-ace-regular">Community Impact</h3>
          </div>
          <p className="mb-4 text-sm font-normal text-gray-300 md:text-base">
            Expanded our reach through community outreach programs and digital literacy initiatives.
          </p>
          <div className="space-y-3 mb-6">
            <div className="flex items-center gap-3 text-sm text-gray-300">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              Digital literacy program for 1000+ rural students
            </div>
            <div className="flex items-center gap-3 text-sm text-gray-300">
              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              Cybersecurity awareness workshops in schools
            </div>
            <div className="flex items-center gap-3 text-sm text-gray-300">
              <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
              Industry mentorship program launch
            </div>
            <div className="flex items-center gap-3 text-sm text-gray-300">
              <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
              Open source cybersecurity tools development
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="glass-card rounded-lg p-4 text-center">
              <Users className="w-8 h-8 text-green-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">1000+</div>
              <div className="text-gray-400 text-sm">Students Reached</div>
            </div>
            <div className="glass-card rounded-lg p-4 text-center">
              <Globe className="w-8 h-8 text-blue-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">50+</div>
              <div className="text-gray-400 text-sm">Schools Visited</div>
            </div>
          </div>
        </div>
      ),
    },
  ]

  return (
    <section id="timeline" className="bg-black">
      <Timeline data={data} />
    </section>
  )
}

export default TimelineSection
