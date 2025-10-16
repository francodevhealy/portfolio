"use client";

import { useState } from 'react';

interface Job {
  company: string;
  title: string;
  duration: string;
  responsibilities: string[];
}

export default function Experience() {
  const [activeTab, setActiveTab] = useState(0);

  const jobs: Job[] = [
    {
      company: 'Techunting America LLC',
      title: 'Ruby on Rails, Full stack engineer',
      duration: '2021 - 2024',
      responsibilities: [
        'Developed and maintained scalable web applications using Ruby on Rails, ensuring robust backend architecture and seamless frontend integration.',
        'Implemented new features, optimized database queries, and improved application performance, resulting in faster load times and higher system reliability.',
        'Collaborated with product managers and designers to translate business requirements into technical solutions, enhancing user experience and streamlining core workflows.',
      ],
    },
    {
      company: 'Innovation Feel',
      title: 'RoR, React.js, Next.js developer',
      duration: '2017 - 2020',
      responsibilities: [
        'Built websites and applications with Ruby on Rails and React.js.',
        'Gained in-depth experience in Ruby full-stack development through various projects.',
        'Worked with mordern JS frameworks such as Next.js and  backend development with node.js frameworks.',
      ],
    },
    {
      company: 'RubyGarage',
      title: 'Junior Ruby on Rails  developer',
      duration: '2015 - 2017',
      responsibilities: [
        'Assisted in maintaining and updating existing Ruby on Rails applications.',
        'Developed small features and components using React and Next.js.',
        'Participated in code reviews and followed team guidelines to improve coding skills.',
      ],
    },
  ];

  const tabHeight = 42;

  return (
    <section id="experience" className="py-20 lg:py-32 px-6 lg:px-24 xl:px-32">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 flex items-center gap-4" data-testid="heading-experience">
          <span className="text-primary font-mono text-2xl">02.</span>
          <span className="text-foreground">Work Experience</span>
          <div className="h-px flex-1 bg-border max-w-xs" />
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-[auto_1fr] gap-8 sm:gap-12">
          {/* Left Column: Company Navigation Tabs */}
          <div className="relative min-w-[200px]" role="tablist">
            <div className="absolute left-0 top-0 h-full w-0.5 bg-border hidden sm:block" />
            
            <div className="flex flex-row sm:flex-col gap-0 overflow-x-auto sm:overflow-x-visible pb-2 sm:pb-0">
              {jobs.map((job, index) => (
                <button
                  key={job.company}
                  role="tab"
                  aria-selected={activeTab === index}
                  className={`relative text-left font-mono text-sm whitespace-nowrap px-5 py-3 transition-all duration-200 ${
                    activeTab === index
                      ? 'text-primary bg-accent/30'
                      : 'text-muted-foreground hover:bg-accent/20 hover:text-primary'
                  }`}
                  onClick={() => setActiveTab(index)}
                  data-testid={`button-company-${index}`}
                >
                  {job.company}
                </button>
              ))}
            </div>
            
            <div 
              className="absolute left-0 top-0 w-24 h-0.5 sm:w-0.5 sm:h-[42px] bg-primary transition-all duration-300 ease-out hidden sm:block"
              style={{
                transform: `translateY(${activeTab * tabHeight}px)`,
              }}
            />
          </div>

          {/* Right Column: Job Details */}
          <div className="min-h-[300px]">
            <div key={activeTab} className="animate-in fade-in duration-300" data-testid={`job-content-${activeTab}`}>
              <h3 className="text-xl font-semibold text-foreground mb-1" data-testid="text-job-title">
                {jobs[activeTab].title}{' '}
                <span className="text-primary">@ {jobs[activeTab].company}</span>
              </h3>
              <p className="font-mono text-sm text-muted-foreground mb-6" data-testid="text-job-duration">
                {jobs[activeTab].duration}
              </p>
              <ul className="space-y-4">
                {jobs[activeTab].responsibilities.map((item, idx) => (
                  <li key={idx} className="flex gap-3" data-testid={`responsibility-${idx}`}>
                    <span className="text-primary mt-1 flex-shrink-0">▹</span>
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
