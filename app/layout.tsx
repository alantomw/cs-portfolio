import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "v0 App",
  description: "Created with v0",
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='64' height='64' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' rx='16' fill='%23000'/%3E%3Ctext x='50%' y='54%' text-anchor='middle' dominant-baseline='middle' font-family='Inter,Arial,sans-serif' font-size='32' font-weight='bold' fill='white'%3EA T%3C/text%3E%3C/svg%3E"
          type="image/svg+xml"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
