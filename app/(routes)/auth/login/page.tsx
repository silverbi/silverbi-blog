"use client";

import React from "react";
import RootLayout from "@layouts/RootLayout";
import { Container } from "@components/atoms/Container";
import Text from "@components/atoms/Text";
import { Typography } from "@styles/themes/types";
import CustomImage from "@components/atoms/CustomImage";
import { ImageTypes } from "@components/atoms/CustomImage/types";
import { LoginForm } from "@components/organisms/LoginForm";

const Login: React.FC = () => {
  return (
    <RootLayout>
      <Container className="my-32">
        <div className={"flex w-full flex-col items-center justify-center gap-8 "}>
          <div className={"flex w-fit flex-col items-center justify-center gap-8"}>
            <Text type={Typography.TITLE_1} bold>
              LOGIN
            </Text>
            <div
              className={"flex w-[260px] items-center justify-center rounded-xl border-2 border-content-1 px-6 pt-6"}
            >
              <CustomImage priority tag={ImageTypes.HAND_JAR} width={238} height={322} />
            </div>
          </div>
          <LoginForm />
        </div>
      </Container>
    </RootLayout>
  );
};

export default Login;
