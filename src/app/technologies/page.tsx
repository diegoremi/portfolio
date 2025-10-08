interface Technology {
  name: string;
  icon: string;
  description: string;
}

const languages: Technology[] = [
  { name: 'Python', icon: 'data_object', description: 'Proficient in Python for backend development and scripting.' },
  { name: 'Java', icon: 'coffee', description: 'Experienced in Java for enterprise applications.' },
  { name: 'JavaScript', icon: 'javascript', description: 'Skilled in JavaScript for front-end development.' },
  { name: 'C#', icon: 'code_blocks', description: 'Knowledgeable in C# for game development and applications.' },
];

const frameworks: Technology[] = [
  { name: 'React', icon: 'important_devices', description: 'Experienced in building dynamic UIs with React.' },
  { name: 'Angular', icon: 'web', description: 'Familiar with Angular for structured front-end development.' },
  { name: 'Node.js', icon: 'dns', description: 'Proficient in Node.js for server-side JavaScript.' },
  { name: 'Spring', icon: 'spa', description: 'Knowledgeable in Spring framework for Java applications.' },
];

const tools: Technology[] = [
  { name: 'Git', icon: 'hub', description: 'Version control using Git.' },
  { name: 'Docker', icon: 'deployed_code', description: 'Containerization with Docker.' },
  { name: 'Kubernetes', icon: 'cloud_sync', description: 'Orchestration with Kubernetes.' },
  { name: 'Jenkins', icon: 'construction', description: 'CI/CD pipelines with Jenkins.' },
];

const databases: Technology[] = [
  { name: 'PostgreSQL', icon: 'database', description: 'Relational database management with PostgreSQL.' },
  { name: 'MongoDB', icon: 'eco', description: 'NoSQL database experience with MongoDB.' },
  { name: 'MySQL', icon: 'storage', description: 'Familiar with MySQL for web applications.' },
];

const Section = ({ title, items }: { title: string, items: Technology[] }) => (
  <div>
    <h3 className="text-3xl font-bold text-white mb-8 border-b border-[#4F46E5]/50 pb-4" style={{ fontFamily: "'Syne', sans-serif" }}>{title}</h3>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
      {items.map(item => (
        <div key={item.name} className="flex flex-col gap-6 bg-[#1A1A1A] p-6 rounded-xl border border-[#262626] hover:border-[#4F46E5] transition-all duration-300 transform hover:-translate-y-2">
          <div className="text-center">
            <span className="material-symbols-outlined text-7xl text-[#4F46E5]">{item.icon}</span>
          </div>
          <div className="flex-1 text-center">
            <h4 className="font-bold text-xl mb-2 text-white" style={{ fontFamily: "'Syne', sans-serif" }}>{item.name}</h4>
            <p className="text-sm text-gray-400">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default function TechnologiesPage() {
  return (
    <main className="px-40 flex flex-1 justify-center py-20">
      <div className="layout-content-container flex flex-col w-full max-w-7xl space-y-16">
        <div className="text-center mb-4">
          <h1 className="text-white text-6xl font-bold tracking-tighter" style={{ fontFamily: "'Syne', sans-serif" }}>
            Technologies
          </h1>
        </div>
        <Section title="Programming Languages" items={languages} />
        <Section title="Frameworks" items={frameworks} />
        <Section title="Tools & DevOps" items={tools} />
        <Section title="Databases" items={databases} />
      </div>
    </main>
  );
}