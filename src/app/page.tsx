"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock, MapPin, Mic2, Users, Code } from "lucide-react";
import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { RainbowButton } from "@/components/ui/rainbow-button";

const useCountdown = (targetDate: string) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft: { [key: string]: number } = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return timeLeft;
};

export default function Home() {
  const timeLeft = useCountdown("2024-09-15");
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
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

      <main className="flex-1">
        <section className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white py-24 md:py-32">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                BITCON 2024: Empowering Bicol's Tech Future
              </h1>
              <p className="text-xl mb-8">
                Join the premier IT conference in the Bicol region. Innovate,
                Learn, Connect.
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

        <section id="about" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
              About BITCON 2024
            </h2>
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="highlights">Highlights</TabsTrigger>
                <TabsTrigger value="venue">Venue</TabsTrigger>
              </TabsList>
              <TabsContent value="overview">
                <Card>
                  <CardContent className="pt-6">
                    <p className="text-gray-600">
                      BITCON 2024 is the premier IT conference in the Bicol
                      region, bringing together tech enthusiasts, professionals,
                      and innovators to shape the future of technology in Bicol.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="highlights">
                <div className="grid md:grid-cols-3 gap-8">
                  {[
                    {
                      icon: Users,
                      title: "1000+ Attendees",
                      description:
                        "Connect with IT professionals from Bicol and beyond",
                    },
                    {
                      icon: Mic2,
                      title: "50+ Speakers",
                      description: "Learn from local and national tech leaders",
                    },
                    {
                      icon: Calendar,
                      title: "3 Days",
                      description:
                        "Packed with keynotes, workshops, and networking events",
                    },
                  ].map((item, index) => (
                    <Card key={index}>
                      <CardContent className="flex flex-col items-center p-6 text-center">
                        <item.icon className="h-12 w-12 mb-4 text-blue-600" />
                        <h3 className="text-xl font-semibold mb-2">
                          {item.title}
                        </h3>
                        <p className="text-gray-600">{item.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="venue">
                <Card>
                  <CardContent className="pt-6">
                    <p className="text-gray-600">
                      BITCON 2024 will be held at the Bicol Convention Center, a
                      state-of-the-art facility in the heart of Legazpi City,
                      offering modern amenities and breathtaking views of Mayon
                      Volcano.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        <section id="speakers" className="bg-gray-100 py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
              Featured Speakers
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "Maria Santos",
                  position: "CTO, Bicol Tech Innovations",
                  avatar: "MS",
                },
                {
                  name: "Juan Dela Cruz",
                  position: "AI Researcher, Naga University",
                  avatar: "JD",
                },
                {
                  name: "Ana Reyes",
                  position: "Founder, Legazpi StartUp Hub",
                  avatar: "AR",
                },
                {
                  name: "Carlos Tan",
                  position: "Cybersecurity Expert, National IT Center",
                  avatar: "CT",
                },
                {
                  name: "Elena Bautista",
                  position: "Software Architect, Sorsogon Systems",
                  avatar: "EB",
                },
                {
                  name: "Ramon Fernandez",
                  position: "Data Scientist, Albay Analytics",
                  avatar: "RF",
                },
              ].map((speaker, i) => (
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
                    <div className="flex justify-between space-x-4">
                      <Avatar>
                        <AvatarFallback>{speaker.avatar}</AvatarFallback>
                      </Avatar>
                      <div className="space-y-1">
                        <h4 className="text-sm font-semibold">
                          {speaker.name}
                        </h4>
                        <p className="text-sm text-gray-600">
                          {speaker.position}
                        </p>
                        <div className="flex items-center pt-2">
                          <Calendar className="mr-2 h-4 w-4 opacity-70" />{" "}
                          <span className="text-xs text-gray-500">
                            Speaking on Day 2
                          </span>
                        </div>
                      </div>
                    </div>
                  </HoverCardContent>
                </HoverCard>
              ))}
            </div>
          </div>
        </section>

        <section id="schedule" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
              Event Schedule
            </h2>
            <Accordion type="single" collapsible className="w-full">
              {[
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
                    {
                      time: "02:00 PM",
                      title: "Workshop: Building Scalable Web Apps",
                      speaker: "Juan Dela Cruz",
                    },
                  ],
                },
                {
                  day: 2,
                  sessions: [
                    {
                      time: "09:30 AM",
                      title: "Panel: Fostering Innovation in Bicol",
                      speaker: "Ana Reyes, Carlos Tan, Elena Bautista",
                    },
                    {
                      time: "11:00 AM",
                      title: "Tech Talk: Cybersecurity Best Practices",
                      speaker: "Carlos Tan",
                    },
                    {
                      time: "03:00 PM",
                      title: "Hands-on Lab: Data Analysis with Python",
                      speaker: "Ramon Fernandez",
                    },
                  ],
                },
                {
                  day: 3,
                  sessions: [
                    {
                      time: "10:00 AM",
                      title: "Startup Pitch Competition",
                      speaker: "Bicol Entrepreneurs",
                    },
                    {
                      time: "01:30 PM",
                      title:
                        "Closing Keynote: Empowering Bicol Through Technology",
                      speaker: "Guest Speaker",
                    },
                    {
                      time: "04:00 PM",
                      title: "Networking Event and Closing Ceremony",
                      speaker: "All Attendees",
                    },
                  ],
                },
              ].map((day) => (
                <AccordionItem key={day.day} value={`day-${day.day}`}>
                  <AccordionTrigger>Day {day.day}</AccordionTrigger>
                  <AccordionContent>
                    <ul className="space-y-4">
                      {day.sessions.map((session, index) => (
                        <li
                          key={index}
                          className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow"
                        >
                          <Clock className="h-6 w-6 text-blue-600 flex-shrink-0" />
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

        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Join BITCON 2024?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Secure your spot at the most anticipated IT event in the Bicol
              region. Early bird tickets available now!
            </p>
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-blue-50"
            >
              Register Now
            </Button>
          </div>
        </section>

        <section id="sponsors" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
              Our Sponsors
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
              {[
                "Bicol Tech Innovations",
                "Naga University",
                "Legazpi StartUp Hub",
                "National IT Center",
                "Sorsogon Systems",
                "Albay Analytics",
                "Camarines Sur Digital",
                "Masbate Tech Alliance",
              ].map((sponsor, i) => (
                <Card key={i} className="hover:shadow-lg transition-shadow">
                  <CardContent className="flex items-center justify-center h-24 p-4">
                    <span className="text-blue-600 font-semibold text-lg text-center">
                      {sponsor}
                    </span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">About BITCON</h3>
              <p className="text-gray-400">
                BITCON 2024 is the premier IT conference in the Bicol region,
                bringing together tech enthusiasts, professionals, and
                innovators to shape the future of technology in Bicol.
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
              <p className="text-gray-400 mb-2">Email: info@bitcon2024.com</p>
              <p className="text-gray-400 mb-2">Phone: +63 (052) 123-4567</p>
              <p className="text-gray-400 flex items-center">
                <MapPin className="h-5 w-5 mr-2" />
                Legazpi City, Albay, Philippines
              </p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
            <p>© 2024 BITCON. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
