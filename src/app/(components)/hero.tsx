"use client";

import HyperText from "@/components/ui/hyper-text";
import { RainbowButton } from "@/components/ui/rainbow-button";

export default function Hero({
  timeLeft,
}: {
  timeLeft: { [key: string]: number };
}) {
  return (
    <section className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white py-24 md:py-32">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <HyperText
            className="text-4xl md:text-7xl font-bold mb-6 text-center mx-auto"
            text="BITCON 2024"
          />
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Empowering Bicol&apos;s Tech Future
          </h1>
          <p className="text-xl mb-8">
            Join the premier IT conference in the Bicol region. Innovate, Learn,
            Connect.
          </p>
          <div className="flex justify-center space-x-8 mb-8">
            {Object.entries(timeLeft).map(([unit, value]) => (
              <div key={unit} className="flex flex-col items-center">
                <span className="text-4xl font-bold">{value}</span>
                <span className="text-sm uppercase">{unit}</span>
              </div>
            ))}
          </div>
          <RainbowButton>Register Now</RainbowButton>
        </div>
      </div>
    </section>
  );
}
