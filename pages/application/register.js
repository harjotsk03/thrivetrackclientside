import Link from "next/link";
import logo from "../../assets/logoColor.png";
import Image from "next/image";
import { useRouter } from "next/router";
import { AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { PasswordModal } from "../../components/modals/PasswordModal";

export default function Register() {
  const router = useRouter();
  const [showingPasswordModal, setShowingPasswordModal] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [inputPosition, setInputPosition] = useState(null);
  const [activeInput, setActiveInput] = useState(null);
  const passwordInputRef = useRef(null);
  const confirmPasswordInputRef = useRef(null);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  // const [companies, setCompanies] = useState([]);

  // useEffect(() => {
  //   const fetchCompanies = async () => {
  //     try {
  //       const response = await fetch("http://localhost:8080/companies");
  //       const data = await response.json();
  //       setCompanies(data);
  //     } catch (error) {
  //       console.error("Error fetching companies:", error);
  //     }
  //   };
  //   fetchCompanies();
  // }, []);

  const [search, setSearch] = useState("");
  const [companies, setCompanies] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    const fetchCompanies = async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/companies?search=${search}`
      );
      const data = await res.json();
      setCompanies(data);
    };

    if (search !== "" || showDropdown) fetchCompanies();
  }, [search]);

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
          <Link href="/">
            <Image
              src={logo}
              alt="Thrive Track Logo"
              className="w-16 lg:w-20 h-auto"
            />
          </Link>
          <div className="flex flex-col items-center justify-center gap-2 mt-10">
            <h1 className="text-2xl lg:text-3xl poppins-medium">
              Create an account
            </h1>
            <h2 className="text-xs lg:text-sm poppins-regular text-mainBlue/60">
              Create an account to get started
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
                  className="w-full h-10 rounded-lg text-mainBlue border border-mainBlue/20 px-4 focus:outline-none focus:ring-2 focus:ring-mainBlue transition-all duration-500 ease-in-out"
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
                  className="w-full h-10 rounded-lg text-mainBlue border border-mainBlue/20 px-4 focus:outline-none focus:ring-2 focus:ring-mainBlue transition-all duration-500 ease-in-out"
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
                <div className="relative w-full">
                  <input
                    type="text"
                    value={search}
                    onChange={(e) => {
                      setSearch(e.target.value);
                      setShowDropdown(true);
                    }}
                    onBlur={() => setTimeout(() => setShowDropdown(false), 150)}
                    onFocus={() => setShowDropdown(true)}
                    className="w-full h-10 rounded-lg border text-mainBlue border-mainBlue/20 px-4 focus:outline-none focus:ring-2 focus:ring-mainBlue transition-all duration-500 ease-in-out"
                    placeholder="Search for a company..."
                  />
                  {showDropdown && companies.length > 0 && (
                    <ul className="absolute left-0 w-full bg-white border border-borderGray rounded-lg mt-1 max-h-60 overflow-y-auto z-50">
                      {companies.map((company) => (
                        <li
                          key={company.id}
                          className="px-2 py-2 flex items-center gap-2 flex-row text-mainBlue bg-mainBG hover:bg-gray-100 cursor-pointer"
                          onClick={() => {
                            setSearch(company.name);
                            setShowDropdown(false);
                          }}
                        >
                          <Image
                            src={company.profilePhoto}
                            alt={company.name}
                            width={20}
                            height={20}
                            className="w-6 h-6 rounded-md"
                          />
                          {company.name}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </label>
              <label
                htmlFor="role"
                className="w-full flex flex-col justify-center gap-2 text-xs lg:text-sm poppins-regular text-mainBlue/60"
              >
                Role
                <input
                  disabled={true}
                  value="EMPLOYEE"
                  type="text"
                  id="role"
                  className="w-full h-10 rounded-lg border border-mainBlue/20 px-4 focus:outline-none focus:ring-2 focus:ring-mainBlue transition-all duration-500 ease-in-out"
                />
              </label>
            </div>
            <div className="flex flex-col lg:flex-row gap-4">
              {" "}
              <label
                htmlFor="password"
                className="flex w-full flex-col justify-center gap-2 text-xs lg:text-sm poppins-regular text-mainBlue/60 relative"
              >
                Password
                <div className="relative">
                  <input
                    ref={passwordInputRef}
                    type={showPassword ? "text" : "password"}
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
                    className="w-full h-10 text-mainBlue rounded-lg border border-mainBlue/20 px-4 pr-12 focus:outline-none focus:ring-2 focus:ring-mainBlue transition-all duration-500 ease-in-out"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-mainBlue/60 hover:text-mainBlue"
                  >
                    {showPassword ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    )}
                  </button>
                </div>
              </label>
              <label
                htmlFor="confirmPassword"
                className="flex w-full flex-col justify-center gap-2 text-xs lg:text-sm poppins-regular text-mainBlue/60 relative"
              >
                Confirm Password
                <div className="relative">
                  <input
                    ref={confirmPasswordInputRef}
                    type={showConfirmPassword ? "text" : "password"}
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
                    className="w-full h-10 text-mainBlue rounded-lg border border-mainBlue/20 px-4 pr-12 focus:outline-none focus:ring-2 focus:ring-mainBlue transition-all duration-500 ease-in-out"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-mainBlue/60 hover:text-mainBlue"
                  >
                    {showConfirmPassword ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    )}
                  </button>
                </div>
              </label>
            </div>
            <button className="w-full h-10 rounded-lg bg-mainBlue text-white poppins-medium text-xs lg:text-sm mt-4">
              Register
            </button>
          </form>
          <button
            onClick={() => router.push("/application/login")}
            className="w-full text-center text-xs lg:text-sm poppins-regular text-mainBlue/50 mt-10"
          >
            Already have an account?{" "}
            <span className="text-mainYellow poppins-medium">Sign In</span>
          </button>
        </div>
      </div>
    </>
  );
}
