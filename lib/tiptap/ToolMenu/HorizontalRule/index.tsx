import "../styles.css";
import Icon from "@/components/atoms/Icon";
import { IconName } from "@/components/atoms/Icon/types";
import { Colors } from "@/styles/themes/types";
import { ToolMenuEditorProps } from "@/types/feature/editors";

export const HorizontalRule = ({ editor }: ToolMenuEditorProps) => (
  <button onClick={() => editor.chain().focus().setHorizontalRule().run()} disabled={false} className={`tool-icon`}>
    <Icon type={IconName.DOTTED_LINE} color={Colors.CONTENT_1} size={"SM"} />
  </button>
);
HorizontalRule.displayName = "HorizontalRule";

export default HorizontalRule;
