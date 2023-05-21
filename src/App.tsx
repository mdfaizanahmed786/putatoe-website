import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ServiceProviders from "./components/ServiceProviders";

const App = () => {
  return (
    <div className="flex flex-col bg-gray-100 gap-2 min-h-screen">
      <div className="bg-primary w-full p-3 shadow-md sticky top-0 z-40">
        <Header />
      </div>
      <div className="md:max-w-7xl mx-auto space-y-5">
        <HeroSection />
        <ServiceProviders />
      </div>

      {/* ServiceProviders */}
      {/* Services */}
      {/* Footer */}
    </div>
  );
};

export default App;
