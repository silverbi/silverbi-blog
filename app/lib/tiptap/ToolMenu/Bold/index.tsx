import Icon from "@/components/atoms/Icon";
import { ToolMenuEditorProps } from "types/features/editors";
import { IconName } from "@/components/atoms/Icon/types";
import "../styles.css";

export const Bold = ({ editor }: ToolMenuEditorProps) => {
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
Bold.displayName = "Bold";

export default Bold;
