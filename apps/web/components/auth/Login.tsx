"use client";
import InputForm from "../InputForm";
import { Button } from "../Button";
import Logo from "../Logo";
import Checkbox from "../Checkbox";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import toast, { Toaster } from "react-hot-toast";

export function Login() {
  const [identification, setIdentification] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async () => {
    const res = await fetch("http://localhost:3001/api/auth/sign-in", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ identification, password }),
    });

    if (!res.ok) {
      if (identification.length === 0 || password.length === 0) {
        toast.error("Rellene todos los campos solicitados", {
          duration: 3000,
          position: "top-center",
        });
        return;
      }
      toast.error("Usuario o contraseña incorrectos", {
        duration: 3000,
        position: "top-center",
      });
      return;
    }

    const data = await res.json();
    const token = data.access_token;

    //save bearer token in a cookie
    Cookies.set("token", token, {
      expires: 1,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
    });

    router.push("/protected/main");
  };

  return (
    <>
      <Toaster />
      <div className="flex min-h-screen items-center justify-center bg-[url(/imagen_u_medellin_2.jpg)] bg-cover bg-center bg-fixed bg-no-repeat relative">
        {/* Capa de oscurecimiento con viñeta */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/10"></div>

        <div className="w-full max-w-md mx-auto px-4 relative z-10">
          {/* Tarjeta semitransparente */}
          <div className="flex items-center justify-center">
            <div className="backdrop-blur-md bg-white/75 p-8 sm:p-10 rounded-xl shadow-[0_10px_50px_rgba(0,0,0,0.5)] w-full border border-white/20">
              {/* Logo centrado */}
              <div className="flex flex-col items-center mb-6">
                <Logo
                  imageSource="/udem_logo.png"
                  alt="Logo de La Universidad de Medellín"
                  width={120}
                  height={120}
                  styles="mb-6"
                />
                <h1 className="text-2xl font-bold text-[var(--text-color)]">
                  UnivGo
                </h1>
                <p className="text-sm text-[var(--secondary-text)] text-center mt-1">
                  Tu plataforma universitaria
                </p>
              </div>

              {/* Formulario */}
              <div className="w-full space-y-6">
                <InputForm
                  label="Documento de identidad"
                  id="documentoIdentidad"
                  placeholder="Ingrese su documento"
                  typeInput="text"
                  value={identification}
                  onChange={(e) => setIdentification(e.target.value)}
                />

                <InputForm
                  label="Contraseña"
                  id="contrasena"
                  placeholder="Ingrese su contraseña"
                  typeInput="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />

                {/* Opciones adicionales */}
                <div className="flex items-center justify-between">
                  {/* Checkbox personalizado */}
                  <Checkbox id="remember-me" label="Recordarme" />

                  <a
                    href=""
                    className="text-sm font-medium text-[var(--primary-blue)] hover:underline focus:outline-none focus:ring-2 focus:ring-[var(--primary-blue)] focus:ring-offset-2 rounded-sm"
                  >
                    Olvidé mi Contraseña
                  </a>
                </div>

                {/* Botón de acceso */}
                <div className="pt-4 flex justify-center">
                  <Button text="Entrar" onClick={handleLogin} />
                </div>

                {/* Footer con información de la app */}
                <div className="border-t border-[var(--primary-gray)] pt-4 mt-6">
                  <p className="text-xs text-center text-[var(--secondary-text)]">
                    Reserva espacios deportivos, consulta tu información
                    académica y mucho más.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
