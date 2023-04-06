import Spacer from "./Spacer";
import Subscribe from "./Subscribe";

const Banner = () => {
  return (
    <section>
      <div className="lg:flex lg:justify-center lg:items-center bg-[#11151a] text-[#f3f2ee]">
        <div className="px-4 lg:px-8 w-auto lg:w-[1180px] py-[80px]">
          <div className="flex flex-col md:flex-row gap-14">
            <div className="">
              <h2 className="huge-title mb-4 md:mb-8">
                Hey, I'm Juan Briceno.
              </h2>
              <h3>
                <div className="mb-3">
                  I built beautiful websites and a tiny bank account.
                </div>
                <div className="mb-3">
                  Then I realized beautiful websites alone don't generate
                  revenue. And turned it around.
                </div>
                <div className="mb-3">
                  Started BringMoreLeads.com to show local businesses the
                  importance of this realization.
                </div>

                <div className="mb-3">
                  And now I help our clients generate more leads in a magnetic
                  way through our proven lead generation formula.
                </div>

                <div className="mb-3">All without increasing ad spend.</div>
              </h3>
            </div>
            <div className="flex items-center justify-center">
              <img
                src="/juan.jpg"
                className=" max-w-[250px] border-1 rounded-full shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
