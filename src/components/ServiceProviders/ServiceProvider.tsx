const ServiceProvider = ({
  serviceProviderName,
}: {
  serviceProviderName: string;
}): JSX.Element => {
  return (
    <div className="space-y-2 flex flex-col items-center bg-white shadow-md w-44 rounded-lg">
        <div>
      <img alt="crypto" src="https://source.unsplash.com/random/?company" className=" object-cover  h-36 w-36 px-2 py-2 "/> 

        </div>
      <div className=" whitespace-pre-wrap py-2 text-sm text-center   text-black">
        {serviceProviderName}
      </div>

      
    </div>
  );
};

export default ServiceProvider;
