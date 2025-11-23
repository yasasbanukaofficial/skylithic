import { SideBar } from "./components/layout/SideBar";
import { MainContent } from "./components/layout/MainContent";

function App() {
  return (
    <div className="bg-[url('/sunny-cloudy.jpg')] bg-cover bg-center h-screen text-white flex flex-col">
      <div className="bg-black/10 inset-0 absolute z-0"></div>

      <div className="flex flex-col-reverse lg:flex-row gap-12 px-8 py-8 md:py-13 md:px-15 h-full">
        <SideBar />
        <MainContent />
      </div>
    </div>
  );
}

export default App;
