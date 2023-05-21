import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import { SlScreenDesktop } from "react-icons/sl";
import { HiCurrencyRupee } from "react-icons/hi";
import { TbSpeakerphone } from "react-icons/tb";
import { ImNewspaper } from "react-icons/im";
import { RiSuitcaseFill } from "react-icons/ri";
import { RiFeedbackLine } from "react-icons/ri";
import { FaGasPump } from "react-icons/fa";
import { IoBulbOutline } from "react-icons/io5";
import { IoWaterOutline } from "react-icons/io5";
import { AiFillRightCircle } from "react-icons/ai";
import { RiArticleLine } from "react-icons/ri";

export const rechargeMethods: Icons[] = [
  {
    id: 1,
    name: "Prepaid Mobile Recharge",
    icon: HiOutlineDevicePhoneMobile,
  },
  {
    id: 2,
    name: "DTH Recharge",
    icon: SlScreenDesktop,
  },
  {
    id: 3,
    name: "Loans",
    icon: HiCurrencyRupee,
  },
  {
    id: 4,
    name: "Promotion",
    icon: TbSpeakerphone,
  },
  {
    id: 5,
    name: "News",
    icon: ImNewspaper,
  },
  {
    id: 6,
    name: "Blog",
    icon: RiArticleLine,
  },
  {
    id: 7,
    name: "Jobs",
    icon: RiSuitcaseFill,
  },
  {
    id: 8,
    name: "Feedback",
    icon: RiFeedbackLine,
  },
  {
    id: 9,
    name: "Gas Booking",
    icon: FaGasPump,
  },
  {
    id: 10,
    name: "Electricity Bill",
    icon: IoBulbOutline,
  },
  {
    id: 11,
    name: "Water Bill",
    icon: IoWaterOutline,
  },
  {
    id: 12,
    name: "See More",
    icon: AiFillRightCircle,
  },
];
