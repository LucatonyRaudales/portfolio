import Image, { StaticImageData } from "next/image";
import devopsPicture from "@/public/Devops.png";
import nextjsImage from "@/public/nextjs.png";
import flutterImage from "@/public/flutter.png";
import reactjsImage from "@/public/reactjs.png";
import tailwindcssImage from "@/public/tailwindcss.png";

const FrontendSection = () => {
  const technologies: TechDescriptionInterface[] = [
    {
      title: "NextJS",
      image: nextjsImage,
      subTitle: "Framework Web",
      description:
        "Expert in Kubernetes with experience in implementing and managing containerized applications using this open-source orchestration system. Skilled in creating microservices architectures, automatic scaling and managing containers for high availability.",
    },
    {
      title: "Flutter",
      image: flutterImage,
      subTitle: "Mobile",
      description:
        "Experienced in ArgoCD, a declarative continuous delivery tool for Kubernetes. Skilled in deploying and managing applications using GitOps methodologies and configuring ArgoCD for multi-cluster and multi-namespace deployments. Strong understanding of Kubernetes resource manifests and ArgoCD's role in automating the deployment pipeline.",
    },
    {
      title: "Reactjs",
      image: reactjsImage,
      subTitle: "Library Web",
      description:
        "Expert in Terraform, a leading Infrastructure as Code (IaC) tool. Skilled in provisioning and managing infrastructure across multiple cloud platforms using Terraform's HashiCorp Configuration Language (HCL). Experience in creating reusable modules and automating infrastructure deployments with Terraform.",
    },
    {
      title: "Tailwind CSS",
      image: tailwindcssImage,
      subTitle: "CSS Framework",
      description:
        "Expert in Jenkins with experience in automating continuous integration and continuous delivery processes. Skilled in configuring and using various plugins for integrating with tools and systems. Experience in managing and monitoring CI/CD processes using Jenkins' web interface.",
    },
  ];
  return (
    <div className="snap-start h-screen w-screen flex ">
      <div className="w-1/2 h-screen flex flex-col items-center justify-center text-center ">
        <Image
          className="ml-12"
          src={devopsPicture}
          alt="Picture of the author"
          width={600}
          height={600}
        />
        <h1 className="text-white font-bold text-2xl my-3">
          Frontend Developer
        </h1>
        <h2 className="text-gray-400 font-semibold text-md w-2/3 ">
          As a frontend developer, I have gained experience in developing
          highly interactive and visually appealing web and mobile applications.
          I have worked with a variety of technologies and programming
          languages, with a strong emphasis on web design, user interface
          development, and performance optimization.
        </h2>
      </div>
      <div className="snap-y snap-mandatory overflow-y-scroll w-1/2 h-screen scrollbar-hide">
        {technologies.map((item) => (
          <TechDescriptionComponent key={item.title} {...item} />
        ))}
      </div>
    </div>
  );
  //   <Image className="snap-start bg-yellow-300 h-screen w-screen flex items-center justify-center text-5xl"> h</div>
  // )
};

export const TechDescriptionComponent = ({
  image,
  subTitle,
  description,
  title,
}: TechDescriptionInterface) => {
  return (
    <div className="snap-start h-screen w-full flex flex-col items-center justify-center text-center">
      <Image src={image} alt="Picture of the author" height={200} />
      <div className="text-white font-bold text-2xl mt-8  uppercase">
        {title}
      </div>
      <p className="text-slate-100 font-semibold text-xl mb-5">{subTitle}</p>
      <p className="text-gray-400 font-semibold text-md w-3/4">{description}</p>
    </div>
  );
};

export interface TechDescriptionInterface {
  title: string;
  image: StaticImageData;
  subTitle: string;
  description: string;
}

export default FrontendSection;
