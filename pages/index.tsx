import Head from "next/head";
import First from "./components/Introduction";
import ProjectsSection from "./components/Projects";
import CertificationsSection from "./components/Certifications";
import SkillsSection from "./components/Skills";
import ExperienceSection from "./components/Experience";
import AboutSection from "./components/About";
// import Navigation from "./components/Navigation";

export default function Home() {
  return (
    <>
      <Head>
        <title>Tony R. Raudales - Full-Stack Engineer & Cybersecurity Expert</title>
        <meta name="description" content="Tony R. Raudales - Full-Stack Software Engineer, Cybersecurity & DevSecOps Expert, Cloud Infrastructure Specialist, and Startup Founder. Building scalable digital solutions and protecting companies from cyber threats." />
        <meta name="keywords" content="Tony Raudales, Software Engineer, Cybersecurity, DevSecOps, Full-Stack Developer, Cloud Infrastructure, Startup Founder, Go, TypeScript, React, Kubernetes, AWS, Azure" />
        <meta name="author" content="Tony R. Raudales" />
        <meta property="og:title" content="Tony R. Raudales - Full-Stack Engineer & Cybersecurity Expert" />
        <meta property="og:description" content="Full-Stack Software Engineer, Cybersecurity & DevSecOps Expert, Cloud Infrastructure Specialist, and Startup Founder." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://lucatonny.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Tony R. Raudales - Full-Stack Engineer & Cybersecurity Expert" />
        <meta name="twitter:description" content="Full-Stack Software Engineer, Cybersecurity & DevSecOps Expert, Cloud Infrastructure Specialist, and Startup Founder." />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#1e1b4b" />
      </Head>
      <div className="snap-y snap-mandatory bg-gradient-to-br from-black to-gray-900 h-screen w-screen overflow-y-auto overflow-x-hidden scrollbar-hide scroll-smooth">
        {/* <Navigation sections={sections} /> */}
        <First />
        <ProjectsSection />
        <CertificationsSection />
        <SkillsSection />
        <ExperienceSection />
        <AboutSection />
      </div>
    </>
  );
}
