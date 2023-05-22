import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ServiceProviders from "./components/ServiceProviders";
import Services from "./components/Services";

const App = () => {
  return (
    <div className="flex flex-col bg-gray-100 gap-2 min-h-screen">
      <div className="bg-primary w-full p-3 shadow-md sticky top-0 z-40 ">
        <Header />
      </div>
      <div className="md:max-w-7xl mx-auto space-y-5 w-full px-1">
        <HeroSection />
        <ServiceProviders />
        <Services />
      </div>

      <Footer />
    </div>
  );
};

export default App;
