import { ChartLineDefault } from "./components/layout/ChartDisplay";
import { GeoHeader } from "./components/layout/GeoHeader";

function App() {
  return (
    <div className="bg-[url('/sunny-cloudy.jpg')] bg-cover bg-center h-dvh text-white flex flex-col">
      <div className="bg-black/10 inset-0 absolute z-0"></div>

      <div className="flex flex-col-reverse sm:flex-col lg:flex-row gap-12 py-13 px-15">
        <div className="left-section glassmorphism text-center w-75 flex flex-col gap-6 rounded-4xl">
          <h1 className="font-medium text-2xl font-logo underline underline-offset-8">
            SkyLithic
          </h1>
          <div className="flex flex-col gap-2">
            <p className="text-start text-white/50">Status</p>
            <ChartLineDefault />
          </div>
        </div>

        <div className="flex-2/4 right-section py-6">
          <GeoHeader />
        </div>
      </div>
    </div>
  );
}

export default App;
