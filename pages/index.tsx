import First from "./components/Introduction";
import ProjectsSection from "./components/Projects";
import CertificationsSection from "./components/Certifications";
import SkillsSection from "./components/Skills";
import ExperienceSection from "./components/Experience";
import AboutSection from "./components/About";
import Navigation from "./components/Navigation";

export default function Home() {
  const sections = [
    'Introduction',
    'Projects',
    'Certifications',
    'Skills',
    'Experience',
    'About',
    'DevOps',
    'Backend',
    'Frontend'
  ];

  return (
    <div className="snap-y snap-mandatory bg-gradient-to-br from-black to-gray-900 h-screen w-screen overflow-y-auto overflow-x-hidden scrollbar-hide scroll-smooth">
      <Navigation sections={sections} />
      <First />
      <ProjectsSection />
      <CertificationsSection />
      <SkillsSection />
      <ExperienceSection />
      <AboutSection />
    </div>
  );
}
