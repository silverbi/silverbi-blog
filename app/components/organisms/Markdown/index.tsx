import React from "react";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import remarkGfm from "remark-gfm";
import { codeThemes } from "@components/molecules/CodeBlock/codeThemes";
import CodeBlock from "@components/molecules/CodeBlock";

interface MarkdownProps {
  children: string;
}

const Markdown: React.FC<MarkdownProps> = ({ children }) => {
  return (
    <div className={"flex w-full flex-col gap-4"}>
      <ReactMarkdown
        className={"text-content-3"}
        remarkPlugins={[remarkGfm]}
        components={{
          code({ node, inline, className, children, ...rest }: any) {
            const match = /language-(\w+)/.exec(className || "");
            return !inline && match ? (
              <CodeBlock value={String(children).replace(/\n$/, "")} language={match[1]} {...rest} />
            ) : (
              <code
                {...rest}
                className={`${className} mx-0.5 w-fit rounded-[4px] bg-layer-disabled px-1.5 py-0.5 text-content-2`}
              >
                {children}
              </code>
            );
          },
          blockquote({ children, ...props }) {
            // 인용구 (>)
            return (
              <div className={"login-8 flex gap-4 border-l-4 border-border-primary bg-background-2 px-5 py-3"}>
                <blockquote className={"text-content-inverse-3"} {...props}>
                  {children}
                </blockquote>
              </div>
            );
          },
          img({ ...props }) {
            return (
              <img
                className={"!login-8 !rounded-[12px]"}
                src={props.src?.replace("../../../../public/", "/")}
                alt="post image"
              />
            );
          },
          em({ children, ...props }) {
            return (
              <span className={"italic text-content-3"} {...props}>
                {children}
              </span>
            );
          },
          a({ children, ...props }) {
            return (
              <a
                href={props.href}
                target="_blank"
                rel="noopener noreferrer"
                className={
                  "cursor-pointer border-b-4 border-b-content-primary-light font-bold text-link-active decoration-2 hover:text-content-primary"
                }
                {...props}
              >
                {children}
              </a>
            );
          },
          hr({ children, ...props }) {
            return (
              <span className={"h-0.5 bg-border-inverse-2 text-content-3"} {...props}>
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
