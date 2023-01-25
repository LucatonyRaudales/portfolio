import Typewriter from "typewriter-effect";
import { FaHandSpock } from "react-icons/fa";
import { BsMouse } from "react-icons/Bs";
import Image from "next/image";

const First = () => {
  return (
    <div className="snap-start h-screen w-screen justify-center items-center flex flex-col">
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
        <FaHandSpock size={25} className="text-yellow-300 ml-2" />
      </h1>
      <div className="text-white text-lg font-semibold">
        <Typewriter
          options={{
            strings: [
              "I like to design things",
              "I love learning new tech",
              "I love meeting new people",
              "I create unique digital experiences",
            ],
            autoStart: true,
            loop: true,
            deleteSpeed: 10,
            cursor: ".",
            delay: 100,
          }}
        />
      </div>
      <div className="animate-bounce absolute bottom-5">
        <BsMouse color="white" size={30} className="animate-pulse mx-auto" />
        <h2 className="text-white font-semibold text-sm animate-pulse mt-1">Scroll Down</h2>
      </div>
    </div>
  );
};
export default First;