import React from "react";
import { Editor } from "@tiptap/react";
import ToolMenu from "app/lib/tiptap/ToolMenu";
import TextTypeMenu from "@lib/tiptap/TextTypeMenu";

interface ToolBarProps {
  editor: Editor | null;
}
const ToolBar = ({ editor }: ToolBarProps) => {
  if (!editor) return null;

  return (
    <div className="flex flex-col">
      <div className={"flex items-center justify-center border-b px-6 py-3"}>
        <div className="flex items-center justify-center gap-1 border-r border-border-inverse-2 px-6">
          <ToolMenu.Undo editor={editor} />
          <ToolMenu.Redo editor={editor} />
        </div>

        <div className="flex items-center justify-center gap-1 border-r border-border-inverse-2 px-6">
          <TextTypeMenu editor={editor} />
        </div>

        <div className="flex items-center justify-center gap-1 border-r border-border-inverse-2 px-6">
          <ToolMenu.Bold editor={editor} />
          <ToolMenu.Italic editor={editor} />
          <ToolMenu.Underline editor={editor} />
          <ToolMenu.Strike editor={editor} />
          <ToolMenu.Color editor={editor} />
        </div>

        <div className="flex items-center justify-center gap-1 border-r border-border-inverse-2 px-6">
          <ToolMenu.Code editor={editor} />
          <ToolMenu.CodeBlock editor={editor} />
          <ToolMenu.Blockquote editor={editor} />
        </div>
      </div>
      <div className={"flex items-center justify-center border-b px-6 py-3"}>
        <div className="flex items-center justify-center gap-1 border-r border-border-inverse-2 px-6">
          <ToolMenu.BulletList editor={editor} />
          <ToolMenu.OrderedList editor={editor} />
        </div>
        <div className="flex items-center justify-center gap-1 border-r border-border-inverse-2 px-6">
          <ToolMenu.AlignLeft editor={editor} />
          <ToolMenu.AlignCenter editor={editor} />
          <ToolMenu.AlignRight editor={editor} />
          <ToolMenu.AlignJustify editor={editor} />
        </div>
        <div className="flex items-center justify-center gap-1 border-r border-border-inverse-2 px-6">
          <ToolMenu.HorizontalRule editor={editor} />
          <ToolMenu.Link editor={editor} />
        </div>
        <div className="flex items-center justify-center gap-1 border-r border-border-inverse-2 px-6">
          <ToolMenu.Video editor={editor} />
          <ToolMenu.Image editor={editor} />
        </div>
      </div>
    </div>
  );
};

export default ToolBar;
