import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Arab Finder — Arabic-speaking community directory, Southern California",
    template: "%s | Arab Finder",
  },
  description:
    "A no-account-required index of Arab American and Arabic-speaking community businesses, professionals, mosques, and churches across Southern California. Ownership is self-identified, never inferred.",
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
