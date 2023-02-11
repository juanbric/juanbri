import { ToggleContext } from "@/pages/_app";
import { useContext } from "react";

const Banner = () => {
  const toggleFromContext = useContext(ToggleContext);
  const { isDarkMode } = toggleFromContext;

  return (
    <section>
      <div className="flex md:grid md:grid-cols-2">
        <div className="">
          <h1 className="title mb-4 md:mb-8">JUAN PABLO BRICENO</h1>
          <h2 className="huge-title mb-4 md:mb-8">
            Work Less. Earn More. Live fully.
          </h2>
          <p className="mb-6 md:mb-8">
            <span className="font-bold">
              Join 80,000+ getting mindf*cked every Saturday morning
            </span>{" "}
            while reading The Koe Letter (you’ll learn a bit about life &
            business too.)
          </p>
          <div className="flex-row">
            <input
              type="email"
              className="outline-none bg-transparent p-2 border-white border-b mr-5 max-w-[300px]"
              placeholder="Your email"
            />
            <button className="mt-4 md:mt-0 bg-blue py-2 rounded-[2px] px-4 hover:text-second hover:bg-second">
              Read for free
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
