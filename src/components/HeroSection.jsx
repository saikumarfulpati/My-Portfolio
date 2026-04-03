import { ArrowDown, Sparkles } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 hero-gradient-bg"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6 md:space-y-8">
          <p className="opacity-0 animate-fade-in text-sm font-semibold tracking-widest uppercase text-primary/90">
            Junior Software Engineer · Full-Stack Developer
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance">
            <span className="opacity-0 animate-fade-in text-foreground">Hi, I'm </span>
            <span className="text-gradient-hero opacity-0 animate-fade-in-delay-1">
              Saikumar Fulpati
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed opacity-0 animate-fade-in-delay-3">
            I develop full-stack web applications, build RESTful APIs, and design database schemas. B.Tech in Electronics from WIT Solapur · Previously at Kshiyarise Technologies.
          </p>

          <div className="flex flex-wrap gap-4 justify-center pt-2 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button inline-flex items-center gap-2">
              <Sparkles className="h-4 w-4" />
              View My Work
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-full border-2 border-primary/40 text-foreground font-medium tracking-wide hover:bg-primary/10 hover:border-primary/60 transition-all duration-300 inline-flex items-center"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 animate-bounce">
        <span className="text-xs font-medium tracking-widest uppercase text-muted-foreground">Scroll</span>
        <div className="w-8 h-10 rounded-full border-2 border-primary/50 flex items-start justify-center p-2">
          <ArrowDown className="h-3 w-3 text-primary" />
        </div>
      </div>
    </section>
  );
};