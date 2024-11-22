import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import About from "@/components/About";
import { Projects } from "@/components/Projects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { ModeToggle } from "@/components/ModeToggle";
import { FaHome } from "react-icons/fa";
import { FcAbout } from "react-icons/fc";
import { GrProjects } from "react-icons/gr";

export default function Home() {
  return (
    <main className="relative bg-background flex
    justify-center items-center flex-col overflow-hidden
    mx-auto sm:px-10 px-5 mt-5">
      <div className="max-w-7xl w-full mt-1">
        <FloatingNav navItems={[
          { name: "Home", link: "/", icon: <FaHome /> },
          { name: "About", link: "#about", icon: <FcAbout /> },
          { name: "Projects", link: "#AppleCardsCarouselDemo", icon: <GrProjects /> },
        ]} />
        <ModeToggle />
        <Hero />
        <About />
        <Projects />
        <Footer />
      </div>
    </main>
  );
}
