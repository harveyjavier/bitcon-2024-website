"use client";

import Link from "next/link";
import Image from "next/image";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { siteConfig } from "@/lib/config/site";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-gray-900 shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="#home">
            <Image
              src={siteConfig.logo}
              alt="Bicol IT Logo"
              height={79}
              width={79}
              priority
            />
          </Link>
          <nav className="hidden md:flex space-x-8">
            {["About", "Speakers", "Schedule", "Sponsors"].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-white hover:text-blue-400 transition-colors" // Changed text to white and hover to blue-400
              >
                {item}
              </Link>
            ))}
          </nav>
          <RainbowButton>Register Now</RainbowButton>
        </div>
      </div>
    </header>
  );
}
