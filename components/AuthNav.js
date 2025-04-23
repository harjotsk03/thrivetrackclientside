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
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { useProfile } from "../hooks/useProfile";

export default function AuthNav() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const { profile } = useProfile();
  const buttons = [
    {
      icon: <MdSpaceDashboard />,
      text: "Dashboard",
      isActive: router.pathname.includes("/application/dashboard"),
      onClick: () => router.push("/application/dashboard"),
    },
    {
      icon: <FaDatabase />,
      text: "Surveys",
      isActive: router.pathname.includes("/application/surveys"),
      onClick: () => router.push("/application/surveys/surveys"),
    },
    {
      icon: <FaPeopleGroup />,
      text: "Employees",
      isActive: router.pathname.includes("/application/employees"),
      onClick: () => router.push("/application/employees"),
    },
    {
      icon: <FaRegBuilding />,
      text: "Company",
      isActive: router.pathname.includes("/application/company"),
      onClick: () => router.push("/application/company"),
    },
    {
      icon: <LuMessageCircleMore />,
      text: "Conversations",
      isActive: router.pathname.includes("/application/conversations"),
      onClick: () => router.push("/application/conversations"),
    },
  ];

  const buttonsAlt = [
    { icon: <MdOutlineSettings />, text: "Settings" },
    { icon: <BiSupport />, text: "Customer Support" },
  ];

  return (
    <>
      {/* Hamburger button - only visible on mobile */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-3 left-2 z-50 p-2 rounded-lg bg-white"
      >
        <RxHamburgerMenu className="text-2xl text-mainBlue" />
      </button>

      <nav
        className={`
        bg-white fixed top-0 left-0 z-40 w-96 h-screen p-10 pt-20 lg:pt-0
        transform transition-transform duration-300 ease-in-out
        lg:translate-x-0 ${isOpen ? "translate-x-0" : "-translate-x-full"}
      `}
      >
        <div className="flex flex-col justify-between h-full lg:pt-14 pb-8">
          <div className="flex flex-col gap-4">
            <div className="relative w-20 lg:mb-4 lg:w-24 h-10">
              <Image src={logo} alt="Logo" fill className="object-contain" />
            </div>
            {buttons.map((button) => (
              <AuthNavButton
                key={button.text}
                icon={button.icon}
                text={button.text}
                isActive={button.isActive}
                onClick={button.onClick}
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
              onClick={() => {
                localStorage.removeItem("token");
                localStorage.removeItem("profile");
                router.push("/application/login");
              }}
              className="px-5 py-3 flex flex-row text-mainBlue gap-3 rounded-xl bg-mainBG/30 hover:bg-red-800 hover:text-white transition-all duration-500 ease-in-out items-center"
            >
              <MdOutlineLogout className="text-xl" />
              <p className="poppins-medium text-sm pt-0.5">Log Out</p>
            </button>
          </div>
        </div>
      </nav>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
