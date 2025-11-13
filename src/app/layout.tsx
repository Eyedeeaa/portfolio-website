import type { Metadata } from "next";
import "bootstrap/dist/css/bootstrap.min.css";

export const metadata: Metadata = {
  title: "Danny Rodriguez - Portfolio",
  description: "Portfolio of Danny Rodriguez",
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

