"use client";

import { TechList } from "@components/features";
import { temp } from "@components/features/tech/TechListPreview/mock.data";
import { PageContainer, RootLayout } from "@components/layouts";
import {
  Badge,
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
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";

const category = ["전체", "React", "CSS", "CRA", "Next.js", "React Native", "NestJS"];

const Tech = () => {
  const router = useRouter();
  const params = useSearchParams();
  const categoryParams = params.get("category");
  const selectedFilter = categoryParams ? categoryParams : category[0];

  return (
    <RootLayout>
      <PageContainer>
        <div className={"v-stack gap-28"}>
          <div className={"w-full h-[50vw] max-h-[560px] relative"}>
            <Image
              src={"/assets/images/holographic-background-1.jpg"}
              alt={"Tech thumbnail"}
              priority
              fill
              className={"rounded-2xl"}
              objectFit="cover"
            />
          </div>
          <div className={"v-stack items-start gap-20"}>
            <Title>개발</Title>

            {/* 태그 필터 */}
            <div className={"h-stack gap-2 overflow-y-hidden overflow-x-scroll"}>
              {category.map((tag, index) => (
                <Link key={index} href={`/tech?category=${tag.toLocaleLowerCase()}`} scroll={false}>
                  <Badge variant={selectedFilter === tag ? "primary" : "secondary"} className={"cursor-pointer"}>
                    {tag}
                  </Badge>
                </Link>
              ))}
            </div>

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
