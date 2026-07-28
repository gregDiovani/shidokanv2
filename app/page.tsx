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
        <NewsSection articles={news} />
        {/* <AboutTeaser /> */}
        <DojoSection dojos={dojos} />
        <FAQSection />
        <CTABanner dark={false} />
      </main>
      <Footer />
    </>
  )
}
