import Image from "next/image"
import devopsPicture from "@/public/Devops.png"
const Second = () => {
  return (
    <div className="snap-start h-screen w-screen flex">
      <div className="w-1/2 h-screen flex flex-col items-center justify-center">
        <Image
          className="ml-12"
          src={devopsPicture}
          alt="Picture of the author"
          width={600}
          height={600}
        />
        <h1 className="text-white font-bold text-2xl mt-3">DevOps Engineer</h1>
      </div>
      <div className="w-1/2 h-screen flex flex-col items-center justify-center">
        <h1 className="text-white font-bold text-2xl">mierda 1 Engineer</h1>
        <h1 className="text-white font-bold text-2xl">mierda 2 Engineer</h1>
        <h1 className="text-white font-bold text-2xl">mierda 3 Engineer</h1>
      </div>
    </div>
  );
  //   <Image className="snap-start bg-yellow-300 h-screen w-screen flex items-center justify-center text-5xl"> h</div>
  // )
}

export default Second;