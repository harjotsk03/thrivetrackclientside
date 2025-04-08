import workdayLogo from "../../assets/workdayLogo.png";
import lululemonLogo from "../../assets/lululemonLogo.png";
import squarespaceLogo from "../../assets/squarespaceLogo.png";
import adobeLogo from "../../assets/adobeLogo.png";
import Image from "next/image";

export default function TrustedBy() {
  return (
    <div className="w-full h-max py-16 px-10 lg:px-20 flex flex-col items-center justify-center bg-mainBG fade-in-down relative">
      <h1 className="text-xl text-center text-mainBlue/60 jost-regular">
        Trusted by leaders. Loved by teams.
      </h1>
      <div className="w-1/2 mt-10 overflow-hidden relative">
        <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-mainBG to-transparent z-10"></div>
        <div className="animate-scroll flex flex-row items-center">
          {/* First set of logos */}
          <Image
            className="w-36 h-auto grayscale mx-8"
            src={workdayLogo}
            alt="Trusted by leaders. Loved by teams."
          />
          <Image
            className="w-16 h-auto grayscale mx-8"
            src={lululemonLogo}
            alt="Trusted by leaders. Loved by teams."
          />
          <Image
            className="w-36 h-auto grayscale mx-8"
            src={squarespaceLogo}
            alt="Trusted by leaders. Loved by teams."
          />
          <Image
            className="w-40 h-auto grayscale mx-8"
            src={adobeLogo}
            alt="Trusted by leaders. Loved by teams."
          />
          {/* Duplicate set of logos for seamless loop */}
          <Image
            className="w-36 h-auto grayscale mx-8"
            src={workdayLogo}
            alt="Trusted by leaders. Loved by teams."
          />
          <Image
            className="w-16 h-auto grayscale mx-8"
            src={lululemonLogo}
            alt="Trusted by leaders. Loved by teams."
          />
          <Image
            className="w-36 h-auto grayscale mx-8"
            src={squarespaceLogo}
            alt="Trusted by leaders. Loved by teams."
          />
          <Image
            className="w-32 h-auto grayscale mx-8"
            src={adobeLogo}
            alt="Trusted by leaders. Loved by teams."
          />
        </div>
        <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-mainBG to-transparent z-10"></div>
      </div>
    </div>
  );
}
