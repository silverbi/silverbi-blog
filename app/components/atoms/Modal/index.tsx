import ReactDOM from "react-dom";
import { ReactNode } from "react";
import { CSSTransition } from "react-transition-group";
import { RoundedStylesTypes } from "../../../../types/styles";
import { roundedClasses } from "@styles/themes/rounded";
import "./styles.css";

export interface ModalPortalProps {
  children: React.ReactNode;
}

export const ModalPortal = ({ children }: ModalPortalProps) => {
  const el = document.getElementById("modal");
  return ReactDOM.createPortal(children, el as Element | DocumentFragment);
};

interface ModalProps {
  children: ReactNode;
  visible: boolean;
  onClose: () => void;
  width?: number | string;
  height?: number | string;
  rounded?: RoundedStylesTypes;
}

export const Modal = ({
  children,
  visible,
  onClose,
  width = "fit-content",
  height = "fit-content",
  rounded,
}: ModalProps) => {
  return (
    <ModalPortal>
      <CSSTransition in={visible} timeout={300} classNames="silverbi-modal" unmountOnExit onExited={onClose}>
        <div
          className={
            "modal-overlay fixed bottom-0 left-0 right-0 top-0 z-50 flex h-screen w-screen items-center justify-center bg-modal-overlay"
          }
          onClick={onClose}
        >
          <CSSTransition
            in={visible}
            timeout={300}
            classNames="silverbi-modal-content"
            unmountOnExit
            onExited={onClose}
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
    </ModalPortal>
  );
};

export default Modal;
