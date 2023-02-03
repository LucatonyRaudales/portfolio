import Image, { StaticImageData } from "next/image";
import golangImage from "@/public/golang.png";
import jenkinsImage from "@/public/jenkins.webp";
import typescriptImage from "@/public/typescript.png";
import terraformImage from "@/public/terraform.png";
import backendImage from "@/public/backend.webp";
import rustImage from "@/public/rust.png";
import monitoringImage from "@/public/prometheusgrafana.png";
import { TechDescriptionComponent, TechDescriptionInterface } from "./DevOps";

const BackendSection = () => {
  const technologies: TechDescriptionInterface[] = [
    {
      title: "Golang",
      image: golangImage,
      subTitle: "Programming Language",
      description:
        "Expert in Kubernetes with experience in implementing and managing containerized applications using this open-source orchestration system. Skilled in creating microservices architectures, automatic scaling and managing containers for high availability.",
    },
    {
      title: "Typescript",
      image: typescriptImage,
      subTitle: "Programming Language",
      description:
        "Expert in Terraform, a leading Infrastructure as Code (IaC) tool. Skilled in provisioning and managing infrastructure across multiple cloud platforms using Terraform's HashiCorp Configuration Language (HCL). Experience in creating reusable modules and automating infrastructure deployments with Terraform.",
    },
    {
      title: "Rust",
      image: rustImage,
      subTitle: "Programming Language",
      description:
        "Experienced in ArgoCD, a declarative continuous delivery tool for Kubernetes. Skilled in deploying and managing applications using GitOps methodologies and configuring ArgoCD for multi-cluster and multi-namespace deployments. Strong understanding of Kubernetes resource manifests and ArgoCD's role in automating the deployment pipeline.",
    },
  ];
  return (
    <div className="snap-start h-screen w-screen flex ">
      <div className="snap-y snap-mandatory overflow-y-scroll w-1/2 h-screen scrollbar-hide">
        {technologies.map((item) => (
          <TechDescriptionComponent key={item.title} {...item} />
        ))}
      </div>
      <div className="w-1/2 h-screen flex flex-col items-center justify-center text-center">
        <Image
          className="ml-12"
          src={backendImage}
          alt="Picture of the author"
          height={400}
        />
        <h1 className="text-white font-bold text-2xl my-3">
          Backend Developer
        </h1>
        <h2 className="text-gray-400 font-semibold text-md w-2/3">
          As a backend developer, I have solid experience in creating and
          maintaining scalable and efficient applications. I have worked on a
          wide range of projects, from web development to distributed systems
          and mobile applications. My expertise is in designing and developing
          web 3 applications, with a strong focus on scalability, security, and
          performance.
        </h2>
      </div>
    </div>
  );
};
export default BackendSection;
