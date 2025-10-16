"use client";

import { Button } from '@/components/ui/button';

export default function Hero() {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center px-6 lg:px-24 xl:px-32">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-primary font-mono text-base md:text-lg mb-5" data-testid="text-greeting">
          Hi, my name is
        </h1>
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-3" data-testid="text-name">
          Franco Healy.
        </h2>
        <h3 className="text-4xl md:text-5xl lg:text-4xl font-bold text-muted-foreground mb-6" data-testid="text-tagline">
          Full stack engineer.
        </h3>
        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl leading-relaxed" data-testid="text-intro">
          Senior full-stack engineer with deep expertise in React / Next.js, Python and AI. 
        </p>
        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mb-12 leading-relaxed" data-testid="text-intro">
          I build fast, scalable web applications with clean architecture and focus on delivering business value through elegant, maintainable code.
        </p>
        <Button 
          size="lg" 
          className="border-primary hover:bg-primary hover:text-primary-foreground"
          onClick={scrollToContact}
          data-testid="button-get-in-touch"
        >
          Get In Touch
        </Button>
      </div>
    </section>
  );
}
