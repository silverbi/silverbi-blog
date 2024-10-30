import { BubbleMenu, Editor } from "@tiptap/react";
import ToolMenu from "@lib/tiptap/ToolMenu";
import React from "react";

interface BubbleEditorMenuProps {
  editor: Editor;
  duration?: number;
}

export const BubbleEditorMenu = ({ editor, duration = 100 }: BubbleEditorMenuProps) => {
  return (
    <BubbleMenu
      className="bubble-menu flex w-auto overflow-hidden rounded-lg border bg-background-1"
      tippyOptions={{ duration: duration }}
      editor={editor}
    >
      <ToolMenu.Bold editor={editor} />
      <ToolMenu.Italic editor={editor} />
      <ToolMenu.Underline editor={editor} />
      <ToolMenu.Strike editor={editor} />
      <ToolMenu.Color editor={editor} />
    </BubbleMenu>
  );
};

export default BubbleEditorMenu;
