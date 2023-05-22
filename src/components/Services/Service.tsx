interface ServiceProps{
  name:string,
  banner:string
  off:number
}

const Service:React.FC<ServiceProps> = ({name, banner, off}):JSX.Element => {
  return (
    <div className="w-44 rounded-lg shadow-md relative flex-col flex bg-white" >
      <img src={banner} alt={name} className="w-full  object-cover rounded-t-lg flex-1"/>
      <div className="absolute top-0 right-0 bg-green-600 rounded-sm px-[6px] py-[2px] text-white">{off}% off</div>
      <div className="text-center text-sm md:text-lg font-bold p-1">{name}</div>
      

    </div>
  )
}

export default Service