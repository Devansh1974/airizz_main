import React from "react";
import HeroSection from "@/components/home/HeroSection";
import StatsBar from "@/components/home/StatsBar";
import ProblemSection from "@/components/home/ProblemSection";
import ServicesGrid from "@/components/home/ServicesGrid";
import IndustriesTabs from "@/components/home/IndustriesTabs";
import TestimonialsCarousel from "@/components/home/TestimonialsCarousel";
import CaseStudyTeaser from "@/components/home/CaseStudyTeaser";
import BottomCTA from "@/components/home/BottomCTA";

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsBar />
      <ProblemSection />
      <ServicesGrid />
      <IndustriesTabs />
      <TestimonialsCarousel />
      <CaseStudyTeaser />
      <BottomCTA />
    </>
  );
}
