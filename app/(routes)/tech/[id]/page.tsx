"use client";

import { Container, RootLayout } from "@components/layouts";
import { Badge, Icon, Skeleton, Text } from "@components/ui";

const TechDetail = () => {
  return (
    <RootLayout>
      <Container size={"tablet"} className={"py-20 px-10"}>
        {/* 타이틀 정보 */}
        <div className={"v-stack items-start mb-28"}>
          <Skeleton className={"w-full h-[40vw] max-h-[440px] mb-16"} />

          <div className={"h-stack gap-2 mb-6"}>
            {["React", "Typescript", "UI"].map((tag, index) => (
              <Badge key={index} variant={"secondary"}>
                {tag}
              </Badge>
            ))}
          </div>

          <div className={"v-stack items-start gap-4"}>
            <Text variant={"title-2"} bold>
              뱅크샐러드에서 테스트 데이터를 생성하는 방법입니다 (feat. LLM)
            </Text>
            <Text variant={"subtitle-2"} bold>
              뱅크샐러드 QA팀 Tech Lead Manager 송의초경입니다.
            </Text>

            <div className={"h-stack gap-6 mt-4"}>
              <div className={"h-stack gap-2"}>
                <Icon icon={"icon-calendar-check"} size={"sm"} />
                <Text variant={"body-2"}>2021.10.10</Text>
              </div>
              <div className={"h-stack gap-2"}>
                <Icon icon={"icon-alarm-clock"} size={"sm"} />
                <Text variant={"body-2"}>5 min read</Text>
              </div>
            </div>
          </div>
        </div>

        {/* 본문 내용 */}
        <div>
          <Text>
            토스 채용 꿀팁, 면접관들이 직접 말합니다!
            <br />
            "Next.js, 단순 사용 경험이 아니라 '왜' 사용했는지가 중요하다?" "이력서와 면접에서 어떤 점을 강조해야
            할까요?"
            <br />
            "Github 커밋 잔디 심기, 기술 블로그 TIL 작성보다 더 중요한 것이 있다고?" 토스의 문동욱 님과 이성준 님이 채용
            과정에 대한 솔직한 이야기부터 실질적인 꿀팁까지, 지원한다면
            <br />
            <br />꼭 알아야 할 정보를 모두 모았습니다. 절대 놓치지 마세요!
            <br />
            "Next.js, 단순 사용 경험이 아니라 '왜' 사용했는지가 중요하다?" "이력서와 면접에서 어떤 점을 강조해야
            할까요?"
            <br />
            "Github 커밋 잔디 심기, 기술 블로그 TIL 작성보다 더 중요한 것이 있다고?" 토스의 문동욱 님과 이성준 님이 채용
            과정에 대한 솔직한 이야기부터 실질적인 꿀팁까지, 지원한다면
            <br />
            <br />꼭 알아야 할 정보를 모두 모았습니다. 절대 놓치지 마세요!
          </Text>
        </div>

        {/* 하단 버튼 */}
        <div className={"h-stack justify-between items-end mt-32 w-full"}>
          <div className={"h-stack gap-2"}>
            <Badge onClick={() => console.log("share")} variant={"secondary"} className={"cursor-pointer"}>
              공유
            </Badge>
            <Badge onClick={() => console.log("like")} variant={"secondary"} className={"cursor-pointer"}>
              좋아요
            </Badge>
          </div>
          <div className={"h-stack gap-1"}>
            <Icon icon={"icon-email"} size={"xs"} />
            <Text variant={"body-3"}>silverbi.404@gmail.com</Text>
          </div>
        </div>
      </Container>
    </RootLayout>
  );
};
export default TechDetail;
