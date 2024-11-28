import Header from "../Header";
import Footer from "../Footer";
import React from "react";

export interface RootLayoutProps {
  children: React.ReactNode;
}

export const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <div className={"flex h-full w-full flex-col justify-between"}>
      <Header />
      <div className={"flex h-full w-full flex-col justify-between pt-16"}>
        <div>{children}</div>
        <Footer />
      </div>
    </div>
  );
};

export default RootLayout;
