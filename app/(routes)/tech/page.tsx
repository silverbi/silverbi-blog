"use client";

import RootLayout from "@/app/layouts/RootLayout";
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
      <div />
      {/* <Container className="my-32">
        <CustomImage
          tag={ImageTypes.TECH_THUMBNAIL}
          alt={"Tech thumbnail"}
          width={980}
          height={560}
          className={"rounded-xl"}
        />

        <div className="mt-28 flex w-full flex-col gap-12">
          <Title>Tech</Title>
          <Text>진합태산(塵合泰山). 공부하고 경험했던 것들을 기록합니다.</Text>

          <div className={"flex gap-4 border-y py-4"}>
            {category.map((label, index) => (
              <div key={index} onClick={() => handleClickTag(label)}>
                <Tag className={"cursor-pointer"} type={label === selectedFilter ? "PRIMARY" : "SECONDARY"}>
                  {label}
                </Tag>
              </div>
            ))}
          </div>
          <PostList posts={tempPostItem} />
        </div>
      </Container> */}
    </RootLayout>
  );
};

export default Tech;
