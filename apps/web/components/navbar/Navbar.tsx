"use client";
import Link from "next/link";
import Logo from "../Logo";
import { NavButton } from "./NavButton";
import { Profile } from "./Profile";
import { usePathname } from "next/navigation";

// Example dropdown items for Profile component
const profileDropdownItems = [
  { id: "profile", label: "Your Profile", href: "/profile" },
  { id: "settings", label: "Settings", href: "/settings" },
  {
    id: "signout",
    label: "Sign out",
    onClick: () => console.log("Signing out..."),
  },
];

// Navigation items
const navItems = [
  { text: "Mis reservas", href: "" },
  { text: "Espacios", href: "" },
];

export const Navbar = () => {
  // Use the pathname to determine which nav item is active
  const pathname = usePathname();

  return (
    <nav className="bg-gradient-to-r from-[var(--secondary-dark-red)] to-[var(--primary-red)] shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Left: Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link
              href="/"
              className="flex items-center bg-white rounded-xl p-1.5 hover:shadow-lg transition-shadow duration-300"
            >
              <Logo
                imageSource="/UnivGo.png"
                alt="UnivGo logo"
                width={85}
                height={85}
                styles=""
              />
            </Link>
          </div>

          {/* Center: NavButtons (hidden on small screens) */}
          <div className="hidden md:flex items-center justify-center space-x-1">
            {navItems.map((item) => (
              <NavButton
                key={item.href}
                text={item.text}
                pageReference={item.href}
                isActive={pathname === item.href}
              />
            ))}
          </div>

          {/* Right: Notifications and Profile */}
          <div className="flex items-center space-x-4">
            {/* Notification Button */}
            <button
              type="button"
              className="relative rounded-full p-2 text-white 
                         transition-all duration-300 ease-in-out
                         hover:text-white hover:bg-white/10 hover:shadow-lg
                         active:bg-white active:text-[var(--primary-red)]
                         focus:outline-none"
              aria-label="View notifications"
            >
              <span className="absolute -inset-1.5"></span>
              <span className="sr-only">View notifications</span>
              <svg
                className="size-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
                data-slot="icon"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
                />
              </svg>
            </button>

            {/* Mobile menu button (only visible on small screens) */}
            <div className="md:hidden">
              <button
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-white 
                           hover:text-white hover:bg-white/10 focus:outline-none"
                aria-label="Open main menu"
              >
                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </button>
            </div>

            {/* Profile Component */}
            <Profile
              imageUrl="/default-avatar.png" // Update with actual default image
              altText="User Profile"
              dropdownItems={profileDropdownItems}
            />
          </div>
        </div>
      </div>

      {/* Mobile menu (hidden by default) - can be expanded in the future */}
      <div className="hidden md:hidden">
        <div className="px-2 pt-2 pb-3 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`
                block px-3 py-2 rounded-md text-base font-medium 
                ${
                  pathname === item.href
                    ? "text-white bg-white/20"
                    : "text-white/70 hover:text-white hover:bg-white/10"
                }
              `}
            >
              {item.text}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};
