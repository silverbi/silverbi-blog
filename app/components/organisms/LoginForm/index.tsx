import React from "react";
import Button from "@components/atoms/Button";
import { IconName } from "@components/atoms/Icon/types";
import { usePathname } from "next/navigation";
import { login } from "@components/organisms/LoginForm/action";

export const LoginForm: React.FC = () => {
  const handleLogin = async () => {
    login("github", "/my");
  };

  return (
    <form>
      <Button onClick={handleLogin} icon={IconName.GITHUB_LOGO} className={"!w-[260px]"}>
        {"깃허브로 시작하기"}
      </Button>
    </form>
  );
};
