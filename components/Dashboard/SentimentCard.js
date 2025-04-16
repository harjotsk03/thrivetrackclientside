import { FaHeartbeat, FaChevronDown } from "react-icons/fa";
import { StatHolder } from "./StatHolder";
export const SentimentCard = () => {
  return (
    <div className="col-span-1 flex flex-col justify-between row-span-1 bg-white rounded-xl p-4 overflow-auto">
      <div className="flex flex-row justify-between items-center">
        <div className="p-2 bg-mainBG rounded-lg">
          <FaHeartbeat className="text-base" />
        </div>
        <button className="flex flex-row items-center gap-2 bg-mainBG text-mainBlue/40 rounded-lg px-3 py-1">
          <p className="text-sm">This Week</p>
          <FaChevronDown className="text-xs" />
        </button>
      </div>
      <div className="flex flex-row gap-6">
        <div className="flex flex-col gap-2">
          <p className="text-xs poppins-regular">Avg. Sentiment Score</p>
          <StatHolder value={"8.8"} growth={"+13.23%"} />
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-xs poppins-regular">eNPS</p>
          <StatHolder value={"87/100"} growth={"-3.65%"} />
        </div>
      </div>
    </div>
  );
};
