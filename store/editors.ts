import { create } from "zustand";
import { Editor } from "@tiptap/react";

interface EditorState {
  editor: Editor | undefined;
  content: string | undefined;
  setEditorContent: (contnet: string | undefined) => void;
  setEditor: (editor: Editor | undefined) => void;
}

export const useEditorState = create<EditorState>()(set => ({
  editor: undefined,
  content: "",
  setEditorContent: content => set(() => ({ content })),
  setEditor: editor => set(() => ({ editor })),
}));
