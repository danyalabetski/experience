import type { Metadata } from "next";
import { Manrope, JetBrains_Mono } from "next/font/google";
import { LocaleProvider } from "@/lib/i18n/LocaleProvider";
import "./globals.css";

const display = Manrope({
  variable: "--font-display",
  subsets: ["latin", "cyrillic"],
  weight: ["500", "600", "700", "800"],
});

const body = Manrope({
  variable: "--font-body",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Daniel Labetsky — Senior iOS Developer & Product Engineer",
  description:
    "Senior iOS Developer specializing in Swift, SwiftUI, and mobile product engineering. Building high-quality apps from MVP to App Store scale.",
  keywords: [
    "iOS Developer",
    "Swift",
    "SwiftUI",
    "Product Engineer",
    "Daniel Labetsky",
    "Mobile Apps",
  ],
  openGraph: {
    title: "Daniel Labetsky — Senior iOS Developer",
    description:
      "Native iOS applications with Swift and SwiftUI — from MVP to scalable production.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} ${mono.variable} h-full scroll-smooth antialiased`}
      suppressHydrationWarning
    >
      <body className="noise min-h-full bg-background font-sans text-foreground">
        <LocaleProvider>{children}</LocaleProvider>
      </body>
    </html>
  );
}
