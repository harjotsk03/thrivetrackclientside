import React from "react";
import {
  FaUserCheck,
  FaMobileAlt,
  FaChartLine,
  FaComments,
  FaRocket,
  FaBullseye,
  FaSitemap,
} from "react-icons/fa";

export default function WhoWeAre() {
  return (
    <div className="w-full h-max bg-[#E5E5E5]">
      <div className="w-4/5 bg-white py-8 lg:py-14 fade-in-down flex flex-col items-center px-4 lg:px-16 mx-auto rounded-3xl">
        <h2 className="text-black text-xl lg:text-4xl lg:w-1/2 leading-snug text-center poppins-regular">
          Out of thousands of options—here's why our clients trust us.
        </h2>
        <p className="text-black mt-4 text-sm text-center lg:text-base poppins-light">
          Since day one, aligned with our core principles, we focus on:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 w-full">
          <div className="p-2 lg:p-6 rounded-2xl text-center flex flex-col items-center justify-center gap-4">
            <div className="text-blue-600 text-xl poppins-regular">
              <FaUserCheck />
            </div>
            <h3 className="text-black text-base lg:text-xl poppins-regular">
              User-Focused Design
            </h3>
          </div>
          <div className="p-2 lg:p-6 rounded-2xl text-center flex flex-col items-center justify-center gap-4">
            <div className="text-blue-600 text-xl poppins-regular">
              <FaMobileAlt />
            </div>
            <h3 className="text-black text-base lg:text-xl poppins-regular">
              Mobile-First Approach
            </h3>
          </div>
          <div className="p-2 lg:p-6 rounded-2xl text-center flex flex-col items-center justify-center gap-4">
            <div className="text-blue-600 text-xl poppins-regular">
              <FaChartLine />
            </div>
            <h3 className="text-black text-base lg:text-xl poppins-regular">
              Scalability
            </h3>
          </div>
          <div className="p-2 lg:p-6 rounded-2xl text-center flex flex-col items-center justify-center gap-4">
            <div className="text-blue-600 text-xl poppins-regular">
              <FaSitemap />
            </div>
            <h3 className="text-black text-base lg:text-xl poppins-regular">
              Strong Information Architecture
            </h3>
          </div>
          <div className="p-2 lg:p-6 rounded-2xl text-center flex flex-col items-center justify-center gap-4">
            <div className="text-blue-600 text-xl poppins-regular">
              <FaRocket />
            </div>
            <h3 className="text-black text-base lg:text-xl poppins-regular">
              Post-Launch Growth Support
            </h3>
          </div>
          <div className="p-2 lg:p-6 rounded-2xl text-center flex flex-col items-center justify-center gap-4">
            <div className="text-blue-600 text-xl poppins-regular">
              <FaBullseye />
            </div>
            <h3 className="text-black text-base lg:text-xl poppins-regular">
              Brand Identity Alignment
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
