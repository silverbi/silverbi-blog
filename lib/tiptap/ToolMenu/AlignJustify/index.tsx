import "../styles.css";
import Icon from "@/components/atoms/Icon";
import { IconName } from "@/components/atoms/Icon/types";
import { ToolMenuEditorProps } from "@/types/feature/editors";

export const AlignJustify = ({ editor }: ToolMenuEditorProps) => (
  <button
    onClick={() => editor.chain().focus().setTextAlign("justify").run()}
    className={`tool-icon ${editor.isActive({ textAlign: "justify" }) ? "is-active" : ""}`}
  >
    <Icon type={IconName.TEXT_ALIGN_JUSTIFY} size={"SM"} />
  </button>
);
AlignJustify.displayName = "AlignJustify";

export default AlignJustify;
