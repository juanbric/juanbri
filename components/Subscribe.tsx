import { URL } from "@/config";
import React from "react";

const Subscribe = () => {
  return (
    <>
      <p className="copy-big-white mb-6 md:mb-8">
        <span className="copy-big-bold-white">
          Emprende sin sentirte abrumado por falta de claridad.
        </span>{" "}
        Suscríbete a mi newsletter para obtener consejos valiosos sobre cómo
        iniciar tu negocio en línea sin complicaciones.
      </p>
      <iframe
        src="https://embeds.beehiiv.com/19058b6b-1d46-4908-90fe-af60a1c444bc?slim=true"
        data-test-id="beehiiv-embed"
        height="52"
        frameBorder="0"
        scrolling="no"
        style={{
          margin: 0,
          borderRadius: "0px !important",
          backgroundColor: "transparent",
          maxWidth: "400px",
        }}
      />
    </>
  );
};

export default Subscribe;
