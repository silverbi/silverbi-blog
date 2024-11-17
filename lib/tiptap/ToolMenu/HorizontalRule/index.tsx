import Icon from "@/components/atoms/Icon";
import { ToolMenuEditorProps } from "types/features/editors";
import { IconName } from "@/components/atoms/Icon/types";
import { Colors } from "@/styles/themes/types";
import "../styles.css";

export const HorizontalRule = ({ editor }: ToolMenuEditorProps) => (
  <button onClick={() => editor.chain().focus().setHorizontalRule().run()} disabled={false} className={`tool-icon`}>
    <Icon type={IconName.DOTTED_LINE} color={Colors.CONTENT_1} size={"SM"} />
  </button>
);
HorizontalRule.displayName = "HorizontalRule";

export default HorizontalRule;
