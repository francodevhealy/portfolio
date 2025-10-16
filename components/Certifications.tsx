"use client";

import { useState } from 'react';
import Image from 'next/image';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

interface Certification {
  name: string;
  issuer: string;
  date: string;
  description: string;
  image: string;
  credentialId?: string;
}

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

  const certifications: Certification[] = [
    {
      name: 'Generative AI for Business with AWS',
      issuer: 'Greate Learning',
      date: 'February 2025',
      description: 'Validated expertise in developing, deploying, and debugging cloud-based applications using AWS. Demonstrated proficiency in core AWS services, best practices, and the AWS shared responsibility model.',
      image: '/Greate _Learning.png',
    },
    {
      name: 'MIT Machine Learning program',
      issuer: 'MIT',
      date: 'Apirl 2024',
      description: 'Certified proficiency in MongoDB development including data modeling, indexing strategies, aggregation framework, and performance optimization for NoSQL databases.',
      image: '/MIT_certificate.png',
    },
    {
      name: 'Meta React Advanced Certification',
      issuer: 'Meta (Facebook)',
      date: 'January 2024',
      description: 'Advanced React development certification covering modern React patterns, hooks, performance optimization, state management, and building production-ready React applications.',
      image: '/cert-react.png',
    }
  ];

  return (
    <section id="certifications" className="py-20 lg:py-32 px-6 lg:px-24 xl:px-32">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 flex items-center gap-4">
          <span className="text-primary font-mono text-2xl">03.</span>
          <span className="text-foreground">Certifications</span>
          <div className="h-px flex-1 bg-border max-w-xs" />
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div 
              key={index}
              onClick={() => setSelectedCert(cert)}
              className="group relative bg-card border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 cursor-pointer"
            >
              {/* Certificate Image */}
              <div className="relative h-48 bg-accent/20 overflow-hidden">
                <Image
                  src={cert.image}
                  alt={`${cert.name} certificate`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Certificate Details */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {cert.name}
                </h3>
                <p className="text-primary font-mono text-sm mb-3">
                  {cert.issuer} • {cert.date}
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                  {cert.description}
                </p>
                {cert.credentialId && (
                  <p className="text-xs font-mono text-muted-foreground/70">
                    ID: {cert.credentialId}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Certificate Image Dialog */}
      <Dialog open={!!selectedCert} onOpenChange={(open) => !open && setSelectedCert(null)}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle className="text-xl font-semibold">
              {selectedCert?.name}
            </DialogTitle>
          </DialogHeader>
          {selectedCert && (
            <div className="relative w-full aspect-[4/3] bg-accent/10 rounded-lg overflow-hidden">
              <Image
                src={selectedCert.image}
                alt={`${selectedCert.name} certificate`}
                fill
                className="object-contain"
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
