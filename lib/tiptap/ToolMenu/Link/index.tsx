import "../styles.css";
import Icon from "@/components/atoms/Icon";
import { IconName } from "@/components/atoms/Icon/types";
import { Colors } from "@/styles/themes/types";
import { ToolMenuEditorProps } from "@/types/feature/editors";
import { useCallback } from "react";

export const Link = ({ editor }: ToolMenuEditorProps) => {
  const handleClickLinkButton = useCallback(() => {
    if (editor.isActive("link")) {
      editor.chain().focus().unsetLink().run();
      return;
    }

    const previousUrl = editor.getAttributes("link").href;
    const url = window.prompt("URL", previousUrl);

    // cancelled
    if (url === null) {
      return;
    }

    // empty
    if (url === "") {
      editor.chain().focus().extendMarkRange("link").unsetLink().run();

      return;
    }

    // update link
    editor.chain().focus().extendMarkRange("link").setLink({ href: url }).run();
  }, [editor]);

  return (
    <button onClick={handleClickLinkButton} className={`tool-icon`}>
      <Icon type={IconName.LINK} color={Colors.CONTENT_1} size={"SM"} />
    </button>
  );
};
Link.displayName = "Link";

export default Link;
