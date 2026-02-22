const Footer = () => {
  return (
    <footer className="relative border-t border-border px-6 py-10 text-center">
      {/* Subtle background blend */}
      <div className="absolute inset-0 bg-background/50 backdrop-blur-[1px] pointer-events-none" />
      <div className="relative mx-auto max-w-xl space-y-4">
        <p className="text-sm text-muted-foreground">
          Built different. Let's build something together.
        </p>
        <div className="flex items-center justify-center gap-4 text-xs text-muted-foreground">
          <a href="https://voidsynth-the-first.vercel.app" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-primary">Portfolio 1</a>
          <span className="text-border">·</span>
          <a href="https://voidsynth-the-second.vercel.app" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-primary">Portfolio 2</a>
          <span className="text-border">·</span>
          <a href="https://github.com/void-synth" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-primary">GitHub</a>
        </div>
        <p className="text-[11px] text-muted-foreground/60">
          © {new Date().getFullYear()} VoidSynth. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
