"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Clock } from "lucide-react";

const days = [
  {
    day: 1,
    sessions: [
      {
        time: "09:00 AM",
        title: "Opening Ceremony",
        speaker: "BITCON Organizing Committee",
      },
      {
        time: "10:30 AM",
        title: "Keynote: The Future of Tech in Bicol",
        speaker: "Maria Santos",
      },
    ],
  },
  // More days...
];

export default function Schedule() {
  return (
    <section id="schedule" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
          Event Schedule
        </h2>
        <Accordion type="single" collapsible className="w-full">
          {days.map((day) => (
            <AccordionItem key={day.day} value={`day-${day.day}`}>
              <AccordionTrigger>Day {day.day}</AccordionTrigger>
              <AccordionContent>
                <ul className="space-y-4">
                  {day.sessions.map((session, index) => (
                    <li
                      key={index}
                      className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow"
                    >
                      <Clock className="h-6 w-6 text-blue-600" />
                      <div>
                        <p className="font-semibold text-gray-800">
                          {session.time} - {session.title}
                        </p>
                        <p className="text-gray-600">{session.speaker}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
