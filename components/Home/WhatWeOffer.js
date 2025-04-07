import Image from "next/image";
import sfurs from "../../assets/sfurslayout.png";
import flashcardaiBG from "../../assets/flashcardsailayout.png";

export default function WhatWeOffer() {
  return (
    <div className="w-full h-max bg-[#E5E5E5] py-32">
      <h2 className="text-black text-xl xl:text-4xl leading-snug w-10/12 lg:w-1/3 text-center poppins-medium mx-auto">
        Seamless Support from Start to Finish, from our experts
      </h2>
      <p className="text-black mt-4 text-sm w-11/12 lg:w-1/3 text-center xl:text-base poppins-regular mx-auto">
        Here is what we offer in order to help you every step of the way, from
        initial consultation to post-launch support.
      </p>
      <div className="flex flex-col items-center justify-center gap-4 w-4/5 mx-auto">
        <div className="bg-gradient-to-t from-[#E5E5E5] to-[#F5F5F5] w-full rounded-3xl p-6 lg:p-12 mt-10 ">
          <div className="flex flex-col xl:flex-row justify-between hover:cursor-default w-full gap-10">
            <div className="flex flex-col items-start text-left w-full xl:w-1/2 mb-6 xl:mb-0 xl:pr-8">
              <h2 className="text-black text-xl xl:text-3xl leading-snug poppins-regular">
                Web Design & Development
              </h2>
              <p className="text-black/60 mt-4 text-sm xl:text-base poppins-regular">
                94% of first impressions of a brand are based on web design and
                information architecture. A poorly designed website can drive
                users away, ensure yours makes a lasting impact and drives
                conversion.
              </p>
              <div className="mt-8 space-y-5">
                <div className="flex items-start space-x-3">
                  <div>
                    <h3 className="text-black text-xl poppins-regular">
                      UX/UI Design
                    </h3>
                    <p className="text-black/60 text-sm xl:text-base mt-1 poppins-light">
                      We focus on both aesthetics and functionality to ensure
                      your website not only looks great but is easy to use and
                      navigate.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div>
                    <h3 className="text-black text-xl poppins-regular">
                      Mobile Accessibility
                    </h3>
                    <p className="text-black/60 text-sm xl:text-base mt-1 poppins-light">
                      69% of internet traffic is on mobile devices. We ensure
                      your website is fully responsive on all devices, including
                      mobile phones.
                    </p>
                  </div>
                </div>

                <button className="bg-blue-600 text-white px-4 xl:px-5 poppins-regular text-xs xl:text-sm py-2 xl:py-3 rounded-full mt-6  hover:text-blue-600 transition-all duration-500 hover:bg-blue-600/10">
                  Learn more
                </button>
              </div>
            </div>
            <div className="w-full h-auto xl:w-1/2 my-auto">
              <Image src={sfurs} alt="web-design" />
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-t from-[#E5E5E5] to-[#F5F5F5] w-full rounded-3xl p-6 lg:p-12 mt-10 ">
          <div className="flex flex-col xl:flex-row justify-between hover:cursor-default w-full gap-10">
            <div className="flex flex-col items-start text-left w-full xl:w-1/2 mb-6 xl:mb-0 xl:pr-8">
              <h2 className="text-black text-xl xl:text-3xl leading-snug poppins-regular">
                Software Development
              </h2>
              <p className="text-black/60 mt-4 text-sm xl:text-base poppins-regular">
                85% of businesses say well-designed internal tools boost
                productivity and efficiency. Slow, outdated software frustrates
                teams—build custom solutions that streamline workflows and drive
                results.
              </p>
              <div className="mt-8 space-y-5">
                <div className="flex items-start space-x-3">
                  <div>
                    <h3 className="text-black text-xl poppins-regular">
                      Built for Your Workflow
                    </h3>
                    <p className="text-black/60 text-sm xl:text-base mt-1 poppins-light">
                      No matter what tool your team needs, we can build it. From
                      automation to data management, our solutions are designed
                      to fit seamlessly into your existing processes and boost
                      efficiency.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div>
                    <h3 className="text-black text-xl poppins-regular">
                      Scale Without Limits
                    </h3>
                    <p className="text-black/60 text-sm xl:text-base mt-1 poppins-light">
                      As your business evolves, so should your tools. We develop
                      scalable software solutions that adapt to your growth,
                      keeping your operations smooth and future-proof.
                    </p>
                  </div>
                </div>

                <button className="bg-blue-600 text-white px-4 xl:px-5 poppins-regular text-xs xl:text-sm py-2 xl:py-3 rounded-full mt-6  hover:text-blue-600 transition-all duration-500 hover:bg-blue-600/10">
                  Learn more
                </button>
              </div>
            </div>
            <div className="w-full h-auto xl:w-1/2 my-auto">
              <Image src={flashcardaiBG} alt="web-design" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
