"use client";

import { ProjectListPreview, TechListPreview } from "@components/features";
import { PageContainer, RootLayout } from "@components/layouts";
import { Text } from "@components/ui";
import Image from "next/image";

const Home = () => {
  return (
    <RootLayout>
      <PageContainer className="gap-28">
        <Text variant={"head-2"}>SILVERBI BLOG</Text>
        <Image
          priority
          src={"/assets/images/landing-thumbnail.webp"}
          alt={"블로그 메인 랜딩 이미지"}
          width={980}
          height={560}
        />

        <div className={"flex w-full flex-col items-center gap-24"}>
          <TechListPreview />
          <ProjectListPreview />
        </div>
      </PageContainer>
    </RootLayout>
  );
};

export default Home;
