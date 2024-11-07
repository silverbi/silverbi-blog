"use client";

import { EditorContent } from "@tiptap/react";
import ToolBar from "@lib/tiptap/Toolbar";
import Button from "@components/atoms/Button";
import Text from "@components/atoms/Text";
import { Typography } from "@styles/themes/types";
import { useTextEditor } from "@hooks/useTextEditor";
import "./styles.css";
import BubbleEditorMenu from "@lib/tiptap/BubbleEditorMenu";

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
          <BubbleEditorMenu editor={editor} duration={100} />
          <EditorContent
            className={"editor-content cursor-text"}
            id="tiptap"
            editor={editor}
            onClick={() => editor?.commands.focus()}
          />
        </div>

        <div className={"flex h-8 w-full items-center border-t px-4"}>
          <Text type={Typography.BODY_3}>{editor.storage.characterCount.characters()} words</Text>
        </div>
      </div>

      <div className={"flex flex-row justify-end gap-4"}>
        <Button onClick={() => console.log("")}>Preview</Button>
        <Button onClick={handleSubmitEditor}>Save</Button>
      </div>
    </div>
  );
};

export default Editor;
