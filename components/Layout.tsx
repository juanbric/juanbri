import { ToggleContext } from "@/pages/_app";
import { useContext } from "react";
import Appbar from "./Appbar";

export default function Layout({ children }: { children: any }) {
  const toggleFromContext = useContext(ToggleContext);
  const { isDarkMode } = toggleFromContext;
  return (
    <>
      <div
        className={
          isDarkMode ? "bg-[#efeff5] text-black" : "bg-[#202731] text-white"
        }
      >
        <Appbar />
        <main className="relative flex flex-col items-center min-h-[100px] py-[60px] px-[20px]">
          <div className="max-w-[1130px]">{children}</div>
        </main>
      </div>
    </>
  );
}
