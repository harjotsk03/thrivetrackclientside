import Image from "next/image";
import { FaChevronRight } from "react-icons/fa6";
import { FiAlertTriangle } from "react-icons/fi";

export const EmployeeCard = ({
  name,
  jobTitle,
  team,
  image,
  isLoggedIn,
  missingInfo,
}) => {
  return (
    <button className="group flex flex-col items-center gap-3 bg-mainBG/30 hover:bg-mainBG justify-between w-full transition-all overflow-hidden duration-500 rounded-lg">
      <div className="flex w-full  gap-3 flex-row items-center pr-3 pl-3 pt-3">
        <Image src={image} alt={name} className="w-10 h-10 rounded-lg" />
        <div className="flex flex-col gap-0.5 text-left w-full">
          <p className="text-base poppins-medium">{name}</p>
          <div className="flex flex-row items-center gap-1.5">
            <p className="text-sm poppins-regular">{jobTitle}</p>
            <p className="text-sm poppins-regular">|</p>
            <p className="text-sm poppins-regular">{team}</p>
          </div>
        </div>
        {missingInfo && (
          <div className="relative flex mr-2">
            <FiAlertTriangle size={15} className="text-amber-500" />
            <div className="absolute -top-1.5 -right-1.5 w-2 h-2 bg-red-500 rounded-full border border-white"></div>
          </div>
        )}
      </div>

      <div className="w-full bg-mainBG h-max px-4 py-2">
        <p className="text-mainBlue text-xs items-center flex flex-row gap-1">
          View Details{" "}
          <FaChevronRight className="group-hover:translate-x-1 duration-300 ease-in-out" />
        </p>
      </div>
    </button>
  );
};
