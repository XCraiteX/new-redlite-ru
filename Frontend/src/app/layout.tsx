import type { Metadata } from "next";
import "../css/globals.css";
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
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Share+Tech&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=WDXL+Lubrifont+TC&display=swap" rel="stylesheet"/>
      </head>
      <body>
        <Background/>
        {children}
      </body>
    </html>
  );
}
