import "../styles.css";
import Icon from "@/components/atoms/Icon";
import { IconName } from "@/components/atoms/Icon/types";
import { ToolMenuEditorProps } from "@/types/feature/editors";

export const OrderedList = ({ editor }: ToolMenuEditorProps) => (
  <button
    onClick={() => editor.chain().focus().toggleOrderedList().run()}
    className={`tool-icon ${editor.isActive("orderedList") ? "is-active" : ""}`}
  >
    <Icon type={IconName.NUMBERED_LIST} size={"SM"} />
  </button>
);
OrderedList.displayName = "OrderedList";

export default OrderedList;
