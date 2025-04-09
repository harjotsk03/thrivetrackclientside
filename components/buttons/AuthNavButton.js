export const AuthNavButton = ({ icon, isActive, text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-4 flex flex-row gap-3 rounded-xl ${
        isActive ? "bg-mainBlue text-white" : "bg-mainBG/50 text-mainBlue"
      }  hover:bg-mainYellow hover:text-mainBlue transition-all duration-500 ease-in-out items-center`}
    >
      {icon}
      <p className="poppins-medium text-base pt-0.5">{text}</p>
    </button>
  );
};
