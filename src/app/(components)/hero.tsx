"use client";

import { RainbowButton } from "@/components/ui/rainbow-button";
import { useEffect, useState } from "react";
import Bitcon from "../../components/animation/Bitcon";

export default function Hero() {
  const [conferenceTime, setConferenceTime] = useState(false);
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const targetDate = new Date("2024-10-25T01:00:00");

    const interval = setInterval(() => {
      const difference = targetDate.getTime() - new Date().getTime();

      if (difference <= 0) {
        setConferenceTime(true);
      } else {
        setDays(Math.floor(difference / (1000 * 60 * 60 * 24)));
        setHours(
          Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        );
        setMinutes(Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)));
        setSeconds(Math.floor((difference % (1000 * 60)) / 1000));
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [conferenceTime]);
  return (
    <section className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white py-24 md:py-32">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <Bitcon />
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Empowering Bicol&apos;s Tech Future
          </h1>
          <p className="text-xl mb-8">
            Join the premier IT conference in the Bicol region. Innovate, Learn,
            Connect.
          </p>

          {!conferenceTime ? (
            <div className="timer-wrapper flex justify-center space-x-8 text-2xl md:text-4xl font-mono mb-8">
              <div className="flex flex-col items-center">
                <span className="text-4xl font-bold">{days}</span>
                <span className="text-sm uppercase">Days</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-4xl font-bold">{hours}</span>
                <span className="text-sm uppercase">Hours</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-4xl font-bold">{minutes}</span>
                <span className="text-sm uppercase">Minutes</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-4xl font-bold">{seconds}</span>
                <span className="text-sm uppercase">Seconds</span>
              </div>
            </div>
          ) : (
            <video autoPlay loop muted className="mt-8">
              <source src="/conference.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
          <RainbowButton>Register Now</RainbowButton>
        </div>
      </div>
    </section>
  );
}
