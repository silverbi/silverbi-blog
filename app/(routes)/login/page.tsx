"use client";

import { LoginForm } from "@components/features";
import { PageContainer, RootLayout } from "@components/layouts";
import { Text } from "@components/ui";
import Image from "next/image";

const Login = () => {
  return (
    <RootLayout>
      <PageContainer>
        <div className={"v-stack w-fit justify-center mb-20"}>
          <Text variant={"title-1"} bold>
            LOGIN
          </Text>
          <Image src={"/assets/images/torus-knot.png"} alt={"로그인 이미지"} width={360} height={360} priority />
        </div>
        <LoginForm />
      </PageContainer>
    </RootLayout>
  );
};

export default Login;
