import { LuHeartHandshake } from "react-icons/lu";
import { TbPigMoney } from "react-icons/tb";
import { HiUserGroup } from "react-icons/hi";

const statsData = [
  {
    icon: LuHeartHandshake,
    title: "Build Trust",
    stat: "84%",
    description:
      "of employees at high-trust companies report better mental health*",
  },
  {
    icon: TbPigMoney,
    title: "Grow Revenue",
    stat: "2.5x",
    description: "higher revenue growth for companies with strong cultures*",
  },
  {
    icon: HiUserGroup,
    title: "Lower Turnover",
    stat: "56%",
    description: "lower turnover rates when employees feel heard*",
  },
];

export default function HealthyTeamsOutperform() {
  return (
    <div className="w-full h-max py-20 px-10 lg:px-20 bg-mainBG fade-in-down flex flex-col lg:items-center justify-center">
      <h1 className="text-3xl lg:text-5xl jost-medium">
        Healthy Teams Outperform.{" "}
        <span className="text-mainYellow">Period.</span>
      </h1>
      <p className="text-base w-10/12 lg:w-full lg:text-xl jost-regular text-mainBlue/60 mt-6">
        Your workforce's well-being isn't just HR's job—it's your competitive
        advantage.{" "}
      </p>
      <div className="w-full lg:w-4/5 h-max grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-4 gap-10 mt-8 lg:mt-14">
        {statsData.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div
              key={index}
              className="w-full h-max flex flex-row lg:flex-col items-center lg:justify-center gap-4 lg:gap-0"
            >
              <div className="w-max h-max bg-white rounded-2xl p-4 lg:p-5 border border-borderGray mb-4">
                <Icon className="text-mainBlue text-2xl lg:text-3xl" />
              </div>
              <div>
                <h2 className="text-xl lg:text-2xl jost-medium">
                  {stat.title}
                </h2>
                <p className="text-base lg:text-xl jost-regular text-black mt-3 lg:mt-6 lg:text-center w-11/12">
                  <span className="text-3xl lg:text-4xl jost-medium">
                    {stat.stat}
                  </span>{" "}
                  {stat.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
