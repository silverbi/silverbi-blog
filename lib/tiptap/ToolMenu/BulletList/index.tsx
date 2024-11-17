import Icon from "@/components/atoms/Icon";
import { ToolMenuEditorProps } from "types/features/editors";
import { IconName } from "@/components/atoms/Icon/types";
import "../styles.css";

export const BulletList = ({ editor }: ToolMenuEditorProps) => (
  <button
    onClick={() => editor.chain().focus().toggleBulletList().run()}
    className={`tool-icon ${editor.isActive("bulletList") ? "is-active" : ""}`}
  >
    <Icon type={IconName.DOTPOINTS} size={"SM"} />
  </button>
);
BulletList.displayName = "BulletList";

export default BulletList;
