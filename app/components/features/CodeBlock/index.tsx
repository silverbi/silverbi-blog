import { codeThemes } from "@components/features/CodeBlock/codeThemes";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

interface CodeBlockProps {
  language: string;
  value: string;
}

const CodeBlock = ({ language, value }: CodeBlockProps) => {
  return (
    <SyntaxHighlighter language={language} style={codeThemes}>
      {value}
    </SyntaxHighlighter>
  );
};

export default CodeBlock;
