import { EditorContent } from "@tiptap/react";
import ToolBar from "lib/tiptap/Toolbar";
import Button from "@/components/atoms/Button";
import Text from "@/components/atoms/Text";
import { Typography } from "@styles/themes/types";
import "./styles.css";
import { UseFormRegister, FieldValues } from "react-hook-form";
import { Editor as EditorTypes } from "@tiptap/react";
import BubbleEditorMenu from "lib/tiptap/BubbleEditorMenu";
import IconButton from "@/components/atoms/IconButton";
import Icon from "@/components/atoms/Icon";
import { IconName } from "@/components/atoms/Icon/types";
import { useRouter } from "next/navigation";

interface EditorProps {
  editor: EditorTypes | null;
  register: UseFormRegister<FieldValues>;
}

const Editor = ({ editor, register }: EditorProps) => {
  const router = useRouter();

  if (!editor) {
    return null;
  }

  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <div
        className={"fixed left-0 right-0 top-0 z-40 flex w-full justify-between border-b bg-background-1 px-4 py-1.5"}
      >
        <IconButton onClick={() => router.back()}>
          <Icon type={IconName.X_CLOSE} size={"SM"} />
        </IconButton>

        <div className={"flex gap-2"}>
          <Button size={"SM"}>저장</Button>
          <Button size={"SM"} type={"submit"}>
            글 발행
          </Button>
        </div>
      </div>

      <div className={"fixed top-12 z-30 w-full bg-background-1"}>
        <ToolBar editor={editor} />
      </div>

      <div className={"mt-32 w-full max-w-lg overflow-hidden pb-20"}>
        <div className={"flex flex-col gap-2 border-b border-border-inverse-2 px-8 py-10"}>
          <input
            className={"text-3xl font-semibold focus:outline-none active:outline-none"}
            placeholder={"제목을 입력하세요"}
            {...register("title")}
          />
          <input
            className={"focus:outline-none active:outline-none"}
            placeholder="소제목을 입력하세요"
            {...register("subtitle")}
          />
        </div>
        <BubbleEditorMenu editor={editor} duration={100} />
        <EditorContent
          className={"editor-content h-[520px] cursor-text"}
          id="tiptap"
          editor={editor}
          onClick={() => editor?.commands.focus()}
        />
      </div>

      <div className={"fixed bottom-0 left-0 right-0 flex h-8 w-full items-center border-t bg-background-1 px-4"}>
        <Text type={Typography.BODY_3}>{editor.storage.characterCount.characters()} words</Text>
      </div>
    </div>
  );
};

export default Editor;
