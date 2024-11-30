"use client";

import { TechList } from "@components/features";
import { temp } from "@components/features/tech/TechListPreview/mock.data";
import { PageContainer, RootLayout } from "@components/layouts";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  Title,
} from "@components/ui";
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
      <PageContainer>
        <div className={"v-stack gap-28"}>
          <Image
            src={"/assets/images/tech-thumbnail.webp"}
            alt={"Tech thumbnail"}
            width={980}
            height={560}
            className={"rounded-2xl"}
          />
          <div className={"v-stack items-start gap-20"}>
            <Title>개발</Title>

            <TechList list={temp} />

            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </div>
      </PageContainer>
    </RootLayout>
  );
};

export default Tech;
