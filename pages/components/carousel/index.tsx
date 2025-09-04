import { useState, useEffect } from 'react';
import AnimatedModal from '../AnimatedModal';

// Types
type RoleType = "Software Engineer" | "DevOps/Cloud Engineer" | "Cybersecurity Engineer";

interface RoleConfig {
  bg: string;
  border: string;
  text: string;
  icon: string;
  glow: string;
}

interface Project {
  title: string;
  description: string;
  image: string;
  roles: RoleType[];
}

// Role Configuration
const ROLE_CONFIG: Record<RoleType, RoleConfig> = {
  "Software Engineer": {
    bg: "bg-blue-500/20",
    border: "border-blue-400/50",
    text: "text-blue-300",
    icon: "💻",
    glow: "shadow-blue-500/30"
  },
  "DevOps/Cloud Engineer": {
    bg: "bg-green-500/20",
    border: "border-green-400/50",
    text: "text-green-300",
    icon: "☁️",
    glow: "shadow-green-500/30"
  },
  "Cybersecurity Engineer": {
    bg: "bg-red-500/20",
    border: "border-red-400/50",
    text: "text-red-300",
    icon: "🔒",
    glow: "shadow-red-500/30"
  }
};

// Utility Functions
const getRoleConfig = (role: RoleType): RoleConfig =>
  ROLE_CONFIG[role] || {
    bg: "bg-gray-500/20",
    border: "border-gray-400/50",
    text: "text-gray-300",
    icon: "⚡",
    glow: "shadow-gray-500/30"
  };

const getRoleBadgeClasses = (config: RoleConfig): string =>
  `inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold ${config.bg} ${config.border} border ${config.text} shadow-lg ${config.glow} backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:shadow-xl`;

// Components
const RoleBadge = ({ role }: { role: RoleType }) => {
  const config = getRoleConfig(role);

  return (
    <div className={getRoleBadgeClasses(config)}>
      <span className="mr-1.5">{config.icon}</span>
      {role}
    </div>
  );
};

const RoleBadges = ({ roles }: { roles: RoleType[] }) => (
  <div className="flex flex-wrap gap-2">
    {roles.map((role, index) => (
      <RoleBadge key={index} role={role} />
    ))}
  </div>
);

