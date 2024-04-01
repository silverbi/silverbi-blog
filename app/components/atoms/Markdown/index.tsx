import React from "react";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { nord } from "react-syntax-highlighter/dist/esm/styles/prism";
import remarkGfm from "remark-gfm";

interface MarkdownProps {
  children: string;
}

const Markdown: React.FC<MarkdownProps> = ({ children }) => {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        code({ className, children }) {
          const match = /language-(\w+)/.exec(className || "");
          return match ? (
            // 코드 (```)
            <SyntaxHighlighter style={nord} language={match[1]} PreTag="div">
              {String(children)
                .replace(/\n$/, "")
                .replace(/\n&nbsp;\n/g, "")
                .replace(/\n&nbsp\n/g, "")}
            </SyntaxHighlighter>
          ) : (
            <SyntaxHighlighter style={nord} background="blue" language="textile" PreTag="div">
              {String(children).replace(/\n$/, "")}
            </SyntaxHighlighter>
          );
        },
        blockquote({ children, ...props }) {
          // 인용구 (>)
          return (
            <div className={"flex gap-4"}>
              <div className={"h-full w-1 bg-border-inverse-3"} />
              <blockquote className={"text-content-inverse-3"} {...props}>
                {children}
              </blockquote>
            </div>
          );
        },
        img({ ...props }) {
          return (
            <img
              style={{ maxWidth: "40vw" }}
              src={props.src?.replace("../../../../public/", "/")}
              alt="MarkdownRenderer__Image"
            />
          );
        },
        em({ children, ...props }) {
          return (
            <span style={{ fontStyle: "italic" }} {...props}>
              {children}
            </span>
          );
        },
      }}
    >
      {children
        .replace(/\n/gi, "\n\n")
        .replace(/\*\*/gi, "@$_%!^")
        .replace(/@\$_%!\^/gi, "**")
        .replace(/<\/?u>/gi, "*")}
    </ReactMarkdown>
  );
};

export default React.memo(Markdown);
