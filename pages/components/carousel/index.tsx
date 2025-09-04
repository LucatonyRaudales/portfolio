import { useState } from 'react';

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
const ProjectModal = ({ isOpen, onClose, projects }: { isOpen: boolean; onClose: () => void; projects: Project[] }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-gray-900/95 backdrop-blur-md border border-white/20 rounded-2xl max-w-7xl w-full max-h-[85vh] overflow-hidden shadow-2xl">
        <div className="p-6 border-b border-white/20 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-white">All Projects</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors text-3xl font-light hover:bg-white/10 rounded-full w-10 h-10 flex items-center justify-center"
          >
            ×
          </button>
        </div>
        <div className="p-6 overflow-y-auto max-h-[calc(85vh-120px)]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const ProjectCard = ({ title, description, image, roles }: Project) => {
  return (
    <div className="group bg-white/10 backdrop-blur-md border border-white/20 shadow-xl rounded-xl overflow-hidden w-full max-w-[300px] mx-auto transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 hover:border-white/40 hover:bg-white/15">
      <div className="relative overflow-hidden">
        <img 
          className="w-full h-32 object-cover transition-transform duration-700 group-hover:scale-110" 
          src={image} 
          alt={title} 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-3 group-hover:translate-y-0">
          <h3 className="text-white text-sm font-bold mb-1 drop-shadow-lg">{title}</h3>
        </div>
        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-500 transform -translate-y-2 group-hover:translate-y-0">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse shadow-lg"></div>
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-bold mb-3 text-white group-hover:hidden">{title}</h3>
        
        {/* Role Badges */}
        <div className="mb-3">
          <RoleBadges roles={roles} />
        </div>
        
        <p className="text-gray-200 text-sm leading-relaxed line-clamp-3 mb-4">{description}</p>
        <div className="flex items-center justify-between">
          <div className="flex space-x-2">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse shadow-lg"></div>
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse shadow-lg" style={{animationDelay: '0.2s'}}></div>
            <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse shadow-lg" style={{animationDelay: '0.4s'}}></div>
          </div>
          <div className="text-blue-300 text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-2 group-hover:translate-x-0">
            View Project →
          </div>
        </div>
      </div>
    </div>
  );
};

// Role Management Utilities
const getAllRoles = (): RoleType[] => Object.keys(ROLE_CONFIG) as RoleType[];

const Carousel = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const INITIAL_PROJECTS_COUNT = 3;
  
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
    <div className="h-full flex flex-col justify-center items-center relative">
      <div className="text-center mb-8 relative z-20 w-full">
        <h1 className="text-4xl font-bold text-white mb-4">
          My Latest Projects
        </h1>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">
          Explore the innovative solutions I've built across various industries
        </p>
        
        {/* Role Legend */}
        <div className="flex flex-wrap justify-center gap-4 mb-6 w-full">
          <div className="flex items-center justify-center space-x-2 text-sm">
            <span className="text-gray-400">Roles:</span>
            {getAllRoles().map((role) => (
              <RoleBadge key={role} role={role} />
            ))}
          </div>
        </div>
      </div>
      <div className="flex-1 flex flex-col items-center justify-center relative z-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6 mb-8 justify-items-center">
          {projects.slice(0, INITIAL_PROJECTS_COUNT).map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
              roles={project.roles}
            />
          ))}
        </div>
        
        {projects.length > INITIAL_PROJECTS_COUNT && (
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 text-white font-bold py-4 px-12 rounded-full transition-all duration-500 transform hover:scale-110 shadow-xl hover:shadow-2xl text-lg relative z-10 border border-white/20 hover:border-white/40 backdrop-blur-sm"
          >
            ✨ Show All Projects ({projects.length})
          </button>
        )}
      </div>
      
      <ProjectModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        projects={projects} 
      />
    </div>
  );
};

export default Carousel;
