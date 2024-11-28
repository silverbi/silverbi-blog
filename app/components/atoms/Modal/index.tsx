"use client";

import { ReactNode } from "react";
import { CSSTransition } from "react-transition-group";
import { RoundedStylesTypes } from "../../../../types/styles";
import { roundedClasses } from "@styles/themes/rounded";
import "./styles.css";
import { useRouter } from "next/navigation";

interface ModalProps {
  children: ReactNode;
  width?: number | string;
  height?: number | string;
  rounded?: RoundedStylesTypes;
}

export const Modal = ({ children, width = "fit-content", height = "fit-content", rounded }: ModalProps) => {
  const router = useRouter();

  return (
    <CSSTransition
      in={true}
      timeout={300}
      classNames="silverbi-modal"
      unmountOnExit
      onExited={() => {
        () => router.back();
      }}
    >
      <div
        className={
          "modal-overlay fixed bottom-0 left-0 right-0 top-0 z-50 flex h-screen w-screen items-center justify-center overflow-hidden bg-modal-overlay"
        }
      >
        <CSSTransition
          in={true}
          timeout={300}
          classNames="silverbi-modal-content"
          unmountOnExit
          onExited={() => router.back()}
        >
          <div
            className={`relative max-h-[90%] max-w-[90%] bg-background-1 ${rounded ? roundedClasses[rounded] : "rounded-lg"}`}
            style={{
              width: typeof width === "number" ? `${width}px` : width,
              height: typeof height === "number" ? `${height}px` : height,
            }}
            onClick={e => e.stopPropagation()}
          >
            {children}
          </div>
        </CSSTransition>
      </div>
    </CSSTransition>
  );
};

export default Modal;
