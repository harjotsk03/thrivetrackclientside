import AuthLayout from "../../../components/AuthLayout";
import { FiFilePlus, FiFilter } from "react-icons/fi";
import { useRouter } from "next/router";

export default function Surveys() {
  const router = useRouter();
  return (
    <AuthLayout>
      <div className="w-full h-screen flex flex-col overflow-hidden mt-16 lg:mt-20 pt-3 pl-1">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col lg:flex-row items-center gap-3">
            <input
              type="text"
              placeholder="Search through your surveys"
              className="w-full h-10 rounded-lg border border-mainBlue/20 px-4 focus:outline-none focus:ring-2 focus:ring-mainBlue transition-all duration-500 ease-in-out"
            />
            <div className="flex flex-row gap-3 justify-end w-full">
              <button
                onClick={() =>
                  router.push("/application/surveys/creatingsurvey")
                }
                className="bg-mainBlue/20 text-xs hover:bg-mainYellow  transition-all duration-500 poppins-regular text-mainBlue rounded-lg px-3 h-8 lg:px-6 lg:h-10 w-max whitespace-nowrap flex flex-row items-center gap-2"
              >
                <FiFilter className="text-xs" />
                Filter
              </button>
              <button
                onClick={() =>
                  router.push("/application/surveys/creatingsurvey")
                }
                className="bg-mainBlue text-xs hover:bg-mainYellow hover:text-mainBlue transition-all duration-500 poppins-regular text-white rounded-lg px-3 h-8 lg:px-6 lg:h-10 w-max whitespace-nowrap flex flex-row items-center gap-2"
              >
                <FiFilePlus className="text-xs" />
                Create New Survey
              </button>
            </div>
          </div>
        </div>
      </div>
    </AuthLayout>
  );
}
