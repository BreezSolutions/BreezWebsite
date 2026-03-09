import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.breezlabs.com"),
  title: "Breez Labs | AI Automation for Business Operations",
  description: "Custom AI automation built by MIT engineers. We design and deploy AI systems that eliminate manual work across your operations. Backed by Y Combinator and Google Ventures.",
  openGraph: {
    title: "Breez Labs | AI Automation for Business Operations",
    description: "Custom AI automation built by MIT engineers. We design and deploy AI systems that eliminate manual work across your operations.",
    url: "https://www.breezlabs.com",
    siteName: "Breez Labs",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Breez Labs | AI Automation for Business Operations",
    description: "Custom AI automation built by MIT engineers. Backed by YC & GV.",
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
