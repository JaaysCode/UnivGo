import React from 'react'
import SocialMediaIcons from './SocialMediaIcons'
import FooterInfo from './FooterInfo'

const Footer = () => {
  return (
    <footer className='bg-[var(--primary-red)] text-white '>      
        <div className='max-w-[95%] mx-auto px-[50px] py-[25px] flex items-center justify-between border-b border-white'>
            <SocialMediaIcons/>
        </div>
        <div className='max-w-[95%] mx-auto px-[50px] py-[25px] border-b border-white'>
            <FooterInfo/>
        </div>    
        <div className='flex items-center justify-center w-full py-8'>
            UnivGo © 2025. Proyecto desarrollado para la Universidad de Medellín.
        </div>
        
    </footer>
  )
}

export default Footer