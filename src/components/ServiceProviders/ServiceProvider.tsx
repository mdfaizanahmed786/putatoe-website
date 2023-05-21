const ServiceProvider = ({
  serviceProviderName,
}: {
  serviceProviderName: string;
}): JSX.Element => {
  return (
    <div className="space-y-2 flex flex-col items-center bg-white rounded-md shadow-md flex-shrink-0">
        <div>
      <img alt="crypto" src="https://source.unsplash.com/random/?company" className="h-32 object-cover w-32"/>

        </div>
      <div className="text-center w-1/2  text-sm  text-black">
        {serviceProviderName}
      </div>
    </div>
  );
};

export default ServiceProvider;
