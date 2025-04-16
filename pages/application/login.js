import axios from "axios";
import { AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useContext } from "react";
import Image from "next/image";
import logo from "../../assets/logoColor.png";
import { AlertContext } from "../../context/alertContext";
import { SignUpSelectorModal } from "../../components/modals/SignUpSelectorModal";

export default function Login() {
  const router = useRouter();
  const { showAlert } = useContext(AlertContext);
  const [modalOpen, setModalOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    if (email.trim() === "") {
      showAlert("Please enter your email.");
      return;
    }
    if (password.trim() === "") {
      showAlert("Please enter your password.");
      return;
    }
    const loginData = {
      email,
      password,
    };
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/auth/login`,
        loginData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      localStorage.setItem("token", response.data.token);
      router.push("/application/dashboard");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <AnimatePresence>
        {modalOpen && <SignUpSelectorModal close={() => setModalOpen(false)} />}
      </AnimatePresence>
      <div className="w-full bg-mainBG h-screen overflow-hidden flex flex-col items-center justify-center fade-in-down relative">
        <div className="w-11/12 lg:w-1/3 h-[70vh] lg:h-[80vh] bg-white rounded-2xl flex flex-col items-center justify-center relative">
          <Link href="/">
            <Image
              src={logo}
              alt="Thrive Track Logo"
              className="w-16 lg:w-20 h-auto"
            />
          </Link>
          <div className="flex flex-col items-center justify-center gap-2 mt-10">
            <h1 className="text-2xl lg:text-3xl poppins-medium">
              Welcome back!
            </h1>
            <h2 className="text-xs lg:text-sm poppins-regular text-mainBlue/60">
              Sign in to your account
            </h2>
          </div>
          <form
            onSubmit={onSubmit}
            className="w-10/12 lg:w-3/4 flex flex-col justify-center gap-2 lg:gap-4 mt-6 lg:mt-10"
          >
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
                className="w-full h-10 rounded-lg border border-mainBlue/20 px-4 focus:outline-none focus:ring-2 focus:ring-mainBlue transition-all duration-500 ease-in-out"
              />
            </label>

            <label
              htmlFor="password"
              className="w-full flex flex-col justify-center gap-2 text-xs lg:text-sm poppins-regular text-mainBlue/60"
            >
              Password
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full h-10 text-mainBlue rounded-lg border border-mainBlue/20 px-4 focus:outline-none focus:ring-2 focus:ring-mainBlue transition-all duration-500 ease-in-out"
              />
            </label>
            <button
              type="button"
              className="w-full text-right text-xs lg:text-sm poppins-regular text-mainBlue/50"
            >
              Forgot Password
            </button>
            <button
              type="submit"
              className="w-full h-10 rounded-lg bg-mainBlue text-white poppins-medium text-xs lg:text-sm mt-4"
            >
              Login
            </button>
          </form>
          <button
            onClick={() => setModalOpen(true)}
            className="w-full text-center text-xs lg:text-sm poppins-regular text-mainBlue/50 mt-10"
          >
            Don't have an account?{" "}
            <span className="text-mainYellow poppins-medium">Register Now</span>
          </button>
        </div>
      </div>
    </>
  );
}
