import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Runneer Agent Control Center",
  description:
    "Manage your WhatsApp sales assistant for watches, shoes, and chocolates."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
