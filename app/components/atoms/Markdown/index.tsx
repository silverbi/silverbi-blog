import React from "react";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import dracula from "react-syntax-highlighter/dist/cjs/styles/prism/dracula";
import remarkGfm from "remark-gfm";

interface MarkdownProps {
  children: string;
}

const Markdown: React.FC<MarkdownProps> = ({ children }) => {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        code(props) {
          const { children, className, node, ...rest } = props;
          const match = /language-(\w+)/.exec(className || "");
          return match ? (
            <SyntaxHighlighter
              className={"!rounded-[12px] !p-6"}
              PreTag="div"
              children={String(children).replace(/\n$/, "")}
              language={match[1]}
              style={dracula}
            />
          ) : (
            <code
              {...rest}
              className={`${className} bg-layer-highlight-light mx-0.5 w-fit rounded-[4px] px-1 py-0.5 text-content-primary-dark`}
            >
              {children}
            </code>
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
          return <img src={props.src?.replace("../../../../public/", "/")} alt="MarkdownRenderer__Image" />;
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
