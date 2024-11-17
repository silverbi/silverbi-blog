import Icon from "@/components/atoms/Icon";
import { ToolMenuEditorProps } from "types/features/editors";
import { IconName } from "@/components/atoms/Icon/types";
import "../styles.css";

export const Blockquote = ({ editor }: ToolMenuEditorProps) => (
  <button
    onClick={() => editor.chain().focus().toggleBlockquote().run()}
    disabled={false}
    className={`tool-icon ${editor.isActive("blockquote") ? "is-active" : ""}`}
  >
    <Icon type={IconName.QUOTE} size={"SM"} />
  </button>
);
Blockquote.displayName = "Blockquote";

export default Blockquote;
