import Icon from "@/components/atoms/Icon";
import { ToolMenuEditorProps } from "types/features/editors";
import { IconName } from "@/components/atoms/Icon/types";
import "../styles.css";

export const Strike = ({ editor }: ToolMenuEditorProps) => (
  <button
    onClick={() => editor.chain().focus().toggleStrike().run()}
    disabled={!editor.can().chain().focus().toggleStrike().run()}
    className={`tool-icon ${editor.isActive("strike") ? "is-active" : ""}`}
  >
    <Icon type={IconName.TEXT_STRIKE} size={"SM"} />
  </button>
);
Strike.displayName = "Strike";

export default Strike;
