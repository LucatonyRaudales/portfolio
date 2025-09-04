const ProjectCard = ({ title, description, image }: any) => {
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

const Carousel = () => {
  const projects = [
    {
      title: "Dira",
      description:
        "It is a suite of products for implementing cryptocurrency payments in businesses, automating contracts with Blockchain, and asset tokenization for any company.",
      image: "/dira.png",
    },
    {
      title: "Digito",
      description:
        "It is an innovative document management solution that will help you reduce process times in your company by up to 80%, through the unique combination of technologies such as automation, electronic signatures, and Blockchain.",
      image: "/digito.jpeg",
    },
    {
      title: "Chivo Wallet",
      description:
        "It is an electronic wallet created by the Government of El Salvador for making payments in dollars or Bitcoin.",
      image: "/chivo.png",
    },
    {
      title: "Ruru Wallet",
      description:
        "Ruru wallet is an element of the Ruru ecosystem designed to create total crypto implementation whether you’re an institution, individual or government.",
      image: "/athena.png",
    },
    {
      title: "Vai",
      description:
        "With Vai, we transform mobility at competitive prices with public transportation while ensuring the safety of our users.",
      image: "/vai.png",
    },
    {
      title: "Hindra Pay",
      description:
        "A web and mobile platform for cryptocurrency and fiat payments, available exclusively in Honduras and continuously expanding.",
      image: "/hindra.png",
    },
    {
      title: "Lotmoney",
      description:
        "Platform where creators and participants come together to earn money by creating and buying tickets, randomly selecting the winning ticket.",
      image: "/lotmoney.png",
    },
    {
      title: "De la villa",
      description:
        "An online service that allows users to make purchases of food products and other essential consumer items from the comfort of their homes.",
      image: "/delavilla.png",
    },
    {
      title: "Alquila tu Cancha",
      description:
        "Book a court without making a phone call! Choose a day and time online to see the available slots in your city.",
      image: "/alquilatucancha.png",
    },
    {
      title: "Interrapidisimo",
      description:
        "As a DevOps engineer, I have developed and implemented the CI/CD pipelines for the databases of this logistics company, using Azure DevOps.",
      image: "/interrapidisimo.png",
    },
  ];

  return (
    <div className="py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-4">
          My Latest Projects
        </h1>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
          Explore the innovative solutions I've built across various industries
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 px-4">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            image={project.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
