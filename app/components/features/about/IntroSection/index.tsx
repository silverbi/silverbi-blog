import { Text } from "@components/ui";
import { MotionValue, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

interface IntroSectionProps {
  scrollYProgress: MotionValue<number>;
}

export const IntroSection = ({ scrollYProgress }: IntroSectionProps) => {
  const scale = useTransform(scrollYProgress, [0, 0.125], [1, 0.8]);
  const rotate = useTransform(scrollYProgress, [0, 0.125], [0, -5]);

  return (
    <motion.div
      id={"intro-section"}
      style={{ scale, rotate }}
      className={"sticky top-0 h-screen bg-secondary p-8 overflow-hidden"}
    >
      <div className={"relative h-full w-full"}>
        <Image
          src={"/assets/images/metal-shape-1.png"}
          alt={"portfolio-metal-background"}
          width={1200}
          height={1200}
          className={"absolute -bottom-[300px] -right-[500px]"}
        />
        <Image
          src={"/assets/images/metal-shape-2.png"}
          alt={"portfolio-profile"}
          width={400}
          height={400}
          className={"absolute top-0 left-4"}
        />
        <div className={"absolute left-8 top-[40vh] v-stack items-start gap-6"}>
          <div className={"v-stack items-start"}>
            <Text variant={"head-1"} color={"primary"} bold>
              FRONTEND
            </Text>
            <Text variant={"head-1"} color={"primary"} bold>
              DEVELOPER
            </Text>
            <Text variant={"head-1"} color={"primary"} bold>
              HYUN EUN BI
            </Text>
          </div>

          <div className={"v-stack items-start"}>
            <Link className={"h-stack gap-2 cursor-pointer"} href={"#contact-section"} scroll>
              <Text variant={"subtitle-1"} color={"highlight"}>
                Tech Blog
              </Text>
              <ArrowRight className={"stroke-highlight"} />
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default IntroSection;
