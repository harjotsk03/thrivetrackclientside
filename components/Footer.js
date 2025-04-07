import Link from "next/link";
import Image from "next/image";
import { FaTwitter, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="bg-[#E5E5E5] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 lg:col-span-2">
            <p className="text-black lg:w-1/2 poppins-light text-sm max-w-md">
              We craft digital experiences that drive engagement and maximize
              conversions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base poppins-regular text-black mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-black hover:text-blue-600 group transition-colors duration-500 flex flex-row items-center gap-1"
                >
                  About{" "}
                  <FiArrowRight className="inline-block text-black group-hover:text-blue-600 group-hover:-rotate-45 transition-all duration-500" />
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-black hover:text-blue-600 group transition-colors duration-500 flex flex-row items-center gap-1"
                >
                  Services
                  <FiArrowRight className="inline-block text-black group-hover:text-blue-600 group-hover:-rotate-45 transition-all duration-500" />
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-black hover:text-blue-600 group transition-colors duration-500 flex flex-row items-center gap-1"
                >
                  Contact
                  <FiArrowRight className="inline-block text-black group-hover:text-blue-600 group-hover:-rotate-45 transition-all duration-500" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-base poppins-regular text-black mb-4">
              Connect With Us
            </h3>
            <div className="flex space-x-4">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-blue-600 transition-colors duration-500"
              >
                <FaTwitter size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-blue-600 transition-colors duration-500"
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-blue-600 transition-colors duration-500"
              >
                <FaGithub size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-blue-600 transition-colors duration-500"
              >
                <FaInstagram size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-black mt-8 pt-8 text-left">
          <p className="text-black poppins-light text-sm">
            © 2025 Celthar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
