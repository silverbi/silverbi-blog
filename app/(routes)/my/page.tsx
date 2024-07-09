"use client";

import React from "react";
import RootLayout from "@layouts/RootLayout";
import { Container } from "@components/atoms/Container";
import Title from "@components/atoms/Title";
import Button from "@components/atoms/Button";
import { IconName, IconSizes } from "@components/atoms/Icon/types";
import Text from "@components/atoms/Text";
import { Typography } from "@styles/themes/types";
import Icon from "@components/atoms/Icon";

const My: React.FC = () => {
  const handleLogin = () => {
    console.log("hi");
  };

  return (
    <RootLayout>
      <Container className="my-32">
        <div className={"flex w-full flex-col items-center justify-center gap-11 "}>
          <div className={"flex w-fit flex-col items-center justify-center gap-4"}>
            <Icon type={IconName.SILVERBI_SYMBOL} size={IconSizes.XL} />
            <Text type={Typography.TITLE_1} bold>
              Login
            </Text>
          </div>
          <Button onClick={handleLogin} icon={IconName.GITHUB_LOGO} className={"w-96"}>
            {"깃허브로 시작하기"}
          </Button>
        </div>
      </Container>
    </RootLayout>
  );
};

export default My;
