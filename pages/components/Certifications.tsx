import { useState } from 'react';
import AnimatedModal from './AnimatedModal';

// Types
interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  image: string;
  category: 'cloud' | 'security' | 'development' | 'devops';
  description: string;
  skills: string[];
  icon: string;
}

interface Study {
  id: string;
  title: string;
  institution: string;
  date: string;
  type: 'degree' | 'course' | 'bootcamp';
  image: string;
  description: string;
  skills: string[];
  icon: string;
  duration: string;
}

// Data
const certifications: Certification[] = [
  {
    id: 'aws-saa',
    title: 'AWS Solutions Architect Associate',
    issuer: 'Amazon Web Services',
    date: '2023',
    credentialId: 'AWS-SAA-123456',
    image: '/aws-logo.png',
    category: 'cloud',
    description: 'Demonstrates ability to design and deploy scalable systems on AWS.',
    skills: ['AWS', 'Cloud Architecture', 'EC2', 'S3', 'RDS', 'Lambda'],
    icon: '☁️'
  },
  {
    id: 'azure-fundamentals',
    title: 'Microsoft Azure Fundamentals',
    issuer: 'Microsoft',
    date: '2023',
    image: '/azure-logo.png',
    category: 'cloud',
    description: 'Foundational knowledge of cloud services and Azure platform.',
    skills: ['Azure', 'Cloud Computing', 'Virtual Machines', 'Storage'],
    icon: '☁️'
  },
  {
    id: 'cissp',
    title: 'Certified Information Systems Security Professional',
    issuer: 'ISC²',
    date: '2022',
    image: '/cissp-logo.png',
    category: 'security',
    description: 'Advanced certification in information security management.',
    skills: ['Security Management', 'Risk Assessment', 'Security Architecture', 'Incident Response'],
    icon: '🔒'
  },
  {
    id: 'ckad',
    title: 'Certified Kubernetes Application Developer',
    issuer: 'Cloud Native Computing Foundation',
    date: '2023',
    image: '/kubernetes-logo.png',
    category: 'devops',
    description: 'Proficiency in designing, building, and deploying applications on Kubernetes.',
    skills: ['Kubernetes', 'Container Orchestration', 'Docker', 'Microservices'],
    icon: '⚙️'
  }
];

const studies: Study[] = [
  {
    id: 'computer-science',
    title: 'Bachelor of Computer Science',
    institution: 'University of Technology',
    date: '2018-2022',
    type: 'degree',
    image: '/university-logo.png',
    description: 'Comprehensive study of computer science fundamentals, algorithms, and software engineering.',
    skills: ['Algorithms', 'Data Structures', 'Software Engineering', 'Database Systems', 'Operating Systems'],
    icon: '🎓',
    duration: '4 years'
  },
  {
    id: 'cybersecurity-bootcamp',
    title: 'Cybersecurity Bootcamp',
    institution: 'Tech Academy',
    date: '2022',
    type: 'bootcamp',
    image: '/tech-academy-logo.png',
    description: 'Intensive 6-month program covering ethical hacking, penetration testing, and security analysis.',
    skills: ['Ethical Hacking', 'Penetration Testing', 'Network Security', 'Forensics', 'Incident Response'],
    icon: '🔐',
    duration: '6 months'
  }
];

// Utility Functions
const getCategoryConfig = (category: string) => {
  switch (category) {
    case 'cloud':
      return {
        bg: 'bg-blue-500/20',
        border: 'border-blue-400/50',
        text: 'text-blue-300',
        icon: '☁️',
        glow: 'shadow-blue-500/30'
      };
    case 'security':
      return {
        bg: 'bg-red-500/20',
        border: 'border-red-400/50',
        text: 'text-red-300',
        icon: '🔒',
        glow: 'shadow-red-500/30'
      };
    case 'development':
      return {
        bg: 'bg-green-500/20',
        border: 'border-green-400/50',
        text: 'text-green-300',
        icon: '💻',
        glow: 'shadow-green-500/30'
      };
    case 'devops':
      return {
        bg: 'bg-purple-500/20',
        border: 'border-purple-400/50',
        text: 'text-purple-300',
        icon: '⚙️',
        glow: 'shadow-purple-500/30'
      };
    default:
      return {
        bg: 'bg-gray-500/20',
        border: 'border-gray-400/50',
        text: 'text-gray-300',
        icon: '📜',
        glow: 'shadow-gray-500/30'
      };
  }
};

