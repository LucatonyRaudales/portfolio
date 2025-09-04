import { useState, useEffect } from 'react';

// Types
interface Skill {
  name: string;
  level: number; // 1-100
  category: 'frontend' | 'backend' | 'devops' | 'security' | 'cloud' | 'database' | 'tools';
  icon: string;
  description: string;
}

interface SkillCategory {
  name: string;
  icon: string;
  color: string;
  skills: Skill[];
}

// Data
const skillsData: SkillCategory[] = [
  {
    name: 'Frontend Development',
    icon: '🎨',
    color: 'blue',
    skills: [
      { name: 'React', level: 95, category: 'frontend', icon: '⚛️', description: 'Advanced React development with hooks, context, and performance optimization' },
      { name: 'TypeScript', level: 90, category: 'frontend', icon: '📘', description: 'Strong typing and modern JavaScript features' },
      { name: 'Next.js', level: 85, category: 'frontend', icon: '▲', description: 'Full-stack React framework with SSR and SSG' },
      { name: 'Tailwind CSS', level: 88, category: 'frontend', icon: '🎨', description: 'Utility-first CSS framework for rapid UI development' },
      { name: 'Vue.js', level: 75, category: 'frontend', icon: '💚', description: 'Progressive JavaScript framework' }
    ]
  },
  {
    name: 'Backend Development',
    icon: '⚙️',
    color: 'green',
    skills: [
      { name: 'Node.js', level: 92, category: 'backend', icon: '🟢', description: 'Server-side JavaScript runtime' },
      { name: 'Go', level: 85, category: 'backend', icon: '🐹', description: 'High-performance systems programming' },
      { name: 'Python', level: 88, category: 'backend', icon: '🐍', description: 'Versatile programming for web and automation' },
      { name: 'Rust', level: 70, category: 'backend', icon: '🦀', description: 'Memory-safe systems programming' },
      { name: 'GraphQL', level: 80, category: 'backend', icon: '🔷', description: 'Query language for APIs' }
    ]
  },
  {
    name: 'DevOps & Cloud',
    icon: '☁️',
    color: 'purple',
    skills: [
      { name: 'AWS', level: 90, category: 'cloud', icon: '☁️', description: 'Amazon Web Services cloud platform' },
      { name: 'Kubernetes', level: 85, category: 'devops', icon: '⚓', description: 'Container orchestration platform' },
      { name: 'Docker', level: 88, category: 'devops', icon: '🐳', description: 'Containerization platform' },
      { name: 'Terraform', level: 82, category: 'devops', icon: '🏗️', description: 'Infrastructure as Code' },
      { name: 'Jenkins', level: 78, category: 'devops', icon: '🔧', description: 'CI/CD automation server' }
    ]
  },
  {
    name: 'Security',
    icon: '🔒',
    color: 'red',
    skills: [
      { name: 'Penetration Testing', level: 85, category: 'security', icon: '🎯', description: 'Ethical hacking and vulnerability assessment' },
      { name: 'Security Architecture', level: 88, category: 'security', icon: '🏛️', description: 'Designing secure systems and networks' },
      { name: 'Incident Response', level: 82, category: 'security', icon: '🚨', description: 'Security incident handling and recovery' },
      { name: 'Risk Assessment', level: 85, category: 'security', icon: '⚖️', description: 'Security risk evaluation and mitigation' }
    ]
  },
  {
    name: 'Database & Tools',
    icon: '🗄️',
    color: 'yellow',
    skills: [
      { name: 'PostgreSQL', level: 85, category: 'database', icon: '🐘', description: 'Advanced relational database management' },
      { name: 'MongoDB', level: 80, category: 'database', icon: '🍃', description: 'NoSQL document database' },
      { name: 'Redis', level: 75, category: 'database', icon: '🔴', description: 'In-memory data structure store' },
      { name: 'Git', level: 95, category: 'tools', icon: '📚', description: 'Version control and collaboration' },
      { name: 'Linux', level: 88, category: 'tools', icon: '🐧', description: 'System administration and scripting' }
    ]
  }
];

