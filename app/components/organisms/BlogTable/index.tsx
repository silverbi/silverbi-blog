"use client";

import React from "react";
import Text from "@components/atoms/Text";
import Toggle from "app/components/atoms/Toggle";
import Icon from "@/components/atoms/Icon";
import { IconName } from "@/components/atoms/Icon/types";
import IconButton from "@/components/atoms/IconButton";
import CustomImage from "@/components/atoms/CustomImage";
import { ImageTypes } from "@/components/atoms/CustomImage/types";
import Link from "next/link";

const BlogTable = () => {
  return (
    <div className={"w-full overflow-x-scroll"}>
      <div className={"h-fit w-[860px] rounded-lg"}>
        <div className={"grid w-full grid-cols-8 border-b px-4 py-2"}>
          <Text className={"col-span-6"}>포스트 정보</Text>
          <Text>글 발행</Text>
        </div>
        {[1, 2, 3, 4].map((index: number) => (
          <div key={index} className={"grid w-full grid-cols-8 items-center border-b border-border-inverse-2 p-4"}>
            <div className={"col-span-6 flex items-center gap-4"}>
              <div className={"relative h-14 w-14"}>
                <CustomImage
                  tag={ImageTypes.PROJECT_DEEPFALL}
                  className={"rounded-lg object-cover"}
                  fill
                  alt={"post-image"}
                />
              </div>
              <Link href={"/tech/1"}>
                <div className={"flex flex-col"}>
                  <Text className={"overflow-hidden text-ellipsis"}>React 개발 어쩌구 저쩌구</Text>
                  <Text type={"BODY_2"} color={"CONTENT_3"} className={"overflow-hidden text-ellipsis"}>
                    서브 타이틀입니다.
                  </Text>
                  <Text type={"BODY_3"} color={"CONTENT_3"} className={"overflow-hidden text-ellipsis"}>
                    2020.10.30
                  </Text>
                </div>
              </Link>
            </div>

            <Toggle className={"justify-end"} checked={false} />
            <Actions />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogTable;

const Actions = () => {
  return (
    <div className={"flex items-center justify-end gap-4"}>
      <IconButton>
        <Icon size={"XS"} type={IconName.EDIT} color={"CONTENT_1"} />
      </IconButton>
      <IconButton>
        <Icon size={"XS"} type={IconName.TRASH} color={"CONTENT_1"} />
      </IconButton>
    </div>
  );
};
