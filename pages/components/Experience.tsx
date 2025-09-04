import { useState } from 'react';
import AnimatedModal from './AnimatedModal';

// Types
interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  period: string;
  type: 'full-time' | 'contract' | 'freelance' | 'internship';
  description: string;
  achievements: string[];
  technologies: string[];
  logo?: string;
}

// Data
const experiences: Experience[] = [
  {
    id: 'senior-devops-engineer',
    title: 'Senior DevOps Engineer',
    company: 'TechCorp Solutions',
    location: 'Remote',
    period: '2022 - Present',
    type: 'full-time',
    description: 'Leading cloud infrastructure and CI/CD pipeline development for enterprise applications.',
    achievements: [
      'Reduced deployment time by 70% through automated CI/CD pipelines',
      'Implemented Kubernetes clusters serving 10M+ daily requests',
      'Led migration of legacy systems to cloud-native architecture',
      'Established security best practices reducing vulnerabilities by 85%'
    ],
    technologies: ['AWS', 'Kubernetes', 'Terraform', 'Jenkins', 'Docker', 'Python', 'Go']
  },
  {
    id: 'cybersecurity-specialist',
    title: 'Cybersecurity Specialist',
    company: 'SecureTech Inc',
    location: 'San Francisco, CA',
    period: '2021 - 2022',
    type: 'full-time',
    description: 'Conducted security assessments and implemented security measures for financial services.',
    achievements: [
      'Performed 50+ penetration tests identifying critical vulnerabilities',
      'Developed security policies reducing incidents by 60%',
      'Led incident response team during major security breach',
      'Implemented zero-trust architecture for client networks'
    ],
    technologies: ['Python', 'Metasploit', 'Burp Suite', 'SIEM', 'Firewalls', 'IDS/IPS']
  },
  {
    id: 'full-stack-developer',
    title: 'Full-Stack Developer',
    company: 'InnovateLab',
    location: 'New York, NY',
    period: '2020 - 2021',
    type: 'full-time',
    description: 'Developed web applications and mobile solutions for startup clients.',
    achievements: [
      'Built scalable web applications serving 100K+ users',
      'Developed mobile apps with React Native',
      'Implemented real-time features using WebSockets',
      'Optimized application performance reducing load times by 50%'
    ],
    technologies: ['React', 'Node.js', 'MongoDB', 'React Native', 'TypeScript', 'AWS']
  },
  {
    id: 'software-engineer-intern',
    title: 'Software Engineer Intern',
    company: 'StartupXYZ',
    location: 'Austin, TX',
    period: '2019 - 2020',
    type: 'internship',
    description: 'Contributed to development of fintech platform and learned industry best practices.',
    achievements: [
      'Developed payment processing modules',
      'Participated in agile development processes',
      'Contributed to code reviews and testing',
      'Learned modern development tools and practices'
    ],
    technologies: ['JavaScript', 'React', 'Express.js', 'PostgreSQL', 'Git']
  }
];

// Utility Functions
const getTypeConfig = (type: string) => {
  switch (type) {
    case 'full-time':
      return {
        bg: 'bg-green-500/20',
        border: 'border-green-400/50',
        text: 'text-green-300',
        icon: '💼',
        glow: 'shadow-green-500/30'
      };
    case 'contract':
      return {
        bg: 'bg-blue-500/20',
        border: 'border-blue-400/50',
        text: 'text-blue-300',
        icon: '📋',
        glow: 'shadow-blue-500/30'
      };
    case 'freelance':
      return {
        bg: 'bg-purple-500/20',
        border: 'border-purple-400/50',
        text: 'text-purple-300',
        icon: '🚀',
        glow: 'shadow-purple-500/30'
      };
    case 'internship':
      return {
        bg: 'bg-yellow-500/20',
        border: 'border-yellow-400/50',
        text: 'text-yellow-300',
        icon: '🎓',
        glow: 'shadow-yellow-500/30'
      };
    default:
      return {
        bg: 'bg-gray-500/20',
        border: 'border-gray-400/50',
        text: 'text-gray-300',
        icon: '💼',
        glow: 'shadow-gray-500/30'
      };
  }
};

