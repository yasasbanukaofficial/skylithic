import { ChartLineDefault } from "./components/ChartDisplay";

function App() {
  return (
    <div className="bg-[url('/field-cloudy.jpg')] bg-cover bg-center h-dvh text-white flex flex-col">
      <div className="bg-black/10 inset-0 absolute z-0"></div>

      <div className="flex flex-row gap-4 py-6 px-5">
        <div className="left-section glassmorphism text-center flex-2/4 flex flex-col gap-6">
          <h1 className="font-semibold text-2xl font-logo">SkyLithic</h1>
          <ChartLineDefault />
        </div>

        <div className="flex-2/4 right-section"></div>
      </div>
    </div>
  );
}

export default App;
