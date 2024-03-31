"use client";

import React from "react";
import { Container } from "@components/atoms/Container";
import RootLayout from "@layouts/RootLayout";
import Image from "next/image";
import Title from "@components/atoms/Title";
import Text from "@components/atoms/Text";
import PostList from "@components/organisms/PostList";
import Tag from "@components/atoms/Tag";
import { useRouter, useSearchParams } from "next/navigation";

const tempPostItem = [
  {
    id: 1,
    title: "Design is the Mix of emotions",
    date: "2024.02.01",
    minRead: 1,
    like: 0,
    summary:
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
    summary:
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
    summary:
      "Did you come here for something in particular or just general Riker-bashing? And blowing into Did you come here for something in particular or just general Riker-bashing? And blowing into",
    tags: ["CSS", "React", "CRA", "tailwind"],
    thumbnail: "",
  },
];

const filter = ["React", "CSS", "CRA"];

const Tech: React.FC = () => {
  const router = useRouter();
  const params = useSearchParams();
  const filterParams = params.get("filter");
  const selectedFilter = filterParams ? filterParams : filter[0];

  const handleClickTag = (label: string) => {
    router.push(`/tech?filter=${label}`);
  };

  return (
    <RootLayout>
      <Container className="gap-30 my-32">
        <Image src={require("@assets/images/tech-thumbnail.png")} alt={"Tech thumbnail"} />

        <div className="mt-28 flex w-full flex-col gap-12">
          <Title>Tech</Title>
          <Text>진합태산(塵合泰山). 공부하고 경험했던 것들을 기록합니다.</Text>

          <div className={"flex gap-4 border-y py-4"}>
            {filter.map((label, index) => (
              <div onClick={() => handleClickTag(label)}>
                <Tag className={"cursor-pointer"} type={label === selectedFilter ? "PRIMARY" : "SECONDARY"} key={index}>
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
