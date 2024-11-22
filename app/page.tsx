import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <main className="relative bg-background flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <Hero />
        <Footer />
      </div>
    </main>
  );
}
