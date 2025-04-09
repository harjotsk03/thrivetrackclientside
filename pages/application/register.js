import Link from "next/link";
import logo from "../../assets/logoColor.png";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Register() {
  const router = useRouter();
  return (
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
                className="w-full h-10 rounded-lg border border-mainBlue/20 px-4 focus:outline-none focus:ring-2 focus:ring-mainBlue transition-all duration-500 ease-in-out"
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
                className="w-full h-10 rounded-lg border border-mainBlue/20 px-4 focus:outline-none focus:ring-2 focus:ring-mainBlue transition-all duration-500 ease-in-out"
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
              className="flex w-full flex-col justify-center gap-2 text-xs lg:text-sm poppins-regular text-mainBlue/60"
            >
              Password
              <input
                type="password"
                id="password"
                className="w-full h-10 rounded-lg border border-mainBlue/20 px-4 focus:outline-none focus:ring-2 focus:ring-mainBlue transition-all duration-500 ease-in-out"
              />
            </label>
            <label
              htmlFor="confirmPassword"
              className="flex w-full flex-col justify-center gap-2 text-xs lg:text-sm poppins-regular text-mainBlue/60"
            >
              Confirm Password
              <input
                type="password"
                id="confirmPassword"
                className="w-full h-10 rounded-lg border border-mainBlue/20 px-4 focus:outline-none focus:ring-2 focus:ring-mainBlue transition-all duration-500 ease-in-out"
              />
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
  );
}
