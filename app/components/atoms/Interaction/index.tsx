import React from "react";

interface InteractionProps {
  className?: string | string[];
  children: React.ReactNode;
  full?: boolean;
}

export const Interaction: React.FC<InteractionProps> = ({ children, className, full }) => {
  return (
    <div
      className={[
        ...(Array.isArray(className) ? className : [className]),
        `relative flex w-fit rounded-lg px-3 py-1 transition duration-300 ease-in-out hover:bg-hover-light active:bg-pressed-light`,
        "silverbi-interaction",
      ].join(" ")}
    >
      <div className={"relative transition duration-300 ease-out active:scale-90"}>{children}</div>
    </div>
  );
};

export default Interaction;
