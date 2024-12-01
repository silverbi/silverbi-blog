import "../styles.css";
import Icon from "@/components/atoms/Icon";
import { IconName } from "@/components/atoms/Icon/types";
import { ToolMenuEditorProps } from "@/types/feature/editors";

export const AlignLeft = ({ editor }: ToolMenuEditorProps) => (
  <button
    onClick={() => editor.chain().focus().setTextAlign("left").run()}
    className={`tool-icon ${editor.isActive({ textAlign: "left" }) ? "is-active" : ""}`}
  >
    <Icon type={IconName.TEXT_ALIGN_LEFT} size={"SM"} />
  </button>
);
AlignLeft.displayName = "AlignLeft";

export default AlignLeft;
