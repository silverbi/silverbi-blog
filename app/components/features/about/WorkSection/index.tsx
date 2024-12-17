import { workList } from "./work.map";
import { LucideIcon, Text } from "@/app/components/ui";
import { MotionValue } from "framer-motion";
import { icons } from "lucide-react";
import Image from "next/image";

interface WorkSectionProps {
  scrollYProgress: MotionValue<number>;
}

export const WorkSection = ({ scrollYProgress }: WorkSectionProps) => {
  const WorkCard = ({ title, description, icon }: { title: string; icon: string; description: string }) => (
    <div className={"v-stack gap-2 items-start bg-always-white rounded-2xl h-fit p-6"}>
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
    <div id={"work-section"} className={"bg-always-black p-8 h-fit"}>
      <div className={"v-stack max-w-xl"}>
        <Text color={"always-white"} variant={"title-1"} bold>
          How I work
        </Text>
        <Text color={"always-white"} className={"mt-2 mb-24"}>
          나의 일하는 방식
        </Text>

        <div className="grid gap-4 w-full max-w-[70vw]">
          {/* 첫 번째 줄 */}
          <div className="grid grid-cols-4 gap-4 h-64">
            <div className="col-span-1 relative overflow-hidden rounded-lg">
              <Image src="/assets/images/about-1.jpg" alt="about-image" layout="fill" className={"object-cover"} />
            </div>
            <div className="col-span-2 relative overflow-hidden rounded-lg">
              <Image src="/assets/images/about-2.png" alt="about-image" layout="fill" className={"object-cover"} />
            </div>
            <div className="col-span-1 relative overflow-hidden rounded-lg">
              <Image src="/assets/images/about-3.png" alt="about-image" layout="fill" className={"object-cover"} />
            </div>
          </div>

          {/* 두 번째 줄 */}
          <div className="grid grid-cols-4 gap-4 h-64">
            <div className="col-span-2 relative overflow-hidden rounded-lg">
              <Image src="/assets/images/about-4.png" alt="about-image" layout="fill" className={"object-cover"} />
            </div>
            <div className="col-span-2 relative overflow-hidden rounded-lg">
              <Image src="/assets/images/about-5.png" alt="about-image" layout="fill" className={"object-cover"} />
            </div>
          </div>
        </div>

        <div className={"flex w-[70vw] gap-4 mt-36"}>
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
