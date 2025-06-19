import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
