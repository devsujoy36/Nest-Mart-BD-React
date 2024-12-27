import DailyBestSells from "../DailyBestSells/DailyBestSells"
import FeaturedCategories from "../FeaturedCategories/FeaturedCategories"
import Footer from "../Footer/Footer"
import Header from "../Header/Header"
import Hero from "../Hero/Hero"
import PopularProducts from "../PopularProducts/PopularProducts"
import Servicess from "../Servicess/Servicess"
import StayHome from "../StayHome/StayHome"
import TopSelling from "../TopSelling/TopSelling"

const Root = () => {
  return (
    <div>
        <Header/>
        <Hero/>
        <FeaturedCategories/>
        <PopularProducts/>
        <DailyBestSells/>
        <TopSelling/>
        <StayHome/>
        <Servicess/>
        <Footer/>
    </div>
  )
}

export default Root