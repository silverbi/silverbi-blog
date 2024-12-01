import styles from "./index.module.scss";
import useMousePosition from "@/hooks/useMousePosition";
import { cn } from "@/utils/styles";
import { Text } from "@components/ui";
import { MotionValue, useTransform } from "framer-motion";
import { motion } from "motion/react";
import Image from "next/image";
import { useState } from "react";

interface AboutSectionProps {
  scrollYProgress: MotionValue<number>;
}

export const AboutSection = ({ scrollYProgress }: AboutSectionProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const { x, y } = useMousePosition();
  const size = isHovered ? 400 : 40;

  const scale = useTransform(scrollYProgress, [0, 0.125], [0.8, 1]);
  const rotate = useTransform(scrollYProgress, [0, 0.125], [5, 0]);

  return (
    <motion.div
      id={"about-section"}
      style={{ scale, rotate }}
      className={cn("sticky top-0 h-[100vh] bg-highlight p-8", styles.aboutMain)}
    >
      <div className={"relative v-stack h-full justify-center"}>
        <Image
          src={"/assets/images/metal-cube.png"}
          alt={"portfolio-metal-cube"}
          width={300}
          height={300}
          className={"absolute top-[4vh]"}
        />

        <motion.div
          className={styles.mask}
          animate={{
            WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
            WebkitMaskSize: `${size}px`,
          }}
          transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
        >
          <div
            className={"v-stack w-full gap-4"}
            onMouseEnter={() => {
              setIsHovered(true);
            }}
            onMouseLeave={() => {
              setIsHovered(false);
            }}
          >
            <Text variant={"title-3"} color={"primary-foreground"} className={"font-extrabold"}>
              HELLO EVERYONE
            </Text>
            <Text variant={"title-3"} color={"primary-foreground"} className={"font-extrabold"}>
              <span className={"text-primary"}>서비스에 가치를 더하는 개발자,</span> 현은비입니다.
            </Text>
            <Text variant={"title-3"} color={"primary-foreground"} className={"font-extrabold"}>
              기술을 통해 서비스의 가치를 배로 더하는 것을 목표로 합니다.
            </Text>
            <Text variant={"title-3"} color={"primary-foreground"} className={"font-extrabold"}>
              초기 스타트업에서 커리어를 시작하여 사람과 회사가 빠르게 성장하는 과정에 함께 했었고,
            </Text>
            <Text variant={"title-3"} color={"primary-foreground"} className={"font-extrabold"}>
              뼈 아픈 실패와 값진 성공을 겪으며 다양한 경험을 쌓았습니다.
            </Text>
            <Text variant={"title-3"} color={"primary-foreground"} className={"font-extrabold"}>
              조직 문화와 프로덕트가 더 나은 방향으로 나아갈 수 있기 위해 적극 노력하는 편입니다
            </Text>
          </div>
        </motion.div>

        <div className={cn("v-stack gap-4", styles.body)}>
          <Text variant={"title-3"} color={"primary-foreground"} className={"font-extrabold"}>
            안녕하세요
          </Text>
          <Text variant={"title-3"} color={"primary-foreground"} className={"font-extrabold"}>
            <strong>서비스에 가치를 더하는 개발자,</strong> 현은비입니다.
          </Text>
          <Text variant={"title-3"} color={"primary-foreground"} className={"font-extrabold"}>
            작은 요소 하나하나가 서비스의 품질을 결정한다고 믿습니다.
          </Text>
          <Text variant={"title-3"} color={"primary-foreground"} className={"font-extrabold"}>
            표면적인 결과만이 아니라, 깊이 있는 디테일을 중요하게 여기는 편입니다.
          </Text>
          <Text variant={"title-3"} color={"primary-foreground"} className={"font-extrabold"}>
            어떤 문제가 주어져도 항상 더 나은 방법을 찾아 적용하며,
          </Text>
          <Text variant={"title-3"} color={"primary-foreground"} className={"font-extrabold"}>
            서비스의 완성도를 높이는 개발자가 되고자 노력합니다.
          </Text>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutSection;
