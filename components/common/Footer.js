/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="bg-gray-900 shadow">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <a
              href="#"
              className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
            >
              <img
                src="/logo_raed.png"
                className="h-8"
                alt="Flowbite Logo"
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
                Raed India
              </span>
            </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium sm:mb-0 text-white mr-3">
              {/* <li>
                <a href="#" className="hover:underline me-4 md:me-6 mr-3">
                  About
                </a>
              </li> */}
              <li>
              <Link href={`/privacypolicy.pdf`} passHref>
                <a target="_blank" rel="noopener noreferrer" className="hover:underline me-4 md:me-6 mr-3">
                  Privacy Policy
                </a>
              </Link>
              </li>
              {/* <li>
                <a href="#Myths" className="hover:underline me-4 md:me-6 mr-3">
                  Myths
                </a>
              </li> */}
              <li>
                <a href="https://forms.gle/ruJrMhvZVwEDiqCw7" target="_blank" rel="noopener noreferrer" className="hover:underline mr-3">
                  Volunteer
                </a>
              </li>
            </ul>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023{" "}
            <a href="#" className="hover:underline">
              Raed India™
            </a>
            <br />
             All Rights Reserved.
          </span>
        </div>
      </footer>
    </>
  );
}
