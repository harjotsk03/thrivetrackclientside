import placeHolder from "../../assets/placeHolder.jpg";
import { EmployeeCard } from "./EmployeeCard";

export const Employees = () => {
  return (
    <div className="col-span-1 row-span-2 bg-white rounded-xl p-4 overflow-hidden">
      <h2 className="text-lg poppins-medium">Employees</h2>
      <div className="flex flex-col gap-2 mt-2 overflow-auto scrollbar-hide pb-20 h-full">
        <EmployeeCard
          name="Harjot Singh"
          role="Senior Software Engineer"
          image={placeHolder}
        />
        <EmployeeCard
          name="Faaiz Abdullah"
          role="Software Engineer"
          image={placeHolder}
        />
      </div>
    </div>
  );
};
