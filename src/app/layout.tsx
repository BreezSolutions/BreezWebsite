import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.breezlabs.com"),
  title: "Breez Labs | Accounts Receivable Outsourcing",
  description: "Accounts receivable for services businesses where billing isn't simple. We read your contracts and communications to find money you're owed — then invoice, collect, and reconcile it for you.",
  openGraph: {
    title: "Breez Labs | Accounts Receivable Outsourcing",
    description: "Want someone to live in your email and handle all the billing-related stuff? That's us. We read every email, contract, and confirmation to figure out what you're owed — then invoice, collect, and reconcile it for you.",
    url: "https://www.breezlabs.com",
    siteName: "Breez Labs",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Breez Labs | Accounts Receivable Outsourcing",
    description: "Want someone to live in your email and handle all the billing-related stuff? That's us.",
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
