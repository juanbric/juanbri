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
        <main>
          <div className="wrap">{children}</div>
        </main>
      </div>
    </>
  );
}
