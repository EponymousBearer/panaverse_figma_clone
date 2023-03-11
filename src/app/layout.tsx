// These styles apply to every route in the application
import Header from "./components/layout/header";
import "./globals.css";
import panaverse from "@/app/panaverse.ico"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {" "}
        <title>Welcome To Panaverse</title>
        <link rel="icon" href="/panaverse.ico" />
      </head>
      <body>
        <Header></Header>
        {children}
      </body>
    </html>
  );
}
