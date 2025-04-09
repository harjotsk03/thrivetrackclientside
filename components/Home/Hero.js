import { BsWindowDesktop } from "react-icons/bs";
import HeroImage from "../../assets/dashboardHero.png";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Hero() {
  const router = useRouter();

  return (
    <div className="w-full h-max lg:pt-52 pt-40 pb-10 lg:pb-20 px-10 lg:px-20 flex flex-col items-center justify-center bg-mainBG fade-in-down relative">
      <div className="flex flex-col items-center justify-center border border-borderGray rounded-full px-6 py-1.5 bg-white mb-5 lg:mb-8">
        <p className="text-xs lg:text-base jost-regular">
          Trusted by leaders. Loved by teams.
        </p>
      </div>
      <h1 className="text-4xl md:text-6xl lg:text-[5rem] leading-[2.5rem] md:leading-[4rem] lg:leading-[5rem] text-center jost-medium">
        Transform <span className="text-mainYellow ">employee well-being</span>{" "}
        <br className="hidden md:block" /> into your company's superpower.
      </h1>
      <p className="text-base lg:text-2xl text-center jost-regular text-mainBlue/60 mt-5 lg:mt-8">
        Understand your team. Improve your culture.
      </p>

      <div className="flex flex-row items-center justify-center mt-10 lg:mt-16 gap-4">
        <button className="bg-mainBlue border hover:bg-mainYellow hover:text-mainBlue hover:border-mainYellow transition-all duration-500 border-mainBlue text-white px-4 lg:px-6 py-2 rounded-lg lg:rounded-xl text-xs lg:text-base jost-medium flex items-center gap-2 flex-row ">
          <BsWindowDesktop className="w-4 h-4" />
          Try for Free
        </button>
        <button
          onClick={() => router.push("/application/login")}
          className="bg-white border border-borderGray hover:bg-mainBlue/10 transition-all duration-500 hover:border-mainBlue/10 text-mainBlue px-4 lg:px-6 py-2 rounded-lg lg:rounded-xl text-xs lg:text-base jost-medium"
        >
          View Your Dashboard
        </button>
      </div>
      <div className="bg-secondaryGray rounded-2xl lg:rounded-[3rem] pt-3 pl-3 pr-3 lg:pt-12 lg:pl-12 lg:pr-12 lg:w-10/12 mt-14 lg:mt-32 animate-float">
        <Image
          src={HeroImage}
          alt="Hero Image"
          className="w-full h-full object-cover rounded-t-lg lg:rounded-t-2xl"
        />
      </div>
    </div>
  );
}
