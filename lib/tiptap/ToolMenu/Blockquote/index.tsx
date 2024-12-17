import "../styles.css";
import Icon from "@/components/atoms/Icon";
import { IconName } from "@/components/atoms/Icon/types";
import { ToolMenuEditorProps } from "@/types/feature/editors";

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
