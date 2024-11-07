import Icon from "@/components/atoms/Icon";
import { ToolMenuEditorProps } from "types/features/editors";
import { IconName } from "@/components/atoms/Icon/types";
import { Colors } from "@/styles/themes/types";
import { useState } from "react";
import ImageUploadModal, { FilePreviewProps } from "@/components/molecules/CustomModal/ImageUploadModal";
import "../styles.css";

export const Image = ({ editor }: ToolMenuEditorProps) => {
  const [visible, setVisible] = useState(false);

  const handleSaveImage = (selectedFiles: FilePreviewProps[]) => {
    if (!selectedFiles?.length) return;

    selectedFiles.map((item, index) => {
      console.log("item ", item);
      if (!item?.previewUrl) return;

      editor.chain().focus().setImage({ src: item.previewUrl }).run();
    });
  };

  return (
    <>
      <ImageUploadModal
        visible={visible}
        onClose={() => setVisible(false)}
        handleSaveImage={handleSaveImage}
      ></ImageUploadModal>

      <button onClick={() => setVisible(true)} disabled={false} className={`tool-icon`}>
        <Icon type={IconName.IMAGE} color={Colors.CONTENT_1} size={"SM"} />
      </button>
    </>
  );
};
Image.displayName = "Image";

export default Image;
