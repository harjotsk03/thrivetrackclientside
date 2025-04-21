import React, { useContext } from "react";
import { TbBoxMultiple, TbBoxMultiple2 } from "react-icons/tb";
import { MdTextSnippet } from "react-icons/md";
import { AlertContext } from "../../../context/alertContext";

export default function Dragables({ surveyTitle }) {
  const { showAlert } = useContext(AlertContext);

  const handleDragStart = (e, questionType) => {
    if (surveyTitle === "" || surveyTitle === null) {
      showAlert("Please enter a survey title before adding questions");
      e.preventDefault();
      return;
    }
    if (e.dataTransfer) {
      e.dataTransfer.setData("questionType", questionType);
    }
  };

  return (
    <>
      <h3 className="text-lg poppins-medium">Question Types</h3>
      <p className="text-sm poppins-regular">
        Drag and drop the question type to the survey builder to add it to your
        survey
      </p>
      <div className="grid grid-cols-3 gap-4">
        <div
          className="box bg-white rounded-2xl p-4 text-center mb-4 shadow cursor-move flex flex-col items-center justify-center gap-3"
          onDragStart={(e) => handleDragStart(e, "multipleChoice")}
          draggable="true"
        >
          <TbBoxMultiple size={24} />
          Multiple Choice Question
        </div>
        <div
          className="box bg-white rounded-2xl p-4 text-center mb-4 shadow cursor-move flex flex-col items-center justify-center gap-3"
          onDragStart={(e) => handleDragStart(e, "shortAnswer")}
          draggable="true"
        >
          <MdTextSnippet size={24} />
          Short Answer Question
        </div>
        <div
          className="box bg-white rounded-2xl p-4 text-center mb-4 shadow cursor-move flex flex-col items-center justify-center gap-3"
          onDragStart={(e) => handleDragStart(e, "selectMultiple")}
          draggable="true"
        >
          <TbBoxMultiple2 size={24} />
          Multiple Select Question
        </div>
      </div>
    </>
  );
}

const boxStyle = {
  border: "1px solid #ccc",
  padding: "10px",
  margin: "10px",
  width: "200px",
  cursor: "move",
  backgroundColor: "#f9f9f9",
};
