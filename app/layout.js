import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Galih Rakhasiwi — Software Engineer",
  description: "Portfolio of Galih Rakhasiwi Putra Kanaya, Software Engineering student at SMK Taruna Bhakti building resilient web systems and full-stack applications.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-[#0f172a] text-white antialiased selection:bg-[#16C47F] selection:text-slate-950`}
      >
        {children}
      </body>
    </html>
  );
}
