import Typewriter from "typewriter-effect";
import { FaHandSpock } from "react-icons/fa";
import Image from "next/image";

const Initialize = () => {
  return (
    <div className="snap-start flex-shrink-0 h-screen w-screen bg-gradient-to-br from-black to-gray-900 justify-center items-center flex flex-col">
      <div className="mb-10">
        <Image
          src="/mrbeast.png"
          alt="Picture of the author"
          width={150}
          height={150}
        />
      </div>
      <h1 className="text-lg font-bold text-white flex items-center">
        Hi, {"I'm "}
        <p className="text-blue-500 font-bold pl-2 text-2xl">
          Tony R. Raudales
        </p>
        <FaHandSpock
          size={25}
          className="text-yellow-300 ml-2 animate-bounce "
        />
      </h1>
      <div className="text-white text-lg font-semibold">
        <Typewriter
          options={{
            strings: [
              "I like to design things.",
              "I love learning new tech.",
              "I love meeting new people.",
              "I create unique digital experiences.",
            ],
            autoStart: true,
            loop: true,
            deleteSpeed: 10,
            cursor: "<",
            delay: 100,
          }}
        />
      </div>
    </div>
  );
};
export default Initialize;