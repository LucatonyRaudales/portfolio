import { useState, useEffect } from 'react';
import AnimatedModal from './AnimatedModal';

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
const SkillBar = ({ skill, onClick }: { skill: Skill; onClick: (skill: Skill) => void }) => {
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
    <div 
      onClick={() => onClick(skill)}
      className="group bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-4 hover:bg-white/15 transition-all duration-300 hover:scale-105 text-center cursor-pointer"
    >
      <div className="mb-3">
        <div className="flex items-center justify-center space-x-3 mb-2">
          <span className="text-2xl">{skill.icon}</span>
          <h3 className="text-white font-semibold">{skill.name}</h3>
        </div>
        <p className="text-gray-400 text-sm mb-2">{skill.description}</p>
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

const CategoryCard = ({ category, onClick }: { category: SkillCategory; onClick: (category: SkillCategory) => void }) => {
  const getColorClasses = (color: string) => {
    switch (color) {
      case 'blue':
        return {
          bg: 'bg-blue-500/20',
          border: 'border-blue-400/50',
          text: 'text-blue-300',
          glow: 'shadow-blue-500/30',
          gradient: 'from-blue-500 to-blue-600'
        };
      case 'green':
        return {
          bg: 'bg-green-500/20',
          border: 'border-green-400/50',
          text: 'text-green-300',
          glow: 'shadow-green-500/30',
          gradient: 'from-green-500 to-green-600'
        };
      case 'purple':
        return {
          bg: 'bg-purple-500/20',
          border: 'border-purple-400/50',
          text: 'text-purple-300',
          glow: 'shadow-purple-500/30',
          gradient: 'from-purple-500 to-purple-600'
        };
      case 'red':
        return {
          bg: 'bg-red-500/20',
          border: 'border-red-400/50',
          text: 'text-red-300',
          glow: 'shadow-red-500/30',
          gradient: 'from-red-500 to-red-600'
        };
      case 'yellow':
        return {
          bg: 'bg-yellow-500/20',
          border: 'border-yellow-400/50',
          text: 'text-yellow-300',
          glow: 'shadow-yellow-500/30',
          gradient: 'from-yellow-500 to-yellow-600'
        };
      default:
        return {
          bg: 'bg-gray-500/20',
          border: 'border-gray-400/50',
          text: 'text-gray-300',
          glow: 'shadow-gray-500/30',
          gradient: 'from-gray-500 to-gray-600'
        };
    }
  };

  const config = getColorClasses(category.color);

  return (
    <div 
      onClick={() => onClick(category)}
      className={`${config.bg} ${config.border} border rounded-xl p-6 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-xl ${config.glow} cursor-pointer group`}
    >
      <div className="text-center">
        <div className="flex justify-center mb-4">
          <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${config.gradient} flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
            {category.icon}
          </div>
        </div>
        
        <h2 className={`text-xl font-bold ${config.text} mb-2 group-hover:text-white transition-colors duration-300`}>
          {category.name}
        </h2>
        
        <p className="text-gray-400 text-sm mb-4">{category.description}</p>
        
        <div className="flex items-center justify-center space-x-2 mb-4">
          <span className="text-white text-sm font-medium">{category.skills.length} Skills</span>
          <div className="w-1 h-1 bg-white/40 rounded-full"></div>
          <span className="text-white text-sm font-medium">
            {Math.round(category.skills.reduce((acc, skill) => acc + skill.level, 0) / category.skills.length)}% Avg
          </span>
        </div>

        {/* Click to view indicator */}
        <div className="flex items-center justify-center space-x-2 text-blue-300 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <span className="text-sm font-medium">Click to view all skills</span>
          <span className="text-lg">→</span>
        </div>
      </div>
    </div>
  );
};

// Skill Category Modal Component
const SkillCategoryModal = ({ category, isOpen, onClose, onSkillClick }: { category: SkillCategory | null; isOpen: boolean; onClose: () => void; onSkillClick: (skill: Skill) => void }) => {
  if (!category) return null;

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'blue':
        return 'from-blue-500 to-blue-600';
      case 'green':
        return 'from-green-500 to-green-600';
      case 'purple':
        return 'from-purple-500 to-purple-600';
      case 'red':
        return 'from-red-500 to-red-600';
      case 'yellow':
        return 'from-yellow-500 to-yellow-600';
      default:
        return 'from-gray-500 to-gray-600';
    }
  };

  return (
    <AnimatedModal isOpen={isOpen} onClose={onClose} title={category.name} size="xl">
      <div className="space-y-6">
        {/* Category Header */}
        <div className="text-center">
          <div className="text-6xl mb-4">{category.icon}</div>
          <h3 className="text-3xl font-bold text-white mb-2">{category.name}</h3>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">{category.description}</p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {category.skills.map((skill, index) => (
            <div 
              key={index}
              onClick={() => onSkillClick(skill)}
              className="group bg-white/5 backdrop-blur-md border border-white/20 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/25 cursor-pointer"
            >
              {/* Skill Header */}
              <div className="text-center mb-4">
                <div className="text-4xl mb-3">{skill.icon}</div>
                <h4 className="text-white font-bold text-lg mb-2">{skill.name}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{skill.description}</p>
              </div>

              {/* Skill Level */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-white font-semibold text-sm">Proficiency</span>
                  <span className="text-white font-bold text-lg">{skill.level}%</span>
                </div>
                
                <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                  <div 
                    className={`h-full bg-gradient-to-r ${getColorClasses(skill.level >= 90 ? 'green' : skill.level >= 80 ? 'blue' : skill.level >= 70 ? 'yellow' : 'red')} transition-all duration-1000 ease-out`}
                    style={{ width: `${skill.level}%` }}
                  />
                </div>

                {/* Experience Level Badge */}
                <div className="flex justify-center">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    skill.level >= 90 ? 'bg-green-500/20 text-green-300 border border-green-400/30' :
                    skill.level >= 80 ? 'bg-blue-500/20 text-blue-300 border border-blue-400/30' :
                    skill.level >= 70 ? 'bg-yellow-500/20 text-yellow-300 border border-yellow-400/30' :
                    'bg-red-500/20 text-red-300 border border-red-400/30'
                  }`}>
                    {skill.level >= 90 ? 'Expert' : 
                     skill.level >= 80 ? 'Advanced' : 
                     skill.level >= 70 ? 'Intermediate' : 'Beginner'}
                  </span>
                </div>
              </div>

              {/* Skill Status */}
              <div className="mt-4 flex items-center justify-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-green-300 text-sm font-medium">Actively Used</span>
              </div>
            </div>
          ))}
        </div>

        {/* Category Summary */}
        <div className="bg-white/5 rounded-xl p-6 border border-white/10 mt-8">
          <h4 className="text-white font-semibold mb-4 flex items-center">
            <span className="text-blue-400 mr-2">📊</span>
            Category Summary
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-white">{category.skills.length}</div>
              <div className="text-gray-400 text-sm">Total Skills</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">
                {Math.round(category.skills.reduce((acc, skill) => acc + skill.level, 0) / category.skills.length)}%
              </div>
              <div className="text-gray-400 text-sm">Average Proficiency</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">
                {category.skills.filter(skill => skill.level >= 80).length}
              </div>
              <div className="text-gray-400 text-sm">Advanced Skills</div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center space-x-4 pt-6">
          <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            View Related Projects
          </button>
          <button className="bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 border border-white/20">
            Download Resume
          </button>
        </div>
      </div>
    </AnimatedModal>
  );
};

// Skill Detail Modal Component
const SkillDetailModal = ({ skill, isOpen, onClose }: { skill: Skill | null; isOpen: boolean; onClose: () => void }) => {
  if (!skill) return null;

  const getColorClass = (level: number) => {
    if (level >= 90) return 'from-green-400 to-green-600';
    if (level >= 80) return 'from-blue-400 to-blue-600';
    if (level >= 70) return 'from-yellow-400 to-yellow-600';
    return 'from-red-400 to-red-600';
  };

  return (
    <AnimatedModal isOpen={isOpen} onClose={onClose} title={skill.name} size="md">
      <div className="space-y-6">
        {/* Skill Header */}
        <div className="text-center">
          <div className="text-6xl mb-4">{skill.icon}</div>
          <h3 className="text-3xl font-bold text-white mb-2">{skill.name}</h3>
          <p className="text-gray-300 text-lg">{skill.description}</p>
        </div>

        {/* Skill Level */}
        <div className="bg-white/5 rounded-xl p-6 border border-white/10">
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-white font-semibold">Proficiency Level</h4>
            <span className="text-2xl font-bold text-white">{skill.level}%</span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-4 overflow-hidden">
            <div 
              className={`h-full bg-gradient-to-r ${getColorClass(skill.level)} transition-all duration-1000 ease-out`}
              style={{ width: `${skill.level}%` }}
            />
          </div>
        </div>

        {/* Skill Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white/5 rounded-xl p-6 border border-white/10">
            <h4 className="text-white font-semibold mb-3 flex items-center">
              <span className="text-blue-400 mr-2">🎯</span>
              Experience Level
            </h4>
            <p className="text-gray-300">
              {skill.level >= 90 ? 'Expert' : 
               skill.level >= 80 ? 'Advanced' : 
               skill.level >= 70 ? 'Intermediate' : 'Beginner'}
            </p>
          </div>

          <div className="bg-white/5 rounded-xl p-6 border border-white/10">
            <h4 className="text-white font-semibold mb-3 flex items-center">
              <span className="text-green-400 mr-2">⚡</span>
              Status
            </h4>
            <p className="text-green-300">Actively Used</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center space-x-4 pt-6">
          <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            View Projects
          </button>
          <button className="bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 border border-white/20">
            Learn More
          </button>
        </div>
      </div>
    </AnimatedModal>
  );
};

const SkillsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState<SkillCategory | null>(null);
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);

  return (
    <div className="snap-start snap-section h-screen w-full flex flex-col justify-center items-center relative overflow-hidden bg-gradient-to-br from-blue-900 via-cyan-900 to-teal-900">
      {/* Dynamic background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2.5s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-teal-500/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '5s'}}></div>
        
        {/* Floating skill icons */}
        <div className="absolute top-1/4 left-1/4 text-blue-400/20 animate-bounce" style={{animationDelay: '1.5s'}}>
          <div className="text-4xl">⚡</div>
        </div>
        <div className="absolute top-1/3 right-1/4 text-cyan-400/20 animate-bounce" style={{animationDelay: '3s'}}>
          <div className="text-3xl">🔧</div>
        </div>
        <div className="absolute bottom-1/3 left-1/3 text-teal-400/20 animate-bounce" style={{animationDelay: '4.5s'}}>
          <div className="text-3xl">💡</div>
        </div>
      </div>
      <div className="text-center relative z-20 w-full flex flex-col justify-center items-center mb-8">
        <h1 className="text-4xl font-bold text-white mb-4">
          Technical Skills
        </h1>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">
          Click on any category to explore all skills in detail
        </p>
      </div>
      
      <div className="flex-1 flex flex-col items-center justify-center relative z-20 pb-20 w-full max-w-6xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full">
          {skillsData.map((category, index) => (
            <CategoryCard 
              key={index} 
              category={category} 
              onClick={setSelectedCategory}
            />
          ))}
        </div>
      </div>
      
      <SkillCategoryModal 
        category={selectedCategory}
        isOpen={selectedCategory !== null}
        onClose={() => setSelectedCategory(null)}
        onSkillClick={setSelectedSkill}
      />

      <SkillDetailModal 
        skill={selectedSkill}
        isOpen={selectedSkill !== null}
        onClose={() => setSelectedSkill(null)}
      />
    </div>
  );
};

export default SkillsSection;
