"use client";

import React from "react";
import RootLayout from "@layouts/RootLayout";
import { Container } from "@components/atoms/Container";
import Title from "@components/atoms/Title";

const My: React.FC = () => {
  return (
    <RootLayout>
      <Container className="my-32">
        <Title>My</Title>
      </Container>
    </RootLayout>
  );
};

export default My;
