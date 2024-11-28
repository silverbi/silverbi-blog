import { Container } from "../Container";
import Footer from "../Footer";
import Header from "../Header";
import React from "react";

export interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <Container className={"mx-auto"}>
      <Header />
      <div className={"flex h-fit w-full flex-col items-center justify-center mt-16"}>{children}</div>
      <Footer />
    </Container>
  );
};

export default RootLayout;
