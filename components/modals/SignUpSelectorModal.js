import { useEffect } from "react";
import { FaArrowRight, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";
import { RiTeamFill } from "react-icons/ri";
import { FaPersonRays } from "react-icons/fa6";
import { FiArrowRight, FiArrowUpRight } from "react-icons/fi";
import { useRouter } from "next/router";

const backdrop = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const modal = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { type: "spring", stiffness: 300, damping: 25 },
  },
  exit: {
    scale: 0.8,
    opacity: 0,
    transition: { duration: 0.2 },
  },
};

export const SignUpSelectorModal = ({ close }) => {
  const router = useRouter();
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-40 flex items-center justify-center"
      variants={backdrop}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <div
        className="absolute inset-0 bg-black opacity-50"
        onClick={close}
      ></div>

      <motion.div
        className="relative z-10 w-10/12 lg:w-2/3 bg-white rounded-2xl shadow-lg px-4 py-9 lg:px-10 lg:py-10 xl:px-10 xl:py-10 flex flex-col items-center"
        variants={modal}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <button
          className="absolute p-2 top-4 right-4 text-gray-500 hover:text-black"
          onClick={close}
        >
          <FaTimes size={14} />
        </button>

        <h1 className="text-xl lg:text-3xl jost-medium text-center mb-3">
          Register Now
        </h1>
        <p className="jost-regular text-lg text-black/60 lg:w-3/5 xl:w-1/2 text-center leading-snug">
          Select either option below to either register yourself as an
          individual user or to set up your account as a company.
        </p>

        <div className="flex flex-col lg:flex-row items-center justify-center w-full gap-6 mt-8">
          <button
            onClick={() => router.push("/application/registerCompany")}
            className="group px-6 py-10 rounded-xl bg-black/5 cursor-pointer hover:bg-mainBlue transition flex flex-col items-center justify-center w-11/12 lg:w-full xl:w-1/2 h-max"
          >
            <RiTeamFill className="text-4xl p-6 rounded-full bg-white group-hover:bg-white/10 text-mainYellow w-max h-max" />
            <h2 className="text-2xl font-semibold mt-7 text-mainBlue group-hover:text-white">
              Company
            </h2>
            <p className="jost-regular text-base mt-2 lg:w-4/5 text-mainBlue/70 group-hover:text-white/70">
              Register your company and then set up your employees as individual
              users within your company.
            </p>
            <p className="mt-6 flex flex-row gap-1 items-center text-xs jost-regular text-black/40 group-hover:text-white/40">
              Click to register{" "}
              <FiArrowRight
                className="group-hover:translate-x-1 transition-all duration-500"
                size={12}
              />
            </p>
          </button>
          <button
            onClick={() => router.push("/application/register")}
            className="group px-6 py-10 rounded-xl bg-black/5 cursor-pointer hover:bg-mainBlue transition flex flex-col items-center justify-center w-11/12 lg:w-full xl:w-1/2 h-max"
          >
            <FaPersonRays className="text-4xl p-6 rounded-full bg-white group-hover:bg-white/10 text-mainYellow w-max h-max" />
            <h2 className="text-2xl font-semibold mt-7 text-mainBlue group-hover:text-white">
              Individual
            </h2>
            <p className="jost-regular text-base mt-2 lg:w-4/5 text-mainBlue/70 group-hover:text-white/70">
              Set up your personal account and join the company you work at to
              get involved and take surveys.
            </p>
            <p className="mt-6 flex flex-row gap-1 items-center text-xs jost-regular text-black/40 group-hover:text-white/40">
              Click to register{" "}
              <FiArrowRight
                className="group-hover:translate-x-1 transition-all duration-500"
                size={12}
              />
            </p>
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};


{/* <div className="flex flex-col lg:flex-row items-center justify-center w-full gap-6 mt-8">
  <button className="group px-6 py-10 rounded-xl bg-black/5 cursor-pointer hover:bg-black/10 transition flex flex-col items-center justify-center w-11/12 lg:w-full xl:w-1/2 h-max">
    <RiTeamFill className="text-4xl p-6 rounded-full bg-white text-mainYellow w-max h-max" />
    <h2 className="text-2xl jost-medium mt-7">Company</h2>
    <p className="jost-regular text-base mt-2 lg:w-4/5">
      Register your company and then set up your employees as individual users
      within your company.
    </p>
    <p className="mt-6 flex flex-row gap-2 items-center text-xs jost-regular text-black/40">
      Click to register <FaArrowRight size={8} />
    </p>
  </button>
  <button className="px-6 py-10 rounded-xl bg-black/5 cursor-pointer hover:bg-black/10 transition flex flex-col items-center justify-center w-11/12 lg:w-full xl:w-1/2 h-max">
    <FaPersonRays className="text-4xl p-6 rounded-full bg-white text-mainYellow w-max h-max" />
    <h2 className="text-2xl font-semibold mt-7">Individual</h2>
    <p className="jost-regular text-base mt-2 lg:w-4/5">
      Set up your personal account and join the company you work at to get
      involved and take surveys.
    </p>
    <p className="mt-6 flex flex-row gap-2 items-center text-xs jost-regular text-black/40">
      Click to register <FaArrowRight size={8} />
    </p>
  </button>
</div>; */}