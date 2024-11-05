import Modal from "@components/atoms/Modal";
import { ReactNode } from "react";
import Text from "@components/atoms/Text";
import { Typography } from "@styles/themes/types";
import Icon from "@components/atoms/Icon";
import { IconName } from "@components/atoms/Icon/types";

export interface FormModalProps {
  visible: boolean;
  title: string;
  onClose: () => void;
  children: ReactNode;
  padding?: string;
}

export const FormModal = ({ visible, onClose, title, children, padding }: FormModalProps) => {
  return (
    <Modal visible={visible} onClose={onClose} width={800}>
      <div className={"flex w-full flex-row justify-between border-b border-b-content-inverse-2 px-5 py-3"}>
        <Text type={Typography.SUBTITLE_2} bold>
          {title}
        </Text>

        <button onClick={onClose}>
          <Icon type={IconName.X_CLOSE} />
        </button>
      </div>

      <form className={padding ? padding : "px-5 py-4"}>{children}</form>
    </Modal>
  );
};

export default FormModal;
