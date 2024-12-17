import "../styles.css";
import { ToolMenuEditorProps } from "@/types/feature/editors";
import { ChangeEvent } from "react";

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
