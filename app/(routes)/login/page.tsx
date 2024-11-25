"use client";

import { LoginForm } from "@/app/components/features/LoginForm";
import { Text } from "@/app/components/ui/text";
import RootLayout from "@layouts/RootLayout";

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
