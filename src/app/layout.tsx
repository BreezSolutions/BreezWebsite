import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.breezlabs.com"),
  title: "Breez Labs | AI that lands fast inside your agency",
  description: "AI for agencies. We find one bottleneck, connect to the data you already trust, and deploy with an embedded engineer who fits your workflow. Backed by Y Combinator and Google Ventures.",
  openGraph: {
    title: "Breez Labs | AI that lands fast inside your agency",
    description: "AI for agencies. We find one bottleneck, connect to the data you already trust, and deploy with an embedded engineer who fits your workflow. Backed by Y Combinator and Google Ventures.",
    url: "https://www.breezlabs.com",
    siteName: "Breez Labs",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Breez Labs | AI that lands fast inside your agency",
    description: "AI for agencies. Find one bottleneck, connect to trusted data, deploy with an embedded engineer. Backed by YC & GV.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
