import type { Metadata } from "next";

// CSS
import '@/css/header.css'

// COMPONENTS
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
      <Background link="/videos/orbit/abackground.mp4" opacity={40}/>
      {children}
    </>
  );
}
