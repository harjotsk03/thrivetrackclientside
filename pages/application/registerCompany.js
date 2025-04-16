import Link from "next/link";
import logo from "../../assets/logoColor.png";
import Image from "next/image";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { AlertContext } from "../../context/alertContext";
import { CreateAccountModal } from "../../components/modals/CreateAccountModal";
import { AnimatePresence } from "framer-motion";

export default function RegisterCompany() {
  const router = useRouter();
  const [companyName, setCompanyName] = useState("");
  const [companyEmail, setCompanyEmail] = useState("");
  const [companyIndustry, setCompanyIndustry] = useState("");
  const [companyDateFounded, setCompanyDateFounded] = useState("");
  const [companyWebsiteURL, setCompanyWebsiteURL] = useState("");
  const [companyLocation, setCompanyLocation] = useState("");
  const [companyPhoneNumber, setCompanyPhoneNumber] = useState("");
  const { showAlert } = useContext(AlertContext);
  const [createAccountModal, setCreateAccountModal] = useState(false);
  const [companyId, setCompanyId] = useState(null);

  useEffect(() => {
    setCreateAccountModal(localStorage.getItem("createAccountModal"));
  }, [createAccountModal]);

  useEffect(() => {
    setCompanyId(localStorage.getItem("companyId"));
  }, [createAccountModal]);

  const createCompany = async (event) => {
    event.preventDefault();

    if (companyName.trim() === "") {
      showAlert("Please enter your company name.");
      return;
    }
    if (companyEmail.trim() === "") {
      showAlert("Please enter your company email.");
      return;
    }
    if (companyIndustry.trim() === "") {
      showAlert("Please enter the industry your company falls into.");
      return;
    }
    if (companyDateFounded.trim() === "") {
      showAlert("Please enter the date your company was founded.");
      return;
    }

    // Construct the data object
    const companyData = {
      name: companyName,
      email: companyEmail,
      industry: companyIndustry,
      dateFounded: companyDateFounded,
      websiteURL: companyWebsiteURL,
      location: companyLocation,
      phoneNumber: companyPhoneNumber,
    };

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/companies/register`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(companyData),
        }
      );

      const result = await response.json();
      console.log(result.companyId);

      if (response) {
        showAlert("Company registered successfully!");
        setCreateAccountModal(true);
        localStorage.setItem("createAccountModal", true);
        localStorage.setItem("companyId", result.companyId);
        setCompanyId(result.companyId);
      } else {
        showAlert(result || "An error occurred while registering the company.");
      }
    } catch (error) {
      showAlert("Network error. Please try again later.");
      console.error("Error registering company:", error);
    }
  };

  const attemptClose = () => {
    showAlert("You must create your account now.");
  };

  return (
    <>
      <AnimatePresence>
        {createAccountModal && (
          <CreateAccountModal close={attemptClose} companyId={companyId} />
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
              Register your Company
            </h1>
            <h2 className="text-xs lg:text-sm poppins-regular text-mainBlue/60">
              Create your company to begin growing
            </h2>
          </div>
          <form className="w-10/12 lg:w-3/4 flex flex-col justify-center gap-2 lg:gap-4 mt-6 lg:mt-10">
            <div className="flex flex-col lg:flex-row gap-4">
              <label
                htmlFor="companyName"
                className="w-full flex flex-col justify-center gap-2 text-xs lg:text-sm poppins-regular text-mainBlue/60"
              >
                <span className="flex flex-row items-start gap-0.5">
                  {" "}
                  Company Name <span className="text-red-600 text-xs">*</span>
                </span>
                <input
                  type="text"
                  onChange={(e) => setCompanyName(e.target.value)}
                  value={companyName}
                  id="companyName"
                  className="w-full h-10 text-mainBlue rounded-lg border border-mainBlue/20 px-4 focus:outline-none focus:ring-2 focus:ring-mainBlue transition-all duration-500 ease-in-out"
                />
              </label>
              <label
                htmlFor="companyIndustry"
                className="w-full flex flex-col justify-center gap-2 text-xs lg:text-sm poppins-regular text-mainBlue/60"
              >
                <span className="flex flex-row items-start gap-0.5">
                  {" "}
                  Industry <span className="text-red-600 text-xs">*</span>
                </span>
                <input
                  type="text"
                  id="companyIndustry"
                  onChange={(e) => setCompanyIndustry(e.target.value)}
                  value={companyIndustry}
                  className="w-full h-10 text-mainBlue rounded-lg border border-mainBlue/20 px-4 focus:outline-none focus:ring-2 focus:ring-mainBlue transition-all duration-500 ease-in-out"
                />
              </label>
            </div>
            <div className="flex flex-col lg:flex-row gap-4">
              {" "}
              <label
                htmlFor="companyEmail"
                className="w-full flex flex-col justify-center gap-2 text-xs lg:text-sm poppins-regular text-mainBlue/60"
              >
                <span className="flex flex-row items-start gap-0.5">
                  {" "}
                  Company Email <span className="text-red-600 text-xs">*</span>
                </span>
                <input
                  type="email"
                  id="companyEmail"
                  onChange={(e) => setCompanyEmail(e.target.value)}
                  value={companyEmail}
                  className="w-full h-10 text-mainBlue rounded-lg border border-mainBlue/20 px-4 focus:outline-none focus:ring-2 focus:ring-mainBlue transition-all duration-500 ease-in-out"
                />
              </label>
              <label
                htmlFor="dateFounded"
                className="w-full flex flex-col justify-center gap-2 text-xs lg:text-sm poppins-regular text-mainBlue/60"
              >
                <span className="flex flex-row items-start gap-0.5">
                  {" "}
                  Date Founded <span className="text-red-600 text-xs">*</span>
                </span>
                <input
                  type="text"
                  id="dateFounded"
                  onChange={(e) => setCompanyDateFounded(e.target.value)}
                  value={companyDateFounded}
                  className="w-full h-10 text-mainBlue rounded-lg border border-mainBlue/20 px-4 focus:outline-none focus:ring-2 focus:ring-mainBlue transition-all duration-500 ease-in-out"
                />
              </label>
            </div>
            <div className="flex flex-col lg:flex-row gap-4">
              {" "}
              <label
                htmlFor="websiteURL"
                className="flex w-full flex-col justify-center gap-2 text-xs lg:text-sm poppins-regular text-mainBlue/60"
              >
                Company Website
                <input
                  type="text"
                  id="websiteURL"
                  onChange={(e) => setCompanyWebsiteURL(e.target.value)}
                  value={companyWebsiteURL}
                  className="w-full h-10 text-mainBlue rounded-lg border border-mainBlue/20 px-4 focus:outline-none focus:ring-2 focus:ring-mainBlue transition-all duration-500 ease-in-out"
                />
              </label>
              <label
                htmlFor="companyPhoneNumber"
                className="flex w-full flex-col justify-center gap-2 text-xs lg:text-sm poppins-regular text-mainBlue/60"
              >
                Company Phone Number
                <input
                  type="text"
                  onChange={(e) => setCompanyPhoneNumber(e.target.value)}
                  value={companyPhoneNumber}
                  id="companyPhoneNumber"
                  className="w-full h-10 text-mainBlue rounded-lg border border-mainBlue/20 px-4 focus:outline-none focus:ring-2 focus:ring-mainBlue transition-all duration-500 ease-in-out"
                />
              </label>
            </div>
            <button
              onClick={createCompany}
              className="w-full h-10 rounded-lg bg-mainBlue text-white poppins-medium text-xs lg:text-sm mt-4"
            >
              Register Company
            </button>
          </form>
          <button
            onClick={() => router.push("/application/login")}
            className="w-full text-center text-xs lg:text-sm poppins-regular text-mainBlue/50 mt-10"
          >
            Already have/part of a company?{" "}
            <span className="text-mainYellow poppins-medium">Sign In</span>
          </button>
        </div>
      </div>
    </>
  );
}
