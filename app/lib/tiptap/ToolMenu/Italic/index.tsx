import Icon from "@/components/atoms/Icon";
import { ToolMenuEditorProps } from "types/features/editors";
import { IconName } from "@/components/atoms/Icon/types";
import "../styles.css";

export const Italic = ({ editor }: ToolMenuEditorProps) => (
  <button
    onClick={() => editor.chain().focus().toggleItalic().run()}
    disabled={!editor.can().chain().focus().toggleItalic().run()}
    className={`tool-icon ${editor.isActive("italic") ? "is-active" : ""}`}
  >
    <Icon type={IconName.TEXT_ITALIC} size={"SM"} />
  </button>
);
Italic.displayName = "Italic";

export default Italic;
