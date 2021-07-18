import React from 'react'
import FormSection from './FormSection/FormSection'
import HeroSection from './HeroSection/HeroSection'
import MenuSection from './MenuSection/MenuSection'
import SecondBanner from './SecondBanner/SecondBanner'
import HomeGallery from './HomeGallery/HomeGallery'
import ThirdBanner from './ThirdBanner/ThirdBanner'
import FAQSection from './FAQSection/FAQSection'
import FourthBanner from './FourthBanner/FourthBanner'
import TestimonialSection from './TestimonialSection/TestimonialSection'
function Home() {
    return (
        <div>
            <HeroSection />
            <FormSection />
            <SecondBanner />
            <MenuSection />
            <HomeGallery />
            <ThirdBanner />
            <FAQSection />
            <FourthBanner />
            <TestimonialSection />
        </div>
    )
}


export default Home
