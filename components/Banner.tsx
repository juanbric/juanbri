import Spacer from "./Spacer";
import Subscribe from "./Subscribe";

const Banner = () => {
  return (
    <section>
      <Spacer size={50} />
      <div className="lg:flex lg:justify-center lg:items-center">
        <div className="px-4 lg:px-8 w-auto lg:w-[1180px]">
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
              <Subscribe />
            </div>
          </div>
        </div>
      </div>
      <Spacer size={110} />
    </section>
  );
};

export default Banner;
