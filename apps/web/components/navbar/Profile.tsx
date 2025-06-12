"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

interface DropdownItem {
  id: string;
  label: string;
  href?: string;
  onClick?: () => void;
}

interface ProfileProps {
  imageUrl: string;
  altText?: string;
  dropdownItems: DropdownItem[];
  userName?: string; // Optional: display user name next to picture
}

export const Profile = ({
  imageUrl,
  altText = "Profile",
  dropdownItems,
  userName,
}: ProfileProps) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Use a default image if none is provided
  const avatarSrc = imageUrl || "/default-avatar.png";

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <div>
        <button
          type="button"
          className="flex items-center rounded-full bg-white/10 hover:bg-white/20 p-1
                     text-sm focus:outline-none transition-all duration-300 ease-in-out"
          id="user-menu-button"
          aria-expanded={isDropdownOpen}
          aria-haspopup="true"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          <span className="sr-only">Open user menu</span>
          <div className="h-8 w-8 rounded-full overflow-hidden relative ring-2 ring-white/30">
            <Image
              className="object-cover"
              src={avatarSrc}
              alt={altText}
              fill
              sizes="32px"
            />
          </div>
          {userName && (
            <span className="ml-2 text-white hidden sm:block">{userName}</span>
          )}
        </button>
      </div>

      {/* Dropdown menu with transition */}
      {isDropdownOpen && (
        <div
          className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg 
                     bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-50
                     transform opacity-100 scale-100 transition ease-out duration-200"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="user-menu-button"
        >
          <div className="py-1" role="none">
            {dropdownItems.map((item) =>
              item.href ? (
                <Link
                  key={item.id}
                  href={item.href}
                  className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100"
                  role="menuitem"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  {item.label}
                </Link>
              ) : (
                <button
                  key={item.id}
                  className="text-gray-700 block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                  role="menuitem"
                  onClick={() => {
                    if (item.onClick) {
                      item.onClick();
                    }
                    setIsDropdownOpen(false);
                  }}
                >
                  {item.label}
                </button>
              )
            )}
          </div>
        </div>
      )}
    </div>
  );
};
