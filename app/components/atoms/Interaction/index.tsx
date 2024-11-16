import React from "react";

interface InteractionProps {
  className?: string | string[];
  children: React.ReactNode;
  full?: boolean;
}

export const Interaction = ({ children, className, full }: InteractionProps) => {
  return (
    <div
      className={[
        ...(Array.isArray(className) ? className : [className]),
        `relative flex w-fit rounded-lg px-2 transition duration-300 ease-in-out hover:bg-hover-light active:bg-pressed-light`,
        "silverbi-interaction",
      ].join(" ")}
    >
      <div className={"relative flex items-center justify-center transition duration-300 ease-out active:scale-90"}>
        {children}
      </div>
    </div>
  );
};

export default Interaction;
