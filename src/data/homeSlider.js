import { RiHandbagLine, RiFootballLine, RiTShirt2Line, RiComputerLine } from "react-icons/ri";
import { HiOutlineUserGroup, HiOutlineMusicNote, HiOutlineOfficeBuilding } from "react-icons/hi";
import { BiCar, BiHome } from "react-icons/bi";
import { GiFarmTractor } from "react-icons/gi";
import { FaBabyCarriage } from "react-icons/fa";
const homeSliderItems = [
  { icon: <RiComputerLine />, heading: "Electronics", id: "electronics" },
  { icon: <BiCar />, heading: "Autos And Prts", id: "autos_and_parts" },
  { icon: <BiHome />, heading: "Real Estate", id: "real_estate" },
  { icon: <RiTShirt2Line />, heading: "Fashion", id: "farming_&_industrial" },
  { icon: <RiFootballLine />, heading: "Sport", id: "sports" },
  { icon: <RiHandbagLine />, heading: "Job", id: "jobs" },
  { icon: <HiOutlineUserGroup />, heading: "Community" },
  { icon: <BiHome />, heading: "Home and Garden", id: "home_and_garden" },
  { icon: <HiOutlineMusicNote />, heading: "Music and Hobbies", id: "music_and_hobbies" },
  { icon: <FaBabyCarriage />, heading: "Baby Kids", id: "baby_kids" },
  { icon: <HiOutlineOfficeBuilding />, heading: "Office and Business", id: "business" },
  { icon: <GiFarmTractor />, heading: "Farming & Industrial" },
  { icon: <RiHandbagLine />, heading: "Other Services", id: "other_services" },
];

export { homeSliderItems };
