import Icon from "@/components/atoms/Icon";
import { ToolMenuEditorProps } from "types/features/editors";
import { IconName } from "@/components/atoms/Icon/types";
import "../styles.css";

export const Underline = ({ editor }: ToolMenuEditorProps) => (
  <button
    onClick={() => editor.chain().focus().toggleUnderline().run()}
    disabled={!editor.can().chain().focus().toggleUnderline().run()}
    className={`tool-icon ${editor.isActive("underline") ? "is-active" : ""}`}
  >
    <Icon type={IconName.TEXT_UNDERLINE} size={"SM"} />
  </button>
);
Underline.displayName = "Underline";

export default Underline;