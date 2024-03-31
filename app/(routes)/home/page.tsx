"use client";

import React from "react";
import RootLayout from "@layouts/RootLayout";
import Image from "next/image";
import Text from "@components/atoms/Text";
import { Typography } from "@components/atoms/Text/types";
import { Container } from "@components/atoms/Container";
import IntroduceSection from "@components/templates/IntroduceSection";
import PostListPreviewSection from "app/components/templates/PostListPreviewSection";
import { useRouter } from "next/navigation";
import ProjectListPreviewSection from "app/components/templates/ProjectListPreviewSection";

const Home: React.FC = () => {
  const router = useRouter();

  const handleClickMore = () => {
    router.push("/tech");
  };

  return (
    <RootLayout>
      <Container className="gap-48">
        <div className="mt-28 flex flex-col items-center justify-center gap-28">
          <Text bold type={Typography.HEAD_2}>
            SILVERBI BLOG
          </Text>
          <Image src={require("@assets/images/landing-main-image.png")} alt={"실버비 블로그 메인 랜딩 이미지"} />
        </div>

        <IntroduceSection />

        <div className={"mb-48 flex flex-col items-center gap-24"}>
          <PostListPreviewSection title={"Tech"} handleClickMore={handleClickMore} />
          <ProjectListPreviewSection title={"Projects"} handleClickMore={handleClickMore} />
        </div>
      </Container>
    </RootLayout>
  );
};

export default Home;
