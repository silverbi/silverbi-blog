import Button from "@/components/atoms/Button";
import FormModal from "../FormModal";
import { SubmitHandler, useForm } from "react-hook-form";
import { Inputs } from "types/hooks";
import Text from "@/components/atoms/Text";
import { Typography } from "@/styles/themes/types";

export interface VideoUploadModalProps {
  visible: boolean;
  onClose: () => void;
  handleSaveVideoLink: (url: string) => void;
}

export const VideoUploadModal = ({ visible, onClose, handleSaveVideoLink }: VideoUploadModalProps) => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (values: Inputs) => {
    handleSaveVideoLink(values.video);
    onClose();
    reset();
  };

  return (
    <FormModal visible={visible} onClose={onClose} title={"비디오 업로드"} onSubmit={() => handleSubmit(onSubmit)}>
      <div className={"flex flex-col items-center gap-8"}>
        <div className={"flex w-96 flex-col items-center justify-center gap-3 overflow-hidden rounded-lg px-3 py-2"}>
          <Text type={Typography.SUBTITLE_2} bold>
            비디오 링크를 입력해 주세요.
          </Text>
          <input
            defaultValue=""
            className={"w-full rounded-lg border border-border-1 px-2 py-1"}
            {...register("video")}
          />
        </div>

        <div className={"flex w-full justify-end gap-2"}>
          <Button size={"SM"} tag={"TERTIARY"} type="button" onClick={onClose}>
            취소
          </Button>
          <Button size={"SM"} type="submit">
            업로드
          </Button>
        </div>
      </div>
    </FormModal>
  );
};

export default VideoUploadModal;
