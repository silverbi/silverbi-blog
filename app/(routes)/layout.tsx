import React from "react";
import "@styles/globals.css";
import "react-loading-skeleton/dist/skeleton.css";
import { SkeletonTheme } from "react-loading-skeleton";
import themes from "@styles/themes";
import localFont from "next/font/local";
import SessionProvider from "@layouts/sessionProvider";

export const metadata = {
  title: "SILVERBI Tech Blog",
  description: "어제보다 한 걸음 더 나아가기",
};

const pretendard = localFont({
  src: "../assets/fonts/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
  variable: "--font-pretendard",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body suppressHydrationWarning={true} className={`${pretendard.variable} font-pretendard`}>
        <SessionProvider>
          <SkeletonTheme
            baseColor={themes.colors.light["layer-3"]}
            highlightColor={themes.colors.light["layer-disabled"]}
          >
            {children}
            <div id="modal"></div>
          </SkeletonTheme>
        </SessionProvider>
      </body>
    </html>
  );
}
