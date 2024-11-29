import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import About from "@/components/About";
import { Projects } from "@/components/Projects";
import { ModeToggle } from "@/components/ModeToggle";

export default function Home() {
  return (
    <main className="relative bg-background flex
    justify-center items-center flex-col overflow-hidden
    mx-auto sm:px-10 px-5 mt-5">
      <div className="max-w-7xl w-full mt-1">
        <ModeToggle />
        <Hero />
        <About />
        <Projects />
        <Footer />
      </div>
    </main>
  );
}
