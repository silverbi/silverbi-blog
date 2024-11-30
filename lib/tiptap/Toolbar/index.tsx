import React from "react";
import { Editor } from "@tiptap/react";
import TextTypeMenu from "lib/tiptap/TextTypeMenu";
import {
  Bold,
  Italic,
  Redo,
  Undo,
  Underline,
  Strike,
  Color,
  Code,
  CodeBlock,
  Blockquote,
  FootNote,
  BulletList,
  OrderedList,
  AlignLeft,
  AlignCenter,
  AlignRight,
  AlignJustify,
  HorizontalRule,
  Link,
  Video,
  Image,
} from "../ToolMenu";

interface ToolBarProps {
  editor: Editor | null;
}
const ToolBar = ({ editor }: ToolBarProps) => {
  if (!editor) return null;

  return (
    <div className="flex flex-col">
      <div className={"flex items-center justify-center border-b px-6 py-3"}>
        <div className="flex items-center justify-center gap-1 border-r border-border-inverse-2 px-6">
          <Undo editor={editor} />
          <Redo editor={editor} />
        </div>

        <div className="flex items-center justify-center gap-1 border-r border-border-inverse-2 px-6">
          <TextTypeMenu editor={editor} />
        </div>

        <div className="flex items-center justify-center gap-1 border-r border-border-inverse-2 px-6">
          <Bold editor={editor} />
          <Italic editor={editor} />
          <Underline editor={editor} />
          <Strike editor={editor} />
          <Color editor={editor} />
        </div>

        <div className="flex items-center justify-center gap-1 border-r border-border-inverse-2 px-6">
          <Code editor={editor} />
          <CodeBlock editor={editor} />
          <Blockquote editor={editor} />
          <FootNote editor={editor} />
        </div>
      </div>
      <div className={"flex items-center justify-center border-b px-6 py-3"}>
        <div className="flex items-center justify-center gap-1 border-r border-border-inverse-2 px-6">
          <BulletList editor={editor} />
          <OrderedList editor={editor} />
        </div>
        <div className="flex items-center justify-center gap-1 border-r border-border-inverse-2 px-6">
          <AlignLeft editor={editor} />
          <AlignCenter editor={editor} />
          <AlignRight editor={editor} />
          <AlignJustify editor={editor} />
        </div>
        <div className="flex items-center justify-center gap-1 border-r border-border-inverse-2 px-6">
          <HorizontalRule editor={editor} />
          <Link editor={editor} />
        </div>
        <div className="flex items-center justify-center gap-1 border-r border-border-inverse-2 px-6">
          <Video editor={editor} />
          <Image editor={editor} />
        </div>
      </div>
    </div>
  );
};

export default ToolBar;
