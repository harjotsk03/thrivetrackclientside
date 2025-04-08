import Image from "next/image";
import participationFlat from "../../assets/participationFlat.png";
import teamsFlat from "../../assets/teamsFlat.png";
export default function JoinNow() {
  return (
    <div className="w-full h-max py-20 px-20 bg-mainBG fade-in-down flex flex-col items-center justify-center">
      <div className="w-full h-max overflow-hidden flex flex-col items-center justify-center bg-mainBlue rounded-[3rem] p-40 relative">
        <div className="absolute w-52 h-52 bg-mainYellow rounded-full -top-32 left-10"></div>
        <div className="absolute w-[40rem] h-[40rem] bg-[#24323E] rounded-full top-4 -right-14 z-0"></div>
        <Image
          src={participationFlat}
          alt="Participation illustration"
          className="absolute -bottom-4 left-10 rotate-[8deg] z-10 w-[25rem]"
        />
        <Image
          src={teamsFlat}
          alt="Participation illustration"
          className="absolute bottom-32 -right-80 -rotate-[30deg] z-10 w-[25rem]"
        />
        <h1 className="text-5xl text-white jost-medium z-10">
          Join Thrive Track for free today.
        </h1>
        <p className="text-xl text-white jost-regular mt-8 w-7/12 text-center z-10">
          With Thrive Track, unlock real-time insights into your team's morale,
          engagement, and culture—so you can build a happier, more productive
          workforce.
        </p>
        <button className="bg-white text-mainBlue border border-borderGray hover:bg-mainBlue hover:text-white hover:border-mainBlue transition-all duration-500 px-6 py-3 rounded-xl text-lg jost-medium mt-8 z-10">
          Start 30 day Free Trial
        </button>
      </div>
    </div>
  );
}
