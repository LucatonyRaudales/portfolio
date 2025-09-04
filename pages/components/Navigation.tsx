import { useState, useEffect } from 'react';

interface NavigationProps {
  sections: string[];
}

const Navigation = ({ sections = [] }: NavigationProps) => {
  const [activeSection, setActiveSection] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Check if we're in the browser
    if (typeof window === 'undefined') return;

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const currentSection = Math.round(scrollPosition / windowHeight);
      
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (index: number) => {
    if (typeof window === 'undefined') return;
    
    const targetY = index * window.innerHeight;
    window.scrollTo({
      top: targetY,
      behavior: 'smooth'
    });
  };

  // Don't render if no sections provided
  if (!sections || sections.length === 0) {
    return null;
  }

  return (
    <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50 transition-all duration-500 opacity-100">
      <div className="flex flex-col space-y-3">
        {sections.map((section, index) => (
          <button
            key={index}
            onClick={() => scrollToSection(index)}
            className={`group relative flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300 ${
              activeSection === index
                ? 'bg-blue-500 shadow-lg shadow-blue-500/50'
                : 'bg-white/10 hover:bg-white/20 border border-white/20'
            }`}
          >
            {/* Section indicator */}
            <div className={`w-2 h-2 rounded-full transition-all duration-300 ${
              activeSection === index ? 'bg-white scale-150' : 'bg-white/60'
            }`} />
            
            {/* Section name tooltip */}
            <div className="absolute right-16 bg-gray-900/95 backdrop-blur-md border border-white/20 rounded-lg px-3 py-2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
              <span className="text-white text-sm font-medium whitespace-nowrap">
                {section}
              </span>
              <div className="absolute right-0 top-1/2 transform translate-x-1 -translate-y-1/2 w-2 h-2 bg-gray-900/95 border-r border-b border-white/20 rotate-45" />
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Navigation;
