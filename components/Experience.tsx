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
      company: 'NIX',
      title: 'Python, Django AI engineer',
      duration: '2023 - 2025',
      responsibilities: [
        'Designed and implemented RESTful APIs using Django Rest Framework to handle user authentication, data management, and third-party integrations.',
        'Optimized database queries with PostgreSQL and Redis caching, improving API response time by over 30%.',
        'Designed custom AI-driven workflows combining Python scripts, OpenAI API, and Django background tasks.',
        'Built and trained machine learning models using PyTorch and TensorFlow for predictive analytics and natural language processing tasks.',
        'Deployed and maintained production environments on AWS with automated CI/CD pipelines using GitHub.'
      ],
    },
    {
      company: 'Fullstack Labs',
      title: 'Sr. React Engineer',
      duration: '2021 - 2023',
      responsibilities: [
        'Led the development of a modular React.js / Next.js frontend architecture with reusable components and optimized rendering for large-scale web applications.',
        'Implemented state management using Redux Toolkit and React Query, improving data consistency and app performance across complex user flows.',
        'Collaborated with backend teams to integrate RESTful and GraphQL APIs, ensuring efficient communication and smooth UI/UX.',
        'Designed and built responsive, pixel-perfect UIs using React, TypeScript, and TailwindCSS, ensuring cross-browser and mobile compatibility.'
      ],
    },
    {
      company: 'Noble Labs',
      title: 'Full stack developer',
      duration: '2018 - 2021',
      responsibilities: [
        'Developed and maintained full-stack web applications using Python (Django / Flask) for backend APIs and React.js for dynamic, responsive front-end interfaces.',
        'Designed RESTful endpoints, integrated PostgreSQL databases, and implemented real-time features using WebSocket and React hooks.',
        'Ensured smooth deployment and performance optimization through AWS / Vercel, Docker, and continuous integration workflows.',
      ],
    },
    {
      company: 'Plavno',
      title: 'Junior web developer',
      duration: '2015 - 2017',
      responsibilities: [
        'Assisted in developing  responsive web pages using React.js and integrating RESTful APIs developed in Python.',
        'Collaborated in implementing user authentication, form validation, and CRUD functionality.',
        'Participated in code reviews, version control with Git, and performance optimization of both frontend and backend.',
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
