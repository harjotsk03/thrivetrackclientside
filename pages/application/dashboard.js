import {
  FaHeartbeat,
  FaChevronDown,
  FaRegFileAlt,
  FaList,
} from "react-icons/fa";
import AuthLayout from "../../components/AuthLayout";
import { MdAllInclusive } from "react-icons/md";
import { FiArrowRight, FiArrowUpRight } from "react-icons/fi";
import Image from "next/image";
import placeHolder from "../../assets/placeHolder.jpg";

export default function Dashboard() {
  return (
    <AuthLayout>
      <div className="w-full h-screen flex flex-col overflow-hidden">
        <div className="grid grid-cols-3 grid-rows-4 gap-4 h-5/6">
          <div className="col-span-1 flex flex-col justify-between row-span-1 bg-white rounded-xl p-4 overflow-auto">
            <div className="flex flex-row justify-between items-center">
              <div className="p-2 bg-mainBG rounded-lg">
                <FaRegFileAlt className="text-base" />
              </div>
              <button className="flex flex-row items-center gap-2 bg-mainBG text-mainBlue/40 rounded-lg px-3 py-1">
                <p className="text-sm">This Week</p>
                <FaChevronDown className="text-xs" />
              </button>
            </div>
            <div className="flex flex-row gap-6">
              <div className="flex flex-col gap-2">
                <p className="text-xs poppins-regular">Participant Rate</p>
                <div className="flex flex-row items-center gap-2">
                  <p className="text-3xl poppins-medium">79%</p>
                  <div className="px-3 py-1 bg-green-200/70 text-green-600 rounded-lg">
                    <p className="text-xs">+13.23%</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-xs poppins-regular">Engagement Score</p>
                <div className="flex flex-row items-center gap-2">
                  <p className="text-3xl poppins-medium">74/100</p>
                  <div className="px-3 py-1 bg-red-200/70 text-red-600 rounded-lg">
                    <p className="text-xs">-3.65%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
                <div className="flex flex-row items-center gap-2">
                  <p className="text-3xl poppins-medium">8.8</p>
                  <div className="px-3 py-1 bg-green-200/70 text-green-600 rounded-lg">
                    <p className="text-xs">+13.23%</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-xs poppins-regular">eNPS</p>
                <div className="flex flex-row items-center gap-2">
                  <p className="text-3xl poppins-medium">87/100</p>
                  <div className="px-3 py-1 bg-red-200/70 text-red-600 rounded-lg">
                    <p className="text-xs">-3.65%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-1 flex flex-col justify-between row-span-1 bg-white rounded-xl p-4 overflow-auto">
            <div className="flex flex-row justify-between items-center">
              <div className="p-2 bg-mainBG rounded-lg">
                <MdAllInclusive className="text-base" />
              </div>
              <button className="flex flex-row items-center gap-2 bg-mainBG text-mainBlue/40 rounded-lg px-3 py-1">
                <p className="text-sm">This Week</p>
                <FaChevronDown className="text-xs" />
              </button>
            </div>
            <div className="flex flex-row gap-6">
              <div className="flex flex-col gap-2">
                <p className="text-xs poppins-regular">Belonging Score</p>
                <div className="flex flex-row items-center gap-2">
                  <p className="text-3xl poppins-medium">5.5/10</p>
                  <div className="px-3 py-1 bg-red-200/70 text-red-600 rounded-lg">
                    <p className="text-xs">-3.65%</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-xs poppins-regular">
                  Microaggression Reports
                </p>
                <div className="flex flex-row items-center gap-2">
                  <p className="text-3xl poppins-medium">14</p>
                  <div className="px-3 py-1 bg-green-200/70 text-green-600 rounded-lg">
                    <p className="text-xs">+13.23%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-1 row-span-3 bg-white rounded-xl p-4 overflow-auto">
            <h2 className="text-lg poppins-medium">Created Surveys</h2>
            <div className="flex flex-col gap-2 w-full h-[93%] m-auto justify-center items-center">
              <div className="flex flex-col justify-between items-center p-10 rounded-lg">
                <div className="rounded-full p-8 flex items-center justify-center bg-mainBG/30 border border-borderGray/30">
                  <FaList className="text-2xl text-black/10" />
                </div>
                <p className="text-base mt-10 text-mainBlue poppins-medium">
                  No Surveys Yet
                </p>
                <p className="text-sm mt-3 text-mainBlue/40 poppins-regular">
                  Head to the Surveys tab and create a new survey now for your
                  team to take.
                </p>
                <button className="mt-4 bg-mainBlue/30 hover:bg-mainYellow hover:text-mainBlue transition-all duration-300 text-white rounded-xl text-sm px-5 py-2">
                  Create Survey
                </button>
              </div>
            </div>
          </div>
          <div className="col-span-1 row-span-2 bg-white rounded-xl p-4 overflow-hidden">
            <h2 className="text-lg poppins-medium">Teams</h2>
            <div className="flex flex-col gap-2 mt-2 overflow-auto scrollbar-hide pb-20 h-full">
              <button className="group flex flex-row items-center gap-2 bg-mainBG hover:bg-mainBlue/30   transition-all duration-500 px-4 py-2 rounded-lg justify-between">
                <p className="text-sm poppins-regular">Software Engineering</p>
                <FiArrowRight className="group-hover:-rotate-45 transition-all duration-500" />
              </button>
              <button className="group flex flex-row items-center gap-2 bg-mainBG hover:bg-mainBlue/30   transition-all duration-500 px-4 py-2 rounded-lg justify-between">
                <p className="text-sm poppins-regular">Marketing</p>
                <FiArrowRight className="group-hover:-rotate-45 transition-all duration-500" />
              </button>
              <button className="group flex flex-row items-center gap-2 bg-mainBG hover:bg-mainBlue/30   transition-all duration-500 px-4 py-2 rounded-lg justify-between">
                <p className="text-sm poppins-regular">Sales</p>
                <FiArrowRight className="group-hover:-rotate-45 transition-all duration-500" />
              </button>
              <button className="group flex flex-row items-center gap-2 bg-mainBG hover:bg-mainBlue/30   transition-all duration-500 px-4 py-2 rounded-lg justify-between">
                <p className="text-sm poppins-regular">Customer Success</p>
                <FiArrowRight className="group-hover:-rotate-45 transition-all duration-500" />
              </button>
              <button className="group flex flex-row items-center gap-2 bg-mainBG hover:bg-mainBlue/30   transition-all duration-500 px-4 py-2 rounded-lg justify-between">
                <p className="text-sm poppins-regular">People and Culture</p>
                <FiArrowRight className="group-hover:-rotate-45 transition-all duration-500" />
              </button>
              <button className="group flex flex-row items-center gap-2 bg-mainBG hover:bg-mainBlue/30   transition-all duration-500 px-4 py-2 rounded-lg justify-between">
                <p className="text-sm poppins-regular">Product Design</p>
                <FiArrowRight className="group-hover:-rotate-45 transition-all duration-500" />
              </button>
              <button className="group flex flex-row items-center gap-2 bg-mainBG hover:bg-mainBlue/30   transition-all duration-500 px-4 py-2 rounded-lg justify-between">
                <p className="text-sm poppins-regular">Product Management</p>
                <FiArrowRight className="group-hover:-rotate-45 transition-all duration-500" />
              </button>
              <button className="group flex flex-row items-center gap-2 bg-mainBG hover:bg-mainBlue/30   transition-all duration-500 px-4 py-2 rounded-lg justify-between">
                <p className="text-sm poppins-regular">
                  Engineering Operations
                </p>
                <FiArrowRight className="group-hover:-rotate-45 transition-all duration-500" />
              </button>
            </div>
          </div>
          <div className="col-span-1 row-span-2 bg-white rounded-xl p-4 overflow-hidden">
            <h2 className="text-lg poppins-medium">Employees</h2>
            <div className="flex flex-col gap-2 mt-2 overflow-auto scrollbar-hide pb-20 h-full">
              <button className="group flex flex-row items-center gap-3 bg-mainBG hover:bg-mainBlue/30   transition-all duration-500 p-3 rounded-lg">
                <Image
                  src={placeHolder}
                  alt="Harjot Singh"
                  className="w-10 h-10 rounded-lg"
                />
                <div className="flex flex-col gap-0.5 text-left">
                  <p className="text-sm poppins-medium">Harjot Singh</p>
                  <p className="text-xs poppins-regular">
                    Senior Software Engineer
                  </p>
                </div>
              </button>
              <button className="group flex flex-row items-center gap-3 bg-mainBG hover:bg-mainBlue/30   transition-all duration-500 p-3 rounded-lg">
                <Image
                  src={placeHolder}
                  alt="Harjot Singh"
                  className="w-10 h-10 rounded-lg"
                />
                <div className="flex flex-col gap-0.5 text-left">
                  <p className="text-sm poppins-medium">Faaiz Abdullah</p>
                  <p className="text-xs poppins-regular">Software Engineer</p>
                </div>
              </button>
            </div>
          </div>
          <div className="col-span-2 row-span-1 bg-white rounded-xl p-4 overflow-auto">
            <h2 className="text-lg poppins-medium">Deep Dives</h2>
          </div>
        </div>
      </div>
    </AuthLayout>
  );
}
