import Hero from "@/components/Hero";
import ProofBar from "@/components/ProofBar";
import LinkCards from "@/components/LinkCards";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <ProofBar />
      <LinkCards />
      <Footer />
    </main>
  );
};

export default Index;
