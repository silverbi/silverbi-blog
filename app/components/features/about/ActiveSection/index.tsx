import { MotionValue, useTransform } from "framer-motion";
import { motion } from "motion/react";

interface ActiveSectionProps {
  scrollYProgress: MotionValue<number>;
}

export const ActiveSection = ({ scrollYProgress }: ActiveSectionProps) => {
  const scale = useTransform(scrollYProgress, [0.75, 0.875], [0.8, 1]);
  const rotate = useTransform(scrollYProgress, [0.75, 0.875], [5, 0]);

  return (
    <motion.div className={"relative h-screen bg-tertiary"}>
      <div />
    </motion.div>
  );
};

export default ActiveSection;
