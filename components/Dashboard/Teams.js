import { useEffect, useState } from "react";
import { useProfile } from "../../hooks/useProfile";
import { TeamCard } from "./TeamCard";
import { FaList, FaUsers } from "react-icons/fa6";

export const Teams = () => {
  const { profile, loading } = useProfile();
  const [teams, setTeams] = useState([]);
  const [company, setCompany] = useState("");

  useEffect(() => {
    setCompany(profile?.companyId);
  }, [profile]);

  const getTeams = async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/companies/${company}/teams`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setTeams(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getTeams();
  }, [company]);

  return (
    <div className="col-span-1 row-span-2 bg-white rounded-xl p-4 overflow-hidden">
      <div className="flex flex-row justify-between w-full items-start">
        <h2 className="text-lg poppins-medium">Teams</h2>
        <button className="bg-mainBlue hover:text-mainBlue hover:bg-mainYellow transition-all ease-in-out duration-300 text-white px-3 py-1 rounded-lg text-xs">
          Add Team
        </button>
      </div>
      <div className="flex flex-col gap-2 mt-2 overflow-auto scrollbar-hide pb-20 h-full">
        {teams.length > 0 ? (
          teams.map((employee, index) => (
            <TeamCard
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
          <div className="w-full h-full flex flex-col items-center justify-center">
            <div className="rounded-full p-6 flex items-center justify-center bg-mainBG/30 border border-borderGray/30">
              <FaUsers className="text-lg text-black/10" />
            </div>
            <p className="text-base mt-6 text-mainBlue poppins-medium">
              No Teams Yet
            </p>
            <p className="text-sm mt-3 text-mainBlue/40 w-3/5 text-center poppins-regular">
              Head to the Company tab and create a new team.
            </p>
            <button
              onClick={() => router.push("/application/surveys/creatingsurvey")}
              className="mt-4 bg-mainBlue/30 hover:bg-mainYellow hover:text-mainBlue transition-all duration-300 text-white rounded-xl text-sm px-5 py-2"
            >
              Add Team
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
