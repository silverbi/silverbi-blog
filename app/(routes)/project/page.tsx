"use client";

import { ProjectList } from "@/app/components";
import { temp } from "@/app/components/features/project/ProjectListPreview/mock.data";
import { PageContainer, RootLayout } from "@components/layouts";
import { Title } from "@components/ui";
import Image from "next/image";

const Projects = () => {
  return (
    <RootLayout>
      <PageContainer>
        <div className="v-stack gap-28 w-full">
          <div className={"w-full h-[50vw] max-h-[560px] relative"}>
            <Image
              src={"/assets/images/holographic-background-2.jpg"}
              alt={"Retrospect thumbnail"}
              priority
              fill
              className={"rounded-2xl"}
              objectFit="cover"
            />
          </div>
          <div className={"v-stack items-start w-full gap-20"}>
            <Title>프로젝트</Title>
          </div>
          <ProjectList list={temp} />
        </div>
      </PageContainer>
    </RootLayout>
  );
};

export default Projects;
