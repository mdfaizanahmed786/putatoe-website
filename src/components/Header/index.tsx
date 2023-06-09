import { TiLocation } from "react-icons/ti";
import { IoIosNotifications } from "react-icons/io";
import { FaCartPlus, FaMicrophone } from "react-icons/fa";
import { HiOutlineSearch } from "react-icons/hi";
const Header = (): JSX.Element => {
  return (
    <div className="px-2 sm:px-6 lg:px-4 flex items-center gap-3 md:gap-5 ">
      <div className="hidden md:inline-block">
        <img
          src="/images/putatoe.png"
          alt="logo"
          className="w-32 h-32 object-contain"
        />
      </div>

      <div className="flex flex-col gap-4 w-full">
        <div className="flex items-center gap-2">
          <TiLocation className="header-icon" />
          <div className="location flex-1 text-white ring-2 ring-white px-2 py-2 rounded-md text-sm md:text-lg whitespace-nowrap overflow-hidden text-ellipsis">
            United States, San Francisco, California Mountain View, 94043
          </div>
          <div className="relative">
            <div className="absolute flex rounded-full -right-1  bottom-3 w-5 h-5  bg-red-500 text-white grow-0 shrink-0 justify-center items-center">
              1
            </div>
            <IoIosNotifications className="header-icon" />
          </div>
          <FaCartPlus className="header-icon" />
        </div>
        <div className="flex w-full items-center gap-2">
          <div className="search-container flex-1 flex items-center bg-white rounded-lg px-4 py-2 gap-2 ">
            <HiOutlineSearch className="text-primary w-7 h-7" />
            <input
              type="text"
              placeholder="Search for products, brands and more"
              className="search-input w-full outline-none border-none flex-1 px-2"
            />
          </div>
          <FaMicrophone className="header-icon" />
        </div>
      </div>
    </div>
  );
};

export default Header;