// Modal Component
const ProjectModal = ({ isOpen, onClose, projects, onProjectSelect }: { isOpen: boolean; onClose: () => void; projects: Project[]; onProjectSelect: (project: Project) => void }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterRole, setFilterRole] = useState<RoleType | 'all'>('all');

  if (!isOpen) return null;

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRole = filterRole === 'all' || project.roles.includes(filterRole);
    return matchesSearch && matchesRole;
  });

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-gray-900/95 backdrop-blur-md border border-white/20 rounded-2xl max-w-7xl w-full max-h-[90vh] overflow-hidden shadow-2xl">
        <div className="p-6 border-b border-white/20">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-white">All Projects ({projects.length})</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors text-3xl font-light hover:bg-white/10 rounded-full w-10 h-10 flex items-center justify-center"
            >
              ×
            </button>
          </div>

          {/* Search and Filter */}
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors duration-300"
              />
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setFilterRole('all')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${filterRole === 'all'
                    ? 'bg-blue-500 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
              >
                All
              </button>
              {getAllRoles().map((role) => (
                <button
                  key={role}
                  onClick={() => setFilterRole(role)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${filterRole === role
                      ? 'bg-blue-500 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                    }`}
                >
                  {role.split(' ')[0]}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="p-6 overflow-y-auto max-h-[calc(90vh-200px)]">
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProjects.map((project, index) => (
                <ProjectCard
                  key={index}
                  {...project}
                  onClick={() => {
                    onProjectSelect(project);
                    onClose();
                  }}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-400 text-lg">No projects found matching your criteria.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const ProjectCard = ({ title, description, image, roles, onClick }: Project & { onClick: () => void }) => {
  return (
    <div
      onClick={onClick}
      className="group bg-white/10 backdrop-blur-md border border-white/20 shadow-xl rounded-xl overflow-hidden w-full max-w-[400px] mx-auto transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 hover:border-white/40 hover:bg-white/15 cursor-pointer"
    >
      <div className="relative overflow-hidden">
        <img
          className="w-full h-40 object-cover transition-transform duration-700 group-hover:scale-110"
          src={image}
          alt={title}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-3 group-hover:translate-y-0">
          <h3 className="text-white text-sm font-bold mb-1 drop-shadow-lg">{title}</h3>
        </div>
        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-500 transform -translate-y-2 group-hover:translate-y-0">
          <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse shadow-lg"></div>
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-bold mb-2 text-white group-hover:hidden">{title}</h3>

        {/* Role Badges */}
        <div className="mb-3">
          <RoleBadges roles={roles} />
        </div>

        {/* Project Description */}
        <p className="text-gray-300 text-sm leading-relaxed mb-3 line-clamp-2 text-center">
          {description}
        </p>

        <div className="flex items-center justify-between">
          <div className="flex space-x-1">
            <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse"></div>
            <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
            <div className="w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
          </div>
          <div className="text-blue-300 text-xs font-medium opacity-0 group-hover:opacity-100 transition-all duration-500">
            Click to view →
          </div>
        </div>
      </div>
    </div>
  );
};

// Role Management Utilities
const getAllRoles = (): RoleType[] => Object.keys(ROLE_CONFIG) as RoleType[];

// Detailed Project Modal Component
const ProjectDetailModal = ({ project, isOpen, onClose }: { project: Project | null; isOpen: boolean; onClose: () => void }) => {
  if (!project) return null;

  return (
    <AnimatedModal isOpen={isOpen} onClose={onClose} title={project.title} size="lg">
      <div className="space-y-6">
        {/* Project Image */}
        <div className="relative overflow-hidden rounded-xl">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-64 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        </div>

        {/* Project Info */}
        <div className="space-y-4">
          <div className="flex flex-wrap gap-2 justify-center">
            <RoleBadges roles={project.roles} />
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
            <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto">
              {project.description}
            </p>
          </div>

          {/* Project Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <h4 className="text-white font-semibold mb-3 flex items-center">
                <span className="text-blue-400 mr-2">💻</span>
                Technologies Used
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.roles.map((role, index) => (
                  <span key={index} className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm border border-blue-400/30">
                    {role}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <h4 className="text-white font-semibold mb-3 flex items-center">
                <span className="text-green-400 mr-2">🚀</span>
                Project Status
              </h4>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-green-300">Active & Maintained</span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-center space-x-4 pt-6">
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              View Live Demo
            </button>
            <button className="bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 border border-white/20">
              View Source Code
            </button>
          </div>
        </div>
      </div>
    </AnimatedModal>
  );
};

const Carousel = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const INITIAL_PROJECTS_COUNT = 3;

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const projects: Project[] = [
    {
      title: "Dira",
      description:
        "It is a suite of products for implementing cryptocurrency payments in businesses, automating contracts with Blockchain, and asset tokenization for any company.",
      image: "/dira.png",
      roles: ["Software Engineer", "DevOps/Cloud Engineer", "Cybersecurity Engineer"]
    },
    {
      title: "Digito",
      description:
        "It is an innovative document management solution that will help you reduce process times in your company by up to 80%, through the unique combination of technologies such as automation, electronic signatures, and Blockchain.",
      image: "/digito.jpeg",
      roles: ["Software Engineer", "Cybersecurity Engineer"]
    },
    {
      title: "Chivo Wallet",
      description:
        "It is an electronic wallet created by the Government of El Salvador for making payments in dollars or Bitcoin.",
      image: "/chivo.png",
      roles: ["Software Engineer", "DevOps/Cloud Engineer"]
    },
    {
      title: "Ruru Wallet",
      description:
        "Ruru wallet is an element of the Ruru ecosystem designed to create total crypto implementation whether you're an institution, individual or government.",
      image: "/athena.png",
      roles: ["Software Engineer", "DevOps/Cloud Engineer", "Cybersecurity Engineer"]
    },
    {
      title: "Vai",
      description:
        "With Vai, we transform mobility at competitive prices with public transportation while ensuring the safety of our users.",
      image: "/vai.png",
      roles: ["Software Engineer", "DevOps/Cloud Engineer"]
    },
    {
      title: "Hindra Pay",
      description:
        "A web and mobile platform for cryptocurrency and fiat payments, available exclusively in Honduras and continuously expanding.",
      image: "/hindra.png",
      roles: ["Software Engineer", "DevOps/Cloud Engineer", "Cybersecurity Engineer"]
    },
    {
      title: "Lotmoney",
      description:
        "Platform where creators and participants come together to earn money by creating and buying tickets, randomly selecting the winning ticket.",
      image: "/lotmoney.png",
      roles: ["Software Engineer"]
    },
    {
      title: "De la villa",
      description:
        "An online service that allows users to make purchases of food products and other essential consumer items from the comfort of their homes.",
      image: "/delavilla.png",
      roles: ["Software Engineer", "DevOps/Cloud Engineer"]
    },
    {
      title: "Alquila tu Cancha",
      description:
        "Book a court without making a phone call! Choose a day and time online to see the available slots in your city.",
      image: "/alquilatucancha.png",
      roles: ["Software Engineer"]
    },
    {
      title: "Interrapidisimo",
      description:
        "As a DevOps engineer, I have developed and implemented the CI/CD pipelines for the databases of this logistics company, using Azure DevOps.",
      image: "/interrapidisimo.png",
      roles: ["DevOps/Cloud Engineer"]
    },
  ];

  return (
    <div className="snap-start snap-section h-screen w-full flex flex-col justify-center items-center relative overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
      {/* Dynamic background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-pink-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '3s' }}></div>

        {/* Floating project icons */}
        <div className="absolute top-1/4 left-1/4 text-blue-400/20 animate-bounce" style={{ animationDelay: '0.5s' }}>
          <div className="text-4xl">💻</div>
        </div>
        <div className="absolute top-1/3 right-1/4 text-purple-400/20 animate-bounce" style={{ animationDelay: '2s' }}>
          <div className="text-3xl">🚀</div>
        </div>
        <div className="absolute bottom-1/3 left-1/3 text-pink-400/20 animate-bounce" style={{ animationDelay: '3.5s' }}>
          <div className="text-3xl">⚡</div>
        </div>
      </div>
      {/* Header Section */}
      <div className="text-center relative z-20 w-full flex flex-col justify-center items-center pt-8 pb-4">
        <h1 className="text-4xl font-bold text-white mb-4">
          My Latest Projects
        </h1>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-6">
          Explore the innovative solutions I've built across various industries
        </p>

        {/* Role Legend - Only show on desktop */}
        {!isMobile && (
          <div className="flex flex-wrap justify-center gap-4 mb-6 w-full">
            <div className="flex items-center justify-center space-x-2 text-sm">
              <span className="text-gray-400">Roles:</span>
              {getAllRoles().map((role) => (
                <RoleBadge key={role} role={role} />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="flex-1 flex flex-col items-center justify-center relative z-20 pb-16">
        {isMobile ? (
          /* Mobile: No cards, just centered content */
          <div className="text-center px-6 mb-8 max-w-2xl">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 shadow-xl">
              <h2 className="text-2xl font-bold text-white mb-4">
                🚀 Innovative Projects
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                I've built cutting-edge solutions across various industries, from cryptocurrency platforms to document management systems. Each project showcases my expertise in software engineering, DevOps, and cybersecurity.
              </p>
              
              {/* Role highlights */}
              <div className="flex flex-wrap justify-center gap-3 mb-6">
                <div className="bg-blue-500/20 border border-blue-400/30 rounded-full px-4 py-2 text-blue-300 text-sm font-semibold">
                  💻 Software Engineering
                </div>
                <div className="bg-green-500/20 border border-green-400/30 rounded-full px-4 py-2 text-green-300 text-sm font-semibold">
                  ☁️ DevOps & Cloud
                </div>
                <div className="bg-red-500/20 border border-red-400/30 rounded-full px-4 py-2 text-red-300 text-sm font-semibold">
                  🔒 Cybersecurity
                </div>
              </div>
              
              <p className="text-gray-400 text-sm">
                Tap the button below to explore all {projects.length} projects in detail
              </p>
            </div>
          </div>
        ) : (
          /* Desktop: Show cards */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6 mb-8 justify-items-center max-w-7xl">
            {projects.slice(0, INITIAL_PROJECTS_COUNT).map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                image={project.image}
                roles={project.roles}
                onClick={() => {
                  setSelectedProject(project);
                  setIsModalOpen(true);
                }}
              />
            ))}
          </div>
        )}

        {/* Show All Button */}
        {(isMobile || projects.length > INITIAL_PROJECTS_COUNT) && (
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 text-white font-bold py-3 sm:py-4 px-6 sm:px-12 rounded-full transition-all duration-500 transform hover:scale-110 shadow-xl hover:shadow-2xl text-sm sm:text-lg relative z-10 border border-white/20 hover:border-white/40 backdrop-blur-sm mx-4"
          >
            ✨ {isMobile ? `Explore All ${projects.length} Projects` : `Show All Projects (${projects.length})`}
          </button>
        )}
      </div>


      <ProjectModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        projects={projects}
        onProjectSelect={setSelectedProject}
      />

      <ProjectDetailModal
        project={selectedProject}
        isOpen={selectedProject !== null}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
};

export default Carousel;
