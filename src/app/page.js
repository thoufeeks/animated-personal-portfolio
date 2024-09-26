"use client";
import Hero from "@/components/hero";
import InitialImageWrapper from "@/components/initialImageWrapper";
import Navbar from "@/components/nabvar";

export default function Home() {
  return (
    <main>
      <InitialImageWrapper />
      <Hero />
      <Navbar />
      <section className="section gradient-cream  w-full h-[100vh]"></section>
      <section className="section gradient-blue bg-blue-300 w-full h-[100vh] "></section>
    </main>
  );
}
