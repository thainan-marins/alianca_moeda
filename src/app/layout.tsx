import type { Metadata, Viewport } from "next";
import { Cinzel, Montserrat, Playfair_Display } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-cinzel",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Alianças de Moedas em Bauru | AMB",
  description:
    "Alianças de moedas feitas com cuidado em Bauru. Conheça os modelos e peça seu orçamento pelo WhatsApp.",
  robots: { index: true, follow: true },
  openGraph: {
    title: "Alianças de Moedas em Bauru | AMB",
    description:
      "Alianças de moedas com personalidade e atendimento próximo em Bauru.",
    locale: "pt_BR",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#17120F",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${cinzel.variable} ${playfair.variable} ${montserrat.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
