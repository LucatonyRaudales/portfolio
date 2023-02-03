import First from "./components/Introduction";
import Initialize from "./components/Introduction";
import DevOpsSection from "./components/DevOps";
import BackendSection from "./components/Backend";
import FrontendSection from "./components/Frontend";

export default function Home() {
  return (
    <div className="snap-y snap-mandatory bg-gradient-to-br from-black to-gray-900 h-screen w-screen overflow-auto overflow-x-hidden scrollbar-hide">
      <First />
      <DevOpsSection />
      <BackendSection />
      <FrontendSection />
    </div>
  );
}
