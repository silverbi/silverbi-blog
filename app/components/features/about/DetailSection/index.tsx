import { MotionValue, useTransform } from "framer-motion";
import { motion } from "motion/react";

interface DetailSectionProps {
  scrollYProgress: MotionValue<number>;
}

export const DetailSection = ({ scrollYProgress }: DetailSectionProps) => {
  const scale = useTransform(scrollYProgress, [0.625, 0.75], [0.8, 1]);
  const rotate = useTransform(scrollYProgress, [0.625, 0.75], [5, 0]);

  return (
    <motion.div className={"relative h-screen bg-secondary"}>
      <div />
    </motion.div>
  );
};

export default DetailSection;
