"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function About() {
  return (
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
                  BITCON 2024 is the premier IT conference in the Bicol region,
                  bringing together tech enthusiasts, professionals, and
                  innovators to shape the future of technology in Bicol.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
          {/* More TabContents */}
        </Tabs>
      </div>
    </section>
  );
}
