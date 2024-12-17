"use client";

import {
  AboutSection,
  ActivitySection,
  CareerSection,
  ContactSection,
  IntroSection,
  ProjectSection,
  TechSection,
  WorkSection,
} from "@components/features";
import { useScroll } from "framer-motion";
import Lenis from "lenis";
import { useEffect, useRef } from "react";

const About = () => {
  const container = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <main ref={container} className={"relative h-[300vh] cursor-default"}>
      <IntroSection scrollYProgress={scrollYProgress} />
      <AboutSection scrollYProgress={scrollYProgress} />
      <CareerSection scrollYProgress={scrollYProgress} />
      <TechSection scrollYProgress={scrollYProgress} />
      <ActivitySection scrollYProgress={scrollYProgress} />
      <ProjectSection scrollYProgress={scrollYProgress} />
      <WorkSection scrollYProgress={scrollYProgress} />
      <ContactSection scrollYProgress={scrollYProgress} />
    </main>
  );
};

export default About;
