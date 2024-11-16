import React, { useState } from "react";

interface ToggleProps {
  checked: boolean;
  className?: string;
}

const Toggle = ({ checked = false, className }: ToggleProps) => {
  const [isChecked, setIsChecked] = useState(checked);

  const handleChangeToggle = () => {
    setIsChecked(prev => !prev);
  };

  const checkedWrapper = `bg-background-inverse-1`;
  const checkedCircle = `bg-background-1 left-1/2`;

  return (
    <div onClick={handleChangeToggle} className={`cursor-pointer ${className}`}>
      <div
        className={`relative flex h-5 w-10 rounded-full outline outline-1 transition-all duration-200 ease-in-out ${isChecked ? checkedWrapper : "bg-transparent"}`}
      >
        <div
          className={`absolute m-1 h-3 w-3 rounded-full outline outline-1 transition-all duration-200 ease-in-out ${isChecked ? checkedCircle : "left-0"}`}
        />
      </div>
    </div>
  );
};

export default Toggle;
