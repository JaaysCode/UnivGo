import React from 'react'
import Image from 'next/image'
import Logo from '../Logo'
import Link from 'next/link'

const FooterInfo = () => {  return (
    <div className='flex flex-col md:flex-row justify-between items-start md:items-center w-full'>
        {/* Columna izquierda - Información de contacto */}
        <div className='text-sm space-y-1 md:w-1/4'>
            <p className='font-medium text-base mb-1'>Universidad de Medellín</p>
            
            <p>+57 (604) 590 45 00 • +57 (604) 590 69 99</p>
            <p>Sede principal: Carrera 87 N° 30-65, Medellín - Colombia.</p>
            <p>Sede Bogotá: Calle 57 # 9-52, Chapinero.</p>
        </div>        {/* Columna central - Política y estatutos */}
        <div className='flex-grow text-sm text-center flex flex-col justify-center items-center mx-auto space-y-2 md:ml-12 md:mr-8'>
            <p className='text-center'>
                Institución de educación superior sujeta a la inspección y vigilancia
                <br/>del Ministerio de Educación Nacional.
            </p>
            <div className='flex flex-col items-center '>                
                <Link 
                    href="/politicas-datos" 
                    className='relative text-white underline hover:no-underline group mt-5'
                >
                    Política para el Manejo y Tratamiento de Datos Personales
                    <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300 ease-in-out'></span>
                </Link>
                <Link 
                    href="/propiedad-intelectual" 
                    className='relative text-white underline hover:no-underline group mt-1'
                >
                    Estatuto de Propiedad Intelectual
                    <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300 ease-in-out'></span>
                </Link>
            </div>
        </div>        {/* Columna derecha - Logo */}
        <div className='flex justify-end md:w-1/4'>
        
            <Logo 
                imageSource="/udem_logo_letras.png" 
                alt='Logo de La Universidad de Medellín' 
                width={300} 
                height={300} 
                styles="mb-6"
            />
        </div>
    </div>
  )
}

export default FooterInfo;
