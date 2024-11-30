import "../styles.css";
import Icon from "@/components/atoms/Icon";
import { IconName } from "@/components/atoms/Icon/types";
import { ToolMenuEditorProps } from "@/types/feature/editors";

export const AlignRight = ({ editor }: ToolMenuEditorProps) => (
  <button
    onClick={() => editor.chain().focus().setTextAlign("right").run()}
    className={`tool-icon ${editor.isActive({ textAlign: "right" }) ? "is-active" : ""}`}
  >
    <Icon type={IconName.TEXT_ALIGN_RIGHT} size={"SM"} />
  </button>
);
AlignRight.displayName = "AlignRight";

export default AlignRight;
