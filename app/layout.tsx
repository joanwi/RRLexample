import "./globals.css";
import { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { GoogleAnalytics } from "@next/third-parties/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "RRL Example | Comprehensive Guide to Review of Related Literature",
  description:
    "RRL Example offers comprehensive guides, examples, and resources for writing outstanding literature reviews. Perfect for students and researchers.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
      <GoogleAnalytics gaId="G-T2MEW270RG" />
    </html>
  );
}
