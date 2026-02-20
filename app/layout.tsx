import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "TU CANAL — Landing Oficial",
  description: "Bienvenido a la landing oficial. Encuentra mis canales, redes y comunidad.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "TU CANAL — Landing Oficial",
    description: "Bienvenido a la landing oficial. Encuentra mis canales, redes y comunidad.",
    url: "https://example.com",
    siteName: "TU CANAL",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Landing de TU CANAL",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TU CANAL — Landing Oficial",
    description: "Bienvenido a la landing oficial. Encuentra mis canales, redes y comunidad.",
    images: ["/og.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
