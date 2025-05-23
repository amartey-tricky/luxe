import type { Metadata } from "next";
import localFont from "next/font/local";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Toaster } from "sonner";
import "./globals.css";
import { CSPostHogProvider } from "./providers";

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

const title = "Luxe Clinic, Tamale";
const description = "At Luxe Clinic, we combine innovative medical care with exceptional luxury amenities to create a truly unique healthcare experience. Our compassionate professionals provide personalized attention, expert guidance, and comprehensive services to address your every health concern"

export const metadata: Metadata = {
  title: title,
  description: description,
  keywords: "luxe clinic,skin clinic in tamale, dermatology clinic in tamale, luxe clinic tamale, aesthetics, botox, fillers, clinic, Tamale, tamale, Ang, Patty, dermatology, skincare, skin, acne, facials, luxe clinic, luxe clinic gh, spas in tamale, best clinic in tamale, beauty and wellness clinic, Aesthetic beauty, aesthetic medicine, threads, Skin care, stretch marks removal, acne, skin tags, DPN, cystic acne, hormonal acne, acne scars, hyper pigmentation, scar treatment, skin diseases, Gonorrhea, family planning, UTIs, medical dermatology, cosmetic dermatology, pediatric dermatology, gynecology, candidiasis, bacterial vaginosis, thrush, vaginal discharge, anti-aging treatment, wrinkling and fine line treatment, skin clinic in tamale, clinic in tamale, pimples treatment, spa, glass skin, skin care, medical grade cosmetic product, laser hair removal, tattoo removal, laser treatments, laser scar treatment, luxe clinic tamale, luxe clinic gh, medical facials, teeth whitening, dental scaling,teeth polishing, skin brightening IV, detox drip, weight loss drip, weight loss, hangover drip, IV Cocktail, myar’s cocktail, IV nutrition, IV therapy, IV drips, skincare routine, beauty, rejuvenation, hep B, hep C, hypertension, diabetes, psoriasis, eczema, vaginal tightening, P.O shots, fillers, non surgical BBL, IV BBL",
  openGraph: {
    title: title,
    description: description,
    siteName: title,
    type: "website",
    url: "https://luxeclinicgh.com",
    images: [
      { url: "https://utfs.io/f/NLBok024UocESdVltPx3Vtj2QJpluUD91egMziIZY4NTXGbc" }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: title,
    description: description,
    images: [
      { url: "https://utfs.io/f/NLBok024UocESdVltPx3Vtj2QJpluUD91egMziIZY4NTXGbc" }
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
      <CSPostHogProvider>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Toaster position="top-center" richColors={true} />
        <Header />
        {children}
        <Footer />
      </body>
      </CSPostHogProvider>
    </html>
  );
}
