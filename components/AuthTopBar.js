import { useRouter } from "next/router";
import user from "../assets/placeholderPersonImage.png";
import Image from "next/image";
import { FaChevronDown, FaBell } from "react-icons/fa";
import { useProfile } from "../hooks/useProfile";
export default function AuthTopBar() {
  const { profile } = useProfile();

  const router = useRouter();
  const pageTitle = (() => {
    const path = router.pathname.slice("/application/".length);
    return path.startsWith("surveys")
      ? "Surveys"
      : ["dashboard", "employees", "profile"].includes(path)
      ? path.charAt(0).toUpperCase() + path.slice(1)
      : "Home";
  })();

  return (
    <div className="w-full fixed top-0 left-0 h-16 bg-white z-40">
      <div className="w-full h-full flex items-center pl-11 md:pl-96 pr-4 md:pr-6 justify-between">
        <h1 className="text-lg md:text-xl text-mainBlue poppins-medium ml-2 md:ml-6">
          {pageTitle}
        </h1>
        <div className="flex flex-row items-center gap-1 md:gap-3">
          <button className="text-mainBlue bg-mainBG/50 hover:bg-mainYellow transition-all duration-500 px-4 md:px-5 py-2 md:py-3 rounded-lg text-xs md:text-sm poppins-medium flex flex-row items-center gap-1 md:gap-2">
            {profile?.companyName}
            <FaChevronDown className="text-[10px] md:text-xs" />
          </button>
          <button className="text-mainBlue hover:bg-mainYellow transition-all duration-500 px-2 md:px-3 py-2 md:py-3 rounded-lg text-xs md:text-sm poppins-medium flex flex-row items-center">
            <FaBell className="text-base" />
          </button>
          <button>
            <Image
              src={profile?.profilePhoto}
              width={20}
              height={20}
              alt="User"
              className="w-8 h-8 md:w-10 md:h-10 rounded-lg"
            />
          </button>
        </div>
      </div>
    </div>
  );
}
