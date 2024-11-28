"use client";

import { Title } from "@/app/components/commons/Title";
import { Text } from "@/app/components/ui/text";
import { PageContainer } from "@layouts/PageContainer";
import RootLayout from "@layouts/RootLayout";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";

const category = ["React", "CSS", "CRA"];

const Tech = () => {
  const router = useRouter();
  const params = useSearchParams();
  const categoryParams = params.get("category");
  const selectedFilter = categoryParams ? categoryParams : category[0];

  const handleClickTag = (label: string) => {
    router.push(`/tech?category=${label}`);
  };

  return (
    <RootLayout>
      <PageContainer />
        <Image
          src={"/assets/images/tech-thumbnail.webp"}
          alt={"Tech thumbnail"}
          width={980}
          height={560}
          className={"rounded-xl"}
        />
        <Title>개발</Title>
        <Text>진합태산(塵合泰山). 공부하고 경험했던 것들을 기록합니다.</Text>
      </PageContainer>
    </RootLayout>
  );
};

export default Tech;
