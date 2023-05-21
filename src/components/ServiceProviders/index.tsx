import { serviceProviders } from "../../utils/serviceProviders";
import ServiceProvider from "./ServiceProvider";

const ServiceProviders = (): JSX.Element => {
  return (
    <div className="flex gap-2 flex-col">
      <div className="text-primary/100 shadow-md  bg-[#9de2e8] font-bold text-sm md:text-2xl text-center p-3">
        All Popular Service Providers
      </div>
      <div className="font-bold md:mt-5 mt-2 text-sm md:text-2xl text-center text-gray-500">
        Construction
      </div>
      <div className="bg-gray-500 h-[1px] w-1/2 text-center mx-auto" />
      <div className="overflow-x-auto min-w-7xl flex gap-2">
        {serviceProviders.map((serviceProvider) => (
          <ServiceProvider
            key={serviceProvider.id}
            serviceProviderName={serviceProvider.name}
          />
        ))}
      </div>
    </div>
  );
};

export default ServiceProviders;
