import Carousel from "./carousel";

const ProjectsSection = () => {
    return (
        <div className="snap-start snap-section h-screen w-full flex flex-col items-center justify-center text-center text-white overflow-hidden relative">
            <Carousel />
            
            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                <div className="flex flex-col items-center text-gray-400">
                    <span className="text-sm mb-2">Scroll Down</span>
                    <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
                        <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectsSection;