"use client";

import React from "react";
import RootLayout from "@layouts/RootLayout";
import { Container } from "@components/atoms/Container";
import Title from "@components/atoms/Title";
import Link from "next/link";
import Button from "@components/atoms/Button";
import BlogTable from "@components/organisms/BlogTable";

const My: React.FC = () => {
  return (
    <RootLayout>
      <Container className="my-32">
        <div className={"flex w-full items-center justify-between"}>
          <Title>My</Title>
          <Link href={"/my/blog/create"}>
            <Button>새 글 작성</Button>
          </Link>
        </div>

        <div className={"mt-20 w-full"}>
          <BlogTable />
        </div>
      </Container>
    </RootLayout>
  );
};

export default My;
