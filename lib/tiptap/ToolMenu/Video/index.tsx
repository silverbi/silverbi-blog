import "../styles.css";
import Icon from "@/components/atoms/Icon";
import { IconName } from "@/components/atoms/Icon/types";
import { Colors } from "@/styles/themes/types";
import { ToolMenuEditorProps } from "@/types/feature/editors";
import Link from "next/link";

export const Video = ({ editor }: ToolMenuEditorProps) => {
  const handleSaveVideoLink = (url: string) => {
    editor.commands.setYoutubeVideo({
      src: url,
      width: 640,
      height: 480,
    });
  };

  return (
    <Link scroll={false} href={"/video-upload-modal"} className={`tool-icon`}>
      <Icon type={IconName.VIDEO} color={Colors.CONTENT_1} size={"SM"} />
    </Link>
  );
};
Video.displayName = "Video";

export default Video;
