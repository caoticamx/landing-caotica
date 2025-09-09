import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Services from "@/components/services";
import About from "@/components/about";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Animation from "@/components/animation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div
      className={`${geistSans.className} ${geistMono.className} font-sans min-h-screen text-white bg-[linear-gradient(135deg,#0f0f23_0%,#1a1a3a_50%,#2d1b69_100%)] overflow-x-hidden`}
    >
      <Animation />
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
