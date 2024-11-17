import Icon from "@/components/atoms/Icon";
import { ToolMenuEditorProps } from "types/features/editors";
import { IconName } from "@/components/atoms/Icon/types";
import { Colors } from "@/styles/themes/types";
import "../styles.css";

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
