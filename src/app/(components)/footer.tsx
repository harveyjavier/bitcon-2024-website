import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/config/site";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-400 py-12">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center items-center space-x-4 mb-4">
          <Link href="https://bicolit.org" target="_blank">
            <Image
              src={siteConfig.logo}
              alt="Bicol IT Logo"
              height={79}
              width={79}
              priority
            />
          </Link>
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
