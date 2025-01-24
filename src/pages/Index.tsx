import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { EligibleWorks } from "@/components/EligibleWorks";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <WhyChooseUs />
      <EligibleWorks />
      <Footer />
    </div>
  );
};

export default Index;