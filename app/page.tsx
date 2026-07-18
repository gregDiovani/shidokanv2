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
import FAQSection from '@/components/home/FAQSection'
import T from '@/components/T'
import { getDojoList } from '@/lib/dojo-data'
import { getNewsList } from '@/lib/news-data'

export default async function Home() {
  const dojos = await getDojoList()
  const news = await getNewsList()

  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        {/* <WhatIsShidokan /> */}
        <IdentitySection />
        <BushidoSection />
        {/* <ProgramsSection /> */}
        {/* <ScheduleSection /> */}
        {/* <CTABanner
          headline="Step on the Mat"
          subline="Your first class is free. No commitment, no pressure — just real training with real people."
          buttonText="Start Your Training"
          buttonHref="/contact"
        /> */}
        <NewsSection articles={news} />
        {/* <AboutTeaser /> */}
        <DojoSection dojos={dojos} />
        <FAQSection />
        <CTABanner
          headline={<T id="Berlatih dengan Tujuan" en="Train With Purpose" />}
          subline={
            <T
              id="Setiap juara memulai dari pemula. Satu-satunya yang menghalangimu dari matras adalah keputusan untuk melangkah ke atasnya."
              en="Every champion started as a beginner. The only thing standing between you and the mat is the decision to step on it."
            />
          }
          buttonText={<T id="Hubungi Kami" en="Get in Touch" />}
          buttonHref="/contact"
          dark={false}
        />
      </main>
      <Footer />
    </>
  )
}
