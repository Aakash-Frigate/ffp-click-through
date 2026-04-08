"use client";

import { Header } from "./components/Header";
import Footer from "./components/Footer";
import { Hero } from "./components/Hero";
import { ManufacturingServices } from "./components/Services";
import { WorldWide } from "./components/WorldWide";
import { TrustedBy } from "./components/TrustedBy";
import { HowItWorks } from "./components/HowItWorks";
import { Benefits } from "./components/Benefits";
import { FinalCTA } from "./components/FinalCTA";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <main className="flex flex-1 flex-col">
        <Hero />
        <ManufacturingServices />
        <HowItWorks />
        <Benefits />
        <TrustedBy />
        <WorldWide />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
