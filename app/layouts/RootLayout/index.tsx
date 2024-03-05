import Header from "../Header";
import Footer from "../Footer";
import React from "react";

export interface RootLayoutProps {
  children: React.ReactNode;
}
export const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default RootLayout;
