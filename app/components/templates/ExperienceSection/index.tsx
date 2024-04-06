"use client";

import React, { useState } from "react";
import Title from "@components/atoms/Title";
import Text from "@components/atoms/Text";
import { Colors, Typography } from "@styles/themes/types";

const ExperienceSection: React.FC = () => {
  const temp = [
    {
      id: "1",
      title: "Samsung Open Source Companions",
      date: "2021.06",
      description:
        "open source 를 중심으로 software Influencer 활동. “Samsung Open source Companions, Connect the world” 주제로 SSDC 2021에서 session 진행.",
      color: "orange",
    },
    {
      id: "2",
      title: "KU 이노베이션 해커톤 대상",
      date: "2021.01",
      description:
        "건국대학교 창업지원단과 중국 칭화대학 기술지주회사가 공동 주최한 ‘KU 이노베이션 해커톤’에서 반려동물을 주제로 앱을 개발. React-Native를 이용하여 앱 기획 & 개발 & 팀 리딩.",
      color: "green",
    },
  ];

  const changeBackgroundColor = (color: string) => {
    switch (color) {
      case "orange":
        return `hover:from-[#FE9451] hover:bg-gradient-to-t`;
      case "green":
        return `hover:from-[#117642] hover:bg-gradient-to-t`;
      default:
        return "hover:from-layer-inverse-1 hover:bg-gradient-to-t";
    }
  };

  return (
    <div className={"flex w-full flex-col gap-8"}>
      <Title>Experience</Title>
      <div className={"flex flex-col divide-y"}>
        {temp.map((item, index) => (
          <div key={index} className={"flex py-12"}>
            <Text className={"w-3/12"}>{item.date}</Text>
            <div className={"flex w-9/12 flex-col gap-2"}>
              <Text type={Typography.SUBTITLE_2} bold>
                {item.title}
              </Text>
              <Text color={Colors.CONTENT_2}>{item.description}</Text>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceSection;
