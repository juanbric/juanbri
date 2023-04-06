import Spacer from "./Spacer";
import Subscribe from "./Subscribe";

const Banner = () => {
  return (
    <section>
      <Spacer size={90} />
      <div className="lg:flex lg:justify-center lg:items-center">
        <div className="px-4 lg:px-8 w-auto lg:w-[1180px]">
          <div className="flex md:grid md:grid-cols-2">
            <div className="">
              <h2 className="title mb-4 md:mb-8">JUAN BRICENO</h2>
              <h2 className="huge-title mb-4 md:mb-8">Aprende.<br/>Emprende.<br/>Triunfa.</h2>
              <Subscribe />
            </div>
          </div>
        </div>
      </div>
      <Spacer size={60} />
    </section>
  );
};

export default Banner;
