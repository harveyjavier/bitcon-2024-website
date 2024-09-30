"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const speakers = [
  {
    name: "Maria Santos",
    position: "CTO, Bicol Tech Innovations",
    avatar: "MS",
  },
  // More speakers...
];

export default function Speakers() {
  return (
    <section id="speakers" className="bg-gray-100 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
          Featured Speakers
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {speakers.map((speaker, i) => (
            <HoverCard key={i}>
              <HoverCardTrigger asChild>
                <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
                  <CardContent className="flex flex-col items-center p-6">
                    <Avatar className="w-24 h-24 mb-4">
                      <AvatarFallback>{speaker.avatar}</AvatarFallback>
                    </Avatar>
                    <h3 className="text-xl font-semibold mb-1">
                      {speaker.name}
                    </h3>
                    <p className="text-gray-600 mb-4">{speaker.position}</p>
                  </CardContent>
                </Card>
              </HoverCardTrigger>
              <HoverCardContent className="w-80">
                <div>
                  <h4 className="text-sm font-semibold">{speaker.name}</h4>
                  <p className="text-sm text-gray-600">{speaker.position}</p>
                </div>
              </HoverCardContent>
            </HoverCard>
          ))}
        </div>
      </div>
    </section>
  );
}
