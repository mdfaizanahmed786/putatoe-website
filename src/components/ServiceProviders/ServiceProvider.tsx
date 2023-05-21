const ServiceProvider = ({
  serviceProviderName,
}: {
  serviceProviderName: string;
}): JSX.Element => {
  return (
    <div className="space-y-2 bg-white rounded-md shadow-md ">
      <img alt="crypto" src="https://source.unsplash.com/random/?company" />
      <div className="text-center  text-sm  text-black">
        {serviceProviderName}
      </div>
    </div>
  );
};

export default ServiceProvider;
