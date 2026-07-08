import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.ru2k2smart.com.ar"),

  title: {
    default: "RU2K2 Smart",
    template: "%s | RU2K2 Smart",
  },

  description:
    "Arquitectura, ingeniería, domótica, automatización, consultoría tecnológica y soluciones inteligentes para hogares y empresas.",

  keywords: [
    "domótica",
    "arquitectura",
    "ingeniería",
    "automatización",
    "casas inteligentes",
    "smart home",
    "consultoría",
    "obra",
    "construcción",
    "Buenos Aires",
    "Argentina",
    "RU2K2 Smart",
  ],

  authors: [
    {
      name: "RU2K2 Smart",
    },
  ],

  creator: "RU2K2 Smart",

  publisher: "RU2K2 Smart",

  openGraph: {
  title: "RU2K2 Smart",
  description:
    "Construcción, Ingeniería, Innovación.",

  url: "https://www.ru2k2smart.com.ar",

  siteName: "RU2K2 Smart",

  locale: "es_AR",

  type: "website",

  images: [
    {
      url: "/og-image.png",
      width: 1200,
      height: 630,
      alt: "RU2K2 Smart",
    },
  ],
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
    <html
      lang="es"
      className={`${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}