"use client";

import "./styles.css";
import { useTextEditor } from "@hooks/useTextEditor";
import ToolBar from "@lib/tiptap/Toolbar";
import { EditorContent } from "@tiptap/react";

const Editor = () => {
  const editor = useTextEditor();

  const handleSubmitEditor = () => {
    const html = editor?.getHTML();
  };

  if (!editor) {
    return null;
  }

  return (
    <div className={"w-full"}>
      <div className={"mb-4 w-full rounded-lg border"}>
        <ToolBar editor={editor} />
        <div className={"w-full"}>
          <EditorContent
            className={"editor-content cursor-text"}
            id="tiptap"
            editor={editor}
            onClick={() => editor?.commands.focus()}
          />
        </div>

        {/* <div className={"flex h-8 w-full items-center border-t px-4"}>
          <Text type={Typography.BODY_3}>0 words</Text>
        </div> */}
      </div>

      {/* <div className={"flex flex-row justify-end gap-4"}>
        <Button onClick={() => console.log("")}>Preview</Button>
        <Button onClick={handleSubmitEditor}>Save</Button>
      </div> */}
    </div>
  );
};

export default Editor;
