"use client";

import { FormModal } from "@/components/molecules/CustomModal/FormModal";
import { useRef, useState } from "react";
import Button from "@/components/atoms/Button";
import Text from "@/components/atoms/Text";
import Image from "next/image";
import { Inputs } from "types/hooks";
import { Colors, Typography } from "@/styles/themes/types";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { useEditorState } from "@/store/editors";

export interface FilePreviewProps {
  file: File;
  previewUrl: string | null;
  isSelected: boolean;
}

export const ImageUploadModal = () => {
  const router = useRouter();
  const editor = useEditorState(state => state.editor);
  const setEditor = useEditorState(state => state.setEditor);

  const [files, setFiles] = useState<FilePreviewProps[]>([]);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const hasFiles = files?.length;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const handleUploadImages = () => {
    const selectedFileArray = files.filter(file => file.isSelected);
    if (!selectedFileArray?.length) return;

    selectedFileArray.map((item, index) => {
      if (!item?.previewUrl) return;

      editor?.chain().focus().setImage({ src: item.previewUrl }).run();
    });
    setEditor(editor);
    setFiles([]);
  };

  const handleClickButton = () => {
    fileInputRef.current!.click();
  };

  const addFiles = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = event.target.files;
    if (!selectedFiles) return;

    const fileArray = Array.from(selectedFiles).map(file => {
      const previewUrl = file.type.startsWith("image/") ? URL.createObjectURL(file) : null;
      return { file, previewUrl, isSelected: true };
    });

    const updatedFiles = [...files, ...fileArray];

    if (updatedFiles.length > 10) {
      alert("최대 10개까지 파일을 선택할 수 있습니다.");
      return;
    }

    setFiles(updatedFiles);
  };

  const handleSelectImage = (index: number) => {
    setFiles(prevFiles => prevFiles.map((file, i) => (i === index ? { ...file, isSelected: !file.isSelected } : file)));
  };

  const onSubmit: SubmitHandler<Inputs> = (values: Inputs) => {
    handleUploadImages();
    router.back();
  };

  return (
    <FormModal onSubmit={handleSubmit(onSubmit)} title={"이미지 업로드"} padding={"py-3 0"}>
      {Boolean(hasFiles) && (
        <div
          className={"flex w-full flex-row items-end justify-start gap-2 border-b border-b-content-inverse-2 px-5 pb-3"}
        >
          <Button size={"SM"} type={"button"} onClick={handleClickButton}>
            이미지 추가
          </Button>
          <Text type={Typography.BODY_3} color={Colors.CONTENT_3}>
            최대 20MB, 10개의 이미지를 업로드할 수 있어요.
          </Text>
          <hr className={"-ml-5 -mr-5 box-border border-none bg-content-inverse-2"} />
        </div>
      )}

      <div className={"flex flex-col items-end justify-start gap-6 px-5 py-4"}>
        {/** 이미지 없을 때 */}
        {!Boolean(hasFiles) && (
          <div
            className={"flex h-full min-h-56 w-full flex-col items-center justify-center gap-4 rounded-lg border p-4"}
          >
            <div className={"flex w-full flex-col items-center justify-center gap-4"}>
              <div className={"flex flex-col items-center justify-center gap-1"}>
                <Text type={Typography.SUBTITLE_2} bold>
                  이미지를 업로드해 주세요.
                </Text>
                <Text color={Colors.CONTENT_3}>최대 20MB, 10개의 이미지를 업로드할 수 있어요.</Text>
              </div>
              <Button type={"button"} onClick={handleClickButton}>
                이미지 추가
              </Button>
            </div>
          </div>
        )}

        {/* 이미지 미리보기 */}
        {Boolean(hasFiles) && (
          <div className={"flex w-full flex-wrap gap-2"}>
            {files?.map((fileData, index) => (
              <button
                key={index}
                type={"button"}
                onClick={() => handleSelectImage(index)}
                className={"relative h-[140px] w-[140px] cursor-pointer overflow-hidden rounded-lg"}
              >
                {fileData.previewUrl && (
                  <>
                    <div
                      className={`absolute right-2 top-2 z-10 flex h-6 w-6 items-center justify-center rounded-full pt-0.5 ${fileData.isSelected ? "border-2 border-content-1 bg-content-1" : "border-2 border-content-inverse-1"} shadow-md duration-150 ease-in hover:border-2`}
                    >
                      {fileData.isSelected && (
                        <Text type={Typography.BODY_3} bold color={Colors.CONTENT_INVERSE_1}>
                          {index + 1}
                        </Text>
                      )}
                    </div>
                    <Image src={fileData.previewUrl} alt={"Preview"} fill className={"z-0 object-cover"} />
                  </>
                )}
              </button>
            ))}
          </div>
        )}

        <input
          {...register("images")}
          ref={fileInputRef}
          id="fileInput"
          className="file-input hidden"
          type="file"
          accept=".jpg, .png, .jpeg, .webp"
          onChange={addFiles}
          multiple
        />

        <div className={"flex w-fit gap-2"}>
          <Button size={"SM"} tag={"TERTIARY"} type="button" onClick={() => router.back()}>
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

export default ImageUploadModal;
