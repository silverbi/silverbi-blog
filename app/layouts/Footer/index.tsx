import { Icon } from "@/app/components/ui/icon";
import { Text } from "@/app/components/ui/text";
import { GITHUB_URL, INSTAGRAM_URL, LINKEDIN_URL } from "@/common/constants";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="relative flex w-full items-center justify-center border-t bg-background px-12 py-6">
      <div className="flex h-full w-full flex-col items-center justify-between gap-6">
        <div className="flex w-full items-center justify-between">
          {/** 블로그 로고 */}
          <Link href={"/"}>
            <span className={"flex flex-row items-center gap-2"}>
              <Icon icon={"icon-silverbi-symbol"} size={"sm"} />
              <Text bold>SILVERBI</Text>
            </span>
          </Link>

          <div className="flex flex-col items-end justify-center">
            <Text bold>SILVERBI 기술 블로그</Text>
            <Text variant={"body-3"} light>
              {`Little and often fills the purse.`}
            </Text>
          </div>
        </div>

        <div className="flex w-full items-center justify-between">
          <Text variant={"body-3"} light>
            Made by silverbi · ©2024 silverbi
          </Text>

          <div className="flex items-center gap-4">
            <Link href={LINKEDIN_URL} target="_blank">
              <Icon icon={"icon-linkedin-logo"} size={"sm"} />
            </Link>
            <Link href={INSTAGRAM_URL} target="_blank">
              <Icon icon={"icon-instagram-logo"} size={"sm"} />
            </Link>
            <Link href={GITHUB_URL} target="_blank">
              <Icon icon={"icon-github-logo"} size={"sm"} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
