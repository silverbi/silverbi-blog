"use client";

import React, { Suspense } from "react";
import RootLayout from "@layouts/RootLayout";
import Image from "next/image";
import Text from "@components/atoms/Text";
import { Typography } from "@components/atoms/Text/types";
import { Container } from "@components/atoms/Container";
import Chip from "@components/atoms/Chip";
import { IconName } from "@components/atoms/Icon/types";

const Home: React.FC = () => {
  return (
    <RootLayout>
      <Container className="gap-48">
        <div className="mt-28 flex flex-col items-center justify-center gap-28">
          <Text bold type={Typography.TITLE_1}>
            SILVERBI BLOG
          </Text>
          <Image src={require("@assets/images/landing-main-image.png")} alt={"실버비 블로그 메인 랜딩 이미지"} />
        </div>

        <div className="flex w-full flex-col gap-6">
          <Chip icon={IconName.CONCENTRIC_CIRCLES}>Available for work</Chip>

          <Text type={Typography.TITLE_3} bold>
            Welcome to my world ✨
          </Text>
          <div className="flex w-full flex-row">
            <div className={"w-full"}></div>
            <div>
              <Text type={Typography.SUBTITLE_2}>현은비 Hyun Eunbi</Text>
            </div>
          </div>
        </div>
      </Container>
    </RootLayout>
  );
};

export default Home;
