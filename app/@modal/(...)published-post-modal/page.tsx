"use client";

import "./index.css";
import { FormModal } from "@/app/components/features/CustomModal/FormModal";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { PostFormSchemaTypes } from "schema/post.schema";
import { usePostState } from "store/post";
import { Inputs } from "types/hooks";

export interface FilePreviewProps {
  file: File;
  previewUrl: string | null;
  isSelected: boolean;
}

const PublishedPostModal = () => {
  const router = useRouter();
  const post = usePostState(state => state.post);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const [category, setCategory] = useState([]);

  const handleCreatePost = async (data: PostFormSchemaTypes) => {
    //const result = await createPost(data);
    // const { error } = JSON.parse(result);
    // if (error.message) {
    //   console.error(error.message);
    // }
  };

  const onSubmit: SubmitHandler<Inputs> = (values: Inputs) => {
    // handleUploadImages();
    router.replace("/my");
  };

  return (
    <FormModal onSubmit={handleSubmit(onSubmit)} title={"글 발행"} padding={"py-3 0"}>
      <div className={"flex w-full flex-col gap-6 px-4 py-6"}>
        <div className={"flex-box"}>
          {/* <Text type={Typography.SUBTITLE_2} bold>
            카테고리
          </Text> */}
        </div>

        <div className={"flex-box"}>
          {/* <Text type={Typography.SUBTITLE_2} bold>
            태그
          </Text>
          <div className="flex gap-2">
            <div className={`tag`}>
              <Text type={"BODY_2"}>Tech</Text>
            </div>
            <div className={`tag`}>
              <Text type={"BODY_2"}>Tech</Text>
            </div>
            <div className={`tag`}>
              <Text type={"BODY_2"}>Retrospect</Text>
            </div>
          </div> */}
        </div>

        {/* <Text type={Typography.SUBTITLE_2} bold>
          썸네일
        </Text> */}
      </div>
    </FormModal>
  );
};

export default PublishedPostModal;
