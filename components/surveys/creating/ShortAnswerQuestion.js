import React, { useState, useEffect } from "react";
import { BiCheck, BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";

export default function ShortAnswerQuestion({
  question,
  index,
  onQuestionUpdate,
  questions,
  setQuestions,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [questionData, setQuestionData] = useState({
    question: question.question,
  });

  useEffect(() => {
    if (onQuestionUpdate) {
      onQuestionUpdate(index, questionData);
    }
  }, [questionData, index, onQuestionUpdate]);

  const handleQuestionChange = (e) => {
    setQuestionData((prev) => ({
      ...prev,
      question: e.target.value,
    }));
  };

  const handleDeleteQuestion = () => {
    setQuestions(questions.filter((_, i) => i !== index));
  };

  return (
    <div className="flex flex-col gap-2 bg-white/50 rounded-2xl p-4">
      <div className="flex flex-row justify-between">
        <div className="flex flex-row items-center gap-2">
          <p className="text-base poppins-medium">Question {index + 1}</p>
          <p className="text-sm poppins-regular">- Short Answer</p>
        </div>
        <div className="flex flex-row gap-2 items-center">
          <button
            onClick={() => setIsEditing(!isEditing)}
            className="text-sm text-blue-500 p-2 bg-blue-500/10 rounded-lg poppins-regular ml-2"
          >
            {isEditing ? <BiCheck /> : <BiEdit />}
          </button>
          <button
            onClick={handleDeleteQuestion}
            className="text-sm text-red-500 p-2 bg-red-500/10 rounded-lg poppins-regular"
          >
            <AiFillDelete />
          </button>
        </div>
      </div>

      <input
        type="text"
        value={questionData.question}
        onChange={handleQuestionChange}
        placeholder="Enter your question"
        className="text-sm poppins-regular w-full h-10 rounded-lg border border-mainBlue/20 px-4 focus:outline-none focus:ring-2 focus:ring-mainBlue transition-all duration-500 ease-in-out"
        disabled={!isEditing}
      />

      <textarea
        className="w-full p-2 border rounded-md text-sm poppins-regular resize-none border-mainBlue/20 focus:outline-none focus:ring-2 focus:ring-mainBlue transition-all duration-500 ease-in-out"
        placeholder="Enter your answer here..."
        rows={4}
        disabled={!isEditing}
      />
    </div>
  );
}
