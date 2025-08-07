import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme/theme-provider"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nexora UI - Professional React + Tailwind Components",
  description: "A modern TypeScript-based CLI tool for installing React + Tailwind UI components",
  keywords: ["react", "tailwind", "components", "ui", "typescript", "cli"],
  authors: [{ name: "Atharva Joshi", url: "https://github.com/Atharvajoshiii" }],
  openGraph: {
    title: "Nexora UI - Professional React + Tailwind Components",
    description: "A modern TypeScript-based CLI tool for installing React + Tailwind UI components",
    url: "https://nexoraui.com",
    siteName: "Nexora UI",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nexora UI - Professional React + Tailwind Components",
    description: "A modern TypeScript-based CLI tool for installing React + Tailwind UI components",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