// Components
const SkillBar = ({ skill }: { skill: Skill }) => {
  const [animatedLevel, setAnimatedLevel] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedLevel(skill.level);
    }, 500);
    return () => clearTimeout(timer);
  }, [skill.level]);

  const getColorClass = (level: number) => {
    if (level >= 90) return 'bg-gradient-to-r from-green-400 to-green-600';
    if (level >= 80) return 'bg-gradient-to-r from-blue-400 to-blue-600';
    if (level >= 70) return 'bg-gradient-to-r from-yellow-400 to-yellow-600';
    return 'bg-gradient-to-r from-red-400 to-red-600';
  };

  return (
    <div className="group bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-4 hover:bg-white/15 transition-all duration-300 hover:scale-105">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center space-x-3">
          <span className="text-2xl">{skill.icon}</span>
          <div>
            <h3 className="text-white font-semibold">{skill.name}</h3>
            <p className="text-gray-400 text-sm">{skill.description}</p>
          </div>
        </div>
        <span className="text-white font-bold text-lg">{skill.level}%</span>
      </div>
      
      <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
        <div 
          className={`h-full transition-all duration-1000 ease-out ${getColorClass(skill.level)}`}
          style={{ width: `${animatedLevel}%` }}
        />
      </div>
    </div>
  );
};

const CategoryCard = ({ category }: { category: SkillCategory }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'blue':
        return {
          bg: 'bg-blue-500/20',
          border: 'border-blue-400/50',
          text: 'text-blue-300',
          glow: 'shadow-blue-500/30'
        };
      case 'green':
        return {
          bg: 'bg-green-500/20',
          border: 'border-green-400/50',
          text: 'text-green-300',
          glow: 'shadow-green-500/30'
        };
      case 'purple':
        return {
          bg: 'bg-purple-500/20',
          border: 'border-purple-400/50',
          text: 'text-purple-300',
          glow: 'shadow-purple-500/30'
        };
      case 'red':
        return {
          bg: 'bg-red-500/20',
          border: 'border-red-400/50',
          text: 'text-red-300',
          glow: 'shadow-red-500/30'
        };
      case 'yellow':
        return {
          bg: 'bg-yellow-500/20',
          border: 'border-yellow-400/50',
          text: 'text-yellow-300',
          glow: 'shadow-yellow-500/30'
        };
      default:
        return {
          bg: 'bg-gray-500/20',
          border: 'border-gray-400/50',
          text: 'text-gray-300',
          glow: 'shadow-gray-500/30'
        };
    }
  };

  const config = getColorClasses(category.color);

  return (
    <div className={`${config.bg} ${config.border} border rounded-xl p-6 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-xl ${config.glow}`}>
      <div 
        className="flex items-center justify-between cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center space-x-3">
          <span className="text-3xl">{category.icon}</span>
          <h2 className={`text-xl font-bold ${config.text}`}>{category.name}</h2>
        </div>
        <div className={`transform transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}>
          <span className="text-2xl">▼</span>
        </div>
      </div>
      
      <div className={`overflow-hidden transition-all duration-500 ${isExpanded ? 'max-h-[1000px] mt-6' : 'max-h-0'}`}>
        <div className="space-y-4">
          {category.skills.map((skill, index) => (
            <SkillBar key={index} skill={skill} />
          ))}
        </div>
      </div>
    </div>
  );
};

const SkillsSection = () => {
  return (
    <div className="snap-start snap-section h-screen w-full flex flex-col justify-center items-center relative overflow-hidden">
      <div className="text-center relative z-20 w-full flex flex-col justify-center items-center mb-8">
        <h1 className="text-4xl font-bold text-white mb-4">
          Technical Skills
        </h1>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">
          Comprehensive expertise across multiple technology domains
        </p>
      </div>
      
      <div className="flex-1 flex flex-col items-center justify-center relative z-20 pb-20 w-full max-w-6xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full">
          {skillsData.map((category, index) => (
            <CategoryCard key={index} category={category} />
          ))}
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center text-gray-400">
          <span className="text-sm mb-2">Scroll Down</span>
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
