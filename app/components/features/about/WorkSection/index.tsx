import { MotionValue, useTransform } from "framer-motion";
import { motion } from "motion/react";

interface WorkSectionProps {
  scrollYProgress: MotionValue<number>;
}

export const WorkSection = ({ scrollYProgress }: WorkSectionProps) => {
  const scale = useTransform(scrollYProgress, [0.125, 0.2], [0.8, 1]);
  const rotate = useTransform(scrollYProgress, [0.125, 0.2], [5, 0]);

  return (
    <motion.div style={{ scale, rotate }} className={"sticky top-0 h-[100vh] bg-primary-foreground"}>
      <div />
    </motion.div>
  );
};

export default WorkSection;
