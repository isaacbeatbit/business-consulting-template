import "./globals.scss";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Agencia de desarrollo web en México | Progressiweb",
  description:
    "Descubre una agencia de desarrollo web en México. Entra y conoce nuestros servicios de diseño y desarrollo web.",
  openGraph: {
    title: "Agencia de desarrollo web en México | Progressiweb",
    description:
      "Descubre una agencia de desarrollo web en México. Entra y conoce nuestros servicios de diseño y desarrollo web.",
    images: "/illustrations/teaching.avif",
    url: "https://business-consulting-template.vercel.app/",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  readonly children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
