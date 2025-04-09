import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import logo from "../assets/logoColor.png";
import { useRouter } from "next/router";
export default function Navbar() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 200;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close the menu when clicking outside
  useEffect(() => {
    const handleEscKey = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };

    window.addEventListener("keydown", handleEscKey);
    return () => window.removeEventListener("keydown", handleEscKey);
  }, []);

  // Helper function to determine if a link is active
  const isActive = (path) => {
    return pathname === path;
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 w-full z-50 px-10 lg:px-20  transition-all duration-700 fade-in-down ${
        scrolled ? "bg-mainBG py-4" : "py-8"
      }`}
    >
      <div className="max-w-[1440px] mx-auto flex items-center justify-between relative">
        {/* Logo */}
        <Link href="/" className="hover:cursor-pointer">
          <Image src={logo} alt="Celthar Logo" className="w-20 h-auto" />
        </Link>

        {/* Desktop Navigation - Centered */}
        <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2">
          <div className="flex items-center gap-8">
            <Link
              className={`jost-medium text-sm transition-all duration-500 px-4 py-2 rounded-xl ${
                isActive("/services")
                  ? "bg-mainBlue/10 text-mainBlue"
                  : "hover:text-mainBlue hover:bg-mainBlue/10"
              }`}
              href="/services"
            >
              Product
            </Link>
            <Link
              className={`jost-medium text-sm transition-all duration-500 px-4 py-2 rounded-xl ${
                isActive("/contact")
                  ? "bg-mainBlue/10 text-mainBlue"
                  : "hover:text-mainBlue hover:bg-mainBlue/10"
              }`}
              href="/contact"
            >
              Pricing
            </Link>
            <Link
              className={`jost-medium text-sm transition-all duration-500 px-4 py-2 rounded-xl ${
                isActive("/about")
                  ? "bg-mainBlue/10 text-mainBlue"
                  : "hover:text-mainBlue hover:bg-mainBlue/10"
              }`}
              href="/about"
            >
              About
            </Link>
            <Link
              className={`jost-medium text-sm transition-all duration-500 px-4 py-2 rounded-xl ${
                isActive("/about")
                  ? "bg-mainBlue/10 text-mainBlue"
                  : "hover:text-mainBlue hover:bg-mainBlue/10"
              }`}
              href="/about"
            >
              Contact
            </Link>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => router.push("/application/login")}
            className="hidden lg:block bg-transparent text-mainBlue w-max whitespace-nowrap px-6 jost-medium tracking-wide text-sm py-2 rounded-xl hover:text-mainBlue hover:bg-mainBlue/10 transition-all duration-500"
          >
            Sign In
          </button>
          <button className="hidden lg:block bg-mainBlue text-white w-max whitespace-nowrap px-6 jost-medium tracking-wide text-sm py-2 rounded-xl hover:bg-mainYellow hover:text-mainBlue hover:border-mainYellow transition-all duration-500">
            Try for Free
          </button>
        </div>

        {/* Hamburger Menu Button */}
        <button
          className="lg:hidden ml-auto flex items-center justify-center"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Overlay */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => setIsOpen(false)}
          ></div>
        )}

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 right-0 h-full w-64 bg-white z-50 transform transition-transform duration-700 ease-in-out ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex justify-end p-4">
            <button onClick={() => setIsOpen(false)} aria-label="Close menu">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex flex-col p-4 gap-4">
            <Link
              className={`jost-medium text-sm transition-all duration-500 px-4 py-2 ${
                isActive("/services")
                  ? "text-blue-600 bg-blue-600/10"
                  : "hover:text-blue-600"
              }`}
              href="/services"
              onClick={() => setIsOpen(false)}
            >
              Product
            </Link>
            <Link
              className={`jost-medium text-sm transition-all duration-500 px-4 py-2 ${
                isActive("/about")
                  ? "text-blue-600 bg-blue-600/10"
                  : "hover:text-blue-600"
              }`}
              href="/about"
              onClick={() => setIsOpen(false)}
            >
              Pricing
            </Link>
            <Link
              className={`jost-medium text-sm transition-all duration-500 px-4 py-2 ${
                isActive("/contact")
                  ? "text-blue-600 bg-blue-600/10"
                  : "hover:text-blue-600"
              }`}
              href="/about"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              className={`jost-medium text-sm transition-all duration-500 px-4 py-2 ${
                isActive("/contact")
                  ? "text-blue-600 bg-blue-600/10"
                  : "hover:text-blue-600"
              }`}
              href="/contact"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
