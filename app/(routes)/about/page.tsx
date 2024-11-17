import React from "react";
import RootLayout from "@layouts/RootLayout";
import { Container } from "@/components/atoms/Container";
import IntroduceSection from "@/components/templates/IntroduceSection";
import CareersSection from "@/components/templates/CareersSection";
import ExperienceSection from "@/components/templates/ExperienceSection";
import StackSection from "@/components/templates/StackSection";

const About = () => {
  return (
    <RootLayout>
      <Container className="my-32 gap-32">
        <IntroduceSection />
        <CareersSection />
        <ExperienceSection />
        <StackSection />
      </Container>
    </RootLayout>
  );
};

export default About;
