const ProjectCard = ({ title, description, image }: any) => {
  return (
    <div className="bg-gray-800 border-gray-50 shadow-md rounded-lg overflow-hidden w-96">
      <img className="w-full h-48 object-cover" src={image} alt={title} />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-100 text-sm">{description}</p>
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
      image: "/interrapidisimo.png.png",
    },
  ];

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">My Latest Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
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
