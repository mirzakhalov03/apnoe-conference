import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/summit/Header";
import { Hero } from "@/components/summit/Hero";
import { Program } from "@/components/summit/Program";
import { Speakers } from "@/components/summit/Speakers";
import { Register } from "@/components/summit/Register";
import { Sponsors } from "@/components/summit/Sponsors";
import { Footer } from "@/components/summit/Footer";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <Program />
      <Speakers />
      <Register />
      <Sponsors />
      <Footer />
    </main>
  );
}
