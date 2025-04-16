import { AiFillDelete } from "react-icons/ai";
import { BiEdit, BiCheck } from "react-icons/bi";
import { useState } from "react";
import MultipleChoiceButton from "./MultipleChoiceButton";
export default function MultipleChoiceQuestion({ question, index }) {
  const [isEditing, setIsEditing] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [newOption, setNewOption] = useState("");
  const [questionText, setQuestionText] = useState(question?.question);
  return (
    <div className="flex flex-col gap-2 bg-white/50 rounded-2xl p-4">
      <div className="flex flex-row justify-between">
        <p className="text-base poppins-medium">Question {index + 1}</p>
        <div className="flex flex-row gap-2 items-center">
          <p className="text-sm poppins-regular">Multiple Choice</p>
          <button
            onClick={() => setIsEditing(!isEditing)}
            className="text-sm text-blue-500 p-2 bg-blue-500/10 rounded-lg poppins-regular ml-2"
          >
            {isEditing ? <BiCheck /> : <BiEdit />}
          </button>
          <button className="text-sm text-red-500 p-2 bg-red-500/10 rounded-lg poppins-regular">
            <AiFillDelete />
          </button>
        </div>
      </div>
      {isEditing ? (
        <input
          type="text"
          value={questionText}
          onChange={(e) => setQuestionText(e.target.value)}
          placeholder="Enter question"
          className="text-sm poppins-regular w-full h-10 rounded-lg border border-mainBlue/20 px-4 focus:outline-none focus:ring-2 focus:ring-mainBlue transition-all duration-500 ease-in-out"
        />
      ) : (
        <p className="text-base poppins-regular mb-1">{questionText}</p>
      )}
      <div className="grid grid-cols-2 gap-2">
        {question.options.map((option, index) => (
          <MultipleChoiceButton
            onDelete={() => {
              question.options.splice(index, 1);
            }}
            key={index}
            index={index}
            isEditing={isEditing}
            text={option}
            isSelected={selectedOption === option}
            onSelect={() => {
              setSelectedOption(option);
            }}
          />
        ))}
      </div>
      {isEditing && (
        <div className="flex flex-col gap-2 mt-2">
          <input
            type="text"
            value={newOption}
            onChange={(e) => setNewOption(e.target.value)}
            placeholder="Add new option"
            className="p-2 border rounded"
          />
          <button
            onClick={() => {
              if (newOption) {
                question.options.push(newOption);
                setNewOption("");
              }
            }}
            className="text-sm text-green-500 p-2 bg-green-500/10 rounded-lg poppins-regular"
          >
            Add Option
          </button>
        </div>
      )}
      <p className="text-sm poppins-regular mt-2">
        Select an answer to set it as the correct answer
      </p>
    </div>
  );
}
