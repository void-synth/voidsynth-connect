import Hero from "@/components/Hero";
import ProofBar from "@/components/ProofBar";
import LinkCards from "@/components/LinkCards";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";
import ThemeToggle from "@/components/ThemeToggle";
import { useTheme } from "next-themes";

const Index = () => {
  const { theme } = useTheme();
  const bgImage = theme === "light" ? "/light-theme-for-void.jpg" : "/dark-theme-for-void.jpg";

  return (
    <main 
      className="min-h-screen bg-background pb-20 sm:pb-0 relative"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat',
        transition: 'background-image 0.5s ease-in-out',
      }}
    >
      {/* No overlays - background fully visible */}
      
      {/* Theme Toggle Button - Fixed position */}
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>
      
      <div className="relative z-10">
        <Hero />
        <ProofBar />
        <LinkCards />
        <Footer />
      </div>
      
      <StickyCTA />
    </main>
  );
};

export default Index;
