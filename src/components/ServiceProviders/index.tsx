import { serviceProviders } from "../../utils/serviceProviders";
import ServiceProvider from "./ServiceProvider";

const ServiceProviders = (): JSX.Element => {
  return (
    <div className="flex gap-2 flex-col w-full">
      <div className="text-primary/100 shadow-md  bg-[#9de2e8] font-bold text-sm md:text-2xl rounded-lg text-center p-3">
        All Popular Service Providers
      </div>
      <div className="font-bold md:mt-5 mt-2 text-sm md:text-2xl text-center text-gray-500">
        Construction
      </div>

      <div className="bg-gray-500 h-[1px] w-1/2  mb-2 text-center mx-auto " />

      <div className="flex overflow-x-auto no-scrollbar px-2">
        <div className="flex whitespace-nowrap gap-5 ">
          {serviceProviders.map((serviceProvider) => (
            <ServiceProvider
              key={serviceProvider.id}
              serviceProviderName={serviceProvider.name}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceProviders;
