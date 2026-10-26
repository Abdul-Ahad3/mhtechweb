import Hero from "@/components/home/Hero";
import TrustedBy from "@/components/home/TrustedBy";
import Capabilities from "@/components/home/Capabilities";
import FeatureProduct from "@/components/home/FeatureProduct";
import SelectedWork from "@/components/home/SelectedWork";
import EngineeringProcess from "@/components/home/EnggProcess";
import ContactCTA from "@/components/home/ContactCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustedBy />
      <Capabilities />
      <FeatureProduct />
      <SelectedWork />
      <EngineeringProcess />
      <ContactCTA />
    </>
  );
}