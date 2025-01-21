import React from "react";
import { useState } from "react";
import logo from "../../Components/assets/logo.png";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    setMessage(email ? "Thank you for subscribing!" : "Please enter a valid email.");
    if (email) setEmail("");
  };

  return (
    <footer className="bg-[#302f2f] px-4 py-8">
      <div className="mx-auto w-full max-w-screen-xl">
        {/* Main Footer Content */}
        <div className="flex flex-col lg:flex-row lg:justify-between gap-8">
          {/* Logo Section */}
          <div className="flex justify-center lg:justify-start mb-6 lg:mb-0">
            <a href="/" className="inline-block">
              <img
                src={logo}
                className="h-14 sm:h-16 lg:h-20"
                alt="AnnaDaata Connect Logo"
              />
            </a>
          </div>
         {/* Newsletter Section */}
 <div className="text-center mb-8">
          <h2 className="text-white text-sm font-semibold mb-4">SUBSCRIBE TO OUR NEWSLETTER</h2>
          <form onSubmit={handleSubscribe} className="flex justify-center items-center">
          <input
  type="email"
  className="p-2 rounded-l-lg w-full sm:w-1/2 md:w-64 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#e26959] mb-1"
  placeholder="Enter your email"
/>

      <button
  type="submit"
  className="bg-[#e26959] p-2 text-white rounded-lg font-semibold text-lg transition-transform duration-300 ease-in-out transform hover:scale-105 hover:bg-[#b85e4c] focus:outline-none focus:ring-2 focus:ring-[#e26959] focus:ring-opacity-50 shadow-md hover:shadow-lg"
>
  Subscribe
</button>

          </form>
          {message && <p className="text-white mt-3">{message}</p>}
        </div>
          {/* Links Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Quick Links */}
            <div className="text-center lg:text-left">
              <h2 className="mb-4 text-sm font-semibold text-white uppercase">
                Quick Links
              </h2>
              <ul className="text-gray-50 font-medium space-y-3">
                <li>
                  <a href="/team" className="hover:underline hover:text-[#e26959] transition-colors">
                    Team
                  </a>
                </li>
                <li>
                  <a href="/services" className="hover:underline hover:text-[#e26959] transition-colors">
                    Services
                  </a>
                </li>
                <li>
                  <a href="/privacypolicy" className="hover:underline hover:text-[#e26959] transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="/termsandconditions" className="hover:underline hover:text-[#e26959] transition-colors">
                    Terms and Conditions
                  </a>
                </li>
              </ul>
            </div>

            {/* Join Us */}
            <div className="text-center lg:text-left">
              <h2 className="mb-4 text-sm font-semibold text-gray-50 uppercase">
                Join Us
              </h2>
              <ul className="text-gray-50 font-medium space-y-3">
                <li>
                  <a href="/login" className="hover:underline hover:text-[#e26959] transition-colors">
                    Login
                  </a>
                </li>
                <li>
                  <a href="/registration" className="hover:underline hover:text-[#e26959] transition-colors">
                    Register
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Us */}
            <div className="text-center lg:text-left space-y-3">
              <h2 className="mb-4 text-sm font-semibold text-gray-50 uppercase">
                Contact Us
              </h2>
              <ul className="text-gray-50 font-medium space-y-3">
                <li>
                  <a href="mailto:abhiruchis03@gmail.com" className="hover:underline hover:text-[#e26959] transition-colors">
                    abhiruchis03@gmail.com
                  </a>
                </li>
                <li>
                  <a href="mailto:tarushi23@gmail.com" className="hover:underline hover:text-[#e26959] transition-colors">
                    tarushi23@gmail.com
                  </a>
                </li>
              </ul>
              <div className="text-gray-50 font-semibold space-y-3">

                  <a  href="/contactus" className="hover:underline hover:text-[#e26959] transition-colors">
                    Contact Us Form
                  </a>
              </div>
               
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-8 border-[#e26959] opacity-30" />

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <span className="text-gray-50 text-center sm:text-left text-sm md:text-base">
            © {new Date().getFullYear()} <a href="/" className="hover:underline hover:text-[#e26959] transition-colors">AnnDaata Connect</a>. All Rights Reserved.
          </span>

          {/* Social Icons */}
          <div className="flex justify-center gap-4">
            {/* Discord */}
            <a
              href="#"
              className="text-[#e26959] hover:text-gray-50 transition-colors"
              aria-label="Join our Discord community"
            >
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 21 16"
              >
                <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z" />
              </svg>
            </a>

            {/* Twitter */}
            <a
              href="https://x.com/login.do"
              className="text-[#e26959] hover:text-gray-50 transition-colors"
              aria-label="Follow us on Twitter"
            >
              <svg class="w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 30 30">
                <path d="M 6 4 C 4.895 4 4 4.895 4 6 L 4 24 C 4 25.105 4.895 26 6 26 L 24 26 C 25.105 26 26 25.105 26 24 L 26 6 C 26 4.895 25.105 4 24 4 L 6 4 z M 8.6484375 9 L 13.259766 9 L 15.951172 12.847656 L 19.28125 9 L 20.732422 9 L 16.603516 13.78125 L 21.654297 21 L 17.042969 21 L 14.056641 16.730469 L 10.369141 21 L 8.8945312 21 L 13.400391 15.794922 L 8.6484375 9 z M 10.878906 10.183594 L 17.632812 19.810547 L 19.421875 19.810547 L 12.666016 10.183594 L 10.878906 10.183594 z"></path>
              </svg>

            </a>

            {/* GitHub */}
            <a
              href="https://github.com/abhi03ruchi/Anndaata-Connect/"
              className="text-[#e26959] hover:text-gray-50 transition-colors"
              aria-label="View our GitHub repository"
            >
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;