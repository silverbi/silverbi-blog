import Head from "next/head";
import React from "react";
import "@styles/globals.css";

export const metadata = {
  title: "SILVERBI Tech Blog",
  description: "어제보다 더 나은 내가 되기 위해 기록 합니다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <Head></Head>
      <body suppressHydrationWarning={true}>{children}</body>
    </html>
  );
}
