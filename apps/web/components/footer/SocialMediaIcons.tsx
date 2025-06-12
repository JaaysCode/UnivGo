import React from "react";
import { FaFacebook, FaInstagram, FaYoutube, FaSpotify, FaVimeoV, FaLinkedin, FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const SocialMediaIcons = () => {

    const SocialMediaLinks = [
        {href: "https://www.facebook.com/udemedellin", icon: <FaFacebook/>, ariaLabel: "Facebook"},
        {href: "https://www.instagram.com/udemedellin/", icon: <FaInstagram/>, ariaLabel: "Instagram"},
        {href: "https://x.com/udemedellin_", icon: <FaXTwitter/>, ariaLabel: "Twitter"},
        {href: "https://www.youtube.com/user/CPTVUdeM/videos", icon: <FaYoutube/>, ariaLabel: "YouTube"},
        {href: "https://open.spotify.com/show/7F0Mjpyl2tzTdMtSnTZab3", icon: <FaSpotify/>, ariaLabel: "Spotify"},
        {href: "https://livestream.com/udemedellin", icon: <FaVimeoV/>, ariaLabel: "Vimeo"},
        {href: "https://www.linkedin.com/school/universidad-de-medell%C3%ADn/", icon: <FaLinkedin/>, ariaLabel: "LinkedIn"},
        {href: "https://www.tiktok.com/@udemedellin_", icon: <FaTiktok/>, ariaLabel: "TikTok"},
    ];

    return(
        <div className="flex justify-center w-full">
            <ul className="flex space-x-2 gap-[25px]">
                {SocialMediaLinks.map((link, index) => (
                    <li key={index} className="flex basis-[4.5rem] relative group">
                
                          <a
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
                                relative
                                p-[5px]
                                flex 
                                justify-center 
                                items-center 
                                aspect-square 
                                text-[1.75rem]
                                text-white
                                rounded-full
                                no-underline
                                outline-none
                                overflow-hidden
                                z-10
                                hover:text-white
                                transform
                                transition-all
                                duration-300
                                hover:scale-110
                            "
                        >
                            <span className="relative z-10">{link.icon}</span>
                            
                            {/* Efecto de rellenado progresivo */}
                            <div className="
                                absolute 
                                inset-0 
                                bg-[var(--primary-blue)]
                                origin-bottom
                                scale-y-0
                                group-hover:scale-y-100
                                transition-transform
                                duration-500
                                rounded-full
                            "></div>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default SocialMediaIcons;