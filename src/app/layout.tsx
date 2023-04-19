// These styles apply to every route in the application
import Header from "./components/layout/header";
import "./globals.css";
import panaverse from "@/app/panaverse.ico";
import Wrapper from "./components/shared/Wrapper";

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
        <Wrapper>
          <Header></Header>
        </Wrapper>
        {children}
      </body>
    </html>
  );
}
