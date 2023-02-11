import Link from "next/link";

const Appbar = () => {
  return (
    <div className="items-center justify-between flex p-3.5 sticky top-0 z-10">
      <Link
        className="hover:scale-110 transform-gpu ease-in-out duration-300 rounded-full"
        href={"/"}
      >
        <img src="/logo.svg" className="w-[32px] h-[32px]" />
      </Link>
      <Link
        className="bg-blue py-1 rounded-[2px] px-3 hover:scale-110 transform-gpu ease-in-out duration-300 hover:text-second hover:bg-second"
        href={"/discover"}
      >
        Discover
      </Link>
    </div>
  );
};

export default Appbar;
