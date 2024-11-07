import { BubbleMenu, Editor } from "@tiptap/react";
import { Color, Underline, Bold, Italic, Strike } from "@lib/tiptap/ToolMenu";
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
      <Bold editor={editor} />
      <Italic editor={editor} />
      <Underline editor={editor} />
      <Strike editor={editor} />
      <Color editor={editor} />
    </BubbleMenu>
  );
};

export default BubbleEditorMenu;
