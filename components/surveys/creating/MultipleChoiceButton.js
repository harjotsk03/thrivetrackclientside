import { useState } from "react";
import { BiCheck, BiX } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
export default function MultipleChoiceButton({
  isEditing,
  text,
  isSelected,
  onSelect,
  index,
  onDelete,
}) {
  const [inputText, setInputText] = useState(text);

  return (
    <button
      onClick={onSelect}
      className={`flex gap-2 rounded-2xl ${
        isEditing ? "p-0" : "bg-white/50 p-4"
      }`}
    >
      {isEditing ? (
        <div className="flex flex-col gap-2 w-full">
          <p className="text-xs text-left poppins-medium">Option {index + 1}</p>
          <div className="flex flex-row gap-2">
            <input
              type="text"
              className="text-sm w-full text-mainBlue poppins-medium px-4 py-3 rounded-xl"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
            />
            <button
              onClick={onDelete}
              className="text-red-500 px-3 bg-red-500/10 rounded-lg poppins-regular text-xs"
            >
              <AiFillDelete />
            </button>
          </div>
        </div>
      ) : (
        <button className="flex flex-row gap-2 justify-between items-center bg-white/50 rounded-xl">
          {isEditing ? (
            <input
              type="text"
              className="text-base poppins-medium"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
            />
          ) : (
            <span
              className={`text-base poppins-medium ${
                isSelected ? "text-green-500" : "text-black"
              }`}
            >
              {text}
            </span>
          )}
          {isSelected ? <BiCheck className="text-green-500" /> : null}
        </button>
      )}
    </button>
  );
}
