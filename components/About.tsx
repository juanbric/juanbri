import React from "react";
import Header from "./Header";
import Links from "./Links";
import Spacer from "./Spacer";

const About = () => {
  const myStuff = [
    {
      icon: "/twitter.svg",
      link: "https://twitter.com/juanbri__",
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
  return (
    <section>
      <Spacer size={0} />
      <div className="lg:flex lg:justify-center lg:items-center">
        <div className="px-4 lg:px-8 w-auto lg:w-[1180px]">
          <Header
            category={"SOBRE MI"}
            title={"¿Quién Es Juan Briceno?"}
            description={
              "Te ayudo a aprovechar el poder del internet para empezar tu camino empresarial."
            }
          />
          <div className="md:grid md:grid-cols-3 items-center">
            <div className="flex flex-col items-center">
              <img src="/juan.png" className="w-auto scale-120 rounded-full shadow-xl" />
              <div className="flex flex-row md:pb-0 pb-8 ">
                {myStuff.map((stuff: any, i: any) => {
                  return <Links icon={stuff.icon} link={stuff.link} key={i} />;
                })}
              </div>
            </div>
            <span className="md:col-span-2">
              <h2 className="sub-title mb-3">Hola, soy Juan.</h2>
              <h1 className="sub-sub-title mb-4">
              Soy un asesor empresarial para emprendedores que buscan maximizar su éxito en línea.
              </h1>
              <h2 className="copy">
              Soy el tipo al que acuden cuando quieren pasar de ser un simple emprendedor a un creador auténtico y altamente remunerado. Nada de embudos de ventas sofisticados ni estrategias de marketing agresivas en mi enfoque. <br />
                <br />
                Mi objetivo es ayudarles a sistematizar su flujo de trabajo, marketing y contenido para que puedan trabajar solo dos horas al día, aumentar sus precios y vender sus productos y servicios sin esfuerzos manuales.
                <br />
                <br />
                Como consultor y exfreelancer, he desarrollado sistemas efectivos a lo largo del tiempo, con experiencia adquirida de haber trabajado con más de 4000 estudiantes y clientes.
                <br />
                <br />
              </h2>
              <h3 className="sub-sub-title mb-4">
              Actualmente, estoy aceptando nuevos clientes pero solo por tiempo limitado. Si estás comprometido a llevar tus ideas de negocio al siguiente nivel con una estructuración concreta,{" "}
                <a
                  href="mailto:juanbri@gmx.com?subject=Hey%20Juan%20%3A)"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mr-2 ml-0.5 text-[#8d85ff]"
                >
                  contáctame hoy mismo
                </a>
                para que empecemos. :)
              </h3>
            </span>
          </div>
        </div>
      </div>
      <Spacer size={40} />
    </section>
  );
};

export default About;
