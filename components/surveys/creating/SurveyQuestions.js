import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { RiDragDropLine } from "react-icons/ri";
import MultipleChoiceQuestion from "./MultipleChoiceQuestion";
import ShortAnswerQuestion from "./ShortAnswerQuestion";
import SelectMultipleQuestion from "./SelectMultipleQuestion";
import MultiSelectQuestion from "./MultiSelectQuestion";

export default function SurveyQuestions({
  setIsSurveyInfoEnabled,
  isSurveyInfoEnabled,
  surveyTitle,
  questions,
  setQuestions,
}) {
  const handleDrop = (e) => {
    e.preventDefault();
    const questionType = e.dataTransfer.getData("questionType");

    // Create a new question based on the type
    let newQuestion;
    if (questionType === "multipleChoice") {
      newQuestion = {
        type: "multipleChoice",
        question: "New Multiple Choice Question",
        options: ["", "", "", ""],
        correctAnswer: null,
      };
    } else if (questionType === "shortAnswer") {
      newQuestion = {
        type: "shortAnswer",
        question: "New Short Answer Question",
      };
    } else if (questionType === "selectMultiple") {
      newQuestion = {
        type: "selectMultiple",
        question: "New Multiple Select Question",
        options: ["Option 1", "Option 2", "Option 3"],
      };
    }

    // Add the new question to the questions array
    if (newQuestion) {
      setQuestions([...questions, newQuestion]);
    }
  };

  const handleDragOver = (e) => {
    // This is needed to allow dropping
    e.preventDefault();
  };

  return (
    <div className="flex flex-col gap-4 fade-in-down">
      <h2 className="text-lg poppins-medium">
        Create Questions - {surveyTitle}
      </h2>
      <button
        onClick={() => setIsSurveyInfoEnabled(!isSurveyInfoEnabled)}
        className="flex flex-row w-max items-center gap-1 text-mainBlue/40 border-b-2 border-transparent hover:border-mainYellow hover:text-mainBlue transition-all duration-500"
      >
        <FaArrowLeft className="text-xs" />
        <p className="text-sm poppins-regular">Back to Survey Info</p>
      </button>
      {questions.map((question, index) =>
        question.type === "multipleChoice" ? (
          <MultipleChoiceQuestion
            key={index}
            question={question}
            index={index}
            setQuestions={setQuestions}
            questions={questions}
          />
        ) : question.type === "shortAnswer" ? (
          <ShortAnswerQuestion
            key={index}
            question={question}
            index={index}
            setQuestions={setQuestions}
            questions={questions}
          />
        ) : question.type === "selectMultiple" ? (
          <MultiSelectQuestion
            key={index}
            question={question}
            index={index}
            setQuestions={setQuestions}
            questions={questions}
          />
        ) : null
      )}
      <div
        className="bg-white/60 rounded-2xl w-full h-max py-6 flex flex-col gap-2 items-center justify-center"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        <p className="text-sm poppins-regular">Add a question</p>
        <p className="text-lg poppins-medium">Drag and Drop Question Type</p>
        <div className="rounded-full bg-white p-4 flex items-center justify-center mt-4">
          <RiDragDropLine size={24} />
        </div>
      </div>
    </div>
  );
}
