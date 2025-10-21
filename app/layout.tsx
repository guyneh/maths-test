import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GCSE Maths Test",
  description: "Test your GCSE maths knowledge with this interactive quiz",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
