import { projectList } from "./project.map";
import { LucideIcon, Text } from "@/app/components/ui";
import { cn } from "@/utils/styles";
import { MotionValue } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface ProjectSectionProps {
  scrollYProgress: MotionValue<number>;
}

export const ProjectSection = ({ scrollYProgress }: ProjectSectionProps) => {
  return (
    <div className={"relative h-fit bg-always-black p-8 flex justify-center"}>
      <div className={"v-stack w-full max-w-xl pb-48"}>
        <Text color={"always-white"} variant={"title-1"} bold>
          Projects
        </Text>
        <Text color={"always-white"} className={"mt-2 mb-24"}>
          개발 작업물 포트폴리오
        </Text>

        <div className="h-stack h-full gap-24 items-start">
          {projectList.map((items, index) => (
            <div key={index} className={"v-stack items-start gap-2 h-fit w-[240px]"}>
              <div
                className={cn(
                  "relative w-[240px] h-[321px] rounded-[36px] overflow-hidden cursor-pointer",
                  items.status === "inProgress" && "border border-always-white",
                )}
              >
                <Image
                  src={items.thumbnail}
                  alt={items.title}
                  fill
                  className={"rounded-[36px] hover:scale-110 transition-all duration-300 ease-out"}
                />
              </div>
              <Text variant={"subtitle-1"} color={"always-white"} bold className={"mt-4"}>
                {items.title}
              </Text>
              <Text variant={"body-3"} color={"always-white"} className={"leading-normal"}>
                {items.description}
              </Text>

              <div className={"h-stack gap-2 mt-1"}>
                {items.tag.map((tag, index) => (
                  <div key={index} className={"bg-[#2B63ED] rounded-md px-3"}>
                    <Text color={"always-white"} variant={"caption-1"} className={"leading-tight font-medium"}>
                      {tag}
                    </Text>
                  </div>
                ))}
              </div>

              {items.status === "done" && (
                <Link className={"px-6 py-0.5 h-stack bg-[#DE2A34] gap-6 !cursor-pointer mt-8"} href={"/"}>
                  <Text variant={"body-3"} color={"always-white"} bold>
                    자세히 보기
                  </Text>
                  <LucideIcon name={"MoveRight"} size={14} color={"always-white"} />
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
