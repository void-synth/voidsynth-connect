import { motion } from "framer-motion";
import { ExternalLink, Github, Layout, Layers, Mail, Copy, Check } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const links = [
  {
    title: "Official Portfolio",
    description: "Main showcase — selected work, design thinking, and product snapshots.",
    context: "Official portfolio (Main work)",
    url: "https://voidsynth-the-first.vercel.app",
    icon: Layout,
  },
  {
    title: "Experimental Portfolio",
    description: "Advanced builds — deeper case studies, experiments, and cutting-edge work.",
    context: "Experimental portfolio (Advanced builds)",
    url: "https://voidsynth-the-second.vercel.app",
    icon: Layers,
  },
  {
    title: "GitHub",
    description: "Code, projects, and open-source work.",
    context: "See the code behind the magic",
    url: "https://github.com/void-synth",
    icon: Github,
  },
];

const EMAIL = "voidsynth6@gmail.com";

const LinkCards = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    await navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    toast.success("Email copied!");
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="links" className="px-6 py-10">
      <div className="mx-auto flex max-w-xl flex-col gap-3">
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-2 text-center text-xs font-semibold uppercase tracking-widest text-foreground/70"
        >
          Quick Links
        </motion.h3>

        {links.map((link, i) => (
          <motion.a
            key={link.title}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.4 }}
            className="group flex min-h-[80px] items-center gap-4 rounded-lg border border-border bg-card/80 backdrop-blur-sm p-4 transition-all hover:bg-card/90 hover:backdrop-blur-md hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/10 active:scale-[0.98] glow-border hover:glow-border-hover focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
          >
            <motion.div 
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-secondary text-primary sm:h-10 sm:w-10"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <link.icon className="h-6 w-6 sm:h-5 sm:w-5 transition-transform group-hover:scale-110" />
            </motion.div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-foreground sm:text-base group-hover:text-primary transition-colors">{link.title}</p>
              <p className="text-xs text-muted-foreground sm:text-sm line-clamp-1">{link.description}</p>
              <p className="text-[10px] text-primary/70 mt-0.5 font-medium">{link.context}</p>
            </div>
            <motion.div
              whileHover={{ x: 2, y: -2 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <ExternalLink className="h-5 w-5 shrink-0 text-muted-foreground transition-colors group-hover:text-primary group-hover:scale-110 sm:h-4 sm:w-4" />
            </motion.div>
          </motion.a>
        ))}

        {/* Contact card */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.24, duration: 0.4 }}
          className="flex min-h-[72px] items-center gap-4 rounded-lg border border-border bg-card/80 backdrop-blur-sm p-4 sm:min-h-0"
        >
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-secondary text-primary sm:h-10 sm:w-10">
            <Mail className="h-6 w-6 sm:h-5 sm:w-5" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-foreground sm:text-base">Contact</p>
            <p className="text-xs text-muted-foreground truncate sm:text-sm">{EMAIL}</p>
          </div>
          <button
            onClick={copyEmail}
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-border bg-secondary text-muted-foreground transition-all hover:text-primary hover:bg-surface-hover active:scale-95 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background sm:h-9 sm:w-9"
            aria-label="Copy email"
          >
            {copied ? <Check className="h-5 w-5 text-primary sm:h-4 sm:w-4" /> : <Copy className="h-5 w-5 sm:h-4 sm:w-4" />}
          </button>
        </motion.div>

        {/* Tech chips */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
          {["React", "Next.js", "TypeScript", "Django", "Node.js", "Tailwind"].map((t) => (
            <span
              key={t}
              className="rounded-full border border-border bg-secondary px-3 py-1 text-[11px] font-medium text-muted-foreground"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LinkCards;
