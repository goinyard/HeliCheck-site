import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "HeliCheck | Helicopter Geophysical Surveys",
  description: "HeliCheck provides advanced helicopter-based geophysical surveys for mineral exploration, delivering high-quality data and actionable insights for mining companies worldwide.",
  keywords: "helicopter geophysical surveys, mineral exploration, EM surveys, electromagnetic surveys, mining exploration, geophysics",
  authors: [{ name: "HeliCheck Geophysical Surveys" }],
  creator: "HeliCheck",
  publisher: "HeliCheck Geophysical Surveys",
  metadataBase: new URL("https://helicheck.com"),
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-video-preview': -1,
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/favicon/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { url: '/favicon/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/favicon/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
  },
  openGraph: {
    type: "website",
    title: "HeliCheck | Helicopter Geophysical Surveys",
    description: "Advanced helicopter-based geophysical surveys for mineral exploration, delivering high-quality data and actionable insights.",
    siteName: "HeliCheck",
    images: [{ url: '/favicon/android-chrome-512x512.png' }],
    locale: 'en_US',
    url: '/',
  },
  twitter: {
    card: "summary_large_image",
    title: "HeliCheck | Helicopter Geophysical Surveys",
    description: "Advanced helicopter-based geophysical surveys for mineral exploration worldwide.",
    images: [{ url: '/favicon/android-chrome-512x512.png' }],
    creator: '@helicheck',
    site: '@helicheck',
  },
  verification: {
    google: 'verification_token', // Replace with actual Google verification token when available
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon/favicon.ico" sizes="any" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#0171E3" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
