import Icon from "@/components/atoms/Icon";
import { ToolMenuEditorProps } from "types/features/editors";
import { IconName } from "@/components/atoms/Icon/types";
import "../styles.css";

export const CodeBlock = ({ editor }: ToolMenuEditorProps) => (
  <button
    onClick={() => editor.chain().focus().toggleCodeBlock().run()}
    disabled={false}
    className={`tool-icon ${editor.isActive("codeBlock") ? "is-active" : ""}`}
  >
    <Icon type={IconName.CODE_BROWSER} size={"SM"} />
  </button>
);
CodeBlock.displayName = "CodeBlock";

export default CodeBlock;
