import { services } from "../../utils/services";
import Service from "./Service";

const Services = (): JSX.Element => {
  return (
    <div>
      <div className="text-primary/100 shadow-md  bg-[#9de2e8] font-bold text-sm md:text-2xl rounded-lg   text-center p-3">
        Services
      </div>

      <div className="w-full justify-between md:justify-normal p-3 md:px-0 flex flex-wrap gap-5  items-center">
        {services.map((service) => (
          <Service
            key={service.id}
            name={service.name}
            off={service.off}
            banner={service.banner}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
