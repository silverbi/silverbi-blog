import Head from "next/head";
import "../styles/globals.css";

export const metadata = {
  title: "Silverbi Blog",
  description: "어제보다 더 나은 내가 되기 위해 기록 합니다.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <Head>
        <link
          rel="stylesheet"
          as="style"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable.min.css"
        />
      </Head>
      <body>{children}</body>
    </html>
  );
}
