import React from "react";
import RootLayout from "@layouts/RootLayout";
import { Container } from "@components/atoms/Container";
import IntroduceSection from "@components/templates/IntroduceSection";
import CareersSection from "@components/templates/CareersSection";

const About: React.FC = () => {
  return (
    <RootLayout>
      <Container className="my-32 gap-32">
        <IntroduceSection />

        <CareersSection />
      </Container>
    </RootLayout>
  );
};

export default About;
