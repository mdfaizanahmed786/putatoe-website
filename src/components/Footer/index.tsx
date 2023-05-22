import { AiFillHome } from "react-icons/ai";
import { FaRegListAlt } from "react-icons/fa";
import { RiGroupFill } from "react-icons/ri";
import { BsChatText } from "react-icons/bs";
interface IconProps{
  Icon:React.ElementType,
  name:string
}

const Footer = (): JSX.Element => {
  return (
    <div className="bg-white py-2 flex items-center gap-2 px-4 drop-shadow-md w-full ">
      <Icons Icon={AiFillHome} name="Home" />
      <Icons Icon={RiGroupFill} name="Group" />
      <div className="bg-primary w-48 py-2 px-2 rounded-md">

      <img src="/images/putatoe.png" alt="logo" className="w-9 h-9 object-cover " />
      </div>
      <Icons Icon={FaRegListAlt} name="List" />
      <Icons Icon={BsChatText} name="Chat" />
 
    </div>
  );
};

const Icons=({Icon, name}: IconProps):JSX.Element=>{

  return (
    <div className="flex flex-col gap-1  items-center w-full ">
      <Icon className="text-primary w-7 h-7"/>
      <div className="text-xs md:text-sm text-primary">{name}</div>
    </div>
  )
}

export default Footer;
