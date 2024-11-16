"use client";

import React from "react";
import Text from "@components/atoms/Text";
import Button from "@components/atoms/Button";
import Toggle from "app/components/atoms/Toggle";

const BlogTable = () => {
  return (
    <div className={"w-full overflow-x-scroll"}>
      <div className={"h-fit w-[860px] rounded-lg border"}>
        <div className={"grid w-full grid-cols-8 border-b p-5"}>
          <Text className={"col-span-4"}>Title</Text>
          <Text>Date</Text>
          <Text>Publish</Text>
        </div>
        <div className={"grid w-full grid-cols-8 items-center p-5"}>
          <Text className={"col-span-4 overflow-hidden text-ellipsis"}>Blog Title</Text>
          <Text>2024.07.30</Text>
          <Toggle className={"justify-end"} checked={false} />
          <Actions />
        </div>
      </div>
    </div>
  );
};

export default BlogTable;

const Actions = () => {
  return (
    <div className={"col-span-2 flex items-center justify-end gap-4"}>
      <Button>View</Button>
      <Button tag={"INFO"}>Edit</Button>
      <Button tag={"NEGATIVE"}>Delete</Button>
    </div>
  );
};
