import Link from "next/link";
import logo from "../../../assets/logoColor.png";
import Image from "next/image";
import { useRouter } from "next/router";
import { useContext, useEffect, useState, useRef } from "react";
import { AlertContext } from "../../../context/alertContext";
import { AnimatePresence } from "framer-motion";
import { PasswordModal } from "../../../components/modals/PasswordModal";

export default function Register() {
  const router = useRouter();
  const { showAlert } = useContext(AlertContext);
  const { id } = router.query;
  const [company, setCompany] = useState(null);
  const [companyName, setCompanyName] = useState("");
  const [role, setRole] = useState("OWNER");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showingPasswordModal, setShowingPasswordModal] = useState(false);
  const [activeInput, setActiveInput] = useState(null);
  const passwordInputRef = useRef(null);
  const confirmPasswordInputRef = useRef(null);
  const [inputPosition, setInputPosition] = useState(null);

  const getCompany = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/companies/${id}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const result = await response.json();
      setCompany(result);
      setCompanyName(result.name);
    } catch (error) {
      console.error("Error registering company:", error);
    }
  };

  useEffect(() => {
    getCompany();
  }, [id]);

  const createAccount = async (event) => {
    event.preventDefault();

    if (name.trim() === "") {
      showAlert("Please enter your full name.");
      return;
    }
    if (email.trim() === "") {
      showAlert("Please enter your email.");
      return;
    }
    if (password.trim() === "") {
      showAlert("Please enter a password.");
      return;
    }
    if (confirmPassword.trim() === "") {
      showAlert("Please re enter your password to confirm.");
      return;
    }

    const companyData = {
      name: name,
      email: email,
      role: role,
      companyName: companyName,
      password: password,
      companyId: id,
    };

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/auth/register`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(companyData),
        }
      );

      const result = await response.json();

      if (response.ok) {
        showAlert("Account created successfully!");
        localStorage.setItem("token", result.token);
        router.push("/application/dashboard");
      } else {
        if (response.status === 409) {
          showAlert(result.message || "Email is already registered!");
        } else {
          showAlert(
            result.message ||
              result ||
              "An error occurred while registering the account."
          );
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <AnimatePresence>
        {showingPasswordModal && (
          <PasswordModal
            password={password}
            confirmPassword={confirmPassword}
            onClose={() => setShowingPasswordModal(false)}
            inputPosition={inputPosition}
          />
        )}
      </AnimatePresence>
      <div className="w-full bg-mainBG h-max lg:h-screen pb-40 lg:pb-0 overflow-hidden flex flex-col items-center justify-start lg:justify-center pt-10 lg:pt-0 fade-in-down">
        <div className="w-11/12 lg:w-1/2 h-max py-10 lg:py-0 lg:h-[80vh] bg-white rounded-2xl flex flex-col items-center justify-center">
          <div>
            <Image
              src={logo}
              alt="Thrive Track Logo"
              className="w-16 lg:w-20 h-auto"
            />
          </div>
          <div className="flex flex-col items-center justify-center gap-2 mt-10">
            <h1 className="text-2xl lg:text-3xl poppins-medium">
              Create your account
            </h1>
            <h2 className="text-xs lg:text-sm poppins-regular text-mainBlue/60">
              Create your account to get access to your company
            </h2>
          </div>
          <form className="w-10/12 lg:w-3/4 flex flex-col justify-center gap-2 lg:gap-4 mt-6 lg:mt-10">
            <div className="flex flex-col lg:flex-row gap-4">
              <label
                htmlFor="name"
                className="w-full flex flex-col justify-center gap-2 text-xs lg:text-sm poppins-regular text-mainBlue/60"
              >
                Full Name
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full h-10 text-mainBlue rounded-lg border border-mainBlue/20 px-4 focus:outline-none focus:ring-2 focus:ring-mainBlue transition-all duration-500 ease-in-out"
                />
              </label>
              <label
                htmlFor="email"
                className="w-full flex flex-col justify-center gap-2 text-xs lg:text-sm poppins-regular text-mainBlue/60"
              >
                Email
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full h-10 text-mainBlue rounded-lg border border-mainBlue/20 px-4 focus:outline-none focus:ring-2 focus:ring-mainBlue transition-all duration-500 ease-in-out"
                />
              </label>
            </div>
            <div className="flex flex-col lg:flex-row gap-4">
              {" "}
              <label
                htmlFor="company"
                className="w-full flex flex-col justify-center gap-2 text-xs lg:text-sm poppins-regular text-mainBlue/60"
              >
                Company/Organization
                <input
                  type="text"
                  disabled={true}
                  value={companyName}
                  id="company"
                  className="w-full h-10 rounded-lg border border-mainBlue/20 px-4 focus:outline-none focus:ring-2 focus:ring-mainBlue transition-all duration-500 ease-in-out"
                />
              </label>
              <label
                htmlFor="role"
                className="w-full flex flex-col justify-center gap-2 text-xs lg:text-sm poppins-regular text-mainBlue/60"
              >
                Role
                <input
                  disabled={true}
                  value={role}
                  type="text"
                  id="role"
                  className="w-full h-10  rounded-lg border border-mainBlue/20 px-4 focus:outline-none focus:ring-2 focus:ring-mainBlue transition-all duration-500 ease-in-out"
                />
              </label>
            </div>
            <div className="flex flex-col lg:flex-row gap-4">
              <label
                htmlFor="password"
                className="flex w-full flex-col justify-center gap-2 text-xs lg:text-sm poppins-regular text-mainBlue/60 relative"
              >
                Password
                <input
                  ref={passwordInputRef}
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onFocus={() => {
                    const rect =
                      passwordInputRef.current.getBoundingClientRect();
                    setInputPosition({ top: rect.top, left: rect.left });
                    setShowingPasswordModal(true);
                    setActiveInput("password");
                  }}
                  className="w-full h-10 text-mainBlue rounded-lg border border-mainBlue/20 px-4 focus:outline-none focus:ring-2 focus:ring-mainBlue transition-all duration-500 ease-in-out"
                />
              </label>
              <label
                htmlFor="confirmPassword"
                className="flex w-full flex-col justify-center gap-2 text-xs lg:text-sm poppins-regular text-mainBlue/60 relative"
              >
                Confirm Password
                <input
                  ref={confirmPasswordInputRef}
                  type="password"
                  id="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  onFocus={() => {
                    const rect =
                      confirmPasswordInputRef.current.getBoundingClientRect();
                    setInputPosition({ top: rect.top, left: rect.left });
                    setShowingPasswordModal(true);
                    setActiveInput("confirmPassword");
                  }}
                  className="w-full h-10 text-mainBlue rounded-lg border border-mainBlue/20 px-4 focus:outline-none focus:ring-2 focus:ring-mainBlue transition-all duration-500 ease-in-out"
                />
              </label>
            </div>
            <button
              onClick={createAccount}
              className="w-full h-10 rounded-lg bg-mainBlue text-white poppins-medium text-xs lg:text-sm mt-4"
            >
              Register
            </button>
          </form>
          {/* <button
            onClick={() => router.push("/application/login")}
            className="w-full text-center text-xs lg:text-sm poppins-regular text-mainBlue/50 mt-10"
          >
            Already have an account?{" "}
            <span className="text-mainYellow poppins-medium">Sign In</span>
          </button> */}
        </div>
      </div>
    </>
  );
}
