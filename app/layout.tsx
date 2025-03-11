import "./globals.css";
import { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { GoogleAnalytics } from "@next/third-parties/google";
import Head from "next/head";

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
      <Head>
        <meta name="google-adsense-account" content="ca-pub-2930178765890637" />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2930178765890637"
          crossOrigin="anonymous"></script>
      </Head>
      <body className={inter.className}>
        <Navigation />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
      <GoogleAnalytics gaId="G-T2MEW270RG" />
    </html>
  );
}
