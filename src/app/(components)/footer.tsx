"use client";

import Link from "next/link";
import { Code } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-400 py-12">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center items-center space-x-4 mb-4">
          <Code className="h-6 w-6 text-blue-600" />
          <span className="font-bold text-xl text-gray-100">BITCON 2024</span>
        </div>
        <p className="text-sm">
          © {new Date().getFullYear()} BITCON Bicol IT Conference. All rights
          reserved.
        </p>
        <nav className="mt-4">
          <Link
            href="#about"
            className="text-gray-400 hover:text-white transition-colors mx-2"
          >
            About
          </Link>
          <Link
            href="#speakers"
            className="text-gray-400 hover:text-white transition-colors mx-2"
          >
            Speakers
          </Link>
          <Link
            href="#schedule"
            className="text-gray-400 hover:text-white transition-colors mx-2"
          >
            Schedule
          </Link>
          <Link
            href="#sponsors"
            className="text-gray-400 hover:text-white transition-colors mx-2"
          >
            Sponsors
          </Link>
        </nav>
      </div>
    </footer>
  );
}
