import {
  MdOutlineLogout,
  MdOutlineSettings,
  MdSpaceDashboard,
} from "react-icons/md";
import { LuMessageCircleMore } from "react-icons/lu";
import { FaDatabase, FaPeopleGroup, FaRegBuilding } from "react-icons/fa6";
import { useRouter } from "next/router";
import logo from "../assets/logoColor.png";
import Image from "next/image";
import { BiSupport } from "react-icons/bi";
import { AuthNavButton } from "./buttons/AuthNavButton";
import { AuthNavButtonAlt } from "./buttons/AuthNavButtonAlt";
export default function AuthNav() {
  const router = useRouter();

  const buttons = [
    { icon: <MdSpaceDashboard />, text: "Dashboard", isActive: true },
    { icon: <FaDatabase />, text: "Surveys", isActive: false },
    { icon: <FaPeopleGroup />, text: "Employees", isActive: false },
    { icon: <FaRegBuilding />, text: "Company", isActive: false },
    { icon: <LuMessageCircleMore />, text: "Conversations", isActive: false },
  ];

  const buttonsAlt = [
    { icon: <MdOutlineSettings />, text: "Settings" },
    { icon: <BiSupport />, text: "Customer Support" },
  ];

  return (
    <nav className="bg-white fixed top-0 left-0 z-50 w-96 h-screen p-10">
      <Image src={logo} className="w-28 h-auto" />
      <div className="flex flex-col justify-between h-full pt-14 pb-8">
        <div className="flex flex-col gap-4">
          {buttons.map((button) => (
            <AuthNavButton
              key={button.text}
              icon={button.icon}
              text={button.text}
              isActive={button.isActive}
            />
          ))}
        </div>
        <div className="flex flex-col gap-4">
          {buttonsAlt.map((button) => (
            <AuthNavButtonAlt
              key={button.text}
              icon={button.icon}
              text={button.text}
            />
          ))}
          <button
            onClick={() => router.push("/application/login")}
            className=" px-6 py-4 flex flex-row text-mainBlue gap-3 rounded-xl bg-mainBG/30 hover:bg-red-800 hover:text-white transition-all duration-500 ease-in-out items-center"
          >
            <MdOutlineLogout className="text-xl" />
            <p className="poppins-medium text-base pt-0.5">Log Out</p>
          </button>
        </div>
      </div>
    </nav>
  );
}
