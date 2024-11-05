import { useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Highlight from "@tiptap/extension-highlight";
import Image from "@tiptap/extension-image";
import Underline from "@tiptap/extension-underline";
import TextStyle from "@tiptap/extension-text-style";
import Placeholder from "@tiptap/extension-placeholder";
import Link from "@tiptap/extension-link";
import TextAlign from "@tiptap/extension-text-align";
import CodeBlockLowlight from "@tiptap/extension-code-block-lowlight";
import ListItem from "@tiptap/extension-list-item";
import { Color } from "@tiptap/extension-color";
import HorizontalRule from "@tiptap/extension-horizontal-rule";
import ImageResize from "tiptap-extension-resize-image";
import { Footnotes, FootnoteReference, Footnote } from "tiptap-footnotes";
import Document from "@tiptap/extension-document";

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
        document: false,
      }),
      Document.extend({
        content: "block+ footnotes?",
      }),
      HorizontalRule.configure({
        HTMLAttributes: {
          style: "tiptap-horizontal-line",
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
          class: "tiptap-link",
          rel: "noopener noreferrer",
          target: null,
        },
      }),
      Footnotes.configure({
        HTMLAttributes: {
          class: "tiptap-footnotes",
        },
      }),
      Footnote.configure({
        HTMLAttributes: {
          class: "tiptap-footnote",
        },
      }),
      FootnoteReference.configure({
        HTMLAttributes: {
          class: "tiptap-footnote-reference",
        },
      }),
      ImageResize,
    ],
    onUpdate({ editor }) {
      setEditorContent(editor.getHTML());
    },
  });

  return editor;
};
