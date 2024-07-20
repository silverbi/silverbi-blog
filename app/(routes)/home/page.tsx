"use client";

import React from "react";
import RootLayout from "@layouts/RootLayout";
import Text from "@components/atoms/Text";
import { Typography } from "@styles/themes/types";
import { Container } from "@components/atoms/Container";
import PostListPreviewSection from "app/components/templates/PostListPreviewSection";
import { useRouter } from "next/navigation";
import ProjectListPreviewSection from "app/components/templates/ProjectListPreviewSection";
import CustomImage from "app/components/atoms/CustomImage";
import { ImageTypes } from "@components/atoms/CustomImage/types";

const Home: React.FC = () => {
  const router = useRouter();

  const handleClickMore = () => {
    router.push("/tech");
  };

  return (
    <RootLayout>
      <Container className="gap-48">
        <div className="relative mt-28 flex flex-col items-center justify-center gap-28">
          <Text bold type={Typography.HEAD_2}>
            SILVERBI BLOG
          </Text>
          <CustomImage
            priority
            tag={ImageTypes.LANDING_THUMBNAIL}
            alt={"블로그 메인 랜딩 이미지"}
            width={980}
            height={560}
          />
        </div>

        <div className={"mb-48 flex w-full flex-col items-center gap-24"}>
          <PostListPreviewSection title={"Tech"} handleClickMore={handleClickMore} />
          <ProjectListPreviewSection title={"Projects"} handleClickMore={handleClickMore} />
        </div>
      </Container>
    </RootLayout>
  );
};

export default Home;
