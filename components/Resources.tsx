import React from "react";
import Header from "./Header";
import Spacer from "./Spacer";

const Resources = () => {
  return (
    <section className="">
      <Header
        category={"RECURSOS"}
        title={"¿Por Dónde Empiezo?"}
        description={
          "Obtén claridad en tu propósito y construye una pila de habilidades de un millón de dólares."
        }
      />
      <div className="lg:flex lg:justify-center lg:items-center">
        <div className="px-4 lg:px-8 w-auto lg:w-[1180px]">
          <Spacer size={10} />
          <div className="md:grid md:grid-cols-2 md:gap-12">
            <div className="">
              <img src="/soltype-app.png" alt="" />
              <h2 className="mb-3 mt-4 blog-card-title text-start shorten-title">
                El Emprendedor Del Futuro
              </h2>
              <h3 className="copy shorten-p text-start">
                Empower your entrepreneurial journey by learning how to
                bootstrap your business with essential coding, business
                strategy, marketing, and sales skills,{" "}
                <strong>
                  all while aligning your life with your values and passions.
                </strong>
              </h3>
              <Spacer size={12} />
              <div className="flex items-start">
                <p className="sub-sub-title bg-blue py-3 rounded-[2px] px-6  hover:text-second hover:bg-second hover:scale-110 text-white transform-gpu ease-in-out duration-300">
                  Acepta El Reto
                </p>
              </div>
            </div>

            <div className="">
              <img src="/soltype-app.png" alt="" />
              <h2 className="mb-3 mt-4 blog-card-title text-start shorten-title">
                El Emprendedor Del Futuro
              </h2>
              <h3 className="copy shorten-p text-start">
                Empower your entrepreneurial journey by learning how to
                bootstrap your business with essential coding, business
                strategy, marketing, and sales skills,{" "}
                <strong>
                  all while aligning your life with your values and passions.
                </strong>
              </h3>
              <Spacer size={12} />
              <div className="flex items-start">
                <p className="sub-sub-title bg-blue py-3 rounded-[2px] px-6  hover:text-second hover:bg-second hover:scale-110 text-white transform-gpu ease-in-out duration-300">
                  Acepta El Reto
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Spacer size={40} />
    </section>
  );
};

export default Resources;
