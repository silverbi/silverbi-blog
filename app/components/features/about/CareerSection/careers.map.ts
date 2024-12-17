export const careers = [
  {
    company: "얼리페이",
    period: "2023.11 - 현재 재직중",
    role: ["Frontend Developer"],
    career: [
      {
        title: "사용자 매출/정산 내역 페이지 개발",
        subtitle:
          "사용자들이 매출 및 정산 데이터를 한눈에 확인할 수 있도록, 관련 내역을 캘린더, 그래프, 차트 등을 통해 시각적으로 보여주는 페이지를 개발하였습니다.",
        role: ["Frontend Developer"],
        startDate: "2024.09",
        endDate: "2024.12",
        company: "얼리페이",
        description: [
          {
            title: "매출 추이, 정산 상세 내역, 플랫폼별 매출 내역 등을 시각적으로 표시",
            link: null,
          },
          {
            title: "React.lazy와 React.Suspense를 사용해 페이지별 코드 스플리팅을 적용하고, 페이지 로드 속도 13% 개선",
            link: null,
          },
          {
            title: "Tanstack Query와 React.Suspense와 ErrorBoundary를 통해 로딩, 에러 상태를 선언적으로 관리",
            link: null,
          },
          {
            title: "Tanstack Query의 useSuspenseQueries 를 활용하여 Request Waterfall 문제 해결하고 병렬로 API 요청",
            link: null,
          },
          {
            title: " 다중 조건 필터링을 구현하고, 선택된 조건에 따라 쿼리를 동적으로 생성해 fetch API 요청을 구현",
            link: null,
          },
        ],
      },
      {
        title: "디자인시스템 구축 및 모노레포 도입",
        subtitle:
          "일관된 UI와 코드 재사용성을 확보하기 위해 디자인 시스템 패키지를 만들고, 여러 프로젝트를 단일 저장소에서 관리할 수 있도록 모노레포를 도입하였습니다.",
        role: ["Frontend Developer"],
        startDate: "2024.08",
        endDate: "2024.09",
        company: "얼리페이",
        description: [
          {
            title: "Turborepo 도입 및 pnpm 패키지 매니저 변경을 통한 모노레포 구축",
            link: null,
          },
          {
            title: "디자인 토큰, 아이콘 모듈, UI 컴포넌트 라이브러리를 별도로 구축하여 개발 효율성 대폭 향상",
            link: null,
          },
          {
            title: "Storybook 을 통한 UI 문서화 및 Chromatic 배포를 통해 개발-디자인 간 협업 효율성 극대화",
            link: null,
          },
          { title: "Github Action 을 통해 CI/CD 파이프라인 연결 및 배포 자동화 진행", link: null },
          { title: "remote caching 을 통한 Turborepo 배포 속도 43% 향상", link: null },
        ],
      },
      {
        title: "관리자용 정산 웹 서비스 개발",
        subtitle:
          "정산 어드민 시스템에 필요한 선정산, 과정산 처리 로직을 구현하고, 정산/매출 데이터를 관리하는 시스템을 구축하였습니다.",
        role: ["Frontend Developer"],
        startDate: "2024.01",
        endDate: "2024.04",
        company: "얼리페이",
        description: [
          {
            title: "debounce 함수를 적용하여 서버 부하 최소화하고 실시간 추천 검색 결과 제공",
            link: null,
          },
          {
            title: "CRA에서 vite migration을 통해 번들러 Rollup 기반으로 통일 및 빌드 속도 26% 개선",
            link: null,
          },
          { title: "IBM에서 제공하는 Carbon Design System을 적용하여 별도의 컴포넌트 개발 소요시간 단축", link: null },
          {
            title: "데이터 캐싱을 통해 불필요한 API 호출을 줄이고 네트워크 리소스 절약",
            link: null,
          },
        ],
      },
      {
        title: "소상공인 선정산 웹 서비스 개발",
        subtitle:
          "랜딩 페이지를 구현하고, 회원가입부터 서비스 신청까지 사업자번호 및 계좌, 배달플랫폼 등 서비스 신청 로직을 구현하였습니다.",
        role: ["Frontend Developer"],
        startDate: "2023.11",
        endDate: "2024.11",
        company: "얼리페이",
        description: [
          {
            title: "카카오 로그인, 팝업 방식에서 리다이렉트 방식으로 교체하여 전환율 24% 상승",
            link: null,
          },
          {
            title: "Jenkins에 일부 구축된 CI를 GitHub Actions로 통합하여 배포 리소스 절약",
            link: null,
          },
          { title: "Sentry 에러 로그 수집 시스템 재구축을 통해 에러 트래킹 효율 개선", link: null },
          {
            title: "약관 파일에 사용자 정보와 서명 이미지를 저장하여 pdf 파일로 추출될 수 있도록 약관 동의 로직 구현",
            link: null,
          },
          { title: "RouteProvider 를 통해 사용자의 다양한 상태에 따른 페이지 접근 권한 제어", link: null },
          { title: "Lighthouse 최적화를 통해 SEO 및 웹 접근성 36% 개선", link: null },
        ],
      },
    ],
  },
  {
    company: "파이리코",
    period: "2020.10 - 2023.09",
    role: ["Frontend Developer", "Product Manager"],
    career: [
      {
        title: "반려동물 안심입양 웹 서비스 개발",
        subtitle:
          "랜딩페이지를 구현하고 강아지 상세 정보, 필터, 찜하기, 무한스크롤 등의 기능이 포함된 PDP(Product Detail Page), PLP(Product Listing Page)를 구현하였습니다.",
        role: ["Frontend Developer"],
        startDate: "2022.11",
        endDate: "2023.05",
        company: "얼리페이",
        description: [
          {
            title: "Next.js, Tailwind CSS 기반의 웹 서비스 설계 및 구현, 런칭",
            link: null,
          },
          {
            title: "컴포넌트의 재사용성을 높이기 위해 Atomic design을 활용한 디자인 시스템 도입",
            link: null,
          },
          {
            title: "Storybook을 이용한 컴포넌트 기반 개발 및 디자이너와의 협업 시스템 구축",
            link: null,
          },
          { title: "react-hook-form 을 사용한 form 상태 관리를 통해 불필요한 리렌더링 횟수 감소", link: null },
          { title: "Cypress 도입을 통해 E2E 테스트 진행 및 내부 테스트 효율 향상", link: null },
          { title: "sharp 라이브러리 도입을 통해 이미지 초기 로딩 성능 42% 개선", link: null },
        ],
      },
      {
        title: "개발 업무 환경 구축 및 업무 프로세스 개선",
        subtitle:
          "효율적이고 안정적인 개발 환경을 마련하고 프로덕트 팀의 생산성을 극대화하기 위해 주도적으로 업무 프로세스를 개선하였습니다.",
        role: ["Frontend Developer"],
        startDate: "2022.06",
        endDate: "2023.08",
        company: "얼리페이",
        description: [
          {
            title: "이슈 트래킹 도구 Linear 도입을 통해 개발 작업 공유 및 업무 효율 강화",
            link: null,
          },
          {
            title: "3L 스프린트 회고 도입을 통한 프로덕트 팀 개선",
            link: null,
          },
          { title: "개발 온보딩 프로세스 구축을 통해 신규 개발자의 조직 적응 도움", link: null },
          {
            title: "개발 스터디, Tech talk, 개발 장벽 뚫기 session 진행을 통해 개발 팀 협업 역량 강화",
            link: null,
          },
          { title: "코드 리뷰 도입 및 PR 템플릿 구축을 통해 개발 생산성 향상", link: null },
        ],
      },
      {
        title: "반려동물 비문 인식 솔루션 앱 개발",
        subtitle:
          "반려동물의 비문(코 지문)을 카메라로 촬영하여 등록하고 패턴을 인증할 수 있는 앱 서비스를 개발하였습니다.",
        role: ["Frontend Developer"],
        startDate: "2023.11",
        endDate: "2024.09",
        company: "얼리페이",
        description: [
          {
            title: "React Native를 이용하여 앱 서비스 개발 및 배포 (iOS, android)",
            link: null,
          },
          {
            title: "Firebase Auth를 통한 휴대폰(SMS) 본인인증 도입",
            link: null,
          },
          { title: "React Query로 서버 응답 관리 및 Redux로 전역 상태 관리", link: null },
          {
            title: "반려동물 비문 인식 모듈을 앱에 연동하여 비문 등록 및 인증 기능 추가",
            link: null,
          },
          { title: "fastlane을 이용한 앱 배포 자동화를 통해 내부 테스트 진행 시간 30% 절약", link: null },
          { title: "Sentry 도입을 통해 에러 로그 수집 시스템 구축하여 소스코드 품질 개선", link: null },
          { title: "i18next를 이용한 다국어 처리로 외국어 지원 (ko, eng)", link: null },
        ],
      },
    ],
  },
];
