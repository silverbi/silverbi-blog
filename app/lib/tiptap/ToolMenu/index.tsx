import React, { ChangeEvent, useCallback, useState } from "react";
import { Editor } from "@tiptap/react";
import Icon from "@components/atoms/Icon";
import { IconName } from "@components/atoms/Icon/types";
import "./styles.css";
import { Colors } from "@styles/themes/types";

interface ToolBarProps {
  editor: Editor;
}

const ToolMenu = ({}) => {
  return <div id={"tool-menu"} className={"tool-menu"}></div>;
};

// Bold
ToolMenu.Bold = ({ editor }: ToolBarProps) => {
  const level = editor.getAttributes("heading")?.level ?? 0;

  return (
    <button
      className={`tool-icon ${editor.isActive("bold") || level ? "is-active" : ""}`}
      disabled={!editor.can().chain().focus().toggleBold().run() || !!level}
      onClick={() => editor.chain().focus().toggleHeading({ level: level }).toggleBold().run()}
    >
      <Icon type={IconName.TEXT_BOLD} size={"SM"} />
    </button>
  );
};
// Italic
ToolMenu.Italic = ({ editor }: ToolBarProps) => (
  <button
    onClick={() => editor.chain().focus().toggleItalic().run()}
    disabled={!editor.can().chain().focus().toggleItalic().run()}
    className={`tool-icon ${editor.isActive("italic") ? "is-active" : ""}`}
  >
    <Icon type={IconName.TEXT_ITALIC} size={"SM"} />
  </button>
);
// Strike
ToolMenu.Strike = ({ editor }: ToolBarProps) => (
  <button
    onClick={() => editor.chain().focus().toggleStrike().run()}
    disabled={!editor.can().chain().focus().toggleStrike().run()}
    className={`tool-icon ${editor.isActive("strike") ? "is-active" : ""}`}
  >
    <Icon type={IconName.TEXT_STRIKE} size={"SM"} />
  </button>
);
// Underline
ToolMenu.Underline = ({ editor }: ToolBarProps) => (
  <button
    onClick={() => editor.chain().focus().toggleUnderline().run()}
    disabled={!editor.can().chain().focus().toggleUnderline().run()}
    className={`tool-icon ${editor.isActive("underline") ? "is-active" : ""}`}
  >
    <Icon type={IconName.TEXT_UNDERLINE} size={"SM"} />
  </button>
);
// Color
ToolMenu.Color = ({ editor }: ToolBarProps) => (
  <div
    className={`tool-icon ${!!editor.getAttributes("textStyle").color && editor.getAttributes("textStyle").color !== "#000000" ? "is-active" : ""}`}
  >
    <input
      type="color"
      onInput={(event: ChangeEvent<HTMLInputElement>) => editor.chain().focus().setColor(event.target.value).run()}
      value={editor.getAttributes("textStyle").color}
      data-testid="setColor"
      className={`color-palette`}
    />
  </div>
);

// BulletList
ToolMenu.BulletList = ({ editor }: ToolBarProps) => (
  <button
    onClick={() => editor.chain().focus().toggleBulletList().run()}
    className={`tool-icon ${editor.isActive("bulletList") ? "is-active" : ""}`}
  >
    <Icon type={IconName.DOTPOINTS} size={"SM"} />
  </button>
);
// OrderedList
ToolMenu.OrderedList = ({ editor }: ToolBarProps) => (
  <button
    onClick={() => editor.chain().focus().toggleOrderedList().run()}
    className={`tool-icon ${editor.isActive("orderedList") ? "is-active" : ""}`}
  >
    <Icon type={IconName.DOTPOINTS} size={"SM"} />
  </button>
);

// AlignLeft
ToolMenu.AlignLeft = ({ editor }: ToolBarProps) => (
  <button
    onClick={() => editor.chain().focus().setTextAlign("left").run()}
    className={`tool-icon ${editor.isActive({ textAlign: "left" }) ? "is-active" : ""}`}
  >
    <Icon type={IconName.TEXT_ALIGN_LEFT} size={"SM"} />
  </button>
);
// AlignRight
ToolMenu.AlignRight = ({ editor }: ToolBarProps) => (
  <button
    onClick={() => editor.chain().focus().setTextAlign("right").run()}
    className={`tool-icon ${editor.isActive({ textAlign: "right" }) ? "is-active" : ""}`}
  >
    <Icon type={IconName.TEXT_ALIGN_RIGHT} size={"SM"} />
  </button>
);
// AlignCenter
ToolMenu.AlignCenter = ({ editor }: ToolBarProps) => (
  <button
    onClick={() => editor.chain().focus().setTextAlign("center").run()}
    className={`tool-icon ${editor.isActive({ textAlign: "center" }) ? "is-active" : ""}`}
  >
    <Icon type={IconName.TEXT_ALIGN_CENTER} size={"SM"} />
  </button>
);
// AlignJustify
ToolMenu.AlignJustify = ({ editor }: ToolBarProps) => (
  <button
    onClick={() => editor.chain().focus().setTextAlign("justify").run()}
    className={`tool-icon ${editor.isActive({ textAlign: "justify" }) ? "is-active" : ""}`}
  >
    <Icon type={IconName.TEXT_ALIGN_JUSTIFY} size={"SM"} />
  </button>
);

