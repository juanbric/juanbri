import { ToggleContext } from "@/pages/_app";
import Link from "next/link";
import { useContext } from "react";

const Appbar = () => {
  const toggleFromContext = useContext(ToggleContext);
  const { toggleDarkMode, isDarkMode, isSpanish, toggleSpanish } =
    toggleFromContext;
  return (
    <div className="items-center justify-between flex p-3.5 sticky top-0 opacity-100 z-10">
      <Link
        className="hover:scale-110 transform-gpu ease-in-out duration-300 rounded-full"
        href={"/"}
      >
        <img src="/logo.svg" className="w-[32px] h-[32px] shadow-lg  " />
      </Link>
      <div className="flex items-center justify-center gap-6">
        <label className="relative inline-flex items-center cursor-pointer ">
          <input
            type="checkbox"
            onClick={toggleSpanish}
            className="sr-only peer "
          />
          <div className="outline-none w-11 h-6 bg-[#ffffffa3] rounded-full dark:peer-focus:ring-blue-800 dark:bg-[gray-700] peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-[#ffffffa3] after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#3c31dd]">
            <div className="flex gap-1 ml-[6.5px]">
              {isSpanish ? (
                <img src="/en.svg" className="w-3 mt-[8.5px] ml-[0.5px]" />
              ) : null}

              {!isSpanish && !isDarkMode ? (
                <img src="/es-black.svg" className="w-3 mt-[8.5px] ml-[20px]" />
              ) : null}

              {!isSpanish && isDarkMode ? (
                <img src="/es.svg" className="w-3 mt-[8.5px] ml-[20px]" />
              ) : null}
            </div>
          </div>
        </label>

        <label className="relative inline-flex items-center cursor-pointer ">
          <input
            type="checkbox"
            onClick={toggleDarkMode}
            className="sr-only peer "
          />
          <div className="outline-none w-11 h-6 bg-[#ffffffa3] rounded-full dark:peer-focus:ring-blue-800 dark:bg-[gray-700] peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-[#ffffffa3] after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#3c31dd]">
            <div className="flex gap-1 ml-[5.5px]">
              {isDarkMode ? (
                <img src="/moon.svg" className="w-3.5 mt-[5.5px] " />
              ) : (
                <img src="" className="w-4 mt-1 " />
              )}
              {!isDarkMode ? (
                <img src="/sun.svg" className="w-3.5 mt-[5.5px] mr-[5.5px]" />
              ) : (
                <img src="" className="w-4 mt-1 " />
              )}
            </div>
          </div>
        </label>
        <Link
          className={
            !isDarkMode
              ? "bg-blue py-1 rounded-[6px] px-3 hover:scale-110 transform-gpu ease-in-out duration-300"
              : "bg-blue py-1 rounded-[6px] px-3 hover:scale-110 transform-gpu ease-in-out duration-300 text-white"
          }
          href={"/discover"}
        >
          {isSpanish ? "Descubre" : "Discover"}
        </Link>
      </div>
    </div>
  );
};

export default Appbar;
