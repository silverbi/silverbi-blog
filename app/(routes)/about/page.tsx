"use client";

import {
  AboutSection,
  ActiveSection,
  ContactSection,
  DetailSection,
  IntroSection,
  ServiceSection,
  TechSection,
  WorkSection,
} from "@components/features";
import { ModeToggle } from "@components/ui";
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
    <main ref={container} className={"relative h-[800vh] cursor-default"}>
      <ModeToggle className={"fixed top-4 right-4 z-30"} />
      <IntroSection scrollYProgress={scrollYProgress} />
      <AboutSection scrollYProgress={scrollYProgress} />
      <WorkSection scrollYProgress={scrollYProgress} />
      <ServiceSection scrollYProgress={scrollYProgress} />
      <TechSection scrollYProgress={scrollYProgress} />
      <DetailSection scrollYProgress={scrollYProgress} />
      <ActiveSection scrollYProgress={scrollYProgress} />
      <ContactSection scrollYProgress={scrollYProgress} />
    </main>
  );
};

export default About;
