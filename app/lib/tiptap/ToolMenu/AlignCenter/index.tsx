import Icon from "@/components/atoms/Icon";
import { ToolMenuEditorProps } from "types/features/editors";
import { IconName } from "@/components/atoms/Icon/types";
import "../styles.css";

export const AlignCenter = ({ editor }: ToolMenuEditorProps) => (
  <button
    onClick={() => editor.chain().focus().setTextAlign("center").run()}
    className={`tool-icon ${editor.isActive({ textAlign: "center" }) ? "is-active" : ""}`}
  >
    <Icon type={IconName.TEXT_ALIGN_CENTER} size={"SM"} />
  </button>
);
AlignCenter.displayName = "AlignCenter";

export default AlignCenter;