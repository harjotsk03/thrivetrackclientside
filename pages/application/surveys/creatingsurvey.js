import AuthLayout from "../../../components/AuthLayout";
import { useRouter } from "next/router";
import { FaArrowLeft } from "react-icons/fa";
import { useState } from "react";
import SurveyInfo from "../../../components/surveys/creating/SurveyInfo";
import SurveyQuestions from "../../../components/surveys/creating/SurveyQuestions";
import Dragables from "../../../components/surveys/creating/dragables";

export default function CreatingSurvey() {
  const router = useRouter();

  const [isSurveyInfoEnabled, setIsSurveyInfoEnabled] = useState(false);
  const [surveyTitle, setSurveyTitle] = useState("");

  return (
    <AuthLayout>
      <div className="w-full h-screen flex flex-col overflow-hidden scrollbar-hide mt-20">
        <div className="flex flex-col gap-4">
          <button
            onClick={() => router.push("/application/surveys/surveys")}
            className="flex flex-row w-max items-center gap-1 text-mainBlue/40 border-b-2 border-transparent hover:border-mainYellow hover:text-mainBlue transition-all duration-500"
          >
            <FaArrowLeft className="text-xs" />
            <p className="text-sm poppins-regular">Back to all surveys</p>
          </button>
          <h1 className="text-xl poppins-medium">Create a New Survey</h1>
        </div>
        <div className="flex flex-row gap-6">
          <div className="flex w-3/5 flex-col gap-4 mt-4">
            <div className="flex flex-col gap-2 overflow-y-auto scrollbar-hide h-[80vh] px-1">
              {!isSurveyInfoEnabled && (
                <SurveyInfo
                  surveyTitle={surveyTitle}
                  setSurveyTitle={setSurveyTitle}
                />
              )}
              {!isSurveyInfoEnabled && (
                <div
                  className={`flex flex-row gap-2 w-full fade-in-down justify-end ${
                    isSurveyInfoEnabled ? "mt-0" : "mt-6"
                  }`}
                >
                  <button className="w-max px-4 py-2 text-sm rounded-lg bg-mainBlue/10 text-mainBlue hover:bg-mainBlue hover:text-white transition-all duration-500 ease-in-out">
                    Save Draft
                  </button>
                  <button
                    onClick={() => setIsSurveyInfoEnabled(!isSurveyInfoEnabled)}
                    className="w-max px-4 py-2 text-sm rounded-lg bg-mainBlue text-white hover:bg-mainBlue/10 hover:text-mainBlue transition-all duration-500 ease-in-out"
                  >
                    Begin Adding Questions
                  </button>
                </div>
              )}
              {isSurveyInfoEnabled && (
                <SurveyQuestions
                  isSurveyInfoEnabled={isSurveyInfoEnabled}
                  setIsSurveyInfoEnabled={setIsSurveyInfoEnabled}
                  surveyTitle={surveyTitle}
                />
              )}
            </div>
          </div>
          <div className="flex w-2/5 flex-col gap-4 mt-4 bg-white/60 rounded-2xl h-[calc(80vh)] p-6">
            <Dragables surveyTitle={surveyTitle} />
          </div>
        </div>
      </div>
    </AuthLayout>
  );
}