// Components
const TypeBadge = ({ type }: { type: string }) => {
  const config = getTypeConfig(type);
  
  return (
    <div className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold ${config.bg} ${config.border} border ${config.text} shadow-lg ${config.glow} backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:shadow-xl`}>
      <span className="mr-1.5">{config.icon}</span>
      {type.charAt(0).toUpperCase() + type.slice(1).replace('-', ' ')}
    </div>
  );
};

const ExperienceCard = ({ experience, onClick }: { experience: Experience; onClick: (experience: Experience) => void }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div 
      onClick={() => onClick(experience)}
      className="group bg-white/10 backdrop-blur-md border border-white/20 shadow-xl rounded-xl overflow-hidden w-full max-w-4xl mx-auto transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/25 hover:border-white/40 hover:bg-white/15 cursor-pointer"
    >
      <div className="p-6 text-center">
        <div className="mb-4">
          <div className="flex justify-center mb-3">
            <TypeBadge type={experience.type} />
          </div>
          <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors duration-300 mb-2">
            {experience.title}
          </h3>
          <p className="text-blue-300 text-lg font-semibold mb-1">{experience.company}</p>
          <p className="text-gray-400 text-sm mb-2">{experience.location} • {experience.period}</p>
        </div>
        
        <p className="text-gray-200 text-sm leading-relaxed mb-4">{experience.description}</p>
        
        <div className="mb-4">
          <h4 className="text-white text-sm font-semibold mb-2">Key Technologies:</h4>
          <div className="flex flex-wrap gap-2 justify-center">
            {experience.technologies.map((tech, index) => (
              <span key={index} className="px-3 py-1 bg-white/10 rounded-full text-xs text-gray-300 border border-white/20 hover:bg-white/20 transition-colors duration-300">
                {tech}
              </span>
            ))}
          </div>
        </div>
        
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-blue-300 text-sm font-medium hover:text-white transition-colors duration-300 flex items-center space-x-2 mx-auto"
        >
          <span>{isExpanded ? 'Hide' : 'Show'} Achievements</span>
          <span className={`transform transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}>
            ▼
          </span>
        </button>
        
        <div className={`overflow-hidden transition-all duration-500 ${isExpanded ? 'max-h-[500px] mt-4' : 'max-h-0'}`}>
          <div className="space-y-3 text-left">
            <h4 className="text-white text-sm font-semibold text-center">Key Achievements:</h4>
            <ul className="space-y-2">
              {experience.achievements.map((achievement, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <span className="text-green-400 text-sm mt-1">✓</span>
                  <span className="text-gray-200 text-sm">{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

// Experience Detail Modal
const ExperienceDetailModal = ({ experience, isOpen, onClose }: { experience: Experience | null; isOpen: boolean; onClose: () => void }) => {
  if (!experience) return null;

  return (
    <AnimatedModal isOpen={isOpen} onClose={onClose} title={experience.title} size="xl">
      <div className="space-y-6">
        {/* Experience Header */}
        <div className="text-center">
          <div className="text-6xl mb-4">{experience.icon}</div>
          <h3 className="text-3xl font-bold text-white mb-2">{experience.title}</h3>
          <p className="text-gray-300 text-lg">{experience.company}</p>
          <p className="text-blue-400 text-sm font-medium">{experience.period}</p>
        </div>

        {/* Experience Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white/5 rounded-xl p-6 border border-white/10">
            <h4 className="text-white font-semibold mb-3 flex items-center">
              <span className="text-blue-400 mr-2">🏢</span>
              Company
            </h4>
            <p className="text-gray-300">{experience.company}</p>
          </div>

          <div className="bg-white/5 rounded-xl p-6 border border-white/10">
            <h4 className="text-white font-semibold mb-3 flex items-center">
              <span className="text-green-400 mr-2">📅</span>
              Duration
            </h4>
            <p className="text-gray-300">{experience.period}</p>
          </div>
        </div>

        {/* Technologies Used */}
        <div className="bg-white/5 rounded-xl p-6 border border-white/10">
          <h4 className="text-white font-semibold mb-4 flex items-center">
            <span className="text-purple-400 mr-2">💻</span>
            Technologies & Tools
          </h4>
          <div className="flex flex-wrap gap-2">
            {experience.technologies.map((tech, index) => (
              <span key={index} className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm border border-purple-400/30">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Key Achievements */}
        <div className="bg-white/5 rounded-xl p-6 border border-white/10">
          <h4 className="text-white font-semibold mb-4 flex items-center">
            <span className="text-yellow-400 mr-2">🏆</span>
            Key Achievements
          </h4>
          <ul className="space-y-3">
            {experience.achievements.map((achievement, index) => (
              <li key={index} className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-300 leading-relaxed">{achievement}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Description */}
        <div className="bg-white/5 rounded-xl p-6 border border-white/10">
          <h4 className="text-white font-semibold mb-3">Role Description</h4>
          <p className="text-gray-300 leading-relaxed">{experience.description}</p>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center space-x-4 pt-6">
          <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            View Projects
          </button>
          <button className="bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 border border-white/20">
            Contact for Reference
          </button>
        </div>
      </div>
    </AnimatedModal>
  );
};

const ExperienceSection = () => {
  const [selectedExperience, setSelectedExperience] = useState<Experience | null>(null);
  return (
    <div className="snap-start snap-section h-screen w-full flex flex-col justify-center items-center relative overflow-hidden">
      <div className="text-center relative z-20 w-full flex flex-col justify-center items-center mb-8">
        <h1 className="text-4xl font-bold text-white mb-4">
          Professional Experience
        </h1>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">
          Click on any experience to view detailed information
        </p>
      </div>
      
      <div className="flex-1 flex flex-col items-center justify-center relative z-20 pb-20 w-full max-w-5xl px-6">
        <div className="space-y-6 w-full">
          {experiences.map((experience, index) => (
            <div key={experience.id} className="relative">
              {/* Timeline line */}
              {index < experiences.length - 1 && (
                <div className="absolute left-8 top-20 w-0.5 h-16 bg-gradient-to-b from-blue-400 to-purple-400 opacity-30"></div>
              )}
              
              {/* Timeline dot */}
              <div className="absolute left-6 top-6 w-4 h-4 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full border-2 border-white/20"></div>
              
              <div className="ml-16">
                <ExperienceCard 
                  experience={experience} 
                  onClick={setSelectedExperience}
                />
              </div>
            </div>
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

      <ExperienceDetailModal 
        experience={selectedExperience}
        isOpen={selectedExperience !== null}
        onClose={() => setSelectedExperience(null)}
      />
    </div>
  );
};

export default ExperienceSection;
