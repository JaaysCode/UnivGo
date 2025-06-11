import InputForm from "../InputForm" 
import {Button} from "../Button"
import Ulogo from "../Ulogo"

export function Login(){
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
                            <Ulogo />
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
                                <div className="flex items-center">
                                    <input
                                        id="remember-me"
                                        name="remember-me"
                                        type="checkbox"
                                        className="h-4 w-4 text-[var(--primary-blue)] focus:ring-[var(--primary-blue)] border-[var(--primary-gray)] rounded"
                                    />
                                    <label htmlFor="remember-me" className="ml-2 block text-sm text-[var(--text-color)]">
                                        Recordarme
                                    </label>
                                </div>
                                
                                <a href="" className="text-sm font-medium text-[var(--primary-blue)] hover:underline">
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
    )
}