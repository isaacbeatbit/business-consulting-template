import { AppBar } from "@/components/Shared/AppBar/AppBar";
import { Footer } from "@/components/Shared/Footer/Footer";
import "../globals.scss";
import { RecoilWrapper } from "@/recoil/RecoilWrapper";
import { Drawer } from "@/components/Shared/Drawer/Drawer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <RecoilWrapper>
        <Drawer />
        <AppBar />
        {children}
        <Footer />
      </RecoilWrapper>
    </>
  );
}
