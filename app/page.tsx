import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import About from "@/components/About"
import DomainSlider from "@/components/DomainSlider"
import Events from "@/components/Events"
import TimelineSection from "@/components/Timeline"
import LeadSlider from "@/components/LeadSlider"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <DomainSlider />
      <LeadSlider />
      <Events />
      <TimelineSection />
      <Footer />
    </main>
  )
}