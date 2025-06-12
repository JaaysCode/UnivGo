import InputForm from "../InputForm" 
import {Button} from "../Button"
import Logo from "../Logo"
import Checkbox from "../Checkbox"

export function Login() {
    return(
        <>
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
                            <h1 className="text-2xl font-bold text-[var(--text-color)]">UnivGo</h1>
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
                            />
                            
                            <InputForm 
                              label="Contraseña"
                              id="contrasena" 
                              placeholder="Ingrese su contraseña" 
                              typeInput="password" 
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
                                <Button text="Entrar" />
                            </div>
                            
                            {/* Footer con información de la app */}
                            <div className="border-t border-[var(--primary-gray)] pt-4 mt-6">
                                <p className="text-xs text-center text-[var(--secondary-text)]">
                                    Reserva espacios deportivos, consulta tu información académica y mucho más.
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
