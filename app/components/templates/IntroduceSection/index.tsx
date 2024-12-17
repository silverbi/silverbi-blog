import Image from "next/image";

export const IntroduceSection = () => {
  return (
    <div className="flex w-full flex-col gap-6">
      {/* <Chip icon={IconName.STICKER_CIRCLE}>Available for work</Chip>

      <div className={"flex flex-row items-center gap-3"}>
        <Icon type={IconName.MARKER_PIN} size={"MD"} />
        <Text type={Typography.SUBTITLE_1}>South Korea, Seoul</Text>
      </div> */}

      <div className="flex w-full flex-row items-center justify-between gap-12 py-12">
        <div className={"flex w-full flex-col gap-7"}>
          <div className={"flex flex-col"}>
            <div className={"flex gap-6 items-center"}>
              <div className="relative w-64 h-64">
                <Image
                  fill
                  objectFit="cover"
                  src={"/assets/images/profile-character.png"}
                  alt={"실버비 프로필 이미지"}
                />
              </div>
              {/* <div className={"flex flex-col"}>
                <Text type={Typography.TITLE_3} bold>
                  현은비 Hyun Eunbi
                </Text>
                <Text type={Typography.HEAD_3} bold>
                  Software Engineer
                </Text>

                <div className={"flex flex-row gap-1.5"}>
                  {["HTML", "CSS", "Javascript", "Typescript", "React", "Next.js"].map((label, index) => (
                    <Tag type={"SECONDARY"} key={index}>
                      {label}
                    </Tag>
                  ))}
                </div>
              </div> */}
            </div>

            {/* <Text>안녕하세요. 서비스에 가치를 더하는 개발자, 현은비입니다.</Text>

            <Text>
              &nbsp;작은 요소 하나하나가 서비스의 품질을 결정한다고 믿습니다. 표면적인 결과만이 아니라, 깊이 있는
              디테일을 중요하게 여기는 편입니다. 개발 과정에서 사용자의 편리함과 직관성을 고려하여 사용자의 경험을
              끌어올리는 것을 목표로 삼고 있습니다. 유연한 코드를 좋아하며, 성능 최적화와 효율적인 코드 작성에 관심이
              많습니다. 빠르게 변화하는 환경 속에서 좋은 개발자가 될 수 있도록 꾸준히 성장하고, 그 성장을 통해 더 큰
              가치를 창출합니다. 어떤 문제가 주어져도 기술적인 측면에서 항상 더 나은 방법을 찾아 적용하며, 서비스의
              완성도를 높이는 개발자가 되고자 노력합니다.
            </Text> */}
          </div>

          <div className="flex items-center gap-4">
            {/* <Link href={LINKEDIN_URL} target="_blank">
              <Icon type={IconName.LINKEDIN_LOGO} size={IconSizes.SM} />
            </Link>
            <Link href={INSTAGRAM_URL} target="_blank">
              <Icon type={IconName.INSTAGRAM_LOGO} size={IconSizes.SM} />
            </Link>
            <Link href={GITHUB_URL} target="_blank">
              <Icon type={IconName.GITHUB_LOGO} size={IconSizes.SM} />
            </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroduceSection;
