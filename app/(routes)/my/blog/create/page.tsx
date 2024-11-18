"use client";

import { useTextEditor } from "@/hooks/useTextEditor";
import { PostFormSchemaTypes } from "@/schema/post.schema";
import { createPost } from "@lib/actions/post";
import Editor from "lib/tiptap/Editor";
import { SubmitHandler, useForm } from "react-hook-form";
import { Inputs } from "types/hooks";

const Create = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<Inputs>();
  const editor = useTextEditor();

  const handleCreatePost = async (data: PostFormSchemaTypes) => {
    const result = await createPost(data);
    const { error } = JSON.parse(result);

    if (error.message) {
      console.error(error.message);
    }
  };

  const onSubmit: SubmitHandler<Inputs> = (values: Inputs) => {
    const html = editor?.getHTML();
    const data = {
      title: values.title,
      subtitle: values.subtitle,
      thumbnail: "",
      content: "",
      is_published: true,
      comments_count: 0,
      min_read: 0,
      key: [""],
      likes_count: 0,
      short_description: "",
      updated_at: "",
      created_at: "",
    };
    console.log("data ", data);
    // handleCreatePost(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={"h-screen w-full overflow-hidden py-12"}>
        <Editor editor={editor} register={register} />
      </div>
    </form>
  );
};

export default Create;
