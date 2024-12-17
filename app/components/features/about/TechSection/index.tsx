import { techList } from "./stack.map";
import { Text } from "@/app/components/ui";
import { MotionValue } from "framer-motion";
import Image from "next/image";

interface TechSectionProps {
  scrollYProgress: MotionValue<number>;
}

export const TechSection = ({ scrollYProgress }: TechSectionProps) => {
  return (
    <div className={"h-fit overflow-y-hidden bg-always-black flex justify-center p-8"}>
      <div className={"v-stack max-w-xl py-48"}>
        <Text color={"always-white"} variant={"title-1"} bold>
          Tech Stack
        </Text>
        <Text color={"always-white"} className={"mt-2 mb-24"}>
          평소 익숙하게 사용하는 기술들
        </Text>

        <div className={"h-stack gap-10"}>
          {techList.map((tech, index) => (
            <div key={index} className={"v-stack justify-between h-full gap-6"}>
              <Image src={tech.image} alt={tech.name} width={60} height={60} className={"aspect-square"} />
              <div key={index} className={"bg-[#2B63ED] rounded-md px-3"}>
                <Text color={"always-white"} variant={"caption-1"} className={"leading-tight font-medium"}>
                  {tech.name}
                </Text>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechSection;
