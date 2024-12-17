import { login } from "@/utils/auth";
import { Button } from "@components/ui";
import { useSearchParams } from "next/navigation";

export const LoginForm = () => {
  const searchParams = useSearchParams();

  const handleLogin = async () => {
    const nextUrl = searchParams.get("next") ?? "/";

    login("github", nextUrl);
  };

  return (
    <form>
      <Button onClick={handleLogin} className={"!w-[260px]"} size={"lg"}>
        깃허브로 시작하기
      </Button>
    </form>
  );
};
