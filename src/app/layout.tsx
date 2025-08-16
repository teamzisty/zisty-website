import { Analytics } from "@vercel/analytics/next"
import Header from "@/components/header";
import Footer from "@/components/layout/footer";
import "./globals.css";

import { Inter } from "next/font/google";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: {
    default: 'Zisty',
    template: '%s / Zisty'
  },
  description: 'We are a team of engineers with the slogan “We turn the unreal to real”. It is a team that stands like a club, consisting mainly of students.',
  metadataBase: new URL('https://zisty.net'),
  openGraph: {
    title: 'We turn the unreal to real',
    description: 'We are a team of engineers with the slogan “We turn the unreal to real”. It is a team that stands like a club, consisting mainly of students.',
    url: 'https://zisty.net',
    siteName: 'Zisty',
    images: [
      {
        url: '/ogp.webp',
        width: 1200,
        height: 630,
      }
    ],
    locale: 'ja_JP',
    type: 'website',
  },
  icons: {
    icon: '/favicon.png',
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <Header />
        {children}
        <Footer />

        {/* Vercel Analytics */}
        <Analytics />
      </body>
    </html>
  );
}