// Code
ToolMenu.Code = ({ editor }: ToolBarProps) => (
  <button
    onClick={() => editor.chain().focus().toggleCode().run()}
    disabled={false}
    className={`tool-icon ${editor.isActive("code") ? "is-active" : ""}`}
  >
    <Icon type={IconName.CODE_SNIPPET} size={"SM"} />
  </button>
);
// CodeBlock
ToolMenu.CodeBlock = ({ editor }: ToolBarProps) => (
  <button
    onClick={() => editor.chain().focus().toggleCodeBlock().run()}
    disabled={false}
    className={`tool-icon ${editor.isActive("codeBlock") ? "is-active" : ""}`}
  >
    <Icon type={IconName.CODE_BROWSER} size={"SM"} />
  </button>
);
// Blockquote
ToolMenu.Blockquote = ({ editor }: ToolBarProps) => (
  <button
    onClick={() => editor.chain().focus().toggleBlockquote().run()}
    disabled={false}
    className={`tool-icon ${editor.isActive("blockquote") ? "is-active" : ""}`}
  >
    <Icon type={IconName.QUOTE} size={"SM"} />
  </button>
);

// Undo
ToolMenu.Undo = ({ editor }: ToolBarProps) => (
  <button
    onClick={() => editor.chain().focus().undo().run()}
    disabled={!editor.can().undo()}
    className={`tool-icon ${!editor.can().undo() ? "disabled" : ""}`}
  >
    <Icon
      type={IconName.TEXT_REVERSE_LEFT}
      color={!editor.can().undo() ? Colors.CONTENT_INVERSE_3 : Colors.CONTENT_1}
      size={"SM"}
    />
  </button>
);
// Redo
ToolMenu.Redo = ({ editor }: ToolBarProps) => (
  <button
    onClick={() => editor.chain().focus().redo().run()}
    disabled={!editor.can().redo()}
    className={`tool-icon ${!editor.can().redo() ? "disabled" : ""}`}
  >
    <Icon
      type={IconName.TEXT_REVERSE_RIGHT}
      color={!editor.can().redo() ? Colors.CONTENT_INVERSE_3 : Colors.CONTENT_1}
      size={"SM"}
    />
  </button>
);
// HorizontalRule
ToolMenu.HorizontalRule = ({ editor }: ToolBarProps) => (
  <button onClick={() => editor.chain().focus().setHorizontalRule().run()} disabled={false} className={`tool-icon`}>
    <Icon type={IconName.DOTTED_LINE} color={Colors.CONTENT_1} size={"SM"} />
  </button>
);
// Link
ToolMenu.Link = ({ editor }: ToolBarProps) => {
  const handleClickLinkButton = useCallback(() => {
    if (editor.isActive("link")) {
      editor.chain().focus().unsetLink().run();
      return;
    }

    const previousUrl = editor.getAttributes("link").href;
    const url = window.prompt("URL", previousUrl);

    // cancelled
    if (url === null) {
      return;
    }

    // empty
    if (url === "") {
      editor.chain().focus().extendMarkRange("link").unsetLink().run();

      return;
    }

    // update link
    editor.chain().focus().extendMarkRange("link").setLink({ href: url }).run();
  }, [editor]);

  return (
    <button onClick={handleClickLinkButton} className={`tool-icon`}>
      <Icon type={IconName.LINK} color={Colors.CONTENT_1} size={"SM"} />
    </button>
  );
};
// Video
ToolMenu.Video = ({ editor }: ToolBarProps) => (
  <button onClick={() => editor.chain().focus().redo().run()} disabled={false} className={`tool-icon`}>
    <Icon type={IconName.VIDEO} color={Colors.CONTENT_1} size={"SM"} />
  </button>
);
// Image
ToolMenu.Image = ({ editor }: ToolBarProps) => (
  <button onClick={() => editor.chain().focus().redo().run()} disabled={false} className={`tool-icon`}>
    <Icon type={IconName.IMAGE} color={Colors.CONTENT_1} size={"SM"} />
  </button>
);

export default ToolMenu;
