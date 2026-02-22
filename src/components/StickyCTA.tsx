import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { useState, useEffect } from "react";

const StickyCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Show after scrolling past hero section (roughly 60vh)
      if (scrollY > windowHeight * 0.6) {
        setIsVisible(true);
        setHasScrolled(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          className="fixed bottom-0 left-0 right-0 z-50 block border-t border-border bg-card/95 backdrop-blur-md sm:hidden"
        >
          <a
            href="#links"
            className="flex min-h-[56px] w-full items-center justify-center gap-2 bg-primary px-6 py-4 text-sm font-semibold text-primary-foreground transition-all active:scale-[0.98]"
          >
            <span>Explore My Work</span>
            <ArrowDown className="h-4 w-4" />
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default StickyCTA;
