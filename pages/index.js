import React from "react";
import NavbarStyleFour from "@/components/_App/NavbarStyleFour";
import MainBanner from "@/components/BigdataAnalytics/MainBanner";
import DiscoverArea from "@/components/BigdataAnalytics/DiscoverArea";
import Services from "@/components/BigdataAnalytics/Services";
import BigdataFunFacts from "@/components/BigdataAnalytics/BigdataFunFacts";
import Footer from "@/components/_App/Footer";
import Projects from "@/components/MachineLearning/Projects";
import Features from "@/components/IOT/Features";

const BigdataAnalytics = () => {
  return (
    <>
      <NavbarStyleFour textLogo="white" />
      <MainBanner />
      <Projects />
      <DiscoverArea />
      <Services />
      <BigdataFunFacts />
      <Features />
      <Footer />
    </>
  );
};

export default BigdataAnalytics;
