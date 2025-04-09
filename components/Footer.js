import Link from "next/link";
import Image from "next/image";
import { FaTwitter, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import logo from "../assets/logoColor.png";
import { FiArrowRight } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Image src={logo} alt="Thrive Track Logo" className="w-24 h-auto" />
          <div className="col-span-1 lg:col-span-2">
            <p className="text-mainBlue lg:w-1/2 poppins-light text-sm max-w-md">
              Transforming Workplace Wellbeing into Your Greatest Competitive
              Advantage.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base poppins-regular text-mainBlue mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-mainBlue hover:text-mainBlue/60 group transition-colors duration-500 flex flex-row items-center gap-1"
                >
                  Product{" "}
                  <FiArrowRight className="inline-block text-mainBlue group-hover:text-mainBlue/60 group-hover:-rotate-45 transition-all duration-500" />
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="text-mainBlue hover:text-mainBlue/60 group transition-colors duration-500 flex flex-row items-center gap-1"
                >
                  Pricing
                  <FiArrowRight className="inline-block text-mainBlue group-hover:text-mainBlue/60 group-hover:-rotate-45 transition-all duration-500" />
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="text-mainBlue hover:text-mainBlue/60 group transition-colors duration-500 flex flex-row items-center gap-1"
                >
                  About
                  <FiArrowRight className="inline-block text-mainBlue group-hover:text-mainBlue/60 group-hover:-rotate-45 transition-all duration-500" />
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-black hover:text-blue-600 group transition-colors duration-500 flex flex-row items-center gap-1"
                >
                  Contact
                  <FiArrowRight className="inline-block text-mainBlue group-hover:text-mainBlue/60 group-hover:-rotate-45 transition-all duration-500" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-base poppins-regular text-mainBlue mb-4">
              Connect With Us
            </h3>
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-mainBlue hover:text-mainBlue/60 transition-colors duration-500"
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-mainBlue hover:text-mainBlue/60 transition-colors duration-500"
              >
                <FaInstagram size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-mainBlue mt-8 pt-8 text-left">
          <p className="text-mainBlue/60 poppins-light text-sm">
            © 2025 Thrive Track. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
