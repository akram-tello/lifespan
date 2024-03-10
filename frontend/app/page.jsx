import Footer from "@/components/footers/Footer";
import Header from "@/components/headers/Header";
import SearchPopup from "@/components/headers/component/SearchPopup";
import About from "@/components/homes/home/About";
import FeatureAccordion from "@/components/homes/home/FeatureAccorudion";

import Hero from "@/components/homes/home/Hero";
import FeatureProduct from "@/components/homes/home/FeatureProduct";
import Features from "@/components/homes/common/Features";
import Testimonials from "@/components/homes/common/Testimonials";

export const metadata = {
  title: "Lifespan Tracker - Revolutionize Your Health | LifeLabyrinth",
  description: "Discover Lifespan Tracker by LifeLabyrinth, the revolutionary wearable that monitors your health metrics in real-time. Empower your journey to a healthier life today.",
  keywords: "Lifespan Tracker, health wearable, fitness tracking, health monitoring, live healthier, LifeLabyrinth, health empowerment",
  social: {
    ogTitle: "Lifespan Tracker - Revolutionize Your Health | LifeLabyrinth",
    ogDescription: "Unlock the potential of your health with Lifespan Tracker, the cutting-edge wearable that keeps you informed and in control of your health journey.",
    ogImage: "/favicon.ico",
    twitterCard: "summary_large_image",
  },
};

export default function HomePage1() {
  return (
    <>
      <SearchPopup />
      <Header />
      <Hero />
      <About />
      <FeatureAccordion />
      <FeatureProduct />
      <Features />
      <Testimonials />
      <Footer />
    </>
  );
}
