import Icon from "@/components/atoms/Icon";
import { ToolMenuEditorProps } from "types/features/editors";
import { IconName } from "@/components/atoms/Icon/types";
import "../styles.css";

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
