import { GITHUB_URL, INSTAGRAM_URL, LINKEDIN_URL } from "@/common/constants";
import { cn } from "@/utils/styles";
import { LucideIcon, Text } from "@components/ui";
import { MotionValue, useTransform } from "framer-motion";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

interface AboutSectionProps {
  scrollYProgress: MotionValue<number>;
}

export const AboutSection = ({ scrollYProgress }: AboutSectionProps) => {
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);
  const rotate = useTransform(scrollYProgress, [0, 0.5], [5, 0]);

  return (
    <motion.div
      id={"about-section"}
      style={{ scale, rotate }}
      className={cn("sticky top-0 h-screen bg-[#1a1b2b] p-8 flex justify-center items-center")}
    >
      <div className={"relative flex justify-start h-full w-full items-center max-w-xl"}>
        <div className={"v-stack gap-4 items-start"}>
          <div className={"bg-[#DE2A34] h-stack gap-2 rounded-full pl-3 pr-4 py-1 mb-10"}>
            <LucideIcon name={"CircleDot"} size={18} />
            <Text>Available for work</Text>
          </div>

          <Text color={"always-white"} variant={"title-3"} className="font-normal">
            현은비 HYUN EUNBI
          </Text>

          <Text color={"always-white"} bold variant={"head-3"} className={"leading-tight"}>
            서비스에 가치를
            <br />
            더하는 개발자
          </Text>

          <div className={"h-stack gap-3 my-4"}>
            {["JavaScript", "TypeScript", "React", "React Native", "Next.js"].map((item, index) => (
              <div key={index} className={"bg-[#2B63ED] rounded-lg px-4 py-1"}>
                <Text color={"always-white"}>{item}</Text>
              </div>
            ))}
          </div>

          <div className={"w-[36vw] max-w-[900px]"}>
            <Text color={"always-white"}>
              기술을 통해 서비스의 가치를 배로 더하는 것을 목표로 합니다. 견고하고 유연한 코드를 좋아하며 새로운 지식을
              탐구하고 이를 빠르게 실험해 결과물을 만들어내는 과정을 즐깁니다. <b>"도전적인"</b>, <b>"어려운"</b>,{" "}
              <b>"까다로운"</b>과 같은 키워드를 좋아하며, 서비스가 가파르게 성장하는 과정에서 즐거움을 찾고 있습니다.
            </Text>
          </div>

          <div className="flex items-center gap-4 mt-4">
            <div className={"rounded-full bg-always-white w-8 h-8 flex justify-center items-center opacity-60"}>
              <Link href={LINKEDIN_URL} target="_blank">
                <LucideIcon name={"Linkedin"} size={18} className={"text-[#03051C] fill-[#03051C]"} />
              </Link>
            </div>
            <div className={"rounded-full bg-always-white w-8 h-8 flex justify-center items-center opacity-60"}>
              <Link href={INSTAGRAM_URL} target="_blank">
                <LucideIcon name={"Instagram"} size={22} className={"text-[#ffffff] fill-[#03051C]"} />
              </Link>
            </div>
            <div className={"rounded-full bg-always-white w-8 h-8 flex justify-center items-center opacity-60"}>
              <Link href={GITHUB_URL} target="_blank">
                <LucideIcon name={"Github"} size={20} className={"text-[#03051C] fill-[#03051C]"} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className={"absolute w-[61.5vh] h-[80vh] right-0 bottom-0"}>
        <Image src={"/assets/images/idea-fire-man.png"} alt={"idea-man"} priority fill className={"object-contain"} />
      </div>
    </motion.div>
  );
};

export default AboutSection;
