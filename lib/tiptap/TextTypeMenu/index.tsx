import { Editor } from "@tiptap/core";
import { Level } from "@tiptap/extension-heading";
import { useState } from "react";

interface TextTypeMenuProps {
  editor: Editor;
}

const TextTypeMenu = ({ editor }: TextTypeMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);

  type OptionsType = {
    value: Level | 0;
    label: string;
  };
  const options: OptionsType[] = [
    {
      value: 1,
      label: "H1",
    },
    {
      value: 2,
      label: "H2",
    },
    {
      value: 3,
      label: "H3",
    },
    {
      value: 0,
      label: "P",
    },
  ];

  const handleOpenMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleCloseMenu = () => {
    setIsOpen(false);
  };

  const handleSelectHeading = (heading: Level | 0) => {
    if (heading === 0) {
      editor.chain().focus().setParagraph().run();
      setIsOpen(false);
      return;
    }

    editor.chain().focus().toggleHeading({ level: heading }).run();
    setIsOpen(false);
  };

  return (
    <>
      <div className="relative flex">
        {/* <button
          type="button"
          className={`flex flex-row items-center rounded-md p-1 hover:bg-background-2`}
          onClick={handleOpenMenu}
        >
          <Icon type={IconName.TEXT_TYPE} size={"SM"} />
        </button> */}
        <div
          className={`absolute right-0 top-8 z-50 flex w-20 origin-top-right flex-col gap-1 rounded-md border bg-background-1 p-2 shadow-lg ${isOpen ? "visible" : "hidden"}`}
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
        >
          {options.map((option: OptionsType, index: number) => {
            const isSelectedMenu =
              editor.isActive("heading", { level: option.value }) ||
              (!editor.getAttributes("heading")?.level && option.value === 0);

            return (
              <button
                key={index}
                onClick={() => handleSelectHeading(option.value)}
                className={`flex w-full flex-row items-center gap-2 rounded-md px-2 py-1 hover:bg-background-2 ${isSelectedMenu ? "bg-background-2" : "in-active"}`}
              >
                {/* <Text>{option.label}</Text> */}
              </button>
            );
          })}
        </div>
      </div>

      {isOpen && (
        <div
          onClick={handleCloseMenu}
          className={"absolute bottom-0 left-0 right-0 top-0 z-40 h-full w-full overflow-hidden bg-transparent"}
        />
      )}
    </>
  );
};

export default TextTypeMenu;
