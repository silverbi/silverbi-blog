import { MotionValue, useTransform } from "framer-motion";

interface ContactSectionProps {
  scrollYProgress: MotionValue<number>;
}

export const ContactSection = ({ scrollYProgress }: ContactSectionProps) => {
  const scale = useTransform(scrollYProgress, [0.875, 1], [0.8, 1]);
  const rotate = useTransform(scrollYProgress, [0.875, 1], [5, 0]);

  return (
    <div
      id={"contact-section"}
      className={"relative h-screen bg-primary-foreground"}
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className={"fixed bottom-0 h-screen"}>
        <div />
      </div>
    </div>
  );
};

export default ContactSection;
