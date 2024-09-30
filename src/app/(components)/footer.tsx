import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/config/site";
import { MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="mb-8 pb-8 border-b border-gray-700 text-center text-gray-400">
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
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">About Bicol IT</h3>
            <p className="text-gray-400">
              We&apos;re the biggest and most active IT education advocacy
              organization in the Bicol region with 5k+ members;
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {["About", "Speakers", "Schedule", "Sponsors", "Register"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      href={`#${item.toLowerCase()}`}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <p className="text-gray-400 mb-2">Email: hello@bicolit.org</p>
            <p className="text-gray-400 mb-2">Phone: +63 (999) 912-3456</p>
            <p className="text-gray-400 flex items-center">
              <MapPin className="h-5 w-5 mr-2 shrink-0" />
              2F RJV Commercial Building, Rizal St., Cor. Gov. Reynolds St., Old
              Albay District, Legazpi City, 4500, Albay, Philippines
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
