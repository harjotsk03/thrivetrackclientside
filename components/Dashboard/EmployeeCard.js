import Image from "next/image";

export const EmployeeCard = ({ name, role, image }) => {
  return (
    <button className="group flex flex-row items-center gap-3 bg-mainBG hover:bg-mainBlue/30   transition-all duration-500 p-3 rounded-lg">
      <Image src={image} alt={name} className="w-10 h-10 rounded-lg" />
      <div className="flex flex-col gap-0.5 text-left">
        <p className="text-sm poppins-medium">{name}</p>
        <p className="text-xs poppins-regular">{role}</p>
      </div>
    </button>
  );
};
