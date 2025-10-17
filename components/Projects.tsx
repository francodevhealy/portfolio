"use client";

import { useState } from 'react';
import { ExternalLink, Github, Folder } from 'lucide-react';
import { Button } from '@/components/ui/button';
import harnessAI from '../attached_assets/generated_images/harnessAI.png';
import dhrHealthImage from '../attached_assets/generated_images/dhrhealth.png';
import glassshopImage from '../attached_assets/generated_images/glass_shop.png';
import farfallaImage from '../attached_assets/generated_images/Farfalla-Home.png';
import roomImage from '../attached_assets/generated_images/Standard-Double-Room.png';
import insuraImage from '../attached_assets/generated_images/insurance_blog.png';

interface Project {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  external?: string;
  image?: string;
  featured?: boolean;
}

export default function Projects() {

  const projects: Project[] = [
    {
      title: 'AI Automation Service',
      description: 'AI SaaS platform for the Devops and Automation . Joined to dev team and played the AI, Python developer role with Python, Django, Pytorch and LLM',
      tech: ['Python', 'React', 'TypeScript', 'Django', 'Pytorch', 'LLM', 'Git'],
      external: 'https://www.harness.io',
      image: harnessAI.src,
      featured: true,
    },
    {
      title: 'HealthCare Platform',
      description: 'HealthCare Platform to find care services. Worked as Python, Django, React.js full stack developer with dev team',
      tech: ['Python', 'Django', 'React.js', 'TypeScript', 'PostgreSQL', 'TailwindCSS', "GraphQL"],
      external: 'https://www.dhrhealth.com',
      image: dhrHealthImage.src,
      featured: true,
    },
    {
      title: 'Glasses Shop',
      description: 'Glasses and SunGlasses online E Shop. Joined as React / Next.js engineer to dev team and built frotend',
      tech: ['React.js', 'Next.js', 'TypeScript', 'TailwindCSS', 'Redux'],
      external: 'https://www.pearle.at',
      image: glassshopImage.src,
      featured: true,
    },
    {
      title: 'Insurance Blog Platform',
      description: 'A blog posting platform of insurance financial topics in US. Built with Python, Django framework.',
      tech: ['Python', 'Django', 'SEO','Social API'],
      external: 'https://insureusafinance.blogspot.com',
      image: insuraImage.src,
      featured: true,
    },
    {
      title: 'Kloster-schaan - Booking Platform',
      description: 'A hotel booking platform, Worked as frontend developer with dev team and built frontend UI and manage the state',
      tech: ['TypeScript', 'Next.js', 'TailwindCSS', 'Redux','Git'],
      image: roomImage.src,
      external: "https://www.kloster-schaan.net",
      featured: true,
    },
    {
      title: 'Farfalla - Cosmetic Goods sales E Commerce',
      description: 'A middle-scale e commerce platform for cosmetic goods. Joined as backend developer to the dev team and built RESTful API',
      tech: ['Python', 'Django', 'Backend Development', 'RESTful API'],
      external: 'https://www.farfalla.ch',
      image: farfallaImage.src,
      featured: true,
    },
  ];

  const featuredProjects = projects.filter(p => p.featured);

  return (
    <section id="work" className="py-20 lg:py-32 px-6 lg:px-24 xl:px-32">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 flex items-center gap-4" data-testid="heading-projects">
          <span className="text-primary font-mono text-2xl">04.</span>
          <span className="text-foreground">My projects</span>
          <div className="h-px flex-1 bg-border max-w-xs" />
        </h2>

        <div className="grid md:grid-cols-2 gap-8 mb-24">
          {featuredProjects.map((project, index) => (
            <div 
              key={project.title} 
              className="flex flex-col hover-elevate active-elevate-2 transition-all duration-300 hover:-translate-y-2 rounded-md overflow-hidden bg-card"
              data-testid={`featured-project-${index}`}
            >
              {/* Project Image Card */}
              <div className="relative group overflow-hidden aspect-[16/10]">
                {project.image && (
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-all duration-300 group-hover:scale-105"
                    data-testid={`img-project-${index}`}
                  />
                )}
                <div className="absolute inset-0 bg-primary/30 group-hover:bg-primary/10 transition-all duration-300 mix-blend-multiply" />
              </div>

              {/* Project Description */}
              <div className="p-6 flex flex-col flex-1 space-y-3">
                <p className="text-primary font-mono text-sm" data-testid={`text-featured-${index}`}>Featured Project</p>
                <h3 className="text-xl font-bold text-foreground" data-testid={`text-project-title-${index}`}>{project.title}</h3>
                
                <p className="text-muted-foreground flex-1" data-testid={`text-project-desc-${index}`}>{project.description}</p>
                
                {/* Tech Stack */}
                <ul className="flex gap-3 flex-wrap font-mono text-sm text-muted-foreground">
                  {project.tech.map(tech => (
                    <li key={tech} data-testid={`tech-${tech.toLowerCase()}`}>{tech}</li>
                  ))}
                </ul>
                
                {/* Links */}
                <div className="flex gap-4 pt-2">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" data-testid={`link-github-${index}`}>
                      <Github className="h-5 w-5" />
                    </a>
                  )}
                  {project.external && (
                    <a href={project.external} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" data-testid={`link-external-${index}`}>
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
