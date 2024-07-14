import Header from "../Header";
import Footer from "../Footer";
import React from "react";

export interface RootLayoutProps {
  children: React.ReactNode;
}
export const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <div className={"flex h-full w-full flex-col justify-between"}>
      <Header />
      <div className={"flex h-full w-full flex-col justify-between pt-16"}>
        <main className={""}>{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default RootLayout;
