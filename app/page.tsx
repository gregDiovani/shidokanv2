import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import HeroSection from '@/components/home/HeroSection'
import WhatIsShidokan from '@/components/home/WhatIsShidokan'
import IdentitySection from '@/components/home/IdentitySection'
import BushidoSection from '@/components/home/BushidoSection'
import ProgramsSection from '@/components/home/ProgramsSection'
import ScheduleSection from '@/components/home/ScheduleSection'
import CTABanner from '@/components/home/CTABanner'
import NewsSection from '@/components/home/NewsSection'
import AboutTeaser from '@/components/home/AboutTeaser'
import DojoSection from '@/components/home/DojoSection'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <WhatIsShidokan />
        <IdentitySection />
        <BushidoSection />
        {/* <ProgramsSection /> */}
        {/* <ScheduleSection /> */}
        <CTABanner
          headline="Step on the Mat"
          subline="Your first class is free. No commitment, no pressure — just real training with real people."
          buttonText="Start Your Training"
          buttonHref="/contact"
        />
        <NewsSection />
        {/* <AboutTeaser /> */}
        <DojoSection />
        <CTABanner
          headline="Train With Purpose"
          subline="Every champion started as a beginner. The only thing standing between you and the mat is the decision to step on it."
          buttonText="Get in Touch"
          buttonHref="/contact"
          dark={false}
        />
      </main>
      <Footer />
    </>
  )
}
