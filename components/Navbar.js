import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

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
    <nav className="fixed w-full left-0 top-0 bg-[#E5E5E5] lg:bg-transparent lg:top-4 z-50 flex fade-in-down">
      {/* Desktop Navigation */}
      <div className="hidden lg:flex items-center gap-4 w-full ml-10 justify-center">
        <div className="flex items-center gap-8 w-max rounded-full py-3 px-3 mx-auto justify-center bg-white">
          <Link
            className={`poppins-regular text-sm transition-all duration-500 px-4 py-2 rounded-full ${
              isActive("/services")
                ? "bg-blue-600/10 text-blue-600"
                : "hover:text-blue-600 hover:bg-blue-600/10"
            }`}
            href="/services"
          >
            Our Services
          </Link>
          <Link
            className={`poppins-regular text-sm transition-all duration-500 px-4 py-2 rounded-full ${
              isActive("/contact")
                ? "bg-blue-600/10 text-blue-600"
                : "hover:text-blue-600 hover:bg-blue-600/10"
            }`}
            href="/contact"
          >
            Our Work
          </Link>
          <Link
            className={`poppins-regular text-sm transition-all duration-500 px-4 py-2 rounded-full ${
              isActive("/about")
                ? "bg-blue-600/10 text-blue-600"
                : "hover:text-blue-600 hover:bg-blue-600/10"
            }`}
            href="/about"
          >
            Our Team
          </Link>
        </div>
      </div>
      <button className="hidden lg:block bg-blue-600 text-white w-max whitespace-nowrap px-4 lg:px-5 poppins-regular text-xs lg:text-sm py-2 lg:py-3 rounded-full h-max mr-10 mt-2 hover:text-blue-600 transition-all duration-500 hover:bg-blue-600/10">
        Get in touch
      </button>

      {/* Hamburger Menu Button */}
      <button
        className="lg:hidden ml-auto mr-6 flex items-center justify-center"
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
            className={`poppins-regular text-sm transition-all duration-500 px-4 py-2 ${
              isActive("/services")
                ? "text-blue-600 bg-blue-600/10"
                : "hover:text-blue-600"
            }`}
            href="/services"
            onClick={() => setIsOpen(false)}
          >
            Services
          </Link>
          <Link
            className={`poppins-regular text-sm transition-all duration-500 px-4 py-2 ${
              isActive("/about")
                ? "text-blue-600 bg-blue-600/10"
                : "hover:text-blue-600"
            }`}
            href="/about"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            className={`poppins-regular text-sm transition-all duration-500 px-4 py-2 ${
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
    </nav>
  );
}
