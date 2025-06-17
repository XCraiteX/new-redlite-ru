import "@/css/globals.css";

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
        {children}
      </body>
    </html>
  );
}
