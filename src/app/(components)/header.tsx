"use client";

import Link from "next/link";
import { Code } from "lucide-react";
import { RainbowButton } from "@/components/ui/rainbow-button";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center space-x-2">
            <Code className="h-8 w-8 text-blue-600" />
            <span className="font-bold text-2xl text-blue-600">
              BITCON 2024
            </span>
          </Link>
          <nav className="hidden md:flex space-x-8">
            {["About", "Speakers", "Schedule", "Sponsors"].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-600 hover:text-blue-600 transition-colors"
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
