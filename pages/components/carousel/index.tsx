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
  `inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${config.bg} ${config.border} border ${config.text} shadow-lg ${config.glow} backdrop-blur-sm transition-all duration-300 hover:scale-105`;

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

const ProjectCard = ({ title, description, image, roles }: Project) => {
  return (
    <div className="group bg-white/10 backdrop-blur-md border border-white/20 shadow-xl rounded-2xl overflow-hidden w-full max-w-sm mx-auto transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 hover:border-white/30">
      <div className="relative overflow-hidden">
        <img 
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110" 
          src={image} 
          alt={title} 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
          <h3 className="text-white text-lg font-bold mb-1 drop-shadow-lg">{title}</h3>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-3 text-white group-hover:hidden">{title}</h3>
        
        {/* Role Badges */}
        <div className="mb-4">
          <RoleBadges roles={roles} />
        </div>
        
        <p className="text-gray-200 text-sm leading-relaxed line-clamp-3">{description}</p>
        <div className="mt-4 flex items-center justify-between">
          <div className="flex space-x-2">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
            <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
          </div>
          <div className="text-blue-300 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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
    <div className="h-full flex flex-col justify-center">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-4">
          My Latest Projects
        </h1>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">
          Explore the innovative solutions I've built across various industries
        </p>
        
        {/* Role Legend */}
        <div className="flex flex-wrap justify-center gap-4 mb-6">
          <div className="flex items-center space-x-2 text-sm">
            <span className="text-gray-400">Roles:</span>
            {getAllRoles().map((role) => (
              <RoleBadge key={role} role={role} />
            ))}
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-4 flex-1 overflow-y-auto">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            image={project.image}
            roles={project.roles}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
