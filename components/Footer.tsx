import Link from "next/link";
import React from "react";
import Links from "./Links";
import Spacer from "./Spacer";
import Subscribe from "./Subscribe";

const myStuff = [
  {
    icon: "/twitter.svg",
    link: "https://twitter.com/juanbri_sol",
  },
  {
    icon: "/linkedin.svg",
    link: "https://www.linkedin.com/in/juanpablobriceno/",
  },
  {
    icon: "/github.svg",
    link: "https://github.com/juanbric",
  },
  {
    icon: "/email.svg",
    link: `mailto:juanbri@gmx.com?subject=Hey%20Juan%20%3A)`,
  },
];

const Footer = ({ copy }: { copy: string }) => {
  return (
    <section>
      <Spacer size={72} />
      <div className="lg:flex lg:justify-center lg:items-center">
        <div className="px-4 lg:px-8 w-auto lg:w-[1180px]">
          <div className="flex-col-reverse flex md:grid md:grid-cols-2">
            <div className="max-w-[350px]">
              <Link href={"/"}>
                <img src="/logo.svg" className="w-[52px] h-[52px]" />
              </Link>
              <h3 className="sub-sub-title my-4">
                Aprende. Emprende. Triunfa.
              </h3>
              <h2 className="copy">{copy}</h2>
              <div className="flex flex-row">
                {myStuff.map((stuff: any, i: any) => {
                  return <Links icon={stuff.icon} link={stuff.link} key={i} />;
                })}
              </div>
            </div>
            <div className="">
              <h2 className="sub-title mb-3">
                Obtén Una Nueva Perspectiva Sobre Cómo Emprender Tu Negocio.
              </h2>
              <div className="mb-12 md:mb-0">
                <Subscribe />
              </div>
            </div>
          </div>
          <Spacer size={72} />
          <p className="text-center">Copyright © 2023 Juan Briceno - Reservados todos los derechos.</p>
          <Spacer size={30} />
        </div>
      </div>
    </section>
  );
};

export default Footer;
