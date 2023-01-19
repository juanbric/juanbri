import Link from "next/link";

const Appbar = () => {
  return (
    <Link href={'/'} className="items-center flex p-3.5">
      <div className="hover:scale-110 transform-gpu ease-in-out duration-300 rounded-full">
      <img
        src="/logo.svg"
        className="w-[32px] h-[32px] shadow-lg"
      />
    </div>
    </Link>
  );
};

export default Appbar;
