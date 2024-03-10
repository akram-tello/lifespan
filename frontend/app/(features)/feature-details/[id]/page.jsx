import MarqueeComponent from "@/components/common/Marquee";
import Footer from "@/components/footers/Footer";
import Header from "@/components/headers/Header";
import Contact from "@/components/team/Contact";

import TeamDetails from "@/components/team/FeatureDetails";



export const metadata = {
  title: "Product Details",
};

export default function TeamPageDetails({ params }) {
  return (
    <>
      <Header />
      <TeamDetails teamId={params.id} />
      <Contact />
      <MarqueeComponent />
      <Footer />
    </>
  );
}
