'use client';
import React from "react";
import Image from "next/image";
import { Button } from "@/components/Button";

interface OptionCardProps {
  title: string;
  description: string;
  imageSrc: string;
  buttonText: string;
  buttonPosition: "left" | "right";
  buttonOnClick?: () => void;
  buttonhref?: string;
}

const OptionCard: React.FC<OptionCardProps> = ({
  title,
  description,
  imageSrc,
  buttonText,
  buttonPosition,
  buttonOnClick,
  buttonhref,
}) => {
  const isRight = buttonPosition === "right";
  return (
    <div className="p-4">
      <div className="relative w-full overflow-hidden rounded-lg shadow-lg group p-6 min-h-[300px] flex items-stretch">
        <div className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-105">
          <Image
            src={imageSrc}
            alt={title}
            fill
            style={{ objectFit: "cover" }}
            priority
          />
          <div className="absolute inset-0 bg-black/50 transition-trasform duration-300 group-hover:bg-black/40" />
        </div>
        <div
          className={`relative z-10 flex ${isRight ? "" : "flex-row-reverse"} items-stretch w-full`}
        >
          <div className="flex flex-col justify-center flex-1">
            <div
              className={`
              bg-black/60 rounded-lg p-4 backdrop-blur-sm h-fit inline-block max-w-[80%]
              ${!isRight ? "text-left self-end" : ""}
              `}
              style={{ width: "fit-content", minWidth: "200px" }}
            >
              <h2 className="text-2xl font-bold text-white mb-2 break-words">{title}</h2>
              <p className="text-white/90 break-words">{description}</p>
            </div>
          </div>
          <div className="flex items-center justify-center px-4">
            <Button text={buttonText} onClick={buttonOnClick} href={buttonhref}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OptionCard;
