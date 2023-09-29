import { AppBar } from "@/components/Shared/AppBar/AppBar";
import "./globals.scss";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { RecoilWrapper } from "@/recoil/RecoilWrapper";
import { Drawer } from "@/components/Shared/Drawer/Drawer";
import { Footer } from "@/components/Shared/Footer/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Agencia de consultoria | Simple web",
  description:
    "Descubre una agencia de consultoria en México. Entra y conoce nuestros servicios de consultoria.",
  openGraph: {
    title: "Agencia de consultoria | Simple web",
    description:
      "Descubre una agencia de consultoria en México. Entra y conoce nuestros servicios de consultoria.",
    images: "/illustrations/teaching.avif",
    url: "https://business-consulting-template.vercel.app/",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <RecoilWrapper>
          <Drawer />
          <AppBar />
          {children}
          <Footer />
        </RecoilWrapper>
      </body>
    </html>
  );
}
