import { ChartLineDefault } from "./components/layout/ChartDisplay";
import { GeoHeader } from "./components/layout/GeoHeader";
import { WeatherView } from "./components/layout/WeatherView";

function App() {
  return (
    <div className="bg-[url('/sunny-cloudy.jpg')] bg-cover bg-center h-dvh text-white flex flex-col">
      <div className="bg-black/10 inset-0 absolute z-0"></div>

      <div className="flex flex-col-reverse lg:flex-row gap-12 px-8 py-8 md:py-13 md:px-15">
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
          <div className="flex flex-col gap-9">
            <GeoHeader />
            <WeatherView />
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default App;
