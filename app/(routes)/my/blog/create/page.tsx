"use client";

import { useTextEditor } from "@/hooks/useTextEditor";
import Editor from "@lib/tiptap/Editor";
import { Inputs } from "types/hooks";

const Create = () => {
  const editor = useTextEditor();

  const handleUploadPost = (values: Inputs) => {
    console.log("vaelus ", values);

    const html = editor?.getHTML();
  };

  return (
    <div className={"h-screen w-full overflow-hidden py-12"}>
      <Editor editor={editor} handleUploadPost={handleUploadPost} />
    </div>
  );
};

export default Create;
