import "../styles.css";
import Icon from "@/components/atoms/Icon";
import { IconName } from "@/components/atoms/Icon/types";
import { Colors } from "@/styles/themes/types";
import { ToolMenuEditorProps } from "@/types/feature/editors";
import Link from "next/link";

export const Image = ({ editor }: ToolMenuEditorProps) => {
  return (
    <Link scroll={false} href={"/image-upload-modal"} className={`tool-icon`}>
      <Icon type={IconName.IMAGE} color={Colors.CONTENT_1} size={"SM"} />
    </Link>
  );
};
Image.displayName = "Image";

export default Image;
