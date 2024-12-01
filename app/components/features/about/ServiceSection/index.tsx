import { MotionValue, useTransform } from "framer-motion";
import { motion } from "motion/react";

interface ServiceSectionProps {
  scrollYProgress: MotionValue<number>;
}

export const ServiceSection = ({ scrollYProgress }: ServiceSectionProps) => {
  const scale = useTransform(scrollYProgress, [0.375, 0.5], [0.8, 1]);
  const rotate = useTransform(scrollYProgress, [0.375, 0.5], [5, 0]);

  return (
    <motion.div className={"relative h-screen bg-primary"}>
      <div />
    </motion.div>
  );
};

export default ServiceSection;
