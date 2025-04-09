import participationRatesCard from "../../assets/participationRatesCard.png";
import belongingScoreCard from "../../assets/belongingScoreCard.png";
import deepDivesCard from "../../assets/deepDivesCard.png";
import Image from "next/image";

const cardData = [
  {
    title: "DEI Score Data",
    description: "Drive focus and progress with real-time status updates",
    image: participationRatesCard,
    alt: "DEI Score",
  },
  {
    title: "Data and Insight",
    description: "Drive focus and progress with real-time status updates",
    image: belongingScoreCard,
    alt: "Data and Insight",
  },
  {
    title: "Deep Dives",
    description:
      "Choose from pre-built pipeline templates, or create custom interview steps.",
    image: deepDivesCard,
    alt: "Deep Dives",
  },
];

export default function EverythingYourNeedToKnow() {
  return (
    <div className="w-full h-max py-20 px-10 lg:px-20 bg-mainBG fade-in-down flex flex-col lg:items-center justify-center">
      <h1 className="text-3xl lg:text-5xl jost-medium">
        Everything you need, all in{" "}
        <span className="text-mainYellow">one place</span>
      </h1>
      <p className="text-base w-10/12 lg:w-full lg:text-xl jost-regular text-mainBlue/60 mt-6">
        Track, analyze, and act—without switching tabs.
      </p>
      <div className="w-full lg:w-4/5 h-max grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8 lg:mt-14">
        {cardData.map((card, index) => (
          <div key={index} className="w-full h-max flex flex-col">
            <div className="w-full h-max bg-white rounded-2xl p-2 lg:p-4 mb-4 lg:mb-6">
              <Image
                src={card.image}
                alt={card.alt}
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
            <h2 className="text-xl lg:text-2xl jost-medium">{card.title}</h2>
            <p className="text-base lg:text-xl jost-regular text-mainBlue/60 mt-3">
              {card.description}
            </p>
            <button className="bg-white border border-borderGray hover:bg-mainBlue hover:text-white hover:border-mainBlue transition-all duration-500 text-mainBlue px-3 lg:px-4 py-1 lg:py-1.5 rounded-lg lg:rounded-xl text-xs lg:text-sm jost-medium w-max mt-4">
              Learn More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
