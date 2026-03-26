import { Hero } from "@/components/Hero";
import { Niches } from "@/components/Niches";
import { Program } from "@/components/Program";
import { Proofs } from "@/components/Proofs";
import { Funnel } from "@/components/Funnel";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { FloatingCTA } from "@/components/FloatingCTA";

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <Hero />
      <Niches />
      <Program />
      <Proofs />
      <Funnel />
      <FinalCTA />
      <Footer />
      <FloatingCTA />
    </div>
  );
}
