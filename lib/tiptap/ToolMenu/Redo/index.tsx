import "../styles.css";
import Icon from "@/components/atoms/Icon";
import { IconName } from "@/components/atoms/Icon/types";
import { Colors } from "@/styles/themes/types";
import { ToolMenuEditorProps } from "@/types/feature/editors";

export const Redo = ({ editor }: ToolMenuEditorProps) => (
  <button
    onClick={() => editor.chain().focus().redo().run()}
    disabled={!editor.can().redo()}
    className={`tool-icon ${!editor.can().redo() ? "disabled" : ""}`}
  >
    <Icon
      type={IconName.TEXT_REVERSE_RIGHT}
      color={!editor.can().redo() ? Colors.CONTENT_INVERSE_3 : Colors.CONTENT_1}
      size={"SM"}
    />
  </button>
);
Redo.displayName = "Redo";

export default Redo;
