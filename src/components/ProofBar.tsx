import { motion } from "framer-motion";
import { Clock, Palette, Code2, Zap } from "lucide-react";

const proofs = [
  { icon: Clock, label: "4+ Years", sub: "Shipping Real Products" },
  { icon: Palette, label: "Product Thinking", sub: "UI/UX + Design" },
  { icon: Code2, label: "Production Ready", sub: "Fullstack Delivery" },
  { icon: Zap, label: "Built for Impact", sub: "Fast & Reliable" },
];

const ProofBar = () => {
  return (
    <section className="px-6 py-8 sm:py-10">
      <div className="mx-auto grid max-w-xl grid-cols-2 gap-3 sm:grid-cols-4">
        {proofs.map((item, i) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.4 }}
            className="flex min-h-[80px] flex-col items-center justify-center gap-2 rounded-lg border border-border bg-card/80 backdrop-blur-sm px-3 py-4 text-center sm:min-h-0"
          >
            <item.icon className="h-6 w-6 text-primary sm:h-5 sm:w-5" />
            <span className="text-xs font-semibold text-foreground sm:text-sm">{item.label}</span>
            <span className="text-[11px] text-muted-foreground sm:text-xs">{item.sub}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProofBar;
