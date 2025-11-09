import React from "react";
import FooterLogo from "../assets/FooterLogo.png";

const Footer = () => {
  return (
    <div>
      <footer className="footer sm:footer-horizontal bg-[#001F46] p-10 px-20 mt-[80px] flex justify-between">
        <nav>
          <h6 className="footer-title text-white">Services</h6>
          <a className="link link-hover text-white hover:text-yellow-400">
            Branding
          </a>
          <a className="link link-hover text-white hover:text-yellow-400">
            Design
          </a>
          <a className="link link-hover text-white hover:text-yellow-400">
            Marketing
          </a>
          <a className="link link-hover text-white hover:text-yellow-400">
            Advertisement
          </a>
        </nav>
        <nav>
          <h6 className="footer-title text-white">Company</h6>
          <a className="link link-hover text-white hover:text-yellow-400">
            About us
          </a>
          <a className="link link-hover text-white hover:text-yellow-400">
            Contact
          </a>
          <a className="link link-hover text-white hover:text-yellow-400">
            Jobs
          </a>
          <a className="link link-hover text-white hover:text-yellow-400">
            Press kit
          </a>
        </nav>
        <nav>
          <h6 className="footer-title text-white">Legal</h6>
          <a className="link link-hover text-white hover:text-yellow-400">
            Terms of use
          </a>
          <a className="link link-hover text-white hover:text-yellow-400">
            Privacy policy
          </a>
          <a className="link link-hover text-white hover:text-yellow-400">
            Cookie policy
          </a>
        </nav>
        <nav className="md:place-self-center md:justify-self-end">
          <div className="grid grid-flow-col gap-4">
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current text-white hover:text-yellow-400 cursor-pointer"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current text-white hover:text-yellow-400 cursor-pointer"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current text-white hover:text-yellow-400 cursor-pointer"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </a>
          </div>
        </nav>
      </footer>
      <footer className="footer bg-[#001F46] text-yellow-100 border-gray-600 border-t px-20 py-4">
        <aside className="flex items-center justify-center">
          <div>
            <div className="flex items-center">
            <img src={FooterLogo} alt="" />
            <span className="text-yellow-400 text-[24px] font-semibold">
              partners
            </span>
          </div>
          <div>
            <p className="mt-4">
            Study Partners Education Community
            <br />
            Providing programming tech student 2025.
          </p>
          </div>
          </div>
          <div>
            <p className="ml-40 text-gray-400">Copyright © {new Date().getFullYear()} - All right reserved by | Shiful Islam</p>
          </div>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
