// PasswordModal.jsx
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FiCheckCircle, FiXCircle } from "react-icons/fi";

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

const getValidation = (password, confirmPassword) => {
  return {
    hasUpperCase: /[A-Z]/.test(password),
    hasLowerCase: /[a-z]/.test(password),
    hasNumber: /\d/.test(password),
    passwordsMatch: password === confirmPassword && password.length > 0,
  };
};

export const PasswordModal = ({
  password,
  confirmPassword,
  onClose,
  inputPosition,
}) => {
  const validation = getValidation(password, confirmPassword);
  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  const renderCheck = (isValid) =>
    isValid ? (
      <FiCheckCircle className="text-green-500 text-lg" />
    ) : (
      <FiXCircle className="text-red-500 text-lg" />
    );

  return (
    <>
      <motion.div
        ref={modalRef}
        className="absolute hidden lg:flex z-50 w-4/5 max-w-md bg-white rounded-2xl shadow-lg px-6 py-8 flex-col items-start gap-3"
        style={{
          top: inputPosition?.top + 45 || 0,
          left: inputPosition?.left || 0,
        }}
        variants={modal}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <h1 className="text-xl font-semibold mb-2">
          Your Password Must Contain
        </h1>
        <div className="flex items-center gap-2">
          {renderCheck(validation.hasUpperCase)} One uppercase letter
        </div>
        <div className="flex items-center gap-2">
          {renderCheck(validation.hasLowerCase)} One lowercase letter
        </div>
        <div className="flex items-center gap-2">
          {renderCheck(validation.hasNumber)} One number
        </div>
        <div className="flex items-center gap-2">
          {renderCheck(validation.passwordsMatch)} Passwords match
        </div>
      </motion.div>
      <motion.div
        ref={modalRef}
        className="fixed lg:hidden z-50 w-4/5 max-w-md bg-white rounded-2xl shadow-lg px-6 py-8 flex flex-col items-start gap-3 top-4 right-4"
        variants={modal}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <h1 className="text-xl font-semibold mb-2">
          Your Password Must Contain
        </h1>
        <div className="flex items-center gap-2">
          {renderCheck(validation.hasUpperCase)} One uppercase letter
        </div>
        <div className="flex items-center gap-2">
          {renderCheck(validation.hasLowerCase)} One lowercase letter
        </div>
        <div className="flex items-center gap-2">
          {renderCheck(validation.hasNumber)} One number
        </div>
        <div className="flex items-center gap-2">
          {renderCheck(validation.passwordsMatch)} Passwords match
        </div>
      </motion.div>
    </>
  );
};
