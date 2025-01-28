import { Layout } from "@/components/Layout";
import { Hero } from "@/components/Hero";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { EligibleWorks } from "@/components/EligibleWorks";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <WhyChooseUs />
      <EligibleWorks />
    </Layout>
  );
};

export default Index;