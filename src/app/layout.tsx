import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "PX to REM Calculator",
  description: "PX to REM Calculator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
