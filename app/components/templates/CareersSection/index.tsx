import React from "react";
import Title from "@components/atoms/Title";
import Text from "@components/atoms/Text";
import { Colors, Typography } from "@styles/themes/types";
import Icon from "@components/atoms/Icon";
import { IconName } from "@components/atoms/Icon/types";

const CareersSection: React.FC = () => {
  const temp = [
    {
      corporation: "earlypay",
      start_date: "2023.11",
      end_date: "ing",
      role: "Frontend Developer",
      history: [
        {
          title: "관리자용 정산 웹 서비스 개발",
          start_date: "2023.12",
          end_date: "2024.04",
          contents: [
            "정산시스템에 필요한 선정산, 과정산 처리 기능 개발",
            "react-query에서 제공하는 useInfiniteQuery hook 을 이용하여 무한스크롤 구현",
            "debounce 함수를 구현하여 추천 검색어 기능에 적용",
            "CRA에서 vite migration을 통해 기존 프로젝트의 번들러 Rollup 기반으로 통일 및 빌드 속도 26% 개선",
            "IBM에서 제공하는 Carbon Design System을 적용하여 별도의 컴포넌트 개발 소요시간 단축",
          ],
        },
        {
          title: "소상공인 선정산 서비스 웹 개발",
          start_date: "2023.11",
          end_date: "2024.04",
          contents: [
            "카카오 로그인, 팝업 방식에서 리다이렉트 방식으로 교체하여 전환율 24% 상승",
            "Jenkins에 일부 구축된 CI를 GitHub Actions로 통합하여 배포 리소스 절약",
            "Sentry 에러 로그 수집 시스템 재구축을 통해 에러 트래킹 효율 20% 개선",
            "약관 파일에 서명 이미지가 저장되어 pdf 파일로 추출될 수 있도록 약관 동의 로직 구현",
          ],
        },
      ],
    },
    {
      corporation: "pireco",
      start_date: "2020.11",
      end_date: "2023.09",
      role: "Frontend Developer & Product Manager",
      history: [
        {
          title: "반려동물 안심입양 서비스 웹 개발",
          start_date: "2022.11",
          end_date: "2023.05",
          contents: [
            "Next.js, Tailwind CSS 기반으로 웹 서비스 개발 및 배포",
            "컴포넌트의 재사용성을 높이기 위해 Atomic design을 활용한 디자인 시스템 도입",
            "Storybook을 이용한 컴포넌트 기반 개발 및 디자이너와의 협업 시스템 구축",
            "react-hook-form 을 사용한 form 상태 관리를 통해 불필요한 리렌더링 횟수 감소",
            "Cypress 도입을 통해 E2E 테스트 진행 및 내부 테스트 효율 46% 향상",
            "Lazy Loading 및 특정 이미지에 fetchpriority 적용을 통한 이미지 최적화",
            "sharp 라이브러리 도입을 통해 이미지 초기 로딩 성능 42% 개선",
            "media query를 이용하여 반응형 웹 개발",
          ],
        },
        {
          title: "개발 업무 환경 구축 및 업무 프로세스 개선",
          start_date: "2022.06",
          end_date: "2023.08",
          contents: [
            "Linear 도입을 통해 task 공유 및 업무 효율 향상",
            "3L 스프린트 회고 도입을 통한 프로덕트 팀 개선",
            "개발 온보딩 프로세스 구축을 통해 신규 개발자의 조직 적응 도움",
            "개발 스터디, Tech talk, 개발 장벽 뚫기 session 진행",
            "코드 리뷰 도입 및 PR 템플릿 구축을 통해 개발 생산성 향상",
          ],
        },
        {
          title: "반려동물 비문 인식 솔루션 앱 개발",
          start_date: "2021.08",
          end_date: "2023.07",
          contents: [
            "react-native를 이용하여 앱 서비스 개발 및 배포 (iOS, android)",
            "Firebase Auth를 통한 휴대폰(SMS) 본인인증 도입",
            "Prettier, ESLint를 통해 코드 컨벤션 설정하여 개발 협업 환경 구축",
            "React Query로 서버 응답 관리 및 Redux로 전역 상태 관리",
            "반려동물 비문 인식 모듈을 앱에 연동하여 비문 등록 및 인증 기능 추가",
            "fastlane을 이용한 앱 배포 자동화를 통해 내부 테스트 진행 시간 30% 절약",
            "Sentry 도입을 통해 에러 로그 수집 시스템 구축하여 소스코드 품질 개선",
            "i18next를 이용한 다국어 처리로 외국어 지원 (ko, eng)",
          ],
        },
      ],
    },
  ];

  return (
    <div className={"flex w-full flex-col gap-4"}>
      <Title>Careers</Title>

      <div className={"flex flex-col divide-y"}>
        {temp.map((items, index) => {
          return (
            <div className={"flex flex-col py-12"} key={index}>
              <Text type={Typography.TITLE_2} bold className={"pb-2 uppercase"}>
                {`${items.corporation}.`}
              </Text>
              <div className={"flex items-center gap-2"}>
                <Icon type={IconName.CALENDAR} size={"XS"} className={"mb-0.5"} />
                <Text>
                  {items.start_date} - {items.end_date}
                </Text>
                <Text>|</Text>
                <Icon type={IconName.PROFILE} size={"XS"} />
                <Text>{items.role}</Text>
              </div>

              <div className={"mt-12 w-full"}>
                <div className={"flex flex-col gap-12"}>
                  {items.history.map((item, index) => (
                    <div key={index} className={"flex"}>
                      <Text className={"w-3/12"}>
                        {item.start_date} - {item.end_date}
                      </Text>
                      <div className={"flex w-9/12 flex-col gap-2"}>
                        <Text type={Typography.SUBTITLE_2} bold className={"-ml-5"}>
                          {item.title}
                        </Text>
                        <ul className={"list-outside list-disc"}>
                          {item.contents.map((content, index) => (
                            <li key={index} className={"leading-loose text-content-2"}>
                              {content}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CareersSection;
