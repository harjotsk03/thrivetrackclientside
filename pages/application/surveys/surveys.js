import AuthLayout from "../../../components/AuthLayout";
import { FiFilePlus, FiFilter } from "react-icons/fi";
import { useRouter } from "next/router";
import axios from "axios";
import { useEffect, useState } from "react";
import { useProfile } from "../../../hooks/useProfile";

export default function Surveys() {
  const router = useRouter();
  const { profile, loading } = useProfile();
  const [surveys, setSurveys] = useState([]);

  const getSurveysForUser = async (userId) => {
    console.log(userId);
    try {
      const response = await axios.get(
        `http://localhost:8080/survey/getSurveysForUser?userId=${userId}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      // Handle the response
      console.log("Surveys:", response.data);
      setSurveys(response.data);
    } catch (error) {
      console.error("Error fetching surveys:", error);
      return null;
    }
  };

  useEffect(() => {
    console.log(profile);
    getSurveysForUser(profile?.id);
  }, [profile]);

  return (
    <AuthLayout>
      <div className="w-full h-screen flex flex-col overflow-hidden mt-16 lg:mt-20 pt-3 pl-1">
        <div className="flex flex-col gap-4">
          <div className="flex w-full flex-col lg:flex-row items-center gap-3">
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

          {/* Map through the surveys and display them */}
          <div className="grid grid-cols-2 gap-4 mt-4">
            {surveys.map((survey) => (
              <div
                key={survey.surveyId}
                className="bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition-all"
              >
                <h3 className="text-xl font-semibold">
                  {survey.surveyTitle || "Untitled Survey"}
                </h3>
                <p className="text-gray-600 mt-2">{survey.surveyDescription}</p>
                <p className="text-gray-400 text-sm mt-2">
                  Status: {survey.surveyStatus}
                </p>
                <p className="text-gray-400 text-sm">
                  Scheduled to send: {survey.surveyScheduledSendTime}
                </p>
                <p className="text-gray-400 text-sm">
                  Expiration: {survey.surveyExpirationTime}
                </p>

                <div className="mt-4">
                  <button
                    onClick={() =>
                      router.push(
                        `/application/surveys/editsurvey/${survey.surveyId}`
                      )
                    }
                    className="bg-mainBlue text-xs hover:bg-mainYellow text-white rounded-lg px-4 py-2"
                  >
                    Edit Survey
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AuthLayout>
  );
}
