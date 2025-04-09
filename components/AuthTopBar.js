import { useRouter } from "next/router";
import user from "../assets/placeholderPersonImage.png";
import Image from "next/image";
import { FaChevronDown, FaBell } from "react-icons/fa";

export default function AuthTopBar() {
  const router = useRouter();
  const pageTitle = (() => {
    const path = router.pathname.slice("/application/".length);
    return ["dashboard", "surveys", "employees"].includes(path)
      ? path.charAt(0).toUpperCase() + path.slice(1)
      : "Home";
  })();

  return (
    <div className="w-full fixed top-0 left-0 h-16 bg-white">
      <div className="w-full h-full flex items-center pl-96 pr-6 justify-between">
        <h1 className="text-xl text-mainBlue poppins-medium ml-6">
          {pageTitle}
        </h1>
        <div className="flex flex-row items-center gap-3">
          <button className="text-mainBlue bg-mainBG/50 hover:bg-mainYellow transition-all duration-500 px-5 py-3 rounded-lg text-sm poppins-medium flex flex-row items-center gap-2">
            Study Spotr <FaChevronDown className="text-xs" />
          </button>
          <button className="text-mainBlue hover:bg-mainYellow transition-all duration-500 px-3 py-3 rounded-lg text-sm poppins-medium flex flex-row items-center gap-2">
            <FaBell className="text-base" />
          </button>
          <button>
            <Image src={user} alt="User" className="w-10 h-10 rounded-lg" />
          </button>
        </div>
      </div>
    </div>
  );
}
