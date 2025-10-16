import profileImage from '../attached_assets/generated_images/myphoto.jpeg';

export default function About() {
  const skills = [
    'Ruby',
    'Ruby on Rails',
    'JavaScript',
    'TypeScript',
    'React',
    'Next.js',
    'Node.js',
    'PostgreSQL',
    'MongoDB',
    'Tailwind CSS',
    'GraphQL',
    'AWS',
    'Vercel'
  ];

  return (
    <section id="about" className="py-20 lg:py-32 px-6 lg:px-24 xl:px-32">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 flex items-center gap-4" data-testid="heading-about">
          <span className="text-primary font-mono text-2xl">01.</span>
          <span className="text-foreground">About Me</span>
          <div className="h-px flex-1 bg-border max-w-xs" />
        </h2>

        <div className="grid md:grid-cols-[2fr,1fr] gap-12 items-start">
          <div className="space-y-4 text-muted-foreground" data-testid="text-about-content">
            <p>
              Hello! I'm Serhii Tsynailo, a software engineer based in Varash, Ukraine. I’m a senior full-stack engineer who loves crafting smooth, high-performance apps using Ruby on Rails, React, and Next.js. 
              I care about writing clean code, solving complex problems, and turning ideas into products people actually enjoy.
            </p>
            <p>
              Through my experience as a Ruby on Rails engineer across multiple companies, I have gained deep expertise in both backend and frontend development.
            </p>
            <p>
              Here are a few technologies I've been working with a lot:
            </p>
            <ul className="grid grid-cols-2 gap-2 mt-4">
              {skills.map((skill) => (
                <li key={skill} className="flex items-center gap-2" data-testid={`skill-${skill.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}>
                  <span className="text-primary">▹</span>
                  <span className="font-mono text-sm">{skill}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative group">
            <div className="relative z-10 rounded-md overflow-hidden">
              <img 
                src={profileImage.src} 
                alt="Profile" 
                className="w-full aspect-square object-cover rounded-md transition-all duration-300 grayscale group-hover:grayscale-0"
                data-testid="img-profile"
              />
              <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-all duration-300 rounded-md" />
            </div>
            <div className="absolute inset-0 border-2 border-primary rounded-md translate-x-4 translate-y-4 -z-10 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform duration-300" />
          </div>
        </div>
      </div>
    </section>
  );
}
