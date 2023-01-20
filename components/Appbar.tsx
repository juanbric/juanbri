import Link from "next/link";

const Appbar = () => {
  return (
    <div className="items-center justify-between flex p-3.5 sticky top-0 opacity-100 z-10">
      <Link
        className="hover:scale-110 transform-gpu ease-in-out duration-300 rounded-full"
        href={"/"}
      >
        <img src="/logo.svg" className="w-[32px] h-[32px] shadow-lg  " />
      </Link>
      <Link
        className="bg-blue py-1 rounded-[6px] px-3 hover:scale-110 transform-gpu ease-in-out duration-300"
        href={"/discover"}
      >
        Discover
      </Link>
    </div>
  );
};

export default Appbar;
