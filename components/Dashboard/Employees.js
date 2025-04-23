import { useEffect, useState } from "react";
import placeHolder from "../../assets/placeHolder.jpg";
import { EmployeeCard } from "./EmployeeCard";
import axios from "axios";
import { useProfile } from "../../hooks/useProfile";

export const Employees = () => {
  const { profile, loading } = useProfile();
  const [employees, setEmployees] = useState([]);
  const [company, setCompany] = useState("");

  useEffect(() => {
    setCompany(profile?.companyId);
  }, [profile]);

  const getEmployees = async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/companies/${company}/employees`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setEmployees(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getEmployees();
  }, [company]);

  return (
    <div className="col-span-1 row-span-2 bg-white rounded-xl p-4 overflow-hidden">
      <div className="flex flex-row justify-between w-full items-start">
        <h2 className="text-lg poppins-medium">Employees</h2>
        <button className="bg-mainBlue hover:text-mainBlue hover:bg-mainYellow transition-all ease-in-out duration-300 text-white px-3 py-1 rounded-lg text-xs">
          Add Employee
        </button>
      </div>
      <div className="flex flex-col gap-2 mt-2 overflow-auto scrollbar-hide pb-20 h-full">
        {employees.length > 0 ? (
          employees.map((employee, index) => (
            <EmployeeCard
              key={index}
              name={employee.name}
              missingInfo={
                employee.jobTitle == "None" || employee.team == "None"
                  ? true
                  : false
              }
              jobTitle={
                employee.jobTitle != "None" ? employee.jobTitle : "No Job Title"
              }
              team={employee.team != "None" ? employee.team : "No Team"}
              image={employee.image || placeHolder}
              isLoggedIn={profile?.id === employee?.id ? true : false}
            />
          ))
        ) : (
          <p className="text-sm text-gray-500">No employees found.</p>
        )}
      </div>
    </div>
  );
};
