import { FaList } from "react-icons/fa";
import { useRouter } from "next/router";

export const NoSurveysCard = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col justify-between items-center p-10 rounded-lg">
      <div className="rounded-full p-8 flex items-center justify-center bg-mainBG/30 border border-borderGray/30">
        <FaList className="text-2xl text-black/10" />
      </div>
      <p className="text-base mt-10 text-mainBlue poppins-medium">
        No Surveys Yet
      </p>
      <p className="text-sm mt-3 text-mainBlue/40 poppins-regular">
        Head to the Surveys tab and create a new survey now for your team to
        take.
      </p>
      <button
        onClick={() => router.push("/application/surveys/creatingsurvey")}
        className="mt-4 bg-mainBlue/30 hover:bg-mainYellow hover:text-mainBlue transition-all duration-300 text-white rounded-xl text-sm px-5 py-2"
      >
        Create Survey
      </button>
    </div>
  );
};
