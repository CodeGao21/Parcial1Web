import { CardGallery1 } from "./cardgallery1";
import { CardGallery2 } from "./cardgallery2";
import { CardGallery3 } from "./cardgallery3";
import { Bar } from "./bar";

export function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Main content with three columns */}
      <div className="flex flex-grow p-5 space-x-5"> 
        <div className="flex-1 p-5 bg-white-300">
          <h2 className="text-center mb-4 text-xl font-bold">Cycling</h2>
          <CardGallery1 />
        </div>
        <div className="flex-1 p-5 bg-white-300">
          <h2 className="text-center mb-4 text-xl font-bold">Running</h2>
          <CardGallery2 />
        </div>
        <div className="flex-1 p-5 bg-white-300">
          <h2 className="text-center mb-4 text-xl font-bold">Swimming</h2>
          <CardGallery3 />
        </div>
      </div>

      {/* Bottom navigation bar */}
      <div className="mt-auto">
        <Bar />
      </div>
    </div>
  );
}
