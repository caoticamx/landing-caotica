import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Montserrat, Orbitron } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${montserrat.variable} ${orbitron.variable} font-sans`}>
      <Component {...pageProps} />
    </div>
  );
}