const getTypeConfig = (type: string) => {
  switch (type) {
    case 'degree':
      return {
        bg: 'bg-yellow-500/20',
        border: 'border-yellow-400/50',
        text: 'text-yellow-300',
        icon: '🎓',
        glow: 'shadow-yellow-500/30'
      };
    case 'course':
      return {
        bg: 'bg-indigo-500/20',
        border: 'border-indigo-400/50',
        text: 'text-indigo-300',
        icon: '📚',
        glow: 'shadow-indigo-500/30'
      };
    case 'bootcamp':
      return {
        bg: 'bg-orange-500/20',
        border: 'border-orange-400/50',
        text: 'text-orange-300',
        icon: '🚀',
        glow: 'shadow-orange-500/30'
      };
    default:
      return {
        bg: 'bg-gray-500/20',
        border: 'border-gray-400/50',
        text: 'text-gray-300',
        icon: '📖',
        glow: 'shadow-gray-500/30'
      };
  }
};

// Components
const CategoryBadge = ({ category }: { category: string }) => {
  const config = getCategoryConfig(category);
  
  return (
    <div className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold ${config.bg} ${config.border} border ${config.text} shadow-lg ${config.glow} backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:shadow-xl`}>
      <span className="mr-1.5">{config.icon}</span>
      {category.charAt(0).toUpperCase() + category.slice(1)}
    </div>
  );
};

const TypeBadge = ({ type }: { type: string }) => {
  const config = getTypeConfig(type);
  
  return (
    <div className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold ${config.bg} ${config.border} border ${config.text} shadow-lg ${config.glow} backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:shadow-xl`}>
      <span className="mr-1.5">{config.icon}</span>
      {type.charAt(0).toUpperCase() + type.slice(1)}
    </div>
  );
};

const CertificationCard = ({ certification, onClick }: { certification: Certification; onClick: (certification: Certification) => void }) => {
  return (
    <div 
      onClick={() => onClick(certification)}
      className="group bg-white/10 backdrop-blur-md border border-white/20 shadow-xl rounded-xl overflow-hidden w-full max-w-[350px] mx-auto transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 hover:border-white/40 hover:bg-white/15 cursor-pointer"
    >
      <div className="p-6 text-center">
        <div className="mb-4">
          <div className="flex justify-center mb-3">
            <CategoryBadge category={certification.category} />
          </div>
          <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300">
            {certification.title}
          </h3>
          <p className="text-blue-300 text-sm font-medium mb-2">{certification.issuer}</p>
          <p className="text-gray-400 text-xs mb-3">{certification.date}</p>
        </div>
        
        <p className="text-gray-200 text-sm leading-relaxed mb-4">{certification.description}</p>
        
        <div className="mb-4">
          <h4 className="text-white text-sm font-semibold mb-2">Skills:</h4>
          <div className="flex flex-wrap gap-2 justify-center">
            {certification.skills.map((skill, index) => (
              <span key={index} className="px-2 py-1 bg-white/10 rounded-full text-xs text-gray-300 border border-white/20">
                {skill}
              </span>
            ))}
          </div>
        </div>
        
        {certification.credentialId && (
          <div className="text-xs text-gray-400 border-t border-white/20 pt-3">
            Credential ID: {certification.credentialId}
          </div>
        )}
      </div>
    </div>
  );
};

