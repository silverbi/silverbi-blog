import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { codeThemes } from "@components/molecules/CodeBlock/codeThemes";

interface CodeBlockProps {
  language: string;
  value: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ language, value }) => {
  return (
    <SyntaxHighlighter language={language} style={codeThemes}>
      {value}
    </SyntaxHighlighter>
  );
};

export default CodeBlock;
