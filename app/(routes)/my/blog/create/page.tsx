"use client";

import RootLayout from "@layouts/RootLayout";
import { Container } from "@components/atoms/Container";
import Title from "@components/atoms/Title";
import Editor from "@lib/tiptap/Editor";

const Create = () => {
  return (
    <RootLayout>
      <Container className="my-32">
        <Title className={"mb-16"}>Create</Title>

        <Editor />
      </Container>
    </RootLayout>
  );
};

export default Create;
