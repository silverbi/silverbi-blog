"use client";

import { LoginForm } from "@components/features";
import { RootLayout } from "@components/layouts";
import { Text } from "@components/ui";

const Login = () => {
  return (
    <RootLayout>
      <div className="my-32">
        <div className={"flex w-full flex-col items-center justify-center gap-8 "}>
          <div className={"flex w-fit flex-col items-center justify-center gap-8"}>
            <Text variant={"title-1"} bold>
              LOGIN
            </Text>
          </div>
          <LoginForm />
        </div>
      </div>
    </RootLayout>
  );
};

export default Login;
