import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import HomeHero from '@/components/Home/HomeHero'
import HomeAbout from '@/components/Home/HomeAbout'
import HomeService from '@/components/Home/HomeService'
import HomeProject from '@/components/Home/HomeProject'
import HomeFeatures from '@/components/Home/HomeFeatures'
import HomeVideo from '@/components/Home/HomeVideo'
import HomeFloorPlan from '@/components/Home/HomeFloorPlan'
import HomeTestimonial from '@/components/Home/HomeTestimonial'
import HomeFaq from '@/components/Home/HomeFaq'
import HomeAward from '@/components/Home/HomeAward'
import HomeTeamPlan from '@/components/Home/HomeTeamPlan'
import HomeContact from '@/components/Home/HomeContact'
import HomeBlog from '@/components/Home/HomeBlog'
export const metadata = {
  title: 'Home',
  description: 'We help businesses do amazing things since 2010.',
}

export default function HomePage() {
  return (
    <>
      <div className="page-wrapper">
        <Header />
        <div id="smooth-wrapper"> 
          <div id="smooth-content">
            <HomeHero />
            <HomeAbout />
            <HomeService />
            <HomeProject />
            <HomeFeatures />
            <HomeVideo />
            <HomeFloorPlan />
            <HomeTestimonial />
            <HomeFaq />
            <HomeAward />
            <HomeTeamPlan />
            <HomeContact />
            <HomeBlog />
            <Footer />
          </div>
        </div>
      </div>
    </>
  )
}
