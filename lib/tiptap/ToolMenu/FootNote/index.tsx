import "../styles.css";
import Icon from "@/components/atoms/Icon";
import { IconName } from "@/components/atoms/Icon/types";
import { Colors } from "@/styles/themes/types";
import { ToolMenuEditorProps } from "@/types/feature/editors";

export const FootNote = ({ editor }: ToolMenuEditorProps) => {
  return (
    <button
      onClick={() => editor?.commands.addFootnote()}
      disabled={false}
      className={`tool-icon ${!editor.can() ? "disabled" : ""}`}
    >
      <Icon type={IconName.FOOTNOTE} color={Colors.CONTENT_1} size={"SM"} />
    </button>
  );
};
FootNote.displayName = "FootNote";

export default FootNote;
