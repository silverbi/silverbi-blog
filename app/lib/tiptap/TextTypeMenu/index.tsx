import { Editor } from "@tiptap/react";
import { Level } from "@tiptap/extension-heading";
import Icon from "@components/atoms/Icon";
import { IconName } from "@components/atoms/Icon/types";
import Text from "@components/atoms/Text";
import { useState } from "react";

interface TextTypeMenuProps {
  editor: Editor | null;
}

const TextTypeMenu = ({ editor }: TextTypeMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);

  type OptionsType = {
    value: Level;
    label: string;
  };
  const options: OptionsType[] = [
    {
      value: 1,
      label: "Heading1",
    },
    {
      value: 2,
      label: "Heading2",
    },
    {
      value: 3,
      label: "Heading3",
    },
  ];

  const handleOpenMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleCloseMenu = () => {
    setIsOpen(false);
  };

  const handleSelectHeading = (heading: Level) => {
    editor?.chain().focus().toggleHeading({ level: heading }).run();
    setIsOpen(false);
  };

  return (
    <>
      <div className="relative flex">
        <button
          type="button"
          className={`flex flex-row items-center rounded-md p-1 hover:bg-background-2`}
          onClick={handleOpenMenu}
        >
          <Icon type={IconName.TEXT_TYPE} size={"SM"} />
        </button>
        <div
          className={`absolute right-0 top-8 z-50 flex w-32 origin-top-right flex-col gap-1 rounded-md border bg-background-1 p-2 shadow-lg ${isOpen ? "visible" : "hidden"}`}
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
        >
          {options.map((option: OptionsType, index: number) => {
            const isSelectedMenu = editor?.isActive("heading", { level: option.value });

            return (
              <button
                key={index}
                onClick={() => handleSelectHeading(option.value)}
                className={`flex w-full flex-row items-center gap-2 rounded-md px-2 py-1 hover:bg-background-2 ${isSelectedMenu ? "bg-background-2" : "in-active"}`}
              >
                <Text>{option.label}</Text>
              </button>
            );
          })}
        </div>
      </div>

      {isOpen && (
        <div
          onClick={handleCloseMenu}
          className={"bg-transparent absolute bottom-0 left-0 right-0 top-0 z-40 h-full w-full overflow-hidden"}
        />
      )}
    </>
  );
};

export default TextTypeMenu;
