"use client";

import { useTextEditor } from "hooks/useTextEditor";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { usePostState } from "store/post";
import { Inputs } from "types/hooks";

const Create = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<Inputs>();
  const router = useRouter();
  const editor = useTextEditor();
  const { setPost, post } = usePostState();

  const onSubmit: SubmitHandler<Inputs> = (values: Inputs) => {
    const html = editor?.getHTML();
    setPost({ ...post, title: values.title, subtitle: values.subtitle, content: `${html}` });

    if (!values.title) {
      // return errorToast("제목을 입력해 주세요.");
    }

    router.push("/published-post-modal");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={"h-screen w-full overflow-hidden py-12"}>
        {/* <Editor editor={editor} register={register} /> */}
      </div>
    </form>
  );
};

export default Create;
