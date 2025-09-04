import React, { useState, useEffect } from 'react';
import AnimatedModal from './AnimatedModal';

interface Company {
  id: number;
  name: string;
  type: 'startup' | 'current';
  description: string;
  services: string[];
  icon: string;
  year: string;
  status: string;
  achievements: string[];
  technologies: string[];
}

const companies: Company[] = [
  {
    id: 1,
    name: "First Startup",
    type: 'startup',
    description: "My first entrepreneurial venture where I learned the fundamentals of building and scaling a technology company from the ground up.",
    services: ["Product Development", "Market Research", "Team Building", "Business Strategy"],
    icon: "🚀",
    year: "2018-2020",
    status: "Acquired",
    achievements: [
      "Successfully launched MVP in 6 months",
      "Built team of 8 developers",
      "Achieved 10K+ active users",
      "Successfully acquired by larger company"
    ],
    technologies: ["React", "Node.js", "MongoDB", "AWS", "Docker"]
  },
  {
    id: 2,
    name: "Second Startup",
    type: 'startup',
    description: "A more focused venture where I applied lessons learned from my first startup to create a specialized solution for the market.",
    services: ["SaaS Development", "Customer Acquisition", "Revenue Optimization", "Partnership Development"],
    icon: "💡",
    year: "2020-2022",
    status: "Sold",
    achievements: [
      "Developed innovative SaaS platform",
      "Generated $500K+ ARR",
      "Built strategic partnerships",
      "Successfully sold to industry leader"
    ],
    technologies: ["Vue.js", "Python", "PostgreSQL", "Kubernetes", "Terraform"]
  },
  {
    id: 3,
    name: "Cybersecurity Solutions Co.",
    type: 'current',
    description: "My current cybersecurity company providing comprehensive security services for mid and small companies. We offer everything they need to protect their digital assets and maintain compliance.",
    services: [
      "Security Audits & Assessments",
      "Penetration Testing",
      "Compliance Management (SOC2, ISO27001, GDPR)",
      "Incident Response & Forensics",
      "Security Training & Awareness",
      "Managed Security Services",
      "Cloud Security Implementation",
      "Network Security Monitoring",
      "Vulnerability Management",
      "Security Policy Development"
    ],
    icon: "🔒",
    year: "2022-Present",
    status: "Active",
    achievements: [
      "Protected 50+ companies from cyber threats",
      "Achieved 99.9% client satisfaction rate",
      "Prevented $2M+ in potential security breaches",
      "Built team of 15+ security experts",
      "Expanded to 3 major cities"
    ],
    technologies: ["SIEM", "EDR/XDR", "NGFW", "WAF", "Cloud Security", "Compliance Tools", "Forensic Tools"]
  }
];

