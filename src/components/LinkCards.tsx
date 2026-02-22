import { motion } from "framer-motion";
import { ExternalLink, Github, Layout, Layers, Mail, Copy, Check } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const links = [
  {
    title: "Portfolio (The First)",
    description: "My current official website — selected work, design thinking, and product snapshots.",
    url: "https://voidsynth-the-first.vercel.app",
    icon: Layout,
  },
  {
    title: "Portfolio (The Second)",
    description: "Alternative portfolio angle — experiments, deeper case-style presentation, and more builds.",
    url: "https://voidsynth-the-second.vercel.app",
    icon: Layers,
  },
  {
    title: "GitHub",
    description: "Code, projects, and open-source work.",
    url: "https://github.com/void-synth",
    icon: Github,
  },
];

const EMAIL = "umarboluwatife01@gmail.com";

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
          className="mb-2 text-center text-xs font-semibold uppercase tracking-widest text-muted-foreground"
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
            className="group flex items-center gap-4 rounded-lg border border-border bg-card p-4 transition-all hover:bg-surface-hover glow-border hover:glow-border-hover"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-secondary text-primary">
              <link.icon className="h-5 w-5" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-foreground">{link.title}</p>
              <p className="text-xs text-muted-foreground line-clamp-1">{link.description}</p>
            </div>
            <ExternalLink className="h-4 w-4 shrink-0 text-muted-foreground transition-colors group-hover:text-primary" />
          </motion.a>
        ))}

        {/* Contact card */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.24, duration: 0.4 }}
          className="flex items-center gap-4 rounded-lg border border-border bg-card p-4"
        >
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-secondary text-primary">
            <Mail className="h-5 w-5" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-foreground">Contact</p>
            <p className="text-xs text-muted-foreground truncate">{EMAIL}</p>
          </div>
          <button
            onClick={copyEmail}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-border bg-secondary text-muted-foreground transition-all hover:text-primary hover:bg-surface-hover active:scale-95"
            aria-label="Copy email"
          >
            {copied ? <Check className="h-4 w-4 text-primary" /> : <Copy className="h-4 w-4" />}
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
