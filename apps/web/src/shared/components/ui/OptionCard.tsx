"use client";
import { Button } from "@/src/shared/components/ui/Button";
import Image from "next/image";
import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

interface OptionCardProps {
  title: string;
  description: string;
  imageSrc: string;
  buttonText: string;
  buttonPosition: "left" | "right";
  buttonOnClick?: () => void;
  buttonhref?: string;
  maxDescriptionLength?: number;
}

const OptionCard: React.FC<OptionCardProps> = ({
  title,
  description,
  imageSrc,
  buttonText,
  buttonPosition,
  buttonOnClick,
  buttonhref,
  maxDescriptionLength = 120,
}) => {
  const isRight = buttonPosition === "right";
  const [isExpanded, setIsExpanded] = useState(false);

  // Check if description needs truncation
  const needsTruncation = description.length > maxDescriptionLength;

  // Smart truncation at word boundaries
  const getTruncatedText = () => {
    if (!needsTruncation) return description;

    const truncated = description.substring(0, maxDescriptionLength);
    const lastSpace = truncated.lastIndexOf(" ");
    return lastSpace > 0
      ? truncated.substring(0, lastSpace) + "..."
      : truncated + "...";
  };

  const displayText = isExpanded ? description : getTruncatedText();

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="p-2 sm:p-4">
      {/* Mobile Layout - Always stacked vertically */}
      <div className="block lg:hidden">
        <div className="relative w-full overflow-hidden rounded-lg shadow-lg min-h-[400px] sm:min-h-[450px]">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src={imageSrc}
              alt={title}
              fill
              style={{ objectFit: "cover" }}
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-black/60" />
          </div>

          {/* Content */}
          <div className="relative z-10 flex flex-col justify-center h-full p-4 sm:p-6">
            {/* Text Content */}
            <div className="flex-1 flex flex-col justify-center w-full max-w-lg mx-auto">
              <div className="bg-black/60 rounded-lg p-4 sm:p-6 backdrop-blur-sm w-full">
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
                  {title}
                </h2>
                <div className="text-white/90 text-sm sm:text-base leading-relaxed">
                  <div
                    className={`transition-all duration-300 ease-in-out overflow-hidden ${
                      isExpanded ? "max-h-none" : "max-h-20"
                    }`}
                  >
                    <p className="mb-2">{displayText}</p>
                  </div>

                  {needsTruncation && (
                    <button
                      onClick={toggleExpanded}
                      className="inline-flex items-center gap-1 text-white/80 hover:text-white transition-all duration-200 text-sm font-medium hover:bg-white/10 px-2 py-1 rounded-md mt-2"
                    >
                      <span>{isExpanded ? "Leer menos" : "Leer más"}</span>
                      {isExpanded ? (
                        <FaChevronUp className="w-3 h-3" />
                      ) : (
                        <FaChevronDown className="w-3 h-3" />
                      )}
                    </button>
                  )}
                </div>
              </div>
            </div>

            {/* Button */}
            <div className="flex justify-center w-full mt-4 sm:mt-6">
              <Button
                text={buttonText}
                onClick={buttonOnClick}
                href={buttonhref}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Layout - Side by side */}
      <div className="hidden lg:block">
        <div className="relative w-full overflow-hidden rounded-lg shadow-lg group min-h-[350px] xl:min-h-[400px]">
          {/* Background Image */}
          <div className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-105">
            <Image
              src={imageSrc}
              alt={title}
              fill
              style={{ objectFit: "cover" }}
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-black/50 transition-all duration-300 group-hover:bg-black/40" />
          </div>

          {/* Content Layout */}
          <div
            className={`relative z-10 flex ${
              isRight ? "" : "flex-row-reverse"
            } items-stretch w-full h-full`}
          >
            {/* Text Content */}
            <div className="flex flex-col justify-center flex-1 p-6 xl:p-8">
              <div
                className={`
                bg-black/60 rounded-lg p-6 xl:p-8 backdrop-blur-sm max-w-[85%]
                ${!isRight ? "ml-auto text-right" : "mr-auto text-left"}
              `}
              >
                <h2 className="text-2xl xl:text-3xl font-bold text-white mb-4 xl:mb-6">
                  {title}
                </h2>
                <div className="text-white/90 text-base xl:text-lg leading-relaxed">
                  <div
                    className={`transition-all duration-300 ease-in-out overflow-hidden ${
                      isExpanded ? "max-h-32 overflow-y-auto" : "max-h-24"
                    }`}
                  >
                    <p className="mb-3">{description}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Button */}
            <div className="flex items-center justify-center px-6 xl:px-8 min-w-[200px]">
              <Button
                text={buttonText}
                onClick={buttonOnClick}
                href={buttonhref}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OptionCard;
