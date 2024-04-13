import Head from "next/head";
import React from "react";
import "@styles/globals.css";
import "react-loading-skeleton/dist/skeleton.css";
import { SkeletonTheme } from "react-loading-skeleton";
import themes from "@styles/themes";

export const metadata = {
  title: "SILVERBI Tech Blog",
  description: "어제보다 한 걸음 더 나아가기 위해 기록합니다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <Head></Head>
      <body suppressHydrationWarning={true}>
        <SkeletonTheme
          baseColor={themes.colors.light["layer-3"]}
          highlightColor={themes.colors.light["layer-disabled"]}
        >
          {children}
        </SkeletonTheme>
      </body>
    </html>
  );
}
