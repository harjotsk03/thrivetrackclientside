import { useEffect } from "react";
import { motion } from "framer-motion";
import { FiArrowRight, FiArrowUpRight } from "react-icons/fi";
import { useRouter } from "next/router";
import { usePathname } from "next/navigation";

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

export const CreateAccountModal = ({ close, companyId }) => {
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
        className="relative z-10 w-2/5 bg-white rounded-2xl shadow-lg px-4 py-9 lg:px-10 lg:py-10 xl:px-10 xl:py-10 flex flex-col items-center"
        variants={modal}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <h1 className="text-xl lg:text-3xl jost-medium text-center mb-3">
          Create your Account
        </h1>
        <p className="jost-regular text-lg text-black/60 text-center leading-snug">
          You must now create your account as the owner of the company you have just created. Please click the button below to head to the user registration page.
        </p>

        <button onClick={() => router.push(`/application/register/${companyId}`)} className="bg-mainBlue mt-10 text-white hover:bg-mainYellow hover:text-mainBlue rounded-xl px-4 py-2 flex flex-row items-center gap-1 group">Create Account <FiArrowRight className="group-hover:translate-x-1 transition-all duration-500"/></button>
      </motion.div>
    </motion.div>
  );
};