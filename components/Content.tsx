import React from "react";
import Links from "./Links";

const Content = () => {
  return (
    <section>
      <div className="lg:flex lg:justify-center lg:items-center text-[#11151acd] bg-[#f3f2ee]">
        <div className="px-4 lg:px-8 w-auto lg:w-[1180px] py-[80px]">
          <div className="flex flex-col justify-center items-center">
            <h2 className="sub-title mb-5 max-w-[500px] text-center">
              If you want to build a new website, you're in the wrong place.
            </h2>
            <h2 className="sub-sub-title mb-14">
              if you want to boost your revenue without increasing your ad spend, however...
            </h2>
            <div className="flex flex-col gap-14 md:grid w-full items-center justify-center md:grid-cols-3">
              <a
                href={""}
                target="_blank"
                rel="noopener noreferrer"
                className="text-center bg-[#0d3744] py-3 rounded-[8px] px-12 hover:text-second hover:bg-second hover:scale-110 text-white transform-gpu ease-in-out duration-300"
              >
                Resource
              </a>
              <a
                href={""}
                target="_blank"
                rel="noopener noreferrer"
                className="text-center bg-[#0d3744] py-3 rounded-[8px] px-12 hover:text-second hover:bg-second hover:scale-110 text-white transform-gpu ease-in-out duration-300"
              >
                Resource
              </a>
              <a
                href={""}
                target="_blank"
                rel="noopener noreferrer"
                className="text-center bg-[#0d3744] py-3 rounded-[8px] px-12 hover:text-second hover:bg-second hover:scale-110 text-white transform-gpu ease-in-out duration-300"
              >
                Resource
              </a>
              <a
                href={""}
                target="_blank"
                rel="noopener noreferrer"
                className="text-center bg-[#0d3744] py-3 rounded-[8px] px-12 hover:text-second hover:bg-second hover:scale-110 text-white transform-gpu ease-in-out duration-300"
              >
                Resource
              </a>
              <a
                href={""}
                target="_blank"
                rel="noopener noreferrer"
                className="text-center bg-[#0d3744] py-3 rounded-[8px] px-12 hover:text-second hover:bg-second hover:scale-110 text-white transform-gpu ease-in-out duration-300"
              >
                Resource
              </a>
              <a
                href={""}
                target="_blank"
                rel="noopener noreferrer"
                className="text-center bg-[#0d3744] py-3 rounded-[8px] px-12 hover:text-second hover:bg-second hover:scale-110 text-white transform-gpu ease-in-out duration-300"
              >
                Resource
              </a>
              <a
                href={""}
                target="_blank"
                rel="noopener noreferrer"
                className="text-center bg-[#0d3744] py-3 rounded-[8px] px-12 hover:text-second hover:bg-second hover:scale-110 text-white transform-gpu ease-in-out duration-300"
              >
                Resource
              </a>
              <a
                href={""}
                target="_blank"
                rel="noopener noreferrer"
                className="text-center bg-[#0d3744] py-3 rounded-[8px] px-12 hover:text-second hover:bg-second hover:scale-110 text-white transform-gpu ease-in-out duration-300"
              >
                Resource
              </a>
              <a
                href={""}
                target="_blank"
                rel="noopener noreferrer"
                className="text-center bg-[#0d3744] py-3 rounded-[8px] px-12 hover:text-second hover:bg-second hover:scale-110 text-white transform-gpu ease-in-out duration-300"
              >
                Resource
              </a>
            </div>

            <div className="flex flex-col gap-14 md:grid w-2/3 mb-8 mt-14 items-center justify-center md:grid-cols-2">
              <a
                href={""}
                target="_blank"
                rel="noopener noreferrer"
                className="text-center bg-[#be2622] py-3 rounded-[8px] px-12 hover:text-second hover:bg-second hover:scale-110 text-white transform-gpu ease-in-out duration-300"
              >
                Checklist
              </a>
              <a
                href={""}
                target="_blank"
                rel="noopener noreferrer"
                className="text-center bg-[#be2622] py-3 rounded-[8px] px-12 hover:text-second hover:bg-second hover:scale-110 text-white transform-gpu ease-in-out duration-300"
              >
                Resource
              </a>
            </div>

            <Links
              icon={"/twitter.svg"}
              link={"https://twitter.com/juanbri__"}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Content;
