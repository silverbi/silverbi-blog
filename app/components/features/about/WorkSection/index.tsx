import { workList } from "./work.map";
import { LucideIcon, Text } from "@/app/components/ui";
import { MotionValue } from "framer-motion";
import { icons } from "lucide-react";

interface WorkSectionProps {
  scrollYProgress: MotionValue<number>;
}

export const WorkSection = ({ scrollYProgress }: WorkSectionProps) => {
  const WorkCard = ({ title, description, icon }: { title: string; icon: string; description: string }) => (
    <div className={"v-stack gap-2 bg-always-white justify-center rounded-2xl h-fit p-6"}>
      <div className={"h-stack gap-3"}>
        <LucideIcon name={icon as keyof typeof icons} size={24} className={"text-[#2B63ED]"} />
        <Text color={"always-black"} variant={"subtitle-1"} bold>
          {title}
        </Text>
      </div>
      <Text variant={"body-3"} color={"always-black"} className={"leading-6"}>
        {description}
      </Text>
    </div>
  );

  return (
    <div id={"work-section"} className={"bg-always-black flex p-8 justify-center overflow-y-hidden h-fit"}>
      <div className={"v-stack w-full max-w-xl"}>
        <Text color={"always-white"} variant={"title-1"} bold>
          How I work
        </Text>
        <Text color={"always-white"} className={"mt-2 mb-24"}>
          나의 일하는 방식
        </Text>

        <div className={"flex w-[70vw] gap-4 opacity-80"}>
          <div className={"v-stack gap-4 w-1/3"}>
            <WorkCard title={workList[0].title} description={workList[0].description} icon={workList[0].icon} />
            <WorkCard title={workList[1].title} description={workList[1].description} icon={workList[1].icon} />
          </div>
          <div className={"v-stack gap-4 w-1/3"}>
            <WorkCard title={workList[2].title} description={workList[2].description} icon={workList[2].icon} />
            <WorkCard title={workList[3].title} description={workList[3].description} icon={workList[3].icon} />
          </div>
          <div className={"v-stack gap-4 w-1/3"}>
            <WorkCard title={workList[4].title} description={workList[4].description} icon={workList[4].icon} />
            <WorkCard title={workList[5].title} description={workList[5].description} icon={workList[5].icon} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkSection;
