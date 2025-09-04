import { LuMouse } from "react-icons/lu";
import Typewriter from "typewriter-effect";
import { FaHandSpock, FaCode, FaShieldAlt, FaRocket } from "react-icons/fa";
import Image from "next/image";
import { GrLinkedin, GrTwitter } from "react-icons/gr";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

const First = () => {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="snap-start h-screen w-screen justify-center items-center flex flex-col relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>

        {/* Floating icons */}
        <div className="absolute top-1/4 left-1/4 text-purple-400/30 animate-bounce" style={{ animationDelay: '0.5s' }}>
          <FaCode size={40} />
        </div>
        <div className="absolute top-1/3 right-1/4 text-blue-400/30 animate-bounce" style={{ animationDelay: '1.5s' }}>
          <FaShieldAlt size={35} />
        </div>
        <div className="absolute bottom-1/3 left-1/3 text-cyan-400/30 animate-bounce" style={{ animationDelay: '2.5s' }}>
          <FaRocket size={30} />
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center">
        {/* Profile Image with enhanced styling */}
        <div className="relative mb-8 flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full blur-lg opacity-30 animate-pulse"></div>
            <Image
              src="/me.jpeg"
              className="rounded-full border-4 border-white/20 shadow-2xl transition-all duration-500 hover:scale-105 hover:border-purple-400/50 mx-auto"
              alt="Tony R. Raudales - Software Engineer & Cybersecurity Expert"
              width={280}
              height={280}
            />
            {/* Status indicator */}
            <div className="absolute bottom-4 right-4 w-6 h-6 bg-green-400 rounded-full border-2 border-white animate-pulse shadow-lg"></div>
          </div>
        </div>

        {/* Greeting with enhanced styling */}
        <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">
            Hi there! 👋 I'm
          </h1>
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent mb-4 animate-pulse">
            Tony R. Raudales
          </h2>
        </div>

        {/* Enhanced typewriter with better styling */}
        <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="text-xl md:text-2xl font-semibold text-gray-300 mb-8 min-h-[2.5rem] flex items-center justify-center">
            <Typewriter
              options={{
                strings: [
                  "🚀 Full-Stack Software Engineer",
                  "🔒 Cybersecurity & DevSecOps Expert",
                  "☁️ Cloud Infrastructure Specialist",
                  "💡 Startup Founder & Entrepreneur",
                  "🛡️ Protecting Companies from Cyber Threats",
                  "⚡ Building Scalable Digital Solutions"
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 30,
                cursor: "|",
                delay: 100,
                wrapperClassName: "text-center",
                cursorClassName: "text-purple-400 animate-pulse"
              }}
            />
          </div>
        </div>

        {/* Enhanced social links */}
        <div className={`flex justify-center space-x-8 mb-8 transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <button
            onClick={() => window.open("https://www.linkedin.com/in/tony-raudales", "_blank", "noopener,noreferrer")}
            className="group relative p-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-full transition-all duration-300 hover:scale-110 hover:bg-blue-500/20 hover:border-blue-400/50 hover:shadow-lg hover:shadow-blue-500/25"
          >
            <GrLinkedin color="white" size={28} className="group-hover:text-blue-300 transition-colors duration-300" />
            <div className="absolute -top-2 -right-2 w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
          </button>

          <button
            onClick={() => window.open("https://twitter.com/LucatonnyR", "_blank", "noopener,noreferrer")}
            className="group relative p-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-full transition-all duration-300 hover:scale-110 hover:bg-cyan-500/20 hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-500/25"
          >
            <GrTwitter color="white" size={28} className="group-hover:text-cyan-300 transition-colors duration-300" />
            <div className="absolute -top-2 -right-2 w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
          </button>
        </div>

        {/* Resume Download Button */}
        <div className={`transform transition-all duration-1000 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <button
            onClick={() => {
              const link = document.createElement('a');
              link.href = '/resume/Resume - Tony Raudales.pdf';
              link.download = 'Tony_Raudales_Resume.pdf';
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            }}
            className="group relative bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-bold py-3 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-purple-500/25 border border-purple-400/30 hover:border-purple-300/50"
          >
            <span className="flex items-center space-x-2">
              <span className="text-lg">📄</span>
              <span>Download Resume</span>
              <span className="text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">↓</span>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
          </button>
        </div>
      </div>
    </div>
  );
};
export default First;
