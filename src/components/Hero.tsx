import { motion } from "framer-motion";
import { Github, Download } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative flex min-h-[85vh] flex-col items-center justify-center overflow-hidden px-6 pt-16 pb-12 text-center">
      {/* Radial glow */}
      <div className="pointer-events-none absolute top-[-20%] left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,hsl(var(--glow)/0.12)_0%,transparent_70%)] blur-2xl" />
      <div className="pointer-events-none absolute bottom-[-10%] right-[-10%] h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle,hsl(var(--glow)/0.06)_0%,transparent_70%)] blur-3xl" />

      {/* Subtle grid */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(hsl(var(--border)/0.1)_1px,transparent_1px),linear-gradient(90deg,hsl(var(--border)/0.1)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_80%)]" />

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
        className="relative z-10 flex max-w-xl flex-col items-center gap-6"
      >
        {/* Avatar circle */}
        <div className="relative">
          <div className="absolute inset-0 animate-pulse rounded-full bg-primary/20 blur-xl" />
          <div className="relative flex h-20 w-20 items-center justify-center rounded-full border border-border bg-card text-3xl font-bold font-display text-primary text-glow">
            VS
          </div>
        </div>

        <div className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tight font-display text-foreground sm:text-5xl">
            VoidSynth
          </h1>
          <p className="text-base font-medium text-muted-foreground">
            UI/UX Designer & Fullstack Web Developer
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-4"
        >
          <h2 className="text-xl font-semibold font-display text-foreground sm:text-2xl text-glow">
            Design you can feel. Engineering you can trust.
          </h2>
          <p className="text-sm leading-relaxed text-secondary-foreground sm:text-base">
            Four years in, I've learned one thing: great products aren't just pretty — they work. I blend UI/UX thinking with fullstack delivery so your idea becomes a real, shippable experience. Browse my{" "}
            <a
              href="https://voidsynth-the-first.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-primary underline decoration-primary/40 underline-offset-2 transition-colors hover:decoration-primary"
            >
              first portfolio
            </a>{" "}
            for the main lane, my{" "}
            <a
              href="https://voidsynth-the-second.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-primary underline decoration-primary/40 underline-offset-2 transition-colors hover:decoration-primary"
            >
              second portfolio
            </a>{" "}
            for extra depth, and my{" "}
            <a
              href="https://github.com/void-synth"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-primary underline decoration-primary/40 underline-offset-2 transition-colors hover:decoration-primary"
            >
              GitHub
            </a>{" "}
            for the code trail.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-3 pt-2"
        >
          <a
            href="#links"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110 active:scale-[0.97]"
          >
            Explore My Work
          </a>
          <a
            href="https://github.com/void-synth"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-5 py-3 text-sm font-medium text-foreground transition-all hover:bg-surface-hover active:scale-[0.97]"
          >
            <Github className="h-4 w-4" />
            GitHub
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-5 py-3 text-sm font-medium text-muted-foreground transition-all hover:text-foreground hover:bg-surface-hover active:scale-[0.97]"
          >
            <Download className="h-4 w-4" />
            Download CV
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
