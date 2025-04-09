import Image from "next/image";
import participationFlat from "../../assets/participationFlat.png";
import teamsFlat from "../../assets/teamsFlat.png";
export default function JoinNow() {
  return (
    <div className="w-full h-max py-20 px-10 lg:px-20 bg-mainBG fade-in-down flex flex-col items-center justify-center">
      <div className="w-full h-max overflow-hidden text-center flex flex-col items-center justify-center bg-mainBlue rounded-[3rem] p-10 lg:p-40 relative">
        <div className="absolute w-32 h-32 lg:w-52 lg:h-52 bg-mainYellow rounded-full -top-24 lg:-top-32 left-10"></div>
        <div className="absolute w-[20rem] h-[20rem] lg:w-[40rem] lg:h-[40rem] bg-[#24323E] rounded-full top-52 -right-60 lg:-right-14 z-0"></div>
        <Image
          src={participationFlat}
          alt="Participation illustration"
          className="hidden lg:block absolute -bottom-4 left-10 rotate-[8deg] z-10 w-[25rem]"
        />
        <Image
          src={teamsFlat}
          alt="Participation illustration"
          className="hidden lg:block absolute bottom-32 -right-80 -rotate-[30deg] z-10 w-[25rem]"
        />
        <h1 className="text-3xl leading-snug lg:text-5xl text-white jost-medium z-10">
          Join Thrive Track for free today.
        </h1>
        <p className="text-base lg:text-xl text-white jost-regular mt-8 w-full lg:w-7/12 text-center z-10">
          With Thrive Track, unlock real-time insights into your team's morale,
          engagement, and culture—so you can build a happier, more productive
          workforce.
        </p>
        <button className="bg-white text-mainBlue border border-borderGray hover:bg-mainBlue hover:text-white hover:border-mainBlue transition-all duration-500 px-4 lg:px-6 py-2 lg:py-3 rounded-lg lg:rounded-xl text-sm lg:text-base jost-medium mt-8 z-10">
          Start 30 day Free Trial
        </button>
      </div>
    </div>
  );
}
