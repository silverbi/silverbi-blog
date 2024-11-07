import { ToolMenuEditorProps } from "types/features/editors";
import { ChangeEvent } from "react";
import "../styles.css";

export const Color = ({ editor }: ToolMenuEditorProps) => (
  <div
    className={`tool-icon ${!!editor.getAttributes("textStyle").color && editor.getAttributes("textStyle").color !== "#000000" ? "is-active" : ""}`}
  >
    <input
      type="color"
      onInput={(event: ChangeEvent<HTMLInputElement>) => editor.chain().focus().setColor(event.target.value).run()}
      value={editor.getAttributes("textStyle").color}
      className={"color-palette"}
    />
  </div>
);
Color.displayName = "Color";

export default Color;
