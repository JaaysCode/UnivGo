import React from "react";
import CustomLink from "../../common/CustomLink";
import Logo from "../../common/Logo";


const FooterInfo = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full">
      {/* Columna izquierda - Información de contacto */}
      <div className="text-sm space-y-1 md:w-1/4">
        <p className="font-medium text-base mb-1">Universidad de Medellín</p>
        <p>+57 (604) 590 45 00 • +57 (604) 590 69 99</p>{" "}
        <p>
          Sede principal:{" "}
          <CustomLink href="https://maps.app.goo.gl/ZqFGksakWsk1daP4A">
            Carrera 87 N° 30-65, Medellín - Colombia.
          </CustomLink>
        </p>
        <p>
          Sede Bogotá:{" "}
          <CustomLink href="https://maps.app.goo.gl/yb2TSy55T54bfTZj6">
            Calle 57 # 9-52, Chapinero.
          </CustomLink>
        </p>
      </div>

      {/* Columna central - Política y estatutos */}
      <div className="flex-grow text-sm text-center flex flex-col justify-center items-center mx-auto space-y-2 md:ml-10 md:mr-8">
        <p className="text-center">
          Institución de educación superior sujeta a la inspección y vigilancia
          <br />
          del Ministerio de Educación Nacional.
        </p>
        <div className="flex flex-col items-center ">
          {" "}
          <CustomLink href="/politicas-datos" target="">
            Política para el Manejo y Tratamiento de Datos Personales
          </CustomLink>
          <CustomLink href="/propiedad-intelectual" target="">
            Estatuto de Propiedad Intelectual
          </CustomLink>
        </div>
      </div>

      {/* Columna derecha - Logo */}
      <div className="flex justify-end md:w-1/4">
        <Logo
          imageSource="/udem_logo_letras.png"
          alt="Logo de La Universidad de Medellín"
          width={300}
          height={300}
          styles="mb-1"
        />
      </div>
    </div>
  );
};

export default FooterInfo;
