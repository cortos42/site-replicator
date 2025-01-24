import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { EligibleWorks } from "@/components/EligibleWorks";
import { Services } from "@/components/Services";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <WhyChooseUs />
      <EligibleWorks />
      <Services />
      <About />
      <Projects />
      <Footer />
    </div>
  );
};

export default Index;