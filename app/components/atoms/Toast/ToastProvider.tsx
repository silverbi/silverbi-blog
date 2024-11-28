"use client";

import { Slide, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

const ToastProvider = () => {
  return (
    <ToastContainer
      toastClassName={"silverbi-toast bg-background-inverse-1 rounded-lg h-fit flex items-center"}
      bodyClassName={"m-0 py-0 h-fit flex items-center"}
      draggable={false}
      autoClose={3000}
      transition={Slide}
      position={"bottom-center"}
      closeButton={true}
      hideProgressBar={true}
      theme={"dark"}
    />
  );
};

export default ToastProvider;
