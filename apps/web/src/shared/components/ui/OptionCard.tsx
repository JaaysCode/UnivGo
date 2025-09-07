"use client";
import { Button } from "@/src/shared/components/ui/Button";
import Image from "next/image";
import React from "react";

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
    <div className="p-2 sm:p-4 lg:p-6">
      <div className="relative w-full overflow-hidden rounded-lg shadow-lg group p-4 sm:p-6 min-h-[250px] sm:min-h-[300px] lg:min-h-[350px] flex items-stretch">
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
          className={`relative z-10 flex ${isRight ? "flex-col lg:flex-row" : "flex-col lg:flex-row-reverse"} items-stretch w-full gap-4`}
        >
          <div className="flex flex-col justify-center flex-1">
            <div
              className={`
              bg-black/60 rounded-lg p-3 sm:p-4 lg:p-6 backdrop-blur-sm h-fit inline-block w-full lg:max-w-[80%]
              ${!isRight ? "text-left lg:self-end" : ""}
              `}
              style={{ minWidth: "200px" }}
            >
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-2 break-words">
                {title}
              </h2>
              <p className="text-sm sm:text-base text-white/90 break-words">{description}</p>
            </div>
          </div>
          <div className="flex items-center justify-center px-2 sm:px-4">
            <Button
              text={buttonText}
              onClick={buttonOnClick}
              href={buttonhref}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OptionCard;
