import { FiArrowRight } from "react-icons/fi";
export const TeamCard = ({ name, navigate }) => {
  return (
    <button
      onClick={navigate}
      className="group flex flex-row items-center gap-2 bg-mainBG hover:bg-mainBlue/30   transition-all duration-500 px-4 py-2 rounded-lg justify-between"
    >
      <p className="text-sm poppins-regular">{name}</p>
      <FiArrowRight className="group-hover:-rotate-45 transition-all duration-500" />
    </button>
  );
};
