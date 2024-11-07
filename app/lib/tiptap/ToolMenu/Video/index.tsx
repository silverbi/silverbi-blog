import Icon from "@/components/atoms/Icon";
import { ToolMenuEditorProps } from "types/features/editors";
import { IconName } from "@/components/atoms/Icon/types";
import { Colors } from "@/styles/themes/types";
import { useState } from "react";
import VideoUploadModal from "@/components/molecules/CustomModal/VideoUploadModal";
import "../styles.css";

export const Video = ({ editor }: ToolMenuEditorProps) => {
  const [visible, setVisible] = useState(false);

  const handleSaveVideoLink = (url: string) => {
    editor.commands.setYoutubeVideo({
      src: url,
      width: 640,
      height: 480,
    });
  };

  return (
    <>
      <VideoUploadModal visible={visible} onClose={() => setVisible(false)} handleSaveVideoLink={handleSaveVideoLink} />

      <button onClick={() => setVisible(true)} disabled={false} className={`tool-icon`}>
        <Icon type={IconName.VIDEO} color={Colors.CONTENT_1} size={"SM"} />
      </button>
    </>
  );
};
Video.displayName = "Video";

export default Video;
