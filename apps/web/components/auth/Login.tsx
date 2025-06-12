import InputForm from "../InputForm";
import { Button } from "../Button";
import Logo from "../Logo";

export function Login() {
  return (
    <>
      <div className="flex min-h-screen items-center justify-center bg-[url(/imagen_u_medellin_2.jpg)] bg-cover bg-center bg-fixed bg-no-repeat">
        {" "}
        {/* Imagen de fondo para toda la pantalla con equivalente a object-fit: cover y object-position: center */}
        {/* Contenedor del formulario centrado con fondo semitransparente */}
        <div className="w-full max-w-md mx-auto px-4 ">
          {" "}
          {/* Contenedor que limita el ancho y centra horizontalmente */}
          {/* Tarjeta semitransparente */}
          <div className="backdrop-blur-md bg-white/30 p-6 sm:p-10 rounded-xl shadow-[0_10px_50px_rgba(0,0,0,0.5)] min-h-[530px] border border-white/20">
            <div className="flex justify-center mb-6 sm:mb-8">
              <Logo
                imageSource="/udem_logo.png"
                alt="Logo de La Universidad de Medellín"
                width={100}
                height={100}
                styles="mb-6"
              />
            </div>
            <div className="w-full">
              {" "}
              {/* Eliminado max-w-xs de aquí, ya que max-w-md lo controla el padre */}
              <InputForm
                id="documentoIdentidad"
                placeholder="Documento identidad"
                typeInput="text"
              />
              <InputForm
                id="contrasena"
                placeholder="Contraseña"
                typeInput="password"
              />
              <div className="flex justify-end mt-2 mb-4">
                <a
                  href=""
                  className="text-sm text-[var(--primary-blue)] hover:underline"
                >
                  Olvide mi Contraseña
                </a>
              </div>
              <div className="flex justify-center mt-8">
                <Button text="Entrar" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
