import { Editor } from "@tiptap/react";
import { ChangeEvent, useState } from "react";

interface LinkMenuProps {
  editor: Editor;
}
const LinkMenu = ({ editor }: LinkMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [link, setLink] = useState<string>("");
  const [error, setError] = useState<string>("");

  if (!editor) {
    return null;
  }

  const handleChangeLink = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setLink(value);
  };

  const handleConfirm = () => {
    // cancelled
    if (link === null) {
      return;
    }

    // empty
    if (link === "") {
      (editor.commands as any).unsetLink();
      return;
    }

    // update link
    (editor.commands as any).setLink({ href: link });
    setError("");
    setLink("");
    setIsOpen(false);
  };

  const handleCancel = () => {
    (editor.commands as any).unsetLink();
    setError("");
    setLink("");
    setIsOpen(false);
  };

  return <div></div>;
};

export default LinkMenu;
