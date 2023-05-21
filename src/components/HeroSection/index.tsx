import Payments from "./Payments";

const HeroSection = (): JSX.Element => {
  return (
    <div className="w-full space-y-5 md:px-0">
      <div className="w-full">
        <img
          src="/images/recharge.png"
          alt="hero-section"
          className="md:w-[140rem] md:h-[22rem] md:shadow-md rounded-md"
        />
      </div>
      <div className="md:max-w-[140rem] mx-auto">
        <Payments />
      </div>
    </div>
  );
};

export default HeroSection;
