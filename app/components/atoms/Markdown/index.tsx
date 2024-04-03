import React from "react";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import dracula from "react-syntax-highlighter/dist/cjs/styles/prism/dracula";
import remarkGfm from "remark-gfm";
import CodeCopyButton from "@components/molecules/CodeCopyButton";

interface MarkdownProps {
  children: string;
}

const Markdown: React.FC<MarkdownProps> = ({ children }) => {
  return (
    <div className={"flex flex-col gap-4"}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          code(props) {
            const { children, className, node, ...rest } = props;
            const match = /language-(\w+)/.exec(className || "");

            return match ? (
              <pre className={"relative my-8"}>
                <div className={"absolute top-4 flex w-full items-start justify-between px-6"}>
                  <div className={"flex gap-1.5"}>
                    <div className={"h-3 w-3 rounded-full bg-[#EF4444]"} />
                    <div className={"h-3 w-3 rounded-full bg-[#EAB30A]"} />
                    <div className={"h-3 w-3 rounded-full bg-[#21C55E]"} />
                  </div>
                  <CodeCopyButton>{children}</CodeCopyButton>
                </div>
                <SyntaxHighlighter
                  className={"!w-full !rounded-[12px] !p-6 !pt-12"}
                  PreTag="div"
                  children={String(children).replace(/\n$/, "")}
                  language={match[1]}
                  wrapLines={true}
                  wrapLongLines={true}
                  showLineNumbers={true}
                  showInlineLineNumbers={false}
                  style={dracula}
                />
              </pre>
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
              <div className={"my-8 flex gap-4 border-l-4 border-border-primary bg-background-2 px-5 py-3"}>
                <blockquote className={"text-content-inverse-3"} {...props}>
                  {children}
                </blockquote>
              </div>
            );
          },
          img({ ...props }) {
            return (
              <img
                className={"!my-8 !rounded-[12px]"}
                src={props.src?.replace("../../../../public/", "/")}
                alt="post image"
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
          a({ children, ...props }) {
            return (
              <span className={"cursor-pointer font-bold text-link-active hover:underline"} {...props}>
                {children}
              </span>
            );
          },
          hr({ children, ...props }) {
            return (
              <span className={"h-0.5 bg-border-inverse-2"} {...props}>
                {children}
              </span>
            );
          },
        }}
      >
        {children
          .replace(/\n/gi, "\n")
          .replace(/\*\*/gi, "@$_%!^")
          .replace(/@\$_%!\^/gi, "**")
          .replace(/<\/?u>/gi, "*")}
      </ReactMarkdown>
    </div>
  );
};

export default React.memo(Markdown);
