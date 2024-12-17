import { LucideIcon, Text } from "@/app/components/ui";
import { MotionValue, useTransform } from "framer-motion";
import { motion } from "motion/react";
import Image from "next/image";

interface IntroSectionProps {
  scrollYProgress: MotionValue<number>;
}

export const IntroSection = ({ scrollYProgress }: IntroSectionProps) => {
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const rotate = useTransform(scrollYProgress, [0, 0.5], [0, -5]);

  return (
    <motion.div
      id={"intro-section"}
      style={{ scale, rotate }}
      className={"sticky top-0 w-screen h-screen bg-[#161616] p-16 overflow-hidden flex justify-center box-border"}
    >
      <Image
        className={"px-20"}
        src={"/assets/images/silverbi-logo-outline.svg"}
        alt={"portfolio-background"}
        priority
        fill
      />
      <Image
        src={"/assets/images/background-gradient-circle.png"}
        alt={"portfolio-background"}
        width={762}
        height={762}
        priority
        className={"absolute top-20 mx-auto my-auto"}
      />
      <Image
        src={"/assets/images/king-of-the-world.png"}
        alt={"portfolio-background"}
        width={623}
        height={832}
        className={"absolute bottom-0 mx-auto my-auto"}
      />

      <div className={"h-stack justify-between w-full items-end gap-6"}>
        <div className={"v-stack items-start gap-4"}>
          <Text className={"leading-tight"} variant={"title-1"} color={"always-white"} bold>
            Hello 👋
            <br />
            こんにちは 你好
            <br />
            안녕하세요
          </Text>

          <Text className={"opacity-60"} color={"always-white"} bold>
            프론트엔드 개발자 현은비입니다
          </Text>
        </div>

        <a
          className={
            "z-30 px-8 py-2 h-stack bg-[#DE2A34] gap-6 hover:opacity-80 active:scale-95 transition-all duration-300 ease-out cursor-pointer"
          }
          href={"/"}
        >
          <Text color={"always-white"} bold>
            기술 블로그
          </Text>
          <LucideIcon name={"MoveRight"} size={20} color={"always-white"} />
        </a>
      </div>
    </motion.div>
  );
};

export default IntroSection;
