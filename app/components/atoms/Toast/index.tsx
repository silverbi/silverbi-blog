import { toast, cssTransition, ToastOptions } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

const successToast = (message: string, options?: ToastOptions) => {
  return toast.success(message, { ...options });
};
const infoToast = (message: string, options?: ToastOptions) => {
  return toast.info(message, { ...options });
};
const warningToast = (message: string, options?: ToastOptions) => {
  return toast.warning(message, { ...options });
};
const errorToast = (message: string, options?: ToastOptions) => {
  return toast.error(message, { ...options });
};

export { successToast, infoToast, warningToast, errorToast };
