import type { Metadata } from "next";
import localFont from "next/font/local";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Toaster } from "sonner";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const title = "Luxe Clinic";
const description = "A clinic management system for Luxe Clinic"

export const metadata: Metadata = {
  title: title,
  description: description,
  openGraph: {
    title: title,
    description: description,
    siteName: title,
    type: "website",
    images: [
      { url: "https://utfs.io/f/NLBok024UocEBeqrcFOSzPxtqk1XmV0sMTZ254ObNahgefcI" }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: title,
    description: description,
    images: [
      { url: "https://utfs.io/f/NLBok024UocEBeqrcFOSzPxtqk1XmV0sMTZ254ObNahgefcI" }
    ],
    creator: "@luxeclinic",
    site: "@luxeclinic"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Toaster position="top-center" richColors={true} />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
