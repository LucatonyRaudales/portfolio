import Image, { StaticImageData } from "next/image";
import devopsPicture from "@/public/Devops.png";
import jenkinsImage from "@/public/jenkins.webp";
import argoImage from "@/public/argocd.webp";
import terraformImage from "@/public/terraform.png";
import kubernetesImage from "@/public/kubernetes.webp";
import monitoringImage from "@/public/prometheusgrafana.png";

const DevOpsSection = () => {
  const technologies: TechDescriptionInterface[] = [
    {
      title: "Kubernetes",
      image: kubernetesImage,
      subTitle: "Containers & Orchestration",
      description:
        "Expert in Kubernetes with experience in implementing and managing containerized applications using this open-source orchestration system. Skilled in creating microservices architectures, automatic scaling and managing containers for high availability.",
    },
    {
      title: "ArgoCD",
      image: argoImage,
      subTitle: "GitOps",
      description:
        "Experienced in ArgoCD, a declarative continuous delivery tool for Kubernetes. Skilled in deploying and managing applications using GitOps methodologies and configuring ArgoCD for multi-cluster and multi-namespace deployments. Strong understanding of Kubernetes resource manifests and ArgoCD's role in automating the deployment pipeline.",
    },
    {
      title: "Terraform",
      image: terraformImage,
      subTitle: "Infrastructure as Code",
      description:
        "Expert in Terraform, a leading Infrastructure as Code (IaC) tool. Skilled in provisioning and managing infrastructure across multiple cloud platforms using Terraform's HashiCorp Configuration Language (HCL). Experience in creating reusable modules and automating infrastructure deployments with Terraform.",
    },
    {
      title: "Jenkins",
      image: jenkinsImage,
      subTitle: "Continuous integration and delivery (CI/CD)",
      description:
        "Expert in Jenkins with experience in automating continuous integration and continuous delivery processes. Skilled in configuring and using various plugins for integrating with tools and systems. Experience in managing and monitoring CI/CD processes using Jenkins' web interface.",
    },
    {
      title: "Prometheus & Grafana",
      image: monitoringImage,
      subTitle: "Monitoring and supervision",
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
        <h1 className="text-white font-bold text-2xl my-3">DevOps Engineer</h1>
        <h2 className="text-gray-400 font-semibold text-md w-2/3 ">
          In my experience as a DevOps, I have worked with a variety of
          technologies to automate and improve deployment, scaling, and
          management processes for applications. <br /> Some of the main
          technologies that I have worked with include:
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

export default DevOpsSection ;
