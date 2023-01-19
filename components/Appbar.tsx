import Link from "next/link";

const Appbar = () => {
  return (
    <div className="items-center flex p-3.5 sticky top-0">
      <Link className="hover:scale-110 transform-gpu ease-in-out duration-300 rounded-full" href={"/"}>
      <img
        src="/logo.svg"
        className="w-[32px] h-[32px] shadow-lg"
      />
    </Link>
    </div>
  );
};

export default Appbar;
