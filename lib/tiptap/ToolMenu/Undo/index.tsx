import Icon from "@/components/atoms/Icon";
import { ToolMenuEditorProps } from "types/features/editors";
import { IconName } from "@/components/atoms/Icon/types";
import { Colors } from "@/styles/themes/types";
import "../styles.css";

export const Undo = ({ editor }: ToolMenuEditorProps) => (
  <button
    onClick={() => editor.chain().focus().undo().run()}
    disabled={!editor.can().undo()}
    className={`tool-icon ${!editor.can().undo() ? "disabled" : ""}`}
  >
    <Icon
      type={IconName.TEXT_REVERSE_LEFT}
      color={!editor.can().undo() ? Colors.CONTENT_INVERSE_3 : Colors.CONTENT_1}
      size={"SM"}
    />
  </button>
);
Undo.displayName = "Undo";

export default Undo;
