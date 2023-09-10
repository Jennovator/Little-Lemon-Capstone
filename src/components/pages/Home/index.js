import React from "react";
import HeroSection from "../Home/HeroSection";
import HighlightSection from "../Home/HighlightSection";
import TestimonialSection from "../Home/TestimonialSection";
import About from "../Home/About";

const Home = () => {
    return(
        <>
            <HeroSection />
            <HighlightSection />
            <TestimonialSection />
            <About />
        </>
    )
}

export default Home;