import { motion } from "framer-motion";
import { Github } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative flex min-h-[85vh] flex-col items-center justify-center overflow-hidden px-6 pt-16 pb-12 text-center">

      {/* Floating dots */}
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute top-[20%] left-[15%] h-1.5 w-1.5 rounded-full bg-primary/30"
      />
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="pointer-events-none absolute top-[35%] right-[12%] h-1 w-1 rounded-full bg-primary/20"
      />
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="pointer-events-none absolute bottom-[30%] left-[25%] h-1 w-1 rounded-full bg-primary/25"
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 flex max-w-xl flex-col items-center gap-6 sm:gap-8"
      >
        {/* Logo */}
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative flex h-24 w-24 items-center justify-center sm:h-20 sm:w-20"
          >
            <img 
              src="/logo.svg" 
              alt="VoidSynth Logo" 
              className="w-full h-full object-contain drop-shadow-2xl"
            />
          </motion.div>
        </div>

        <div className="space-y-2 sm:space-y-3">
          <h1 className="text-4xl font-bold tracking-tight font-display text-foreground sm:text-5xl md:text-6xl drop-shadow-md">
            VoidSynth
          </h1>
          <p className="text-base font-medium text-foreground/90 sm:text-lg drop-shadow-sm">
            UI/UX Designer & Fullstack Web Developer
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-5"
        >
          <h2 className="text-2xl font-bold font-display text-foreground sm:text-3xl leading-tight drop-shadow-sm">
            Design you can feel.<br className="hidden sm:block" /> Engineering you can trust.
          </h2>
          <div className="space-y-3 text-sm leading-relaxed text-foreground/90 sm:text-base sm:leading-relaxed drop-shadow-sm">
            <p>
              Four years deep in the trenches, and I've learned one thing: <strong className="text-foreground">great products aren't just pretty — they work.</strong> I blend UI/UX thinking with fullstack delivery so your idea becomes a real, shippable experience.
            </p>
            <p>
              Dive into my{" "}
              <a
                href="https://voidsynth-the-first.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-primary/50 underline-offset-3 transition-all hover:decoration-primary hover:text-primary/90 hover:underline-offset-4 hover:bg-primary/10 hover:px-1 hover:-mx-1 hover:rounded"
              >
                first portfolio
              </a>{" "}
              for the main showcase, explore my{" "}
              <a
                href="https://voidsynth-the-second.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-primary/50 underline-offset-3 transition-all hover:decoration-primary hover:text-primary/90 hover:underline-offset-4 hover:bg-primary/10 hover:px-1 hover:-mx-1 hover:rounded"
              >
                second portfolio
              </a>{" "}
              for deeper case studies and experiments, and check out my{" "}
              <a
                href="https://github.com/void-synth"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-primary/50 underline-offset-3 transition-all hover:decoration-primary hover:text-primary/90 hover:underline-offset-4 hover:bg-primary/10 hover:px-1 hover:-mx-1 hover:rounded"
              >
                GitHub
              </a>{" "}
              to see the code behind the magic.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-3 pt-4"
        >
          <a
            href="#links"
            className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110 active:scale-[0.97] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
          >
            Explore My Work
          </a>
          <a
            href="https://github.com/void-synth"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg border border-border bg-card px-5 py-3 text-sm font-medium text-foreground transition-all hover:bg-surface-hover active:scale-[0.97] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
          >
            <Github className="h-4 w-4" />
            GitHub
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
