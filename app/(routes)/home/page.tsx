"use client";

import React from "react";
import RootLayout from "@layouts/RootLayout";
import Image from "next/image";
import Text from "@components/atoms/Text";
import { Typography } from "@components/atoms/Text/types";
import { Container } from "@components/atoms/Container";
import IntroduceSection from "@components/templates/IntroduceSection";
import PostListSection from "@components/templates/PostListSection";
import { useRouter } from "next/navigation";

const Home: React.FC = () => {
  const router = useRouter();

  const handleClickMore = () => {
    router.push("/tech");
  };

  return (
    <RootLayout>
      <Container className="gap-48">
        <div className="mt-28 flex flex-col items-center justify-center gap-28">
          <Text bold type={Typography.TITLE_1}>
            SILVERBI BLOG
          </Text>
          <Image src={require("@assets/images/landing-main-image.png")} alt={"실버비 블로그 메인 랜딩 이미지"} />
        </div>

        <IntroduceSection />
        <PostListSection title={"Tech"} handleClickMore={handleClickMore} />
      </Container>
    </RootLayout>
  );
};

export default Home;
