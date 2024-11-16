import { EditorContent } from "@tiptap/react";
import ToolBar from "@lib/tiptap/Toolbar";
import Button from "@components/atoms/Button";
import Text from "@components/atoms/Text";
import { Typography } from "@styles/themes/types";
import { useTextEditor } from "@hooks/useTextEditor";
import "./styles.css";
import { Editor as EditorTypes } from "@tiptap/react";
import BubbleEditorMenu from "@lib/tiptap/BubbleEditorMenu";
import IconButton from "@/components/atoms/IconButton";
import Icon from "@/components/atoms/Icon";
import { IconName } from "@/components/atoms/Icon/types";
import { SubmitHandler, useForm } from "react-hook-form";
import { Inputs } from "types/hooks";

interface EditorProps {
  editor: EditorTypes | null;
  handleUploadPost: (values: Inputs) => void;
}

const Editor = ({ editor, handleUploadPost }: EditorProps) => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (values: Inputs) => {
    handleUploadPost(values);
  };

  if (!editor) {
    return null;
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div
        className={"fixed left-0 right-0 top-0 z-50 flex w-full justify-between border-b bg-background-1 px-4 py-1.5"}
      >
        <IconButton>
          <Icon type={IconName.X_CLOSE} size={"SM"} />
        </IconButton>

        <div className={"flex gap-2"}>
          <Button size={"SM"}>저장</Button>
          <Button size={"SM"} type={"submit"}>
            글 발행
          </Button>
        </div>
      </div>

      <div className={"flex h-full w-full flex-col items-center justify-center"}>
        <div className={"fixed top-12 w-full bg-background-1"}>
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
    </form>
  );
};

export default Editor;
