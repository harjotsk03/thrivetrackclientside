import { AiFillDelete } from "react-icons/ai";
import { BiEdit, BiCheck } from "react-icons/bi";
import { useState, useEffect } from "react";
import MultipleChoiceButton from "./MultipleChoiceButton";

export default function MultipleChoiceQuestion({
  question,
  index,
  onQuestionUpdate,
  questions,
  setQuestions,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [questionData, setQuestionData] = useState({
    question: question.question,
    options: [...question.options],
    correctAnswer: question.correctAnswer,
  });

  // This effect will trigger whenever questionData changes to update the parent/DB
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

  const handleOptionChange = (index, newValue) => {
    const newOptions = [...questionData.options];
    newOptions[index] = newValue;
    setQuestionData((prev) => ({
      ...prev,
      options: newOptions,
    }));
  };

  const handleAddOption = () => {
    setQuestionData((prev) => ({
      ...prev,
      options: [...prev.options, ""],
    }));
  };

  const handleDeleteOption = (indexToDelete) => {
    setQuestionData((prev) => ({
      ...prev,
      options: prev.options.filter((_, i) => i !== indexToDelete),
    }));
  };

  const handleSetCorrectAnswer = (optionIndex) => {
    setQuestionData((prev) => ({
      ...prev,
      correctAnswer: optionIndex,
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
          <p className="text-sm poppins-regular">- Multiple Choice</p>
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

      <div className="grid grid-cols-2 gap-2 mt-4">
        {questionData.options.map((option, optIndex) => (
          <div key={optIndex} className="flex items-center gap-2">
            <input
              type="text"
              value={option}
              onChange={(e) => handleOptionChange(optIndex, e.target.value)}
              placeholder={`Option ${optIndex + 1}`}
              className="flex-1 text-sm poppins-regular rounded-lg border border-mainBlue/20 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-mainBlue"
              disabled={!isEditing}
            />
            {isEditing && (
              <button
                onClick={() => handleDeleteOption(optIndex)}
                className="text-red-500 p-2 bg-red-500/10 rounded-lg"
              >
                <AiFillDelete />
              </button>
            )}
            <input
              type="radio"
              checked={questionData.correctAnswer === optIndex}
              onChange={() => handleSetCorrectAnswer(optIndex)}
              disabled={!isEditing}
              className="ml-2"
            />
          </div>
        ))}
      </div>

      {isEditing && questionData.options.length < 8 && (
        <button
          onClick={handleAddOption}
          className="mt-4 text-sm text-green-500 p-2 bg-green-500/10 rounded-lg poppins-regular"
        >
          Add Option
        </button>
      )}
    </div>
  );
}
