import RootLayout from "@layouts/RootLayout";
import { Container } from "@components/atoms/Container";
import Image from "next/image";
import { RETROSPECT_MAIN_IMAGE } from "@common/images";
import Title from "@components/atoms/Title";
import Text from "@components/atoms/Text";
import React from "react";

const Retrospects = () => {
  return (
    <RootLayout>
      <Container className="my-32">
        <Image
          priority
          src={RETROSPECT_MAIN_IMAGE}
          alt={"Projects thumbnail"}
          className={"!relative rounded-[24px]"}
          fill
        />

        <div className="mt-28 flex w-full flex-col gap-12">
          <Title>Retrospects</Title>
          <Text>같은 고통을 겪지 않도록 지나간 일을 되풀이하여 음미합니다.</Text>
        </div>
      </Container>
    </RootLayout>
  );
};

export default Retrospects;
