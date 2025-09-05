import { useState, useEffect } from 'react';
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
  icon: string;
}

// Data
const experiences: Experience[] = [
  {
    id: 'security-analyst',
    title: 'Security Analyst',
    company: 'Remote',
    location: 'Remote',
    period: 'Jan 2025 - Present',
    type: 'full-time',
    description: 'Specialized in cyber defense and red team techniques and tools, focusing on detection, response, and controlled exploitation of vulnerabilities.',
    achievements: [
      'Actively participated in bug bounty programs',
      'Assessed security of web applications, APIs, and corporate systems',
      'Applied OWASP and MITRE ATT&CK methodologies',
      'Focused on detection, response, and controlled exploitation of vulnerabilities'
    ],
    technologies: ['OWASP', 'MITRE ATT&CK', 'Penetration Testing', 'Bug Bounty', 'Security Assessment', 'Red Team Tools'],
    icon: '🔒'
  },
  {
    id: 'backend-lead-teravision',
    title: 'Backend Lead',
    company: 'Teravision Technologies',
    location: 'Remote',
    period: 'Jan 2024 - July 2025',
    type: 'full-time',
    description: 'Led backend development team, modernized MongoDB architecture, and improved system performance for 200+ daily users.',
    achievements: [
      'Modernized MongoDB schema architecture, reducing query retrieval times by 45%',
      'Led 15+ peer-reviews per week and coached 6 engineers',
      'Cut critical defects by 40% and slashed P95 latency by 27%',
      'Improved backend performance by 27% and overall code quality'
    ],
    technologies: ['MongoDB', 'Node.js', 'Backend Architecture', 'Performance Optimization', 'Code Review', 'Team Leadership'],
    icon: '⚙️'
  },
  {
    id: 'blockchain-engineer-multipaga',
    title: 'Blockchain Engineer',
    company: 'Multipaga',
    location: 'Remote',
    period: 'Jun 2024 - Jan 2025',
    type: 'contract',
    description: 'Designed and built blockchain-powered remittance platform using Rust and Cosmos SDK for fast, low-cost international transfers.',
    achievements: [
      'Built blockchain-powered remittance platform using Rust and Cosmos SDK',
      'Engineered Solana smart contracts reducing transaction costs by 28%',
      'Enabled real-time settlements for cross-border payments',
      'Passed two security audits with zero critical findings',
      'Integrated decentralized infrastructure with traditional banking systems'
    ],
    technologies: ['Rust', 'Cosmos SDK', 'Solana', 'Blockchain', 'Smart Contracts', 'Web3', 'Cross-border Payments'],
    icon: '⛓️'
  },
  {
    id: 'founder-hindra',
    title: 'Founder & Developer',
    company: 'Hindra',
    location: 'Honduras',
    period: 'Sep 2022 - Present',
    type: 'freelance',
    description: 'Founded tech solutions company, partnered with startups to develop backend-heavy products and re-architect cloud infrastructure.',
    achievements: [
      'Partnered with 3+ startups to develop backend-heavy products',
      'Architected production-grade microservice system using Golang, PostgreSQL, and gRPC',
      'Improved API response times by 15% through microservice architecture',
      'Designed multi-environment IaC setups via Terraform, cutting manual ops by 15 hours/week',
      'Delivered scalable Flutter app with real-time sync and in-app payments',
      'Engineered resilient GraphQL client-server architecture with advanced security controls'
    ],
    technologies: ['Golang', 'PostgreSQL', 'gRPC', 'Terraform', 'Flutter', 'GraphQL', 'AWS', 'Docker', 'Microservices'],
    icon: '🚀'
  },
  {
    id: 'devops-engineer-scrummers',
    title: 'DevOps Engineer',
    company: 'Scrummers',
    location: 'Remote',
    period: 'May 2021 - Apr 2023',
    type: 'full-time',
    description: 'Engineered and deployed multi-cloud infrastructure across AWS and GCP using Terraform, Docker, and Kubernetes.',
    achievements: [
      'Deployed multi-cloud infrastructure across AWS and GCP',
      'Reduced infrastructure costs by 40% and deployment times by 25%',
      'Configured Prometheus/Grafana monitoring systems',
      'Set up PostgreSQL/MySQL clusters for high availability',
      'Automated CI/CD pipelines and infrastructure management'
    ],
    technologies: ['AWS', 'GCP', 'Terraform', 'Docker', 'Kubernetes', 'Prometheus', 'Grafana', 'PostgreSQL', 'MySQL'],
    icon: '☁️'
  },
  {
    id: 'flutter-developer-alquila',
    title: 'Flutter Developer',
    company: 'Alquila Tu Cancha',
    location: 'Argentina (Remote)',
    period: 'Nov 2020 - May 2021',
    type: 'contract',
    description: 'Maintained and implemented new features in a cross-platform mobile app using Flutter and Firebase.',
    achievements: [
      'Maintained cross-platform mobile application',
      'Implemented new features and functionality',
      'Integrated Firebase services for backend functionality',
      'Ensured app stability and performance across platforms'
    ],
    technologies: ['Flutter', 'Firebase', 'Mobile Development', 'Cross-platform', 'Dart'],
    icon: '📱'
  },
  {
    id: 'technical-leader-hani',
    title: 'Technical Leader',
    company: 'Hani Market',
    location: 'Honduras',
    period: 'Apr 2020 - Nov 2020',
    type: 'full-time',
    description: 'Led a team of 8 developers to deliver a full-stack e-commerce platform using modern web technologies.',
    achievements: [
      'Led team of 8 developers in full-stack e-commerce platform development',
      'Delivered complete e-commerce solution from frontend to backend',
      'Implemented modern web technologies and best practices',
      'Managed project timeline and technical deliverables'
    ],
    technologies: ['React.js', 'Node.js', 'TailwindCSS', 'MongoDB', 'AWS', 'Team Leadership'],
    icon: '🛒'
  },
  {
    id: 'software-engineer-iqneting',
    title: 'Software Engineer',
    company: 'IQneting',
    location: 'Mexico (Remote)',
    period: 'Sep 2019 - Apr 2020',
    type: 'contract',
    description: 'Collaborated directly with Mexico-based clients to define requirements and deliver software solutions.',
    achievements: [
      'Collaborated with Mexico-based clients on software projects',
      'Defined technical requirements and specifications',
      'Delivered custom software solutions',
      'Maintained client relationships and project communication'
    ],
    technologies: ['Software Development', 'Client Relations', 'Requirements Analysis', 'Custom Solutions'],
    icon: '💻'
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
  return (
    <div 
      onClick={() => onClick(experience)}
      className="group bg-white/10 backdrop-blur-md border border-white/20 shadow-xl rounded-xl overflow-hidden w-full max-w-[400px] mx-auto transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 hover:border-white/40 hover:bg-white/15 cursor-pointer"
    >
      <div className="p-6">
        {/* Header */}
        <div className="text-center mb-4">
          <div className="flex justify-center mb-3">
            <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
              {experience.icon}
            </div>
          </div>
          
          <div className="flex justify-center mb-2">
            <TypeBadge type={experience.type} />
          </div>
          
          <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300">
            {experience.title}
          </h3>
          
          <p className="text-blue-400 font-semibold text-sm mb-1">{experience.company}</p>
          <p className="text-gray-400 text-xs mb-3">{experience.location} • {experience.period}</p>
        </div>
        
        {/* Description */}
        <p className="text-gray-300 text-sm leading-relaxed mb-4 text-center line-clamp-3">
          {experience.description}
        </p>
        
        {/* Technologies */}
        <div className="flex flex-wrap gap-1.5 justify-center mb-4">
          {experience.technologies.slice(0, 4).map((tech, index) => (
            <span key={index} className="px-2 py-1 bg-white/10 text-white text-xs rounded-full border border-white/20">
              {tech}
            </span>
          ))}
          {experience.technologies.length > 4 && (
            <span className="px-2 py-1 bg-white/10 text-white text-xs rounded-full border border-white/20">
              +{experience.technologies.length - 4}
            </span>
          )}
        </div>
        
        {/* Click indicator */}
        <div className="flex items-center justify-center space-x-2 text-blue-300 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <span className="text-xs font-medium">Click for details</span>
          <span className="text-sm">→</span>
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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const INITIAL_ITEMS_COUNT = 3;

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  return (
    <div className="snap-start snap-section h-screen w-full flex flex-col justify-center items-center relative overflow-hidden bg-gradient-to-br from-violet-900 via-purple-900 to-indigo-900">
      {/* Dynamic background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-72 h-72 bg-violet-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '3s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '6s'}}></div>
        
        {/* Floating experience icons */}
        <div className="absolute top-1/4 left-1/4 text-violet-400/20 animate-bounce" style={{animationDelay: '2s'}}>
          <div className="text-4xl">💼</div>
        </div>
        <div className="absolute top-1/3 right-1/4 text-purple-400/20 animate-bounce" style={{animationDelay: '4s'}}>
          <div className="text-3xl">🏢</div>
        </div>
        <div className="absolute bottom-1/3 left-1/3 text-indigo-400/20 animate-bounce" style={{animationDelay: '6s'}}>
          <div className="text-3xl">📈</div>
        </div>
      </div>
      {/* Header Section */}
      <div className="text-center relative z-20 w-full flex flex-col justify-center items-center pt-8 pb-4">
        <h1 className="text-4xl font-bold text-white mb-4">
          Professional Experience
        </h1>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-6">
          Click on any experience to view detailed information
        </p>
      </div>
      
      {/* Content Section */}
      <div className="flex-1 flex flex-col items-center justify-center relative z-20 pb-16 w-full max-w-7xl px-6">
        {isMobile ? (
          /* Mobile: No cards, just centered content */
          <div className="text-center px-6 mb-8 max-w-2xl">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 shadow-xl">
              <h2 className="text-2xl font-bold text-white mb-4">
                💼 Professional Experience
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                I&apos;ve built a diverse career spanning DevOps engineering, cybersecurity, and full-stack development. My experience includes leading cloud infrastructure projects, implementing security measures, and developing innovative solutions for various industries.
              </p>
              <div className="flex flex-wrap justify-center gap-3 mb-6">
                <div className="bg-blue-500/20 border border-blue-400/30 rounded-full px-4 py-2 text-blue-300 text-sm font-semibold">
                  ☁️ DevOps & Cloud
                </div>
                <div className="bg-green-500/20 border border-green-400/30 rounded-full px-4 py-2 text-green-300 text-sm font-semibold">
                  🔒 Cybersecurity
                </div>
                <div className="bg-purple-500/20 border border-purple-400/30 rounded-full px-4 py-2 text-purple-300 text-sm font-semibold">
                  💻 Full-Stack Development
                </div>
              </div>
              <p className="text-gray-400 text-sm">
                Tap the button below to explore all {experiences.length} professional experiences in detail
              </p>
            </div>
          </div>
        ) : (
          /* Desktop: Show cards */
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 w-full mb-8">
            {experiences.slice(0, INITIAL_ITEMS_COUNT).map((experience, index) => (
              <ExperienceCard 
                key={experience.id}
                experience={experience} 
                onClick={setSelectedExperience}
              />
            ))}
          </div>
        )}
        
        {/* Show All Button */}
        {(isMobile || experiences.length > INITIAL_ITEMS_COUNT) && (
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 text-white font-bold py-3 sm:py-4 px-6 sm:px-12 rounded-full transition-all duration-500 transform hover:scale-110 shadow-xl hover:shadow-2xl text-sm sm:text-lg relative z-10 border border-white/20 hover:border-white/40 backdrop-blur-sm mx-4"
          >
            ✨ {isMobile ? `Explore All ${experiences.length} Experiences` : `Show All Experiences (${experiences.length})`}
          </button>
        )}
      </div>
      
      <ExperienceDetailModal 
        experience={selectedExperience}
        isOpen={selectedExperience !== null}
        onClose={() => setSelectedExperience(null)}
      />

      {/* Show All Modal */}
      <AnimatedModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="All Professional Experiences" size="xl">
        <div className="space-y-6">
          {/* All Experiences Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {experiences.map((experience, index) => (
              <ExperienceCard 
                key={experience.id}
                experience={experience} 
                onClick={(experience) => {
                  setSelectedExperience(experience);
                  setIsModalOpen(false);
                }}
              />
            ))}
          </div>
        </div>
      </AnimatedModal>
    </div>
  );
};

export default ExperienceSection;
