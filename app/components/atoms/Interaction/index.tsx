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
        `hover:bg-hover-light active:bg-pressed-light delay-50 relative flex w-fit items-center justify-center rounded-lg px-3 py-1 transition ease-in-out`,
        "silverbi-interaction",
      ].join(" ")}
    >
      <div className={"delay-50 relative transition ease-out active:scale-90"}>{children}</div>
    </div>
  );
};

export default Interaction;
