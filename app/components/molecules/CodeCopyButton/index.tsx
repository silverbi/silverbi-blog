"use client";

import React from "react";
import IconButton from "@components/atoms/IconButton";
import { IconName } from "@components/atoms/Icon/types";
import Icon from "@components/atoms/Icon";
import { Colors } from "@styles/themes/types";

export interface CodeCopyBtnProps {
  children: any;
}

const CodeCopyButton: React.FC<CodeCopyBtnProps> = ({ children }) => {
  const [copyOk, setCopyOk] = React.useState(false);

  const handleClick = async () => {
    await navigator.clipboard.writeText(children);

    setCopyOk(true);
    setTimeout(() => {
      setCopyOk(false);
    }, 500);
  };

  return (
    <IconButton onClick={handleClick} className={"hover:opacity-80"}>
      {copyOk ? (
        <Icon type={IconName.CHECK_CIRCLE} size={"SM"} color={Colors.SEMANTIC_SUCCESS} />
      ) : (
        <Icon type={IconName.COPY_CLIPBOARD} size={"SM"} color={Colors.CONTENT_INVERSE_1} />
      )}
    </IconButton>
  );
};

export default CodeCopyButton;
