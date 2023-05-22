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
      <div className="fixed bottom-24 right-7 bg-primary rounded-full  flex items-center justify-center shadow-md grow-0 shrink-0 md:p-2 p-2">
        <img
          src="/images/putatoe.png"
          alt="logo"
          className="md:h-14  md:w-14 h-12 w-12 object-cover "
        />
      </div>
    </div>
  );
};

export default App;
