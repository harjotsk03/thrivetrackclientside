import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function SurveyData({ questions }) {
  // Count question types
  const questionCounts = questions?.reduce((acc, question) => {
    const type = question.type;
    acc[type] = (acc[type] || 0) + 1;
    return acc;
  }, {});

  const data = {
    labels: ["Multiple Choice", "Short Answer", "Multiple Select"],
    datasets: [
      {
        data: [
          questionCounts?.multipleChoice || 0,
          questionCounts?.shortAnswer || 0,
          questionCounts?.selectMultiple || 0,
        ],
        backgroundColor: [
          "rgba(255, 99, 132, 0.8)",
          "rgba(54, 162, 235, 0.8)",
          "rgba(255, 206, 86, 0.8)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="flex flex-col gap-4 w-full">
      <h3 className="text-lg poppins-medium">Survey Data</h3>
      <div className="bg-white p-4 rounded-lg shadow-sm">
        <h4 className="text-md poppins-medium mb-4">
          Question Type Distribution
        </h4>
        <div className="w-full max-h-[27vh] flex items-center justify-center mx-auto">
          <Pie data={data} />
        </div>
        <div className="mt-4 text-sm poppins-regular">
          <p>Total Questions: {questions?.length || 0}</p>
          <p>Multiple Choice: {questionCounts?.multipleChoice || 0}</p>
          <p>Short Answer: {questionCounts?.shortAnswer || 0}</p>
          <p>Multiple Select: {questionCounts?.selectMultiple || 0}</p>
        </div>
      </div>
    </div>
  );
}
