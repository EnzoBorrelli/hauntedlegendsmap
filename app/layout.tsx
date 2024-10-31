import type { Metadata } from "next";
import "./globals.css";
import { UnifrakturCook } from "next/font/google";

// Cargar la fuente UnifrakturCook con el método de Next.js
const font = UnifrakturCook({ weight: "700", subsets: ["latin"] });

// Metadata mejorada para SEO y redes sociales
export const metadata: Metadata = {
  title: "Haunted Legends Map",
  description:
    "Explore haunting tales and eerie folklore from around the world. Discover the mysterious legends lurking in each location on this interactive map.",
  keywords: [
    "Haunted Legends",
    "Folklore Map",
    "Halloween",
    "Urban Legends",
    "Mystery Map",
    "Supernatural Stories",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${font.className} w-dvw h-full bg-slate-900`}>{children}</body>
    </html>
  );
}
