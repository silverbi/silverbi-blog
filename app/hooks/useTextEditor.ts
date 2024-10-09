import { useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Highlight from "@tiptap/extension-highlight";
import Image from "@tiptap/extension-image";
import Heading from "@tiptap/extension-heading";
import Underline from "@tiptap/extension-underline";
import OrderedList from "@tiptap/extension-ordered-list";
import TextStyle from "@tiptap/extension-text-style";
import Placeholder from "@tiptap/extension-placeholder";
import Link from "@tiptap/extension-link";
import TextAlign from "@tiptap/extension-text-align";
import Document from "@tiptap/extension-document";
import CodeBlockLowlight from "@tiptap/extension-code-block-lowlight";
import Blockquote from "@tiptap/extension-blockquote";
import ListItem from "@tiptap/extension-list-item";
import Paragraph from "@tiptap/extension-paragraph";
import BulletList from "@tiptap/extension-bullet-list";
import { Color } from "@tiptap/extension-color";
import Text from "@tiptap/extension-text";
import { useState } from "react";
import { common, createLowlight } from "lowlight";

export const useTextEditor = () => {
  const [editorContent, setEditorContent] = useState("");
  const lowlight = createLowlight(common);
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        bulletList: {
          keepMarks: true,
          keepAttributes: false,
        },
        orderedList: {
          keepMarks: true,
          keepAttributes: false,
        },
        codeBlock: false,
        code: {
          HTMLAttributes: {
            class: "tiptap-code",
          },
        },
        heading: {
          levels: [1, 2, 3],
        },
      }),
      Color.configure({ types: [TextStyle.name, ListItem.name] }),
      Highlight,
      Underline,
      TextStyle.configure({ types: [ListItem.name] } as any),
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
      Image.configure({ inline: true, allowBase64: true }),
      CodeBlockLowlight.configure({
        lowlight,
        defaultLanguage: "javascript",
        HTMLAttributes: {
          class: "tiptap-code-block",
        },
      }),
      Placeholder.configure({
        placeholder: "Write something …",
      }),
      Link.configure({
        protocols: [
          "https",
          "mailto",
          {
            scheme: "tel",
            optionalSlashes: true,
          },
        ],
        HTMLAttributes: {
          rel: "noopener noreferrer",
          target: null,
        },
      }),
    ],
    onUpdate({ editor }) {
      setEditorContent(editor.getHTML());
    },
  });

  return editor;
};
