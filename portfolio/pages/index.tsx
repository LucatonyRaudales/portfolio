import First from "./components/first";
import Initialize from "./components/first";
import Second from "./components/second";
import Third from "./components/third";

export default function Home() {
  return (
    <div className="snap-y snap-mandatory bg-gradient-to-br from-black to-gray-900 h-screen w-screen overflow-auto overflow-x-hidden">
      <First />
      <Second />
      <Third />
    </div>
  );
}
