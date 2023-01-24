import Initialize from "./components/home";
import Second from "./components/second";
import Third from "./components/third";

export default function Home() {
  return (
    <div className="snap-x snap-mandatory h-screen w-screen overflow-auto flex overflow-y-hidden">
      <div className="snap-start bg-yellow-300 flex-shrink-0 h-screen w-screen flex items-center justify-center text-5xl">
        first
      </div>
      <div className="snap-start bg-red-300 flex-shrink-0 h-screen w-screen flex items-center justify-center text-5xl">
        second
      </div>
      <div className="snap-start bg-green-300 flex-shrink-0 h-screen w-screen flex items-center justify-center text-5xl">
        third
      </div>
    </div>
  );
}
