import MarqueeComponent from "@/components/common/Marquee";
import Footer from "@/components/footers/Footer";
import Header from "@/components/headers/Header";
import Breadcumb from "@/components/team/Banner";
import Contact from "@/components/team/Contact";

import Features from "@/components/homes/common/Features";
import React from "react";

export const metadata = {
  title: "Explore Unique Features | LifeLabyrinth Product Range",
  description: "Dive into the cutting-edge features of LifeLabyrinth products. Discover how our innovative solutions can empower your health, productivity, and well-being journey.",
  keywords: "product features, innovative solutions, LifeLabyrinth, health empowerment, productivity boost, wellness technology",
  canonical: "/features",
  social: {
    ogTitle: "Explore Unique Features | LifeLabyrinth Product Range",
    ogDescription: "Unlock the full potential of LifeLabyrinth products. Explore how our features can transform your approach to health, productivity, and wellness.",
    ogImage: "/favicon.ico",
    twitterCard: "summary_large_image",
  },
};


export default function TeamPage() {
  return (
    <>
      <Header />
      <Breadcumb />
      <Features />
      <Contact />
      <MarqueeComponent />
      <Footer />
    </>
  );
}
