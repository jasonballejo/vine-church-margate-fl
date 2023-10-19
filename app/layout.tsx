import "./globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"], display: "swap" });

// ANALYTICS
import GA4 from "@/components/Analytics/GA4";

export const metadata: Metadata = {
  title: {
    default: "Vine Church FL - Margate",
    template: "%s | Vine Church FL",
  },
  description:
    "Our burden is to edify a church of overcomers where every member is a minister and every house an extension of the Church thereby conquering our generations to Christ through life-groups that multiply.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>{children}</body>
      <GA4 GA4_ID={process.env.NEXT_PUBLIC_GA4_ID} />
    </html>
  );
}
