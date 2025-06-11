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
                        <div className="flex justify-center mb-8">
                            <Ulogo />
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
                            
                            {/* Enlace de contraseña olvidada */}
                            <div className="flex justify-end">
                                <a href="" className="text-sm text-[var(--primary-blue)] hover:underline">
                                    Olvidé mi Contraseña
                                </a>
                            </div>
                            
                            {/* Botón de acceso */}
                            <div className="flex justify-center pt-4">
                                <Button text="Entrar" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}