const AboutSection: React.FC = () => {
  const [selectedCompany, setSelectedCompany] = useState<Company | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [visibleCards, setVisibleCards] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisibleCards(companies.length);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleCompanyClick = (company: Company) => {
    setSelectedCompany(company);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active': return 'text-green-400 bg-green-400/20 border-green-400/30';
      case 'Acquired': return 'text-blue-400 bg-blue-400/20 border-blue-400/30';
      case 'Sold': return 'text-purple-400 bg-purple-400/20 border-purple-400/30';
      default: return 'text-gray-400 bg-gray-400/20 border-gray-400/30';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'current': return 'from-green-500/20 to-emerald-500/20 border-green-400/30';
      case 'startup': return 'from-blue-500/20 to-cyan-500/20 border-blue-400/30';
      default: return 'from-gray-500/20 to-slate-500/20 border-gray-400/30';
    }
  };

  return (
    <div className="snap-start snap-section h-screen w-full flex flex-col justify-center items-center relative overflow-hidden bg-gradient-to-br from-slate-900 via-gray-900 to-zinc-900">
      {/* Dynamic background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-slate-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gray-500/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '3.5s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-zinc-500/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '7s'}}></div>
        
        {/* Floating business icons */}
        <div className="absolute top-1/4 left-1/4 text-slate-400/20 animate-bounce" style={{animationDelay: '2.5s'}}>
          <div className="text-4xl">🚀</div>
        </div>
        <div className="absolute top-1/3 right-1/4 text-gray-400/20 animate-bounce" style={{animationDelay: '5s'}}>
          <div className="text-3xl">💼</div>
        </div>
        <div className="absolute bottom-1/3 left-1/3 text-zinc-400/20 animate-bounce" style={{animationDelay: '7.5s'}}>
          <div className="text-3xl">🔒</div>
        </div>
      </div>

      {/* Header Section */}
      <div className="text-center pt-8 pb-4 relative z-20">
        <div className="inline-block">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent mb-4 animate-fadeIn">
            About My Journey
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full animate-pulse"></div>
        </div>
        <p className="text-gray-300 text-lg md:text-xl mt-6 max-w-3xl mx-auto leading-relaxed animate-fadeIn" style={{animationDelay: '0.3s'}}>
          From building startups to protecting companies - my entrepreneurial journey in technology and cybersecurity
        </p>
      </div>

      {/* Content Section */}
      <div className="flex-1 flex flex-col items-center justify-center pb-16 relative z-20 w-full max-w-7xl mx-auto px-4">
        {isMobile ? (
          /* Mobile: No cards, just centered content */
          <div className="flex flex-col items-center justify-center w-full">
            <div className="text-center px-6 mb-8 max-w-2xl">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 shadow-xl">
                <h2 className="text-2xl font-bold text-white mb-4">
                  🚀 My Entrepreneurial Journey
                </h2>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  I've built and scaled multiple technology companies, from early-stage startups to a successful cybersecurity firm. My journey spans product development, business strategy, team building, and market expansion across different industries.
                </p>
                <div className="flex flex-wrap justify-center gap-3 mb-6">
                  <div className="bg-green-500/20 border border-green-400/30 rounded-full px-4 py-2 text-green-300 text-sm font-semibold">
                    🚀 2 Successful Startups
                  </div>
                  <div className="bg-blue-500/20 border border-blue-400/30 rounded-full px-4 py-2 text-blue-300 text-sm font-semibold">
                    🔒 Cybersecurity Company
                  </div>
                  <div className="bg-purple-500/20 border border-purple-400/30 rounded-full px-4 py-2 text-purple-300 text-sm font-semibold">
                    💼 Business Leadership
                  </div>
                </div>
                <p className="text-gray-400 text-sm">
                  Tap the button below to explore my complete entrepreneurial journey and company details
                </p>
              </div>
            </div>
            
            {/* Show All Button - Centered below content */}
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 text-white font-bold py-3 sm:py-4 px-6 sm:px-12 rounded-full transition-all duration-500 transform hover:scale-110 shadow-xl hover:shadow-2xl text-sm sm:text-lg relative z-10 border border-white/20 hover:border-white/40 backdrop-blur-sm mx-4"
            >
              ✨ Explore My Journey ({companies.length} Companies)
            </button>
          </div>
        ) : (
          /* Desktop: Show cards */
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full">
            {companies.map((company, index) => (
              <div
                key={company.id}
                className={`transform transition-all duration-1000 ${
                  visibleCards > index 
                    ? 'translate-y-0 opacity-100' 
                    : 'translate-y-10 opacity-0'
                }`}
                style={{transitionDelay: `${index * 0.2}s`}}
              >
                <div
                  onClick={() => handleCompanyClick(company)}
                  className={`group relative bg-gradient-to-br ${getTypeColor(company.type)} backdrop-blur-md border border-white/20 rounded-2xl p-6 h-full cursor-pointer transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 hover:border-white/40 hover:bg-white/10`}
                >
                  {/* Company Icon */}
                  <div className="text-4xl mb-4 text-center animate-bounce" style={{animationDelay: `${index * 0.5}s`}}>
                    {company.icon}
                  </div>

                  {/* Company Name */}
                  <h3 className="text-xl font-bold text-white mb-2 text-center group-hover:text-blue-300 transition-colors duration-300">
                    {company.name}
                  </h3>

                  {/* Year & Status */}
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm text-gray-400 font-medium">{company.year}</span>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getStatusColor(company.status)}`}>
                      {company.status}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3 text-center">
                    {company.description}
                  </p>

                  {/* Services Preview */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-blue-300 mb-2">Key Services:</h4>
                    <div className="flex flex-wrap gap-1">
                      {company.services.slice(0, 3).map((service, serviceIndex) => (
                        <span
                          key={serviceIndex}
                          className="px-2 py-1 bg-white/10 rounded-full text-xs text-gray-300 border border-white/20"
                        >
                          {service}
                        </span>
                      ))}
                      {company.services.length > 3 && (
                        <span className="px-2 py-1 bg-purple-500/20 rounded-full text-xs text-purple-300 border border-purple-400/30">
                          +{company.services.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Technologies Preview */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-green-300 mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-1">
                      {company.technologies.slice(0, 3).map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-green-500/20 rounded-full text-xs text-green-300 border border-green-400/30"
                        >
                          {tech}
                        </span>
                      ))}
                      {company.technologies.length > 3 && (
                        <span className="px-2 py-1 bg-green-500/20 rounded-full text-xs text-green-300 border border-green-400/30">
                          +{company.technologies.length - 3}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Click indicator */}
                  <div className="text-center mt-4">
                    <span className="text-blue-300 text-xs font-medium opacity-0 group-hover:opacity-100 transition-all duration-500">
                      Click for details →
                    </span>
                  </div>

                  {/* Hover effect overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Company Detail Modal */}
      <AnimatedModal 
        isOpen={selectedCompany !== null} 
        onClose={() => setSelectedCompany(null)} 
        title={selectedCompany?.name || ''}
        size="xl"
      >
        {selectedCompany && (
          <div className="space-y-6">
            {/* Company Header */}
            <div className="text-center">
              <div className="text-6xl mb-4">{selectedCompany.icon}</div>
              <div className="flex justify-center items-center gap-4 mb-4">
                <span className="text-gray-400 font-medium">{selectedCompany.year}</span>
                <span className={`px-4 py-2 rounded-full text-sm font-semibold border ${getStatusColor(selectedCompany.status)}`}>
                  {selectedCompany.status}
                </span>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto">
                {selectedCompany.description}
              </p>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <span className="mr-2">🛡️</span>
                Services Offered
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {selectedCompany.services.map((service, index) => (
                  <div
                    key={index}
                    className="bg-white/10 border border-white/20 rounded-lg p-3 hover:bg-white/15 transition-colors duration-300"
                  >
                    <span className="text-gray-300">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div>
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <span className="mr-2">🏆</span>
                Key Achievements
              </h3>
              <div className="space-y-3">
                {selectedCompany.achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-400/20 rounded-lg p-4"
                  >
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-300">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies */}
            <div>
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <span className="mr-2">⚡</span>
                Technologies & Tools
              </h3>
              <div className="flex flex-wrap gap-2">
                {selectedCompany.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-400/30 rounded-full text-sm text-green-300 font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Visit Website Button for Current Company */}
            {selectedCompany.type === 'current' && (
              <div className="text-center pt-4">
                <button
                  onClick={() => window.open('https://hindra.net', '_blank', 'noopener,noreferrer')}
                  className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold py-3 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-green-500/25 border border-green-400/30 hover:border-green-300/50 text-lg"
                >
                  🌐 Visit Hindra.net - Our Cybersecurity Solutions
                </button>
              </div>
            )}
          </div>
        )}
      </AnimatedModal>
    </div>
  );
};

export default AboutSection;
