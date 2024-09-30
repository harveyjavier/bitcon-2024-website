"use client";
import "@maptiler/sdk/dist/maptiler-sdk.css";
import * as maptilersdk from "@maptiler/sdk";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useEffect, useRef, useState } from "react";
import type { LngLatLike } from "@maptiler/sdk";
import maplibregl from "maplibre-gl";

if (!process.env.NEXT_PUBLIC_MAP_TILER_API_KEY) {
  throw new Error("Missing MAP_TILER_API_KEY");
}

export default function About() {
  const mapContainer = useRef<HTMLDivElement | null>(null); // Specify the type of ref
  const [viewState, setViewState] = useState({
    center: [16.62662018, 49.2125578] as LngLatLike,
    zoom: 14,
  });

  useEffect(() => {
    if (!mapContainer.current) return; // Ensure the ref is set
    const map = new maptilersdk.Map({
      container: mapContainer.current,
      style: `https://api.maptiler.com/maps/streets-v2/style.json?key=${process.env.NEXT_PUBLIC_MAP_TILER_API_KEY}`,
      ...viewState,
    });

    // Add controls
    map.addControl(new maplibregl.ScaleControl(), "bottom-right");
    map.addControl(new maplibregl.FullscreenControl(), "bottom-right");
    map.addControl(new maplibregl.NavigationControl(), "bottom-right");
    map.addControl(
      new maplibregl.GeolocateControl({
        showUserLocation: true,
      }),
      "bottom-right"
    );

    // Cleanup on unmount
    return () => {
      map.remove(); // Clean up the map instance
    };
  }, [viewState]); // Add viewState as a dependency

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
          <TabsContent value="venue">
            <Card>
              <CardContent ref={mapContainer} className="pt-6 h-96" />{" "}
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
