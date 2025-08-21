import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "React Hooks Complete Guide | 인터랙티브 학습 가이드",
  description: "React Hooks의 모든 것을 실시간 데모와 함께 배워보세요. useState, useEffect, useContext부터 React 19의 최신 기능까지 완벽 가이드",
  keywords: "React, React Hooks, useState, useEffect, useContext, React 19, Next.js, TypeScript",
  authors: [{ name: "React Study" }],
  openGraph: {
    title: "React Hooks Complete Guide",
    description: "실시간 데모와 함께하는 React Hooks 완벽 가이드",
    type: "website",
    locale: "ko_KR",
  },
  twitter: {
    card: "summary_large_image",
    title: "React Hooks Complete Guide",
    description: "실시간 데모와 함께하는 React Hooks 완벽 가이드",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0a0a0a",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
