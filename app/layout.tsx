import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NST Studio | Mentor-led software engineering",
  description: "MVPs, internal tools, ERPs and AI features built by focused engineering pods under senior technical mentors.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