const StudyCard = ({ study, onClick }: { study: Study; onClick: (study: Study) => void }) => {
  return (
    <div 
      onClick={() => onClick(study)}
      className="group bg-white/10 backdrop-blur-md border border-white/20 shadow-xl rounded-xl overflow-hidden w-full max-w-[350px] mx-auto transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/25 hover:border-white/40 hover:bg-white/15 cursor-pointer"
    >
      <div className="p-6 text-center">
        <div className="mb-4">
          <div className="flex justify-center mb-3">
            <TypeBadge type={study.type} />
          </div>
          <h3 className="text-lg font-bold text-white mb-2 group-hover:text-green-300 transition-colors duration-300">
            {study.title}
          </h3>
          <p className="text-green-300 text-sm font-medium mb-2">{study.institution}</p>
          <p className="text-gray-400 text-xs mb-3">{study.date}</p>
        </div>
        
        <p className="text-gray-200 text-sm leading-relaxed mb-4">{study.description}</p>
        
        <div>
          <h4 className="text-white text-sm font-semibold mb-2">Skills Gained:</h4>
          <div className="flex flex-wrap gap-2 justify-center">
            {study.skills.map((skill, index) => (
              <span key={index} className="px-2 py-1 bg-white/10 rounded-full text-xs text-gray-300 border border-white/20">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Certification Detail Modal
const CertificationDetailModal = ({ certification, isOpen, onClose }: { certification: Certification | null; isOpen: boolean; onClose: () => void }) => {
  if (!certification) return null;

  return (
    <AnimatedModal isOpen={isOpen} onClose={onClose} title={certification.title} size="lg">
      <div className="space-y-6">
        {/* Certification Header */}
        <div className="text-center">
          <div className="text-6xl mb-4">{certification.icon}</div>
          <h3 className="text-3xl font-bold text-white mb-2">{certification.title}</h3>
          <p className="text-gray-300 text-lg">{certification.issuer}</p>
        </div>

        {/* Certification Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white/5 rounded-xl p-6 border border-white/10">
            <h4 className="text-white font-semibold mb-3 flex items-center">
              <span className="text-blue-400 mr-2">📅</span>
              Date Obtained
            </h4>
            <p className="text-gray-300">{certification.date}</p>
          </div>

          <div className="bg-white/5 rounded-xl p-6 border border-white/10">
            <h4 className="text-white font-semibold mb-3 flex items-center">
              <span className="text-green-400 mr-2">🏆</span>
              Category
            </h4>
            <p className="text-gray-300">{certification.category}</p>
          </div>
        </div>

        {/* Skills Gained */}
        <div className="bg-white/5 rounded-xl p-6 border border-white/10">
          <h4 className="text-white font-semibold mb-4 flex items-center">
            <span className="text-purple-400 mr-2">💡</span>
            Skills & Knowledge Gained
          </h4>
          <div className="flex flex-wrap gap-2">
            {certification.skills.map((skill, index) => (
              <span key={index} className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm border border-purple-400/30">
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Description */}
        <div className="bg-white/5 rounded-xl p-6 border border-white/10">
          <h4 className="text-white font-semibold mb-3">Description</h4>
          <p className="text-gray-300 leading-relaxed">{certification.description}</p>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center space-x-4 pt-6">
          <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            View Certificate
          </button>
          <button className="bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 border border-white/20">
            Learn More
          </button>
        </div>
      </div>
    </AnimatedModal>
  );
};

// Study Detail Modal
const StudyDetailModal = ({ study, isOpen, onClose }: { study: Study | null; isOpen: boolean; onClose: () => void }) => {
  if (!study) return null;

  return (
    <AnimatedModal isOpen={isOpen} onClose={onClose} title={study.title} size="lg">
      <div className="space-y-6">
        {/* Study Header */}
        <div className="text-center">
          <div className="text-6xl mb-4">{study.icon}</div>
          <h3 className="text-3xl font-bold text-white mb-2">{study.title}</h3>
          <p className="text-gray-300 text-lg">{study.institution}</p>
        </div>

        {/* Study Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white/5 rounded-xl p-6 border border-white/10">
            <h4 className="text-white font-semibold mb-3 flex items-center">
              <span className="text-blue-400 mr-2">📅</span>
              Duration
            </h4>
            <p className="text-gray-300">{study.duration}</p>
          </div>

          <div className="bg-white/5 rounded-xl p-6 border border-white/10">
            <h4 className="text-white font-semibold mb-3 flex items-center">
              <span className="text-green-400 mr-2">🎓</span>
              Type
            </h4>
            <p className="text-gray-300">{study.type}</p>
          </div>
        </div>

        {/* Skills Gained */}
        <div className="bg-white/5 rounded-xl p-6 border border-white/10">
          <h4 className="text-white font-semibold mb-4 flex items-center">
            <span className="text-purple-400 mr-2">💡</span>
            Skills & Knowledge Gained
          </h4>
          <div className="flex flex-wrap gap-2">
            {study.skills.map((skill, index) => (
              <span key={index} className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm border border-purple-400/30">
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Description */}
        <div className="bg-white/5 rounded-xl p-6 border border-white/10">
          <h4 className="text-white font-semibold mb-3">Description</h4>
          <p className="text-gray-300 leading-relaxed">{study.description}</p>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center space-x-4 pt-6">
          <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            View Certificate
          </button>
          <button className="bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 border border-white/20">
            Learn More
          </button>
        </div>
      </div>
    </AnimatedModal>
  );
};

const CertificationsSection = () => {
  const [activeTab, setActiveTab] = useState<'certifications' | 'studies'>('certifications');
  const [selectedCertification, setSelectedCertification] = useState<Certification | null>(null);
  const [selectedStudy, setSelectedStudy] = useState<Study | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const INITIAL_ITEMS_COUNT = 3;

  return (
    <div className="snap-start snap-section h-screen w-full flex flex-col items-center relative overflow-hidden">
      {/* Header Section */}
      <div className="text-center relative z-20 w-full flex flex-col justify-center items-center pt-8 pb-4">
        <h1 className="text-4xl font-bold text-white mb-4">
          Certifications & Education
        </h1>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-6">
          Click on any certification or study to view detailed information
        </p>
        
        {/* Tab Navigation */}
        <div className="flex bg-white/10 backdrop-blur-md rounded-full p-1 border border-white/20 mb-6">
          <button
            onClick={() => setActiveTab('certifications')}
            className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
              activeTab === 'certifications'
                ? 'bg-blue-500 text-white shadow-lg'
                : 'text-gray-300 hover:text-white'
            }`}
          >
            🏆 Certifications
          </button>
          <button
            onClick={() => setActiveTab('studies')}
            className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
              activeTab === 'studies'
                ? 'bg-green-500 text-white shadow-lg'
                : 'text-gray-300 hover:text-white'
            }`}
          >
            🎓 Education
          </button>
        </div>
      </div>
      
      {/* Content Section */}
      <div className="flex-1 flex flex-col items-center justify-center relative z-20 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6 mb-8 justify-items-center max-w-7xl">
          {activeTab === 'certifications' 
            ? certifications.slice(0, INITIAL_ITEMS_COUNT).map((cert) => (
                <CertificationCard 
                  key={cert.id} 
                  certification={cert} 
                  onClick={setSelectedCertification}
                />
              ))
            : studies.slice(0, INITIAL_ITEMS_COUNT).map((study) => (
                <StudyCard 
                  key={study.id} 
                  study={study} 
                  onClick={setSelectedStudy}
                />
              ))
          }
        </div>
        
        {/* Show All Button */}
        {((activeTab === 'certifications' && certifications.length > INITIAL_ITEMS_COUNT) || 
          (activeTab === 'studies' && studies.length > INITIAL_ITEMS_COUNT)) && (
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 text-white font-bold py-4 px-12 rounded-full transition-all duration-500 transform hover:scale-110 shadow-xl hover:shadow-2xl text-lg relative z-10 border border-white/20 hover:border-white/40 backdrop-blur-sm"
          >
            ✨ Show All {activeTab === 'certifications' ? 'Certifications' : 'Education'} ({activeTab === 'certifications' ? certifications.length : studies.length})
          </button>
        )}
      </div>
      
      <CertificationDetailModal 
        certification={selectedCertification}
        isOpen={selectedCertification !== null}
        onClose={() => setSelectedCertification(null)}
      />

      <StudyDetailModal 
        study={selectedStudy}
        isOpen={selectedStudy !== null}
        onClose={() => setSelectedStudy(null)}
      />

      {/* Show All Modal */}
      <AnimatedModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title={`All ${activeTab === 'certifications' ? 'Certifications' : 'Education'}`} size="xl">
        <div className="space-y-6">
          {/* Tab Navigation in Modal */}
          <div className="flex bg-white/10 backdrop-blur-md rounded-full p-1 border border-white/20 mb-6">
            <button
              onClick={() => setActiveTab('certifications')}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeTab === 'certifications'
                  ? 'bg-blue-500 text-white shadow-lg'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              🏆 Certifications
            </button>
            <button
              onClick={() => setActiveTab('studies')}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeTab === 'studies'
                  ? 'bg-green-500 text-white shadow-lg'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              🎓 Education
            </button>
          </div>

          {/* All Items Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {activeTab === 'certifications' 
              ? certifications.map((cert) => (
                  <CertificationCard 
                    key={cert.id} 
                    certification={cert} 
                    onClick={(cert) => {
                      setSelectedCertification(cert);
                      setIsModalOpen(false);
                    }}
                  />
                ))
              : studies.map((study) => (
                  <StudyCard 
                    key={study.id} 
                    study={study} 
                    onClick={(study) => {
                      setSelectedStudy(study);
                      setIsModalOpen(false);
                    }}
                  />
                ))
            }
          </div>
        </div>
      </AnimatedModal>
    </div>
  );
};

export default CertificationsSection;
