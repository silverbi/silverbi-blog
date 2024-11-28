import React from "react";
import Button from "@/components/atoms/Button";
import { IconName } from "@/components/atoms/Icon/types";
import { useSearchParams } from "next/navigation";
import { login } from "@utils/auth";

export const LoginForm = () => {
  const searchParams = useSearchParams();

  const handleLogin = async () => {
    const nextUrl = searchParams.get("next") ?? "/";

    login("github", nextUrl);
  };

  return (
    <form>
      <Button onClick={handleLogin} icon={IconName.GITHUB_LOGO} className={"!w-[260px]"}>
        {"깃허브로 시작하기"}
      </Button>
    </form>
  );
};
