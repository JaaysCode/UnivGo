import InputForm from "../InputForm" 
import {Button} from "../Button"
import Ulogo from "../Ulogo"
import Image from "next/image"

export function Login(){
    return(
        <>
        <div className="flex min-h-screen"> {/* Main flex container */}
            {/* Left side - Image */}
            <div className="w-1/2 bg-[url(/imagen_u_medellin.jpg)] bg-cover bg-center bg-no-repeat"> 
                
            </div>

            {/* Right side - Login Form */}
            <div className="w-1/2 flex flex-col items-center justify-center p-8 "> {/* Adjust width and padding as needed */}
                <Ulogo />
                <div className="w-full max-w-xs"> {/* Optional: constrain width of form elements */}
                    <InputForm placeholder="Documento identidad" typeInput = "text"/>
                    <InputForm placeholder="Contraseña" typeInput = "password"/>
                    <div className="flex justify-center mt-6">
                        <Button text="Entrar"/>
                    </div>
                    
                </div>
            </div>
        </div>
        </>
    )
}