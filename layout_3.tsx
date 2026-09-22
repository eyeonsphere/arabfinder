import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://arabsfinder.com"),
  title: {
    default: "Arabs Finder — Arabic-speaking community directory",
    template: "%s | Arabs Finder",
  },
  description:
    "A no-account-required index of Arab American and Arabic-speaking community businesses, professionals, mosques, and churches across Southern California, Michigan, Illinois, and the San Francisco Bay Area. Ownership is self-identified, never inferred.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
