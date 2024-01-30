import React from "react";
import Saptrishi from "./Saptrishi/Saptrishi";
import Hero from "./Hero";
import Features from "./Features";
import AboutUs from "./AboutUs";
import CardLink from "./CardLink";
import FeaturesShort from "./FeaturesShort";
import LatestNews from "./LatestNews";
import Testimonial from "./Testimonial";
import Gallery from "./Gallery";
import CookieBanner from "../CookieBanner/CookieBanner";
import FAQs from "./FAQs";

function Home() {
  return (
    <div>
      <div className="min-h-screen my-[6rem]">
        <Hero />
      </div>
      <Saptrishi />
      <div>
        <FeaturesShort />
      </div>
      <div>
        <Features />
      </div>
      <div className="">
        <LatestNews />
      </div>
      <div>
        <Testimonial/>
      </div>
      <div>
        <FAQs />
      </div>
      <div>
        <AboutUs />
      </div>
      <div>
        <CardLink />
      </div>
      <Gallery />
      <CookieBanner />
    </div>
  );
}

export default Home;
