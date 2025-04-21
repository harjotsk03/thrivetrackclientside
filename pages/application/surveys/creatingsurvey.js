import AuthLayout from "../../../components/AuthLayout";
import { useRouter } from "next/router";
import { FaArrowLeft } from "react-icons/fa";
import { useState, useContext } from "react";
import SurveyInfo from "../../../components/surveys/creating/SurveyInfo";
import SurveyQuestions from "../../../components/surveys/creating/SurveyQuestions";
import Dragables from "../../../components/surveys/creating/dragables";
import SurveyData from "../../../components/surveys/creating/SurveyData";
import { AlertContext } from "../../../context/alertContext";
import { useEffect } from "react";

export default function CreatingSurvey() {
  const router = useRouter();
  const { showAlert } = useContext(AlertContext);

  const [isSurveyInfoEnabled, setIsSurveyInfoEnabled] = useState(false);
  const [surveyTitle, setSurveyTitle] = useState("");
  const [questions, setQuestions] = useState([]);

  const [isDataFilled, setIsDataFilled] = useState(false);

  const beginAddingQuestions = () => {
    if (isDataFilled) {
      setIsSurveyInfoEnabled(true);
    } else {
      setIsSurveyInfoEnabled(false);
      showAlert(
        "Please fill in the survey information before adding questions"
      );
    }
  };

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
                  setIsDataFilled={setIsDataFilled}
                  isDataFilled={isDataFilled}
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
                    onClick={beginAddingQuestions}
                    className="w-max px-4 py-2 text-sm rounded-lg bg-mainBlue text-white hover:bg-mainYellow hover:text-mainBlue transition-all duration-500 ease-in-out"
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
                  questions={questions}
                  setQuestions={setQuestions}
                />
              )}
            </div>
          </div>
          <div className="flex w-2/5 flex-col gap-4 mt-4 bg-white/60 rounded-2xl h-[calc(80vh)] p-6">
            <Dragables surveyTitle={surveyTitle} />
            <SurveyData questions={questions} />
            <div className="flex flex-row gap-2 w-full justify-end">
              <div className="flex flex-row gap-4 items-center">
                <p className="text-xs text-mainBlue/40 poppins-regular">
                  Last saved: 16/04/2025, 12:03 PM
                </p>
                <button className="w-max px-4 py-2 text-sm rounded-lg hover:bg-mainBlue hover:text-white bg-mainBlue/10 text-mainBlue transition-all duration-500 ease-in-out">
                  Save Draft
                </button>
              </div>
              <button className="w-max px-4 py-2 text-sm rounded-lg bg-mainBlue text-white hover:bg-mainYellow hover:text-mainBlue transition-all duration-500 ease-in-out">
                Publish
              </button>
            </div>
          </div>
        </div>
      </div>
    </AuthLayout>
  );
}
