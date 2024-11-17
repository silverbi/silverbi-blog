import Icon from "@/components/atoms/Icon";
import { ToolMenuEditorProps } from "types/features/editors";
import { IconName } from "@/components/atoms/Icon/types";
import "../styles.css";

export const Code = ({ editor }: ToolMenuEditorProps) => (
  <button
    onClick={() => editor.chain().focus().toggleCode().run()}
    disabled={false}
    className={`tool-icon ${editor.isActive("code") ? "is-active" : ""}`}
  >
    <Icon type={IconName.CODE_SNIPPET} size={"SM"} />
  </button>
);
Code.displayName = "Code";

export default Code;
