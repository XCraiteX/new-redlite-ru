import type { Metadata } from "next";
import '@/css/header.css'
import Background from "@/components/global/Background";

export const metadata: Metadata = {
  title: "Orbit Verse | Умный голосовой асистент!",
  icons: 'favicon.ico',
  description: "Orbit Verse - Многофункциональный, полностью настраиваемый голосовой ассистент специально для вас. От команды REDLITE!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Background link="/videos/orbit/background.mp4" opacity={40}/>
      {children}
    </>
  );
}
