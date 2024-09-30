"use client";

import { Button } from "@/components/ui/button";

export default function Register() {
  return (
    <section
      id="register"
      className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20"
    >
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Join BITCON 2024?
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Don&apos;t miss out on the largest IT conference in the Bicol region.
          Secure your spot today and be a part of the future of technology.
        </p>
        <Button className="px-8 py-3 bg-white text-blue-600 hover:bg-blue-100">
          Register Now
        </Button>
      </div>
    </section>
  );
}
