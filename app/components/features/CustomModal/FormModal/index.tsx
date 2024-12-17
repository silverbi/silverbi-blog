"use client";

import { useRouter } from "next/navigation";
import { ReactNode } from "react";

export interface FormModalProps {
  title: string;
  children: ReactNode;
  padding?: string;
  onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
}

export const FormModal = ({ onSubmit, title, children, padding }: FormModalProps) => {
  const router = useRouter();

  return (
    <div>
      {/* <Modal width={800}>
      
      <div className={"flex w-full flex-row justify-between border-b border-b-content-inverse-2 px-5 py-3"}>
        <Text type={Typography.SUBTITLE_2} bold>
          {title}
        </Text>

        <button onClick={() => router.back()}>
          <Icon type={IconName.X_CLOSE} />
        </button>
      </div>

      <form onSubmit={onSubmit} className={padding ? padding : "px-5 py-4"}>
        {children}
      </form> 
    </Modal>*/}
    </div>
  );
};

export default FormModal;
