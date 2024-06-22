"use client";

import React from "react";
import { Container } from "@components/atoms/Container";
import RootLayout from "@layouts/RootLayout";
import Title from "@components/atoms/Title";
import Text from "@components/atoms/Text";
import PostList from "@components/organisms/PostList";
import Tag from "@components/atoms/Tag";
import { useRouter, useSearchParams } from "next/navigation";
import CustomImage from "app/components/atoms/CustomImage";
import { ImageTypes } from "@components/atoms/CustomImage/types";

const tempPostItem = [
  {
    id: 1,
    title: "Design is the Mix of emotions",
    date: "2024.02.01",
    minRead: 1,
    like: 0,
    short_description:
      "Did you come here for something in particular or just general g in particular or just general Riker-bashing? And blowing into Riker-bashing? And blowing into Did you come here for something in particular or just general Riker-bashing? And blowing into g in particular or just general Riker-bashing? And blowing into",
    tags: ["CSS", "React", "CRA", "tailwind"],
    thumbnail: "",
  },
  {
    id: 2,
    title: "Design is the Mix of emotions",
    date: "2024.02.01",
    minRead: 1,
    like: 0,
    short_description:
      "Did you come here for something in particular or just general Riker-bashing? g in particular or just general Riker-bashing? And blowing into g in particular or just general Riker-bashing? And blowing into And blowing into Did you come here for something in particular or just general Riker-bashing? And blowing into",
    tags: ["CSS", "React", "CRA", "tailwind"],
    thumbnail: "",
  },
  {
    id: 3,
    title: "Design is the Mix of emotions",
    date: "2024.02.01",
    minRead: 1,
    like: 0,
    short_description:
      "Did you come here for something in particular or just general Riker-bashing? And blowing into Did you come here for something in particular or just general Riker-bashing? And blowing into",
    tags: ["CSS", "React", "CRA", "tailwind"],
    thumbnail: "",
  },
];

const category = ["React", "CSS", "CRA"];

const Tech: React.FC = () => {
  const router = useRouter();
  const params = useSearchParams();
  const categoryParams = params.get("category");
  const selectedFilter = categoryParams ? categoryParams : category[0];

  const handleClickTag = (label: string) => {
    router.push(`/tech?category=${label}`);
  };

  return (
    <RootLayout>
      <Container className="my-32">
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
      </Container>
    </RootLayout>
  );
};

export default Tech;
