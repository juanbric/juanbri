import React from "react";
import Header from "./Header";
import Spacer from "./Spacer";

const Services = () => {
  return (
    <section className="lg:flex lg:justify-center lg:items-center">
      <div className="px-4 lg:px-8 w-auto lg:w-[1180px]">
        <Spacer size={60} />
        <div className="md:grid md:grid-cols-2 md:gap-12">
          <div className="md:mr-4">
            <h2 className="huge-title mb-14">Services</h2>
            <h3 className="copy-huge">Web Development</h3>
            <hr className="h-px bg-gray-200 border-0 dark:bg-white mt-4 mb-8" />
            <h3 className="copy-huge">Web Development</h3>
            <hr className="h-px bg-gray-200 border-0 dark:bg-white mt-4 mb-8" />
            <h3 className="copy-huge">Web Development</h3>
            <hr className="h-px bg-gray-200 border-0 dark:bg-white mt-4 mb-8" />
            <h3 className="copy-huge">Web Development</h3>
            <hr className="h-px bg-gray-200 border-0 dark:bg-white mt-4 mb-8" />
            <h3 className="copy-huge">Web Development</h3>
            <hr className="h-px bg-gray-200 border-0 dark:bg-white mt-4 mb-8" />
          </div>
          <div className="md:ml-4">
            <h2 className="huge-title mb-14">Experience</h2>
            <h3 className="copy-huge mb-2">Web Development</h3>
            <a
              href={""}
              target="_blank"
              rel="noopener noreferrer"
              className="copy"
            >
              Web Development
            </a>
            <hr className="h-px bg-gray-200 border-0 dark:bg-white mt-4 mb-8" />
            <h3 className="copy-huge mb-2">Web Development</h3>
            <a
              href={""}
              target="_blank"
              rel="noopener noreferrer"
              className="copy"
            >
              Web Development
            </a>
            <hr className="h-px bg-gray-200 border-0 dark:bg-white mt-4 mb-8" />
            <h3 className="copy-huge mb-2">Web Development</h3>
            <a
              href={""}
              target="_blank"
              rel="noopener noreferrer"
              className="copy"
            >
              Web Development
            </a>
            <hr className="h-px bg-gray-200 border-0 dark:bg-white mt-4 mb-8" />
            <h3 className="copy-huge mb-2">Web Development</h3>
            <a
              href={""}
              target="_blank"
              rel="noopener noreferrer"
              className="copy"
            >
              Web Development
            </a>
            <hr className="h-px bg-gray-200 border-0 dark:bg-white mt-4 mb-8" />
          </div>
        </div>
      </div>
      <Spacer size={20} />
    </section>
  );
};

export default Services;
