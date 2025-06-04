import type { Metadata } from "next";
import "@/css/header.css";
import "@/css/main/button.css";
import "@/css/main/style.css";
import Background from "@/components/global/Background";

export const metadata: Metadata = {
  title: "REDLITE Clan x LITE.NET | Изменим мир вместе!",
  icons: 'favicon.ico',
  description: "REDLITE - клан, который готов менять мир. Создадим светлое будущее вместе!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <>
        <Background link="/videos/background.mp4"/>
        {children}
      </>
  );
}
