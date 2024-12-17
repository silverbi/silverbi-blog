import { LucideIcon, Text } from "@/app/components/ui";
import { copyToClipboard } from "@/utils/clipboard";
import { MotionValue } from "framer-motion";
import Image from "next/image";

interface ContactSectionProps {
  scrollYProgress: MotionValue<number>;
}

export const ContactSection = ({ scrollYProgress }: ContactSectionProps) => {
  return (
    <div id={"contact-section"} className={"relative h-screen bg-always-black"}>
      <div className={"v-stack h-full bg-gradient-to-t from-[#070E16] via-[#070E16] to-[#000000]"}>
        <div className={"absolute bottom-[50vh] left-[15vw] v-stack gap-8 items-start"}>
          <Text variant={"head-1"} bold color={"always-white"}>
            Contact Me.
          </Text>

          <button
            className={
              "px-6 py-2 h-stack bg-[#DE2A34] gap-4 cursor-pointer hover:opacity-80 active:scale-95 transition-all duration-300 ease-out"
            }
            onClick={() => copyToClipboard("silverbi.404@gmail.com")}
          >
            <Text color={"always-white"}>silverbi.404@gmail.com</Text>
            <LucideIcon name={"Copy"} size={20} color={"always-white"} />
          </button>
        </div>
        <div className={"absolute w-[444px] h-[556px] right-0 bottom-0"}>
          <Image src={"/assets/images/game-man.png"} alt={"contact-image"} fill className={"object-contain"} />
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